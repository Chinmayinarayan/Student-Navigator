const sendEmail = require("../utils/sendEmail");
const { Resend } = require("resend");

// Mock the Resend SDK
jest.mock("resend", () => {
  return {
    Resend: jest.fn().mockImplementation((apiKey) => {
      return {
        emails: {
          send: jest.fn().mockImplementation(({ from, to, subject, html }) => {
            if (apiKey === "mock-error-key") {
              return { data: null, error: { message: "Rate limit exceeded or API error" } };
            }
            return { data: { id: "re_mocked123" }, error: null };
          }),
        },
      };
    }),
  };
});

describe("Email Delivery Service (Resend API)", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test("Should succeed when RESEND_API_KEY is present and Resend succeeds", async () => {
    process.env.RESEND_API_KEY = "mock-success-key";
    process.env.FROM_EMAIL = "onboarding@resend.dev";

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const result = await sendEmail({
      email: "test@example.com",
      subject: "Welcome to Student Navigator",
      html: "<p>Hello</p>",
    });

    expect(result).toEqual({ id: "re_mocked123" });
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Email dispatched successfully! Message ID: re_mocked123"));

    logSpy.mockRestore();
  });

  test("Should throw error when RESEND_API_KEY is missing", async () => {
    delete process.env.RESEND_API_KEY;

    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    await expect(
      sendEmail({
        email: "test@example.com",
        subject: "Welcome to Student Navigator",
        html: "<p>Hello</p>",
      })
    ).rejects.toThrow("Missing RESEND_API_KEY configuration");

    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining("Email Delivery Failed: RESEND_API_KEY is not defined in the environment.")
    );

    errorSpy.mockRestore();
  });

  test("Should fail and log error when Resend API returns an error", async () => {
    process.env.RESEND_API_KEY = "mock-error-key";

    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    await expect(
      sendEmail({
        email: "test@example.com",
        subject: "Welcome to Student Navigator",
        html: "<p>Hello</p>",
      })
    ).rejects.toThrow("Resend API Error: Rate limit exceeded or API error");

    expect(errorSpy).toHaveBeenCalledWith("Resend API Delivery Error:", "Rate limit exceeded or API error");

    errorSpy.mockRestore();
  });

  test("Should ensure no API key or secret is leaked in logs on failure", async () => {
    const secretKey = "super-secret-key-12345";
    process.env.RESEND_API_KEY = secretKey;
    // Set mock to trigger error
    jest.mocked(Resend).mockImplementationOnce(() => {
      return {
        emails: {
          send: jest.fn().mockResolvedValue({ data: null, error: { message: "Internal Server Error" } }),
        },
      };
    });

    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    await expect(
      sendEmail({
        email: "test@example.com",
        subject: "Welcome",
        html: "<p>Hi</p>",
      })
    ).rejects.toThrow();

    // Verify logs do not contain the secret API key
    errorSpy.mock.calls.forEach((args) => {
      const output = args.join(" ");
      expect(output).not.toContain(secretKey);
    });

    errorSpy.mockRestore();
  });
});
