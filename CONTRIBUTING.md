# Contributing to Student Navigator

Thank you for your interest in contributing to Student Navigator! This document details the process for local development, code standards, and submitting changes.

## Development Workflow

1. **Fork the Repository:** Create a personal fork of the repository on GitHub.
2. **Setup Local Environment:** Follow the installation guide in the main [README.md](./README.md) to set up the backend (`server/`) and frontend (`client/`).
3. **Seed the Database:** Run `npm run seed` in the `server/` directory to seed subjects, topics, and initial dummy data.
4. **Create a Branch:** Create a branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Code Style & Linting:**
   * Frontend: Run `npm run lint` inside the `client/` folder.
   * Write clear, self-documenting code with comments explaining non-trivial logic.
6. **Write and Run Tests:** Ensure all backend changes are covered by tests.
   ```bash
   cd server
   npm test
   ```

## Pull Request Guidelines

* Keep your PRs focused and single-purpose.
* Fill out the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md) completely.
* Verify that all backend tests pass and the frontend production build builds successfully (`npm run build`).
* Ensure that GitHub Actions CI checks pass.
