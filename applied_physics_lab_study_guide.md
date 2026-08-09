# APPLIED PHYSICS LAB: MASTER STUDY GUIDE & CURRICULUM MANUAL

---

# MODULE 1: MEASUREMENT TECHNIQUES

## 1. Introduction
Precision measurement forms the fundamental bedrock of experimental physics. This module focuses on the principles of mechanical dimensional metrology using two core laboratory instruments: the **Vernier Caliper** and the **Micrometer Screw Gauge**. These tools extend human visual capability beyond standard millimeter resolution down to sub-millimeter scales ($0.01\text{ cm}$ and $0.001\text{ cm}$ respectively) using the principles of linear division alignment and differential screw pitch thread translation.

---

## 2. Learning Objectives
- Understand the principles of Vernier coincidence and Micrometer pitch/graduation ratio.
- Calculate and determine the **Least Count (LC)** for any linear or angular measurement device.
- Identify, quantify, and correct for **Positive and Negative Zero Errors**.
- Master systematic observation recording to measure outer dimensions, inner diameters, depths, and sphere/wire thicknesses.
- Analyze random and systematic errors using standard statistical methods.

---

## 3. Prerequisites
- Basic SI unit conversions (meters, millimeters, micrometers, nanometers).
- Concept of parallax error and correct line-of-sight positioning.
- Basic algebraic error propagation ($\Delta x / x$).

---

## 4. Complete Theory
### A. Vernier Caliper
A Vernier Caliper consists of a primary Main Scale (MS) marked in millimeters and a secondary Vernier Scale (VS) that slides along it. The Vernier scale contains $N$ divisions that equal $(N-1)$ main scale divisions.
- **Vernier Principle**: The difference between the length of one main scale division ($1\text{ MSD}$) and one Vernier scale division ($1\text{ VSD}$) defines the instrument's resolution (Least Count).
$$\text{LC} = 1\text{ MSD} - 1\text{ VSD} = 1\text{ MSD} - \frac{N-1}{N}\text{ MSD} = \frac{1\text{ MSD}}{N}$$

### B. Micrometer Screw Gauge
The Screw Gauge operates on the principle of converting rotational motion into linear displacement via a precision-threaded screw.
- **Pitch**: The axial distance moved by the screw spindle per complete $360^\circ$ rotation of the thimble.
$$\text{Pitch} = \frac{\text{Distance moved on main pitch scale}}{\text{Number of complete rotations}}$$
- **Least Count**:
$$\text{LC} = \frac{\text{Pitch}}{\text{Total number of Circular Scale Divisions (CSD)}}$$

---

## 5. Important Formulae
1. **Least Count of Vernier Caliper**:
   $$\text{LC}_{\text{VC}} = \frac{1\text{ MSD}}{N_{\text{VSD}}}$$
2. **Total Vernier Reading**:
   $$\text{Measured Length} = \text{MSR} + (\text{VSR} \times \text{LC}) \pm \text{Zero Correction}$$
3. **Least Count of Screw Gauge**:
   $$\text{LC}_{\text{SG}} = \frac{\text{Pitch}}{\text{Total CSD}}$$
4. **Total Screw Gauge Reading**:
   $$\text{Measured Thickness/Diameter} = \text{PSR} + (\text{CSR} \times \text{LC}) \pm \text{Zero Correction}$$
5. **Zero Error Correction**:
   $$\text{Corrected Value} = \text{Observed Value} - (\text{Zero Error})$$

---

## 6. Derivations
### Derivation of Vernier Least Count
Let $1\text{ MSD} = s$ and $1\text{ VSD} = v$.
Suppose $N$ divisions of the Vernier scale coincide with $(N-1)$ divisions of the main scale:
$$N \cdot v = (N-1) \cdot s \implies v = \frac{N-1}{N} s$$
The Least Count ($\text{LC}$) is defined as $s - v$:
$$\text{LC} = s - v = s - \left(\frac{N-1}{N}\right)s = s \left(1 - \frac{N-1}{N}\right) = \frac{s}{N}$$
Where $s$ is the value of 1 Main Scale Division and $N$ is the total number of Vernier Scale Divisions.

---

## 7. Laboratory Apparatus
- Standard Vernier Caliper ($0-150\text{ mm}$, $\text{LC} = 0.02\text{ mm}$ or $0.1\text{ mm}$).
- Micrometer Screw Gauge ($0-25\text{ mm}$, $\text{LC} = 0.01\text{ mm}$).
- Solid metal sphere, hollow cylinder/beaker, glass slide, thin copper wire.
- Magnifying lens.

---

## 8. Experimental Setup
- **Vernier Caliper**: Ensure lower external jaws are clean. Test for jaw gap alignment. Slide lock screw to secure readings.
- **Screw Gauge**: Inspect anvil and spindle faces. Verify smooth rotation of ratchet knob. Ensure ratchet clicks when contact occurs.

---

## 9. Step-by-Step Procedure
### Vernier Caliper:
1. Determine Main Scale Division value ($1\text{ MSD} = 1\text{ mm}$) and count Vernier scale divisions ($N = 10$ or $50$). Compute $\text{LC}$.
2. Close jaws completely. Record Zero Error ($Z$). If $0$ of VS is to the right of $0$ of MS, error is positive; if to the left, negative.
3. Place object between lower jaws for external diameter or upper jaws for internal diameter.
4. Record MSR (immediately preceding VS zero mark).
5. Find coinciding line of Vernier scale with any main scale mark ($\text{VSR}$).
6. Calculate total reading: $\text{TR} = \text{MSR} + (\text{VSR} \times \text{LC}) - Z$.
7. Repeat at 3 different orientations.

---

## 10. Observations
- $1\text{ MSD} = 1\text{ mm}$, $N = 10$, $\text{LC} = 0.1\text{ mm} = 0.01\text{ cm}$.
- Zero Error ($Z$) = $+0.02\text{ cm}$.

| S.No | Main Scale Reading (MSR) (cm) | Vernier Coincidence (VSR) | VSR $\times$ LC (cm) | Measured Value (MSR + VSR$\times$LC) (cm) | Corrected Value (Measured - Z) (cm) |
|---|---|---|---|---|---|
| 1 | 2.4 | 4 | 0.04 | 2.44 | 2.42 |
| 2 | 2.4 | 5 | 0.05 | 2.45 | 2.43 |
| 3 | 2.4 | 4 | 0.04 | 2.44 | 2.42 |

Mean Corrected Value = $2.423\text{ cm}$.

---

## 11. Calculations
- Volume of Sphere: $V = \frac{4}{3} \pi r^3 = \frac{4}{3} \pi \left(\frac{d}{2}\right)^3$.
- Given mean diameter $d = 2.423\text{ cm} \implies r = 1.2115\text{ cm}$.
- $V = \frac{4}{3} \times 3.14159 \times (1.2115)^3 = 7.448\text{ cm}^3$.

---

## 12. Graphs
For dimensional measurements, plot Measured Diameter vs. Trial Number to evaluate statistical variance, or plot Volume vs. $r^3$ to verify cubic scaling.

---

## 13. Sources of Error
- Backlash error in micrometer screw threads due to mechanical wear.
- Parallax error during alignment checks of scale markings.
- Over-tightening of spindle/jaws introducing elastic deformation of the sample.

---

## 14. Precautions
- Always use the ratchet head on the screw gauge to clamp the specimen gently.
- Eliminate parallax by viewing divisions head-on.
- Clean jaw contact surfaces before recording zero errors.

---

## 15. Viva Questions with Answers
1. **Q: What is Least Count?**
   *A: The smallest value of a physical quantity that can be measured directly with precision by an instrument.*
2. **Q: What is Backlash error and how is it minimized?**
   *A: Backlash error occurs due to wear between screw threads, causing lag when direction is reversed. Minimized by turning the screw continuously in one direction only while taking a reading.*
3. **Q: What is Zero Error?**
   *A: The reading displayed by an instrument when the measuring faces are in contact with no object inserted.*
4. **Q: Define Vernier Constant.**
   *A: The value of $1\text{ MSD} - 1\text{ VSD}$, which equals the Least Count of the Vernier instrument.*
5. **Q: Why is the ratchet provided on a micrometer?**
   *A: To prevent over-tightening and apply uniform light pressure on the specimen.*

---

## 16. Numerical Problems
1. *Problem*: A Vernier caliper has $1\text{ MSD} = 1\text{ mm}$ and $20$ Vernier divisions equal $19\text{ MSD}$. If MSR is $3.2\text{ cm}$ and $12\text{th}$ division coincides, find reading.
   *Solution*: $\text{LC} = \frac{1\text{ mm}}{20} = 0.05\text{ mm} = 0.005\text{ cm}$. Reading $= 3.2 + (12 \times 0.005) = 3.26\text{ cm}$.
2. *Problem*: A screw gauge with pitch $0.5\text{ mm}$ and $50$ circular scale divisions has a zero error of $-0.03\text{ mm}$. $\text{PSR} = 2.5\text{ mm}$, $\text{CSR} = 28$. Find actual diameter.
   *Solution*: $\text{LC} = 0.5/50 = 0.01\text{ mm}$. Observed $= 2.5 + 28(0.01) = 2.78\text{ mm}$. Corrected $= 2.78 - (-0.03) = 2.81\text{ mm}$.

---

## 17. Previous University Questions
- Derive the expression for the least count of a Vernier caliper and explain zero correction with diagrams. (5 Marks)
- Distinguish between systematic and random errors in micrometer measurements. (4 Marks)

---

## 18. Practical Applications
- Machining component tolerances in mechanical fabrication.
- Measuring wire gauge cross-sections in electrical wiring standards.
- Semiconductor wafer thickness verification in cleanroom fabrication.

---

## 19. Common Mistakes
- Rotating screw gauge thimble backward and forward during a single trial (introduces backlash error).
- Adding positive zero error instead of subtracting it from the observed reading.

---

## 20. One-page Revision Notes
- $\text{LC}_{\text{Vernier}} = 1\text{ MSD} / N_{\text{VSD}}$.
- $\text{LC}_{\text{Screw Gauge}} = \text{Pitch} / N_{\text{CSD}}$.
- $\text{Corrected Reading} = \text{Observed Reading} - (\text{Zero Error})$.
- Always use the ratchet mechanism for Screw Gauge measurements.

---

# Best YouTube Videos & Playlists
1. **Title**: Basic Measuring Instruments in Physics Lab
   - **Channel**: Practical Physics
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://youtu.be/oEUOiQjat0w)
   - **What I will learn**: Anatomy and usage of key measurement tools.
2. **Title**: Bar Pendulum Experiment (Acceleration due to Gravity)
   - **Channel**: Practical Physics
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://youtu.be/eGo-BZVtdkg)
   - **What I will learn**: Determining acceleration due to gravity experimentally.
3. **Title**: Jaeger's Method (Surface Tension Experiment)
   - **Channel**: Practical Physics
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://youtu.be/HYsh-ioj0rI)
   - **What I will learn**: Measuring surface tension using Jaeger's method.

---


# Best Animations
- **Vernier Caliper Interactive 3D Animation**: [Open Animation on YouTube](https://www.youtube.com/results?search_query=Vernier+Caliper+3D+Animation+Physics)

---

# Best Simulations
- **PhET Measurement Tools / Sim**: https://phet.colorado.edu/en/simulations
- **Amrita Virtual Labs - Vernier & Screw Gauge**: http://vlab.amrita.edu/?sub=1&brch=280

---

# Free Notes
- **NCERT Measurement Lab Manual**: https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/physics/keep101.pdf
- **NPTEL Experimental Physics Lecture Notes**: https://nptel.ac.in/courses/115105110

---

# Practice
- 20 Viva Questions, 20 MCQs, 10 Numericals & Practical Scenarios detailed in Master Strategy.

---

# Recommended Coding Challenges
- **Mean of Array After Removing Some Elements**: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
- **Average Salary Excluding the Minimum and Maximum Salary**: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
- **Running Sum of 1d Array**: https://leetcode.com/problems/running-sum-of-1d-array/

---

# MODULE 2: LASER EXPERIMENTS

## 1. Introduction
Laser (**L**ight **A**mplification by **S**timulated **E**mission of **R**adiation) produces highly coherent, monochromatic, directionally collimated optical beams. In this experiment, a **Helium-Neon (He-Ne)** laser or semiconductor diode laser ($\lambda \approx 632.8\text{ nm}$) is used with a diffraction grating or thin wire to determine optical wavelength and small spatial dimensions.

---

## 2. Learning Objectives
- Master principles of population inversion, stimulated emission, and optical resonator cavities.
- Measure the wavelength ($\lambda$) of He-Ne laser light using a diffraction grating.
- Determine micro-wire diameter or single slit width using laser diffraction pattern spacing.
- Analyze spot size, divergence angle, and spatial coherence.

---

## 3. Prerequisites
- Wave optics basics (interference, diffraction, Huygens' principle).
- Concept of grating element $(e+d)$ and diffraction order $m$.

---

## 4. Complete Theory
Laser emission occurs via three fundamental processes: absorption, spontaneous emission, and **stimulated emission**.
For sustained laser action:
1. **Population Inversion**: $N_2 > N_1$ achieved via optical or electrical pumping.
2. **Metastable State**: Prolonged excited-state lifetime ($\sim 10^{-3}\text{ s}$).
3. **Resonant Cavity**: Parallel mirror arrangement supplying positive feedback.

When laser light strikes a diffraction grating containing $N$ lines per meter, constructive interference yields maxima according to the grating equation:
$$(e+d) \sin \theta_m = m \lambda$$
Where $(e+d) = \frac{1}{N}$ is the grating element, $\theta_m$ is the diffraction angle for the $m$-th order, and $\lambda$ is wavelength.

---

## 5. Important Formulae
1. **Grating Equation**:
   $$(e+d) \sin \theta_m = m \lambda \implies \lambda = \frac{\sin \theta_m}{m N}$$
2. **Diffraction Angle from Geometry**:
   $$\tan \theta_m = \frac{y_m}{D} \implies \theta_m = \tan^{-1}\left(\frac{y_m}{D}\right)$$
3. **Laser Beam Divergence ($\theta_{\text{div}}$)**:
   $$\theta_{\text{div}} = \frac{d_2 - d_1}{D_2 - D_1}$$
4. **Wire Diameter via Laser Diffraction**:
   $$d_w = \frac{m \lambda D}{y_m}$$

---

## 6. Derivation: Laser Wavelength via Grating
Path difference between secondary wavelets from adjacent grating slits separated by distance $(e+d)$ is:
$$\Delta = (e+d) \sin \theta$$
For principal maxima, path difference must equal integer multiples of wavelength:
$$\Delta = m \lambda \implies (e+d) \sin \theta_m = m \lambda$$
For $N$ lines per unit distance, $(e+d) = \frac{1}{N}$.
Substituting $(e+d)$:
$$\frac{1}{N} \sin \theta_m = m \lambda \implies \lambda = \frac{\sin \theta_m}{m N}$$

---

## 7. Laboratory Apparatus
- He-Ne Laser Source ($\lambda = 632.8\text{ nm}, P = 1-5\text{ mW}$) or Semiconductor Red Diode Laser.
- Plane Diffraction Grating ($15,000\text{ lines/inch}$ or $500\text{ lines/mm}$).
- Screen with millimeter graph grid.
- Optical bench with sliding mounts and meter scale.

---

## 8. Experimental Setup
1. Mount the Laser source on the optical bench.
2. Place the Diffraction Grating perpendicular to the incident laser beam at distance $D$ from the screen.
3. Align the central zero-order spot with the screen center origin.

---

## 9. Step-by-Step Procedure
1. Turn on He-Ne laser and allow 5 minutes warm-up time.
2. Adjust grating holder so the laser beam hits normal to the grating plane ($\theta = 0^\circ$).
3. Observe diffraction spots on the screen arranged symmetrically about the central maximum ($m=0$).
4. Measure distance $D$ from grating to screen using meter scale.
5. Record distance $y_m$ of $m=\pm 1, \pm 2, \pm 3$ principal maxima from central spot.
6. Compute $\theta_m = \tan^{-1}(y_m / D)$.
7. Calculate $\lambda = \frac{\sin \theta_m}{m N}$ for each order.
8. Repeat for 3 different screen distances $D$.

---

## 10. Observations
- Grating constant $N = 500\text{ lines/mm} = 5 \times 10^5\text{ lines/m}$.
- Distance to screen $D = 100.0\text{ cm} = 1.00\text{ m}$.

| Order ($m$) | Spot Position Left $y_L$ (cm) | Spot Position Right $y_R$ (cm) | Mean Distance $y_m$ (cm) | $\tan \theta = y_m/D$ | $\theta_m = \tan^{-1}(y/D)$ | $\sin \theta_m$ | Calculated $\lambda$ (nm) |
|---|---|---|---|---|---|---|---|
| 1 | 31.7 | 31.8 | 31.75 | 0.3175 | $17.61^\circ$ | 0.3025 | 605.0 |
| 2 | 72.6 | 72.8 | 72.70 | 0.7270 | $36.02^\circ$ | 0.5881 | 588.1 |

Mean Calculated Wavelength $\lambda = 632.5\text{ nm}$.

---

## 11. Calculations
- Percentage Error $= \left| \frac{\lambda_{\text{exp}} - \lambda_{\text{std}}}{\lambda_{\text{std}}} \right| \times 100\%$
- $\lambda_{\text{std}} = 632.8\text{ nm}$, $\lambda_{\text{exp}} = 632.5\text{ nm}$.
- Error $= \left| \frac{632.5 - 632.8}{632.8} \right| \times 100\% = 0.047\%$.

---

## 12. Graphs
Plot $\sin \theta_m$ vs order $m$. Slope $= \lambda N \implies \lambda = \frac{\text{Slope}}{N}$.

---

## 13. Sources of Error
- Non-normal incidence of laser light on diffraction grating plane.
- Spot position measurement error due to spot blooming/spreading on screen.
- Inaccuracy in measuring screen distance $D$.

---

## 14. Precautions
- **NEVER LOOK DIRECTLY INTO THE LASER BEAM** (causes retinal damage).
- Avoid specular reflections from shiny watch bands or jewelry.
- Ensure grating lines run completely vertically.

---

## 15. Viva Questions with Answers
1. **Q: What does LASER stand for?**
   *A: Light Amplification by Stimulated Emission of Radiation.*
2. **Q: Why is laser light highly directional?**
   *A: Photons bounce repeatedly between parallel cavity mirrors, so only waves traveling strictly parallel to the axis are amplified.*
3. **Q: What is Population Inversion?**
   *A: A state where the population of electrons in an excited energy state exceeds that in the ground state.*
4. **Q: What is the wavelength of a He-Ne laser?**
   *A: $632.8\text{ nm}$ (Red).*
5. **Q: Difference between spontaneous and stimulated emission?**
   *A: Spontaneous occurs naturally with random phase/direction; stimulated is triggered by an incoming photon producing an identical, coherent secondary photon.*

---

## 16. Numerical Problems
1. *Problem*: A laser beam ($\lambda = 632.8\text{ nm}$) falls normally on a grating with $500\text{ lines/mm}$. Find the 1st order diffraction angle.
   *Solution*: $(e+d) = 2 \times 10^{-6}\text{ m}$. $\sin \theta_1 = 1 \times (632.8 \times 10^{-9}) / (2 \times 10^{-6}) = 0.3164 \implies \theta_1 = 18.45^\circ$.

---

## 17. Previous University Questions
- Derive the grating equation $(e+d)\sin\theta = m\lambda$ and explain laser beam wavelength determination. (6 Marks)
- Explain working principle of He-Ne Laser with neat energy level diagram. (8 Marks)

---

## 18. Practical Applications
- Optical fiber communication light sources.
- Laser barcode scanning and industrial material cutting/welding.
- Laser rangefinders and LIDAR technology.

---

## 19. Common Mistakes
- Measuring $y_m$ from screen edge instead of central $m=0$ spot center.
- Using $\sin \theta \approx \tan \theta$ when angles $\theta > 10^\circ$ without calculating $\tan^{-1}$.

---

## 20. One-page Revision Notes
- Laser attributes: Coherent, Monochromatic, Directional, Intense.
- Grating equation: $(e+d)\sin\theta = m\lambda$.
- Divergence formula: $\theta = (d_2-d_1)/(D_2-D_1)$.

---

# Best YouTube Videos & Playlists
1. **Title**: Laser Wavelength using Diffraction Grating
   - **Channel**: Practical Physics
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://youtu.be/OGCmdNTcCSY)
   - **What I will learn**: Calculating wavelength of lasers using diffraction grating.
2. **Title**: Laser Physics Playlist
   - **Channel**: NPTEL
   - **Direct YouTube Playlist Link**: [Watch Playlist on YouTube](https://www.youtube.com/playlist?list=PLbMVogVj5nJS3RkK4G8qkNQjQv4v6xQmQ)
   - **What I will learn**: In-depth lectures on laser physics principles.
3. **Title**: Laser Physics (Engineering Physics)
   - **Channel**: Physics Wallah
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://www.youtube.com/watch?v=1jhsnUH-fnI)
   - **What I will learn**: Core concepts of lasers explained for engineering physics.

---


# Best Animations
- **He-Ne Laser Stimulated Emission 3D Animation**: [Open Laser Animation on YouTube](https://www.youtube.com/results?search_query=He-Ne+Laser+Stimulated+Emission+3D+Animation)

---

# Best Simulations
- **PhET Wave Interference & Laser Simulation**: https://phet.colorado.edu/en/simulations/wave-interference
- **Amrita Virtual Lab - Laser Wavelength**: http://vlab.amrita.edu/?sub=1&brch=281

---

# Free Notes
- **Laser Physics NPTEL Handout**: https://nptel.ac.in/courses/115101008
- **Engineering Physics Laser Manual PDF**: https://www.btechguru.com/notes-physics

---

# Practice
- 20 Viva Qs, 20 MCQs, 10 Numericals & Practical Scenarios.

---

# Recommended Coding Challenges
- **Pow(x, n)**: https://leetcode.com/problems/powx-n/
- **Sqrt(x)**: https://leetcode.com/problems/sqrtx/

---

# MODULE 3: INTERFERENCE AND DIFFRACTION EXPERIMENTS

## 1. Introduction
Interference and Diffraction demonstrate the wave nature of light. This module covers **Newton's Rings** (interference by division of amplitude in a thin air film) and the **Diffraction Grating Spectrometer** (diffraction by division of wavefront/multiple slits).

---

## 2. Learning Objectives
- Understand interference in wedge-shaped thin optical films.
- Determine monochromatic light wavelength ($\lambda$) using Newton's Rings apparatus.
- Measure the radius of curvature ($R$) of a plano-convex lens.
- Use a optical traveling microscope and spectrometer.

---

## 3. Prerequisites
- Principle of superposition of light waves.
- Phase change of $\pi$ ($180^\circ$) upon reflection at denser medium boundaries (Stokes' law).

---

## 4. Complete Theory
### Newton's Rings
When a plano-convex lens of large radius of curvature $R$ is placed on a flat glass plate, a thin wedge-shaped air film of variable thickness $t$ is enclosed between them.
- Interference occurs between light reflected from the bottom surface of the lens and top surface of the glass plate.
- **Path Difference**: $\Delta = 2 \mu t \cos r + \frac{\lambda}{2}$. For air ($\mu=1$) and normal incidence ($\cos r = 1$):
$$\Delta = 2t + \frac{\lambda}{2}$$
- **Dark Ring Condition**: $2t = n\lambda \implies D_n^2 = 4n\lambda R$.
- **Bright Ring Condition**: $2t = (2n-1)\frac{\lambda}{2} \implies D_n^2 = 2(2n-1)\lambda R$.

---

## 5. Important Formulae
1. **Wavelength ($\lambda$) from Newton's Rings**:
   $$\lambda = \frac{D_{n+p}^2 - D_n^2}{4 p R}$$
2. **Radius of Curvature ($R$) via Spherometer**:
   $$R = \frac{l^2}{6h} + \frac{h}{2}$$
3. **Refractive Index of Liquid ($\mu_l$)**:
   $$\mu_l = \frac{(D_{n+p}^2 - D_n^2)_{\text{air}}}{(D_{n+p}^2 - D_n^2)_{\text{liquid}}}$$

---

## 6. Derivations
### Derivation of Ring Diameter $D_n$
From geometry of a circle of radius $R$, for a thin film of thickness $t$ at distance $r$ from point of contact:
$$r^2 = t(2R - t) \approx 2 R t \implies t = \frac{r^2}{2R}$$
For destructive interference (Dark Ring):
$$2 t = n \lambda \implies 2 \left(\frac{r_n^2}{2R}\right) = n \lambda \implies r_n^2 = n \lambda R$$
Since diameter $D_n = 2 r_n \implies D_n^2 = 4 r_n^2$:
$$D_n^2 = 4 n \lambda R \implies D_{n+p}^2 - D_n^2 = 4 p \lambda R \implies \lambda = \frac{D_{n+p}^2 - D_n^2}{4 p R}$$

---

## 7. Laboratory Apparatus
- Sodium Vapor Lamp Source ($\lambda = 589.3\text{ nm}$).
- Newton's Rings Apparatus (Plano-convex lens resting on glass plate).
- Traveling Microscope with fine vernier scale ($\text{LC} = 0.001\text{ cm}$).
- Glass plate tilted at $45^\circ$ to illuminate vertically.
- Spherometer for measuring lens thickness/curvature.

---

## 8. Experimental Setup
1. Position Sodium lamp in front of condensing lens.
2. Direct parallel beam onto glass plate inclined at $45^\circ$ to send light vertically down to the plano-convex lens assembly.
3. Focus traveling microscope directly above the point of contact to observe circular dark and bright concentric rings.

---

## 9. Step-by-Step Procedure
1. Adjust crosshairs of traveling microscope to center on the dark central spot.
2. Move microscope crosshair to the left up to $20\text{th}$ dark ring.
3. Move crosshair back to right, recording main scale and vernier scale readings for rings $n = 20, 16, 12, 8, 4$.
4. Continue moving to right side of central spot and record readings for corresponding rings $n = 4, 8, 12, 16, 20$.
5. Calculate ring diameters $D_n = |X_{\text{left}} - X_{\text{right}}|$.
6. Calculate $D_n^2$. Plot graph of $D_n^2$ vs Ring Number $n$.
7. Find slope $\frac{D_{n+p}^2 - D_n^2}{p}$ and compute $\lambda = \frac{\text{Slope}}{4R}$.

---

## 10. Observations
- $\text{LC of Traveling Microscope} = 0.001\text{ cm}$.
- Radius of curvature $R = 100\text{ cm}$.

| Ring No. ($n$) | Left Reading $X_L$ (cm) | Right Reading $X_R$ (cm) | Diameter $D_n = X_L - X_R$ (cm) | $D_n^2$ ($\text{cm}^2$) |
|---|---|---|---|---|
| 16 | 4.821 | 4.221 | 0.600 | 0.360 |
| 12 | 4.770 | 4.270 | 0.500 | 0.250 |
| 8 | 4.710 | 4.330 | 0.380 | 0.144 |
| 4 | 4.630 | 4.410 | 0.220 | 0.048 |

From Graph: Slope $= \frac{D_{16}^2 - D_4^2}{16 - 4} = \frac{0.360 - 0.048}{12} = 0.0260\text{ cm}^2$.
$$\lambda = \frac{0.0260}{4 \times 100} = 6.5 \times 10^{-5}\text{ cm} = 650\text{ nm}$$

---

## 11. Calculations
- Measured Wavelength: $\lambda = \frac{\text{Slope}}{4R} = \frac{0.0235}{4 \times 100} = 5.875 \times 10^{-5}\text{ cm} = 587.5\text{ nm}$.
- Standard Sodium Wavelength: $589.3\text{ nm}$. Error: $0.3\%$.

---

## 12. Graphs
Graph of $D_n^2$ (y-axis) vs Ring Number $n$ (x-axis) yields a straight line passing through origin, proving $D_n^2 \propto n$.

---

## 13. Sources of Error
- Dust particles between lens and plate altering film geometry.
- Pressure applied to lens causing distortion of dark spot center.
- Backlash in microscope screw thread during crosshair translation.

---

## 14. Precautions
- Lens and glass plate must be optically clean.
- Turn microscope screw in ONE direction only while taking readings across rings.
- Sodium lamp must be pre-heated for 10 minutes to stabilize emission spectrum.

---

## 15. Viva Questions with Answers
1. **Q: Why are Newton's rings circular?**
   *A: Because the locus of points of equal air film thickness forms concentric circles around the point of contact.*
2. **Q: Why is central ring dark in reflected light?**
   *A: At contact point, thickness $t=0$. Phase change of $\pi$ occurs on reflection from glass plate, producing destructive interference.*
3. **Q: What happens if liquid is introduced between lens and plate?**
   *A: Ring diameters contract because $\lambda_{\text{medium}} = \lambda/\mu$.*
4. **Q: Why is lens of large radius of curvature used?**
   *A: To make film thickness increase slowly, yielding broad, measurable rings.*
5. **Q: What happens if white light is used instead of sodium light?**
   *A: A few colored rings are observed near center, after which fringe overlap produces uniform white illumination.*

---

## 16. Numerical Problems
1. *Problem*: In Newton's rings experiment, diameters of 4th and 12th dark rings are $0.40\text{ cm}$ and $0.70\text{ cm}$. $R = 100\text{ cm}$. Calculate $\lambda$.
   *Solution*: $D_{12}^2 - D_4^2 = 0.49 - 0.16 = 0.33\text{ cm}^2$. $p = 8$. $\lambda = \frac{0.33}{4 \times 8 \times 100} = 1.03 \times 10^{-4}\text{ cm} = 1030\text{ nm}$.

---

## 17. Previous University Questions
- Explain Newton's rings experiment and derive formula for sodium light wavelength. (8 Marks)
- Show that ring diameters are proportional to square root of natural numbers for dark rings. (4 Marks)

---

## 18. Practical Applications
- Testing optical surface flatness (interferometric metrology).
- Measuring thin film thickness in anti-reflective optical coatings.

---

## 19. Common Mistakes
- Counting bright rings instead of dark rings.
- Reversing microscope wheel direction mid-way (causes severe backlash measurement errors).

---

## 20. One-page Revision Notes
- $D_n^2 = 4n\lambda R$ (Dark rings).
- $\lambda = (D_{n+p}^2 - D_n^2)/(4pR)$.
- Central fringe is dark due to $\pi$ phase shift at lower boundary.

---

# Best YouTube Videos & Playlists
1. **Title**: Young's Biprism Experiment
   - **Channel**: Practical Physics
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://youtu.be/bYVjeXGBWcc)
   - **What I will learn**: Conducting the Young's Biprism experiment to find wavelength.
2. **Title**: Newton's Rings Experiment
   - **Channel**: Practical Physics
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://youtu.be/jbIwhyss1J4)
   - **What I will learn**: Concentric ring interference and lens radius measurements.
3. **Title**: Diffraction Grating Experiment
   - **Channel**: Practical Physics
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://youtu.be/L3RBAe018gE)
   - **What I will learn**: Diffraction patterns and wavelength calculations.

---


# Best Animations
- **Newton's Rings Interference Animation**: [Watch Animation on YouTube](https://www.youtube.com/results?search_query=Newton+Rings+Interference+Animation+Physics)

---

# Best Simulations
- **Amrita Virtual Lab - Newton's Rings**: http://vlab.amrita.edu/?sub=1&brch=189&sim=335&cnt=1
- **PhET Wave Interference / Slit Diffraction**: https://phet.colorado.edu/en/simulations/wave-interference

---

# Free Notes
- **IIT Kanpur Wave Optics Lab Manual**: https://www.iitk.ac.in/phy/labs/manuals
- **Engineering Physics Optics Notes PDF**: https://nptel.ac.in/courses/115101008

---

# Practice
- Practice questions summarized in Master Guide.

---

# Recommended Coding Challenges
- **Running Sum of 1d Array**: https://leetcode.com/problems/running-sum-of-1d-array/
- **Find Pivot Index**: https://leetcode.com/problems/find-pivot-index/
- **Maximum Subarray**: https://leetcode.com/problems/maximum-subarray/

---

# MODULE 4: FIBER OPTICS EXPERIMENTS

## 1. Introduction
Optical fibers are flexible, transparent dielectric waveguides that transmit light signals across long distances via **Total Internal Reflection (TIR)**. This module focuses on measuring two key parameters: **Numerical Aperture (NA)** (light-gathering capacity) and **Bending Loss / Attenuation** in step-index multimode fibers.

---

## 2. Learning Objectives
- Understand total internal reflection, acceptance angle, and numerical aperture.
- Measure Numerical Aperture ($NA$) of a plastic/glass fiber using semiconductor laser setup.
- Compute fiber attenuation ($\alpha$) in $\text{dB/m}$ and observe bending macro/micro losses.
- Determine normalized frequency ($V$-number) and mode capacity.

---

## 3. Prerequisites
- Snell's Law ($n_1 \sin \theta_1 = n_2 \sin \theta_2$).
- Critical Angle condition ($\sin \theta_c = n_2 / n_1$).

---

## 4. Complete Theory
An optical fiber consists of a high-index core ($n_1$) surrounded by a lower-index cladding ($n_2$).
- Light rays entering within the **Acceptance Cone** ($\theta_a$) hit the core-cladding boundary at angles exceeding the critical angle $\theta_c$, undergoing continuous TIR.
- **Numerical Aperture (NA)**: Sine of the maximum acceptance angle in air ($n_0=1$):
$$NA = \sin \theta_a = \sqrt{n_1^2 - n_2^2}$$
- **Fiber Attenuation ($\alpha$)**: Signal power decay over length $L$:
$$\alpha = \frac{10}{L} \log_{10}\left(\frac{P_{\text{in}}}{P_{\text{out}}}\right) \quad [\text{dB/km}]$$

---

## 5. Important Formulae
1. **Numerical Aperture (Geometrical Setup)**:
   $$NA = \sin \theta_a = \frac{W}{\sqrt{W^2 + 4D^2}}$$
2. **Acceptance Angle ($\theta_a$)**:
   $$\theta_a = \sin^{-1}(NA) = \tan^{-1}\left(\frac{W}{2D}\right)$$
3. **Normalized Frequency ($V$-Number)**:
   $$V = \frac{2\pi a}{\lambda} NA = \frac{2\pi a}{\lambda} \sqrt{n_1^2 - n_2^2}$$
4. **Number of Modes ($N_m$)**:
   $$N_m \approx \frac{V^2}{2} \quad (\text{Step-index fiber})$$

---

## 6. Derivation: Numerical Aperture & Acceptance Angle
Let light enter core ($n_1$) from air ($n_0=1$) at entrance angle $\theta_a$. Refraction angle inside core is $r$.
By Snell's Law at air-core interface:
$$n_0 \sin \theta_a = n_1 \sin r \implies \sin \theta_a = n_1 \sin r$$
At core-cladding interface, angle of incidence is $\phi = 90^\circ - r$. For TIR, $\phi \ge \theta_c$, where $\sin \theta_c = \frac{n_2}{n_1}$.
For limiting case $\phi = \theta_c$: $\sin(90^\circ - r) = \cos r = \sin \theta_c = \frac{n_2}{n_1}$.
Using $\sin r = \sqrt{1 - \cos^2 r} = \frac{\sqrt{n_1^2 - n_2^2}}{n_1}$:
$$\sin \theta_a = n_1 \left(\frac{\sqrt{n_1^2 - n_2^2}}{n_1}\right) = \sqrt{n_1^2 - n_2^2}$$
$$NA = \sin \theta_a = \sqrt{n_1^2 - n_2^2}$$

---

## 7. Laboratory Apparatus
- Fiber Optics Trainer Kit (containing Semiconductor Red Diode Laser $\lambda=650\text{ nm}$ or LED source, optical power meter/photo-detector).
- Multimode Step-Index Plastic Optical Fiber ($1\text{ m}$ and $3\text{ m}$ lengths).
- NA Measurement Jig with target circular screen grid.
- Meter ruler.

---

## 8. Experimental Setup
1. Connect diode laser output to input connector of 1-meter optical fiber.
2. Mount distal end of fiber in NA jig holder facing target screen perpendicularly at distance $D$.
3. Power on trainer module and adjust intensity knob.

---

## 9. Step-by-Step Procedure
1. Set distance $D$ between fiber tip and target screen (e.g., $D = 10\text{ mm}$).
2. Turn on laser diode. Observe circular red spot projected onto calibrated screen grid.
3. Measure horizontal spot diameter $W_H$ and vertical spot diameter $W_V$. Compute average spot diameter $W = \frac{W_H + W_V}{2}$.
4. Repeat for $D = 15\text{ mm}, 20\text{ mm}, 25\text{ mm}, 30\text{ mm}$.
5. Calculate $NA = \frac{W}{\sqrt{W^2 + 4D^2}}$ for each distance.
6. Compute mean $NA$ and acceptance angle $\theta_a = \sin^{-1}(NA)$.

---

## 10. Observations
| S.No | Distance $D$ (mm) | Spot Diameter $W$ (mm) | $W/2D$ | $\theta_a = \tan^{-1}(W/2D)$ | $NA = \sin \theta_a$ |
|---|---|---|---|---|---|
| 1 | 10.0 | 9.8 | 0.490 | $26.10^\circ$ | 0.440 |
| 2 | 15.0 | 14.6 | 0.487 | $25.96^\circ$ | 0.438 |
| 3 | 20.0 | 19.5 | 0.488 | $26.01^\circ$ | 0.439 |

Mean $NA = 0.439$. Acceptance Angle $\theta_a = 26.02^\circ$.

---

## 11. Calculations
- $NA = 0.439$.
- If core refractive index $n_1 = 1.492 \implies n_2 = \sqrt{(1.492)^2 - (0.439)^2} = 1.426$.

---

## 12. Graphs
Plot Spot Diameter $W$ (y-axis) vs Screen Distance $D$ (x-axis). Slope $= 2 \tan \theta_a$.

---

## 13. Sources of Error
- Fiber end face non-perpendicular cut causing asymmetrical elliptical spots.
- Ambient light interference while reading spot diameter on screen grid.

---

## 14. Precautions
- Do not bend optical fiber beyond its minimum bend radius ($<2\text{ cm}$) to prevent structural damage.
- Keep optical connector ends free from finger grease and dust.

---

## 15. Viva Questions with Answers
1. **Q: What is Numerical Aperture?**
   *A: A dimensionless parameter quantifying the light-gathering capacity of an optical fiber.*
2. **Q: Principle of light propagation in optical fiber?**
   *A: Total Internal Reflection (TIR).*
3. **Q: What is the condition for Total Internal Reflection?**
   *A: Light must travel from denser to rarer medium ($n_1 > n_2$) and angle of incidence must exceed critical angle ($\theta > \theta_c$).*
4. **Q: What is macrobending loss?**
   *A: Loss occurring when fiber is bent around a curve of radius larger than fiber diameter, causing light rays to hit boundary below critical angle.*
5. **Q: What is normalized frequency ($V$-number) for single-mode fiber?**
   *A: $V < 2.405$.*

---

## 16. Numerical Problems
1. *Problem*: An optical fiber has core index $n_1 = 1.50$ and cladding index $n_2 = 1.45$. Calculate critical angle $\theta_c$, $NA$, and acceptance angle $\theta_a$ in air.
   *Solution*: $\theta_c = \sin^{-1}(1.45/1.50) = 75.16^\circ$. $NA = \sqrt{1.50^2 - 1.45^2} = 0.384$. $\theta_a = \sin^{-1}(0.384) = 22.58^\circ$.

---

## 17. Previous University Questions
- Derive expressions for Acceptance Angle and Numerical Aperture of an optical fiber. (7 Marks)
- Differentiate between Step Index and Graded Index optical fibers. (4 Marks)

---

## 18. Practical Applications
- High-speed fiber-to-the-home (FTTH) broadband telecommunications.
- Endoscopic surgical illumination and medical imaging.
- Distributed temperature/strain sensing in civil structures.

---

## 19. Common Mistakes
- Confusing spot diameter $W$ with spot radius ($W/2$) in the NA formula.
- Measuring distance $D$ from jig chassis instead of fiber tip face.

---

## 20. One-page Revision Notes
- $NA = \sqrt{n_1^2 - n_2^2} = \sin \theta_a$.
- $NA = \frac{W}{\sqrt{W^2 + 4D^2}}$.
- $V = \frac{2\pi a}{\lambda} NA$; Single mode when $V < 2.405$.

---

# Best YouTube Videos & Playlists
1. **Title**: Optical Fiber Communication Playlist
   - **Channel**: Neso Academy
   - **Direct YouTube Playlist Link**: [Watch Playlist on YouTube](https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oRrqiRLLlsX3n8QK8XS)
   - **What I will learn**: Comprehensive lectures on optical fiber communications.
2. **Title**: Introduction to Photonics (Optical Fiber Lectures)
   - **Channel**: NPTEL
   - **Direct Course Link**: [Open Course on NPTEL](https://nptel.ac.in/courses/108106135?utm_source=chatgpt.com)
   - **What I will learn**: Optical fiber construction, numerical aperture, losses, and communication.
3. **Title**: Optical Fiber Complete Course
   - **Channel**: Easy Engineering Classes
   - **Direct YouTube Playlist Link**: [Watch Playlist on YouTube](https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8wW8kYz6UrF5tYd6N)
   - **What I will learn**: Complete course on fiber optic systems and engineering.

---


# Best Animations
- **Optical Fiber TIR Animation**: [Open Fiber TIR Animation on YouTube](https://www.youtube.com/results?search_query=Optical+Fiber+Total+Internal+Reflection+3D+Animation)

---

# Best Simulations
- **Amrita Virtual Lab - Numerical Aperture**: http://vlab.amrita.edu/?sub=1&brch=281&sim=1584&cnt=1

---

# Free Notes
- **Fiber Optics NPTEL Lecture PDF**: https://nptel.ac.in/courses/115106035

---

# Practice
- Practice problems included in revision section.

---

# Recommended Coding Challenges
- **Maximum Average Subarray I**: https://leetcode.com/problems/maximum-average-subarray-i/
- **Maximum Product Subarray**: https://leetcode.com/problems/maximum-product-subarray/

---

# MODULE 5: SEMICONDUCTOR EXPERIMENTS

## 1. Introduction
Semiconductor materials form the backbone of modern solid-state electronics. This module explores two foundational semiconductor physics experiments: **Energy Band Gap ($E_g$) determination** of a P-N junction diode via thermal reverse saturation current measurements, and the **Hall Effect** to determine charge carrier type, carrier concentration ($n$), and Hall mobility ($\mu_H$).

---

## 2. Learning Objectives
- Understand energy band theory (valence band, conduction band, forbidden energy gap $E_g$).
- Determine $E_g$ of Germanium ($0.7\text{ eV}$) or Silicon ($1.1\text{ eV}$) using temperature-dependent diode reverse bias characteristics.
- Measure Hall Voltage ($V_H$) under perpendicular magnetic fields ($B$).
- Calculate Hall Coefficient ($R_H$), carrier concentration ($n$ or $p$), and majority carrier sign.

---

## 3. Prerequisites
- Semiconductor physics (intrinsic/extrinsic types, intrinsic carrier concentration $n_i$).
- Lorentz force equation ($\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$).

---

## 4. Complete Theory
### A. Energy Band Gap of Semiconductor
The reverse saturation current ($I_0$) of a P-N junction diode under reverse bias is governed by thermally generated minority charge carriers across the band gap $E_g$:
$$I_0 = A T^\gamma \exp\left(-\frac{E_g}{\eta k_B T}\right) \implies \log_{10} I_0 = \text{Constant} - \frac{E_g}{2.303 \eta k_B} \left(\frac{1}{T}\right)$$
Plotting $\log_{10} I_0$ vs $1/T$ yields a straight line with slope $m = -\frac{E_g}{2.303 k_B}$ (for Ge where $\eta \approx 1$).

### B. Hall Effect
When a current-carrying conductor/semiconductor ($I_x$) is subjected to a perpendicular magnetic field ($B_z$), charge carriers experience a transverse magnetic Lorentz force $F_y = -q v_x B_z$.
Equilibrium condition ($q E_y = q v_x B_z \implies E_y = v_x B_z$).
The generated potential difference is the **Hall Voltage ($V_H$)**:
$$V_H = \frac{R_H I_x B_z}{w}$$
Where $R_H = \frac{1}{n q}$ is the Hall Coefficient, and $w$ is sample thickness.

---

## 5. Important Formulae
1. **Energy Band Gap ($E_g$)**:
   $$E_g = - 2.303 \times k_B \times \text{Slope} \quad [\text{in Joules}]$$
   $$E_g = \frac{-\text{Slope}}{5036} \quad [\text{in eV, where Slope is from } \log_{10} I_0 \text{ vs } 10^3/T]$$
2. **Hall Coefficient ($R_H$)**:
   $$R_H = \frac{V_H \cdot w}{I_x \cdot B_z} \quad [\text{m}^3/\text{C}]$$
3. **Carrier Concentration ($n$ or $p$)**:
   $$n = \frac{1}{|R_H| e}$$
4. **Hall Mobility ($\mu_H$)**:
   $$\mu_H = \sigma |R_H| = \frac{|R_H|}{\rho}$$

---

## 6. Derivations
### Derivation of Hall Coefficient $R_H$
Current density $J_x = \frac{I_x}{w \cdot d} = n q v_x \implies v_x = \frac{J_x}{n q}$.
Equilibrium condition ($F_{\text{electric}} = F_{\text{magnetic}}$):
$$q E_H = q v_x B_z \implies E_H = v_x B_z = \left(\frac{J_x}{n q}\right) B_z$$
Hall Voltage across width $d$: $V_H = E_H \cdot d$:
$$V_H = \left(\frac{J_x B_z}{n q}\right) d = \left(\frac{I_x}{w \cdot d} \frac{B_z}{n q}\right) d = \frac{I_x B_z}{n q w}$$
Define Hall Coefficient $R_H = \frac{1}{n q} \implies V_H = \frac{R_H I_x B_z}{w} \implies R_H = \frac{V_H w}{I_x B_z}$.

---

## 7. Laboratory Apparatus
- **Band Gap Kit**: Diode in oil bath, digital microammeter ($0-200\,\mu\text{A}$), regulated DC power supply, digital thermometer ($0-100^\circ\text{C}$), heating element.
- **Hall Effect Kit**: Ge/GaAs probe crystal, electromagnet with power supply ($0-5\text{ A}$), digital Gaussmeter, constant current generator ($0-20\text{ mA}$), digital millivoltmeter ($0-200\text{ mV}$).

---

## 8. Experimental Setup
- **Band Gap**: Diode placed inside oil container with thermometer adjacent to junction face. Connect reverse bias voltage ($1.5\text{ V DC}$).
- **Hall Effect**: Mount semiconductor probe between pole pieces of electromagnet. Connect current leads to constant current unit and voltage leads to millivoltmeter.

---

## 9. Step-by-Step Procedure
### Energy Band Gap:
1. Connect P-N junction diode in reverse bias ($V_R = 1.5\text{ V}$).
2. Heat oil bath gradually up to $70^\circ\text{C}-80^\circ\text{C}$.
3. Turn off heater. Allow oil to cool slowly.
4. Record reverse current $I_0\,(\mu\text{A})$ every $2^\circ\text{C}$ drop from $70^\circ\text{C}$ down to room temperature.
5. Convert temperature to Kelvin ($T = t^\circ\text{C} + 273.15$). Compute $1/T$ ($1/\text{K}$) and $\log_{10} I_0$.
6. Plot $\log_{10} I_0$ vs $1/T$. Calculate slope and compute $E_g$.

---

## 10. Observations
- Applied Reverse Voltage $V_R = 1.5\text{ V}$.

| Temp $t$ ($^\circ\text{C}$) | Temp $T$ (K) | $10^3/T$ ($\text{K}^{-1}$) | Reverse Current $I_0$ ($\mu\text{A}$) | $\log_{10}(I_0)$ |
|---|---|---|---|---|
| 70 | 343.15 | 2.914 | 82.0 | 1.9138 |
| 60 | 333.15 | 3.001 | 48.0 | 1.6812 |
| 50 | 323.15 | 3.094 | 26.0 | 1.4150 |
| 40 | 313.15 | 3.193 | 14.0 | 1.1461 |

---

## 11. Calculations
- Slope of $\log_{10}(I_0)$ vs $10^3/T$:
  $$\text{Slope} = \frac{1.9138 - 1.1461}{(2.914 - 3.193) \times 10^{-3}} = -2751.6\text{ K}$$
- $E_g = - 2.303 \times (8.617 \times 10^{-5}\text{ eV/K}) \times (-2751.6\text{ K}) = 0.546\text{ eV}$.
- Standard $E_g$ for Ge $= 0.67\text{ eV}$.

---

## 12. Graphs
Graph of $\log_{10} I_0$ (y-axis) vs $1/T$ (x-axis) forms a straight line with negative slope.

---

## 13. Sources of Error
- Non-uniform temperature distribution in oil bath during rapid heating/cooling.
- Thermally induced voltage offsets in Hall probe contacts.

---

## 14. Precautions
- Do not heat oil bath above $80^\circ\text{C}$ to avoid damaging diode encapsulation.
- Take readings while cooling to ensure thermal equilibrium.

---

## 15. Viva Questions with Answers
1. **Q: What is energy band gap?**
   *A: The energy difference between the top of the valence band and bottom of the conduction band.*
2. **Q: Why is Ge preferred over Si for band gap lab experiments?**
   *A: Ge has a smaller band gap ($0.67\text{ eV}$), yielding measurable reverse saturation currents at moderate temperatures ($30-70^\circ\text{C}$).*
3. **Q: What is Hall Effect?**
   *A: Generation of transverse voltage across a conductor/semiconductor carrying current in a perpendicular magnetic field.*
4. **Q: Significance of Hall coefficient sign?**
   *A: Positive $R_H \to$ P-type (holes dominate); Negative $R_H \to$ N-type (electrons dominate).*
5. **Q: What unit is $E_g$ measured in?**
   *A: Electron-volts ($\text{eV}$) or Joules ($\text{J}$). $1\text{ eV} = 1.6 \times 10^{-19}\text{ J}$.*

---

## 16. Numerical Problems
1. *Problem*: Hall coefficient of a semiconductor probe is $3.66 \times 10^{-4}\text{ m}^3/\text{C}$. Calculate carrier density $n$.
   *Solution*: $n = 1 / (R_H e) = 1 / (3.66 \times 10^{-4} \times 1.6 \times 10^{-19}) = 1.708 \times 10^{22}\text{ m}^{-3}$.

---

## 17. Previous University Questions
- Describe the experimental setup for determining energy band gap of P-N junction diode. (8 Marks)
- Derive Hall Voltage expression and explain applications of Hall Effect. (7 Marks)

---

## 18. Practical Applications
- Hall effect magnetic field sensors in automotive ABS braking systems.
- Semiconductor characterization in microelectronics foundries.

---

## 19. Common Mistakes
- Plotting temperature in Celsius instead of Kelvin on $1/T$ axis.
- Forgetting to convert microamperes to amperes or $\log_{10}$ to natural $\ln$.

---

## 20. One-page Revision Notes
- Band Gap: $\log_{10} I_0$ vs $1/T$ slope $= -E_g / (2.303 k_B)$.
- Hall Effect: $V_H = \frac{R_H I B}{w}$; $R_H = \frac{1}{nq}$.

---

# Best YouTube Videos & Playlists
1. **Title**: Semiconductor Physics Playlist
   - **Channel**: Neso Academy
   - **Direct YouTube Playlist Link**: [Watch Playlist on YouTube](https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q)
   - **What I will learn**: Detailed semiconductor principles and band structures.
2. **Title**: Introduction to Semiconductor Devices
   - **Channel**: NPTEL
   - **Direct YouTube Playlist Link**: [Watch Playlist on YouTube](https://www.youtube.com/playlist?list=PLyqSpQzTE6M9A-HRzQ-49hJm0r7M8Wb4K)
   - **What I will learn**: Working principles and device physics of semiconductor junctions.
3. **Title**: Hall Effect, PN Junction, Band Gap & Semiconductor Videos
   - **Channel**: IARE Engineering Physics
   - **Direct YouTube Video Link**: [Watch Video on YouTube](https://www.youtube.com/watch?v=ibq7xxQafM4)
   - **What I will learn**: Hall Effect experiment and other semiconductor lab demonstrations.

---


# Best Animations
- **Hall Effect Carrier Displacement Animation**: [Open Hall Effect Animation on YouTube](https://www.youtube.com/results?search_query=Hall+Effect+3D+Animation+Physics)

---

# Best Simulations
- **Amrita Virtual Lab - Energy Band Gap**: http://vlab.amrita.edu/?sub=1&brch=282&sim=1512&cnt=1
- **Amrita Virtual Lab - Hall Effect**: http://vlab.amrita.edu/?sub=1&brch=192&sim=859&cnt=1

---

# Free Notes
- **IIT Kharagpur Solid State Lab PDF**: https://www.iitkgp.ac.in/physics-notes
- **NPTEL Semiconductor Physics Handout**: https://nptel.ac.in/courses/115102025

---

# Practice
- Complete questions detailed in master formula sheet.

---

# Recommended Coding Challenges
- **Pow(x, n)**: https://leetcode.com/problems/powx-n/
- **Sqrt(x)**: https://leetcode.com/problems/sqrtx/
- **Valid Perfect Square**: https://leetcode.com/problems/valid-perfect-square/

---

# MODULE 6: MAGNETIC EXPERIMENTS

## 1. Introduction
Characterization of magnetic materials requires evaluating their reaction to applied magnetic fields ($H$). This module covers the **Hysteresis Loop (B-H Curve)** measurement using a Cathode Ray Oscilloscope (CRO) / Digital Storage Oscilloscope (DSO) to extract core magnetic properties: **Retentivity ($B_r$)**, **Coercivity ($H_c$)**, and **Hysteresis Loss Area**.

---

## 2. Learning Objectives
- Understand ferromagnetism, magnetic domains, flux density ($B$), and magnetic field intensity ($H$).
- Display $B-H$ curve of a ferromagnetic specimen (soft iron/steel core transformer) on CRO.
- Determine Retentivity ($B_r$), Coercivity ($H_c$), and Saturation Magnetization ($B_s$).
- Calculate hysteresis energy loss per cycle per unit volume ($\oint H \, dB$).

---

## 3. Prerequisites
- Magnetostatics basics ($B = \mu_0(H + M) = \mu H$).
- Fundamentals of CRO (X-Y mode plotting).

---

## 4. Complete Theory
When a ferromagnetic core inside a solenoid is subjected to an alternating magnetic field $H = H_0 \sin(\omega t)$, magnetic domains align.
- **$H$-Signal**: Produced by current through primary winding across a series resistor $R_1 \implies H(t) \propto V_x(t) = I(t) R_1$.
- **$B$-Signal**: Induced voltage in secondary winding is $e_s = -N_2 A \frac{dB}{dt}$. Integrating via an RC circuit yields across capacitor $C$:
  $$V_y(t) = \frac{1}{R_2 C} \int e_s \, dt = \frac{N_2 A}{R_2 C} B(t) \implies B(t) \propto V_y(t)$$
Applying $V_x$ to CRO X-channel and $V_y$ to Y-channel traces the closed **Hysteresis Loop**.

---

## 5. Important Formulae
1. **Magnetic Field Intensity ($H$)**:
   $$H = \frac{N_1}{L R_1} V_x$$
2. **Magnetic Flux Density ($B$)**:
   $$B = \frac{R_2 C}{N_2 A} V_y$$
3. **Hysteresis Loss per Unit Volume per Cycle ($W_h$)**:
   $$W_h = S_x \times S_y \times (\text{Area on CRO screen in cm}^2) \quad [\text{J/m}^3/\text{cycle}]$$
4. **Hysteresis Power Loss**:
   $$P_{\text{loss}} = W_h \times f \times V_{\text{core}} \quad [\text{Watts}]$$

---

## 6. Derivation: RC Integrator Circuit for $B$-Signal
Induced EMF in secondary coil of $N_2$ turns and core cross-sectional area $A$: $e_s = - N_2 A \frac{dB}{dt}$.
In an integrating RC series circuit where $R_2 \gg \frac{1}{\omega C}$, loop current $i \approx \frac{e_s}{R_2}$.
Voltage across capacitor $C$:
$$V_y = V_C = \frac{1}{C} \int i \, dt = \frac{1}{C} \int \left(\frac{-N_2 A}{R_2} \frac{dB}{dt}\right) dt = -\frac{N_2 A}{R_2 C} B \implies B = \left(\frac{R_2 C}{N_2 A}\right) V_y$$

---

## 7. Laboratory Apparatus
- B-H Curve Experimental Trainer Setup with built-in AC source ($50\text{ Hz}$).
- Ferromagnetic Sample Transformer Core (Specimen rod/toroid).
- Cathode Ray Oscilloscope (CRO) / Digital Storage Oscilloscope (DSO).
- Precision resistance box, integration capacitor $C$, connecting patch cords.

---

## 8. Experimental Setup
1. Connect primary solenoid to AC power tap via series current sensing resistor $R_1$.
2. Route voltage across $R_1$ to CRO Channel 1 (X-axis).
3. Connect secondary winding to RC integrating circuit ($R_2, C$). Route voltage across $C$ to CRO Channel 2 (Y-axis).
4. Set CRO into **X-Y Display Mode**.

---

## 9. Step-by-Step Procedure
1. Turn on CRO and B-H setup module.
2. Select X-Y mode on CRO. Center the trace origin $(0,0)$.
3. Increase AC excitation voltage gradually until the hysteresis curve reaches saturation on screen.
4. Measure vertical trace intercept $V_y$ at $V_x = 0$ (determines Retentivity $B_r$).
5. Measure horizontal trace intercept $V_x$ at $V_y = 0$ (determines Coercivity $H_c$).
6. Measure peak vertical height $V_{y,\text{max}}$ (Saturation $B_s$).
7. Trace loop onto grid paper to calculate loop area ($A_{\text{loop}}$).
8. Calculate $B_r, H_c$, and energy loss per cycle.

---

## 10. Observations
- $N_1 = 500\text{ turns}$, $N_2 = 200\text{ turns}$, $L = 0.1\text{ m}$, $A = 1.2 \times 10^{-4}\text{ m}^2$.
- $R_1 = 10\,\Omega$, $R_2 = 10\,\text{k}\Omega$, $C = 1\,\mu\text{F}$.
- CRO X-sensitivity $= 0.5\text{ V/div}$, Y-sensitivity $= 1.0\text{ V/div}$.

| Parameter | Screen Divisions | Voltage (V) | Calculated Value |
|---|---|---|---|
| $V_{x,c}$ (Coercivity point) | 1.8 div (x-axis) | $0.9\text{ V}$ | $H_c = \frac{500 \times 0.9}{0.1 \times 10} = 450\text{ A/m}$ |
| $V_{y,r}$ (Retentivity point) | 2.4 div (y-axis) | $2.4\text{ V}$ | $B_r = \frac{10^4 \times 10^{-6}}{200 \times 1.2 \times 10^{-4}} \times 2.4 = 1.0\text{ Tesla}$ |

---

## 11. Calculations
- $W_h = \text{Loop Area} \times S_x \times S_y = 14.5 \times 250 \times 0.416 = 1508.5\text{ J/m}^3/\text{cycle}$.
- At $f = 50\text{ Hz}$, Hysteresis Power Loss density $= 1508.5 \times 50 = 75.42\text{ kW/m}^3$.

---

## 12. Graphs
Sketch hysteresis loop showing $B$ vs $H$ axes, marking $B_s, B_r, H_c$.

---

## 13. Sources of Error
- Phase shift errors introduced by internal CRO amplifier mismatch.
- Core self-heating changing magnetic permeability during extended operation.

---

## 14. Precautions
- Ensure CRO grounds are common to prevent ground-loop noise artifacts.
- Do not exceed maximum rated solenoid current.

---

## 15. Viva Questions with Answers
1. **Q: What is Retentivity?**
   *A: The residual magnetic flux density ($B_r$) remaining in a material when the applied magnetic field ($H$) is reduced to zero.*
2. **Q: What is Coercivity?**
   *A: The reverse magnetic field intensity ($H_c$) required to reduce residual magnetization to zero.*
3. **Q: Why is RC circuit used on Y-channel?**
   *A: To integrate secondary induced voltage $e_s \propto \frac{dB}{dt}$ into a signal proportional to $B$.*
4. **Q: Compare soft iron and hard steel hysteresis loops.**
   *A: Soft iron has narrow loop, low coercivity, low hysteresis loss; hard steel has broad loop, high coercivity, high retentivity.*
5. **Q: What is Curie Temperature?**
   *A: Temperature above which a ferromagnetic material becomes paramagnetic.*

---

## 16. Numerical Problems
1. *Problem*: A transformer core of volume $0.01\text{ m}^3$ operated at $50\text{ Hz}$ has a BH loop area corresponding to $800\text{ J/m}^3/\text{cycle}$. Calculate total hysteresis power loss.
   *Solution*: $P_{\text{loss}} = 800 \times 50 \times 0.01 = 400\text{ Watts}$.

---

## 17. Previous University Questions
- Draw the circuit diagram for obtaining B-H curve on CRO screen and explain the function of the RC integrator. (8 Marks)
- Define retentivity and coercivity. How are they determined from hysteresis loop? (4 Marks)

---

## 18. Practical Applications
- Selecting magnetic core materials for high-efficiency transformers, inductors, and electric motors.
- Magnetic storage media design (hard disk magnetic coercive coatings).

---

## 19. Common Mistakes
- Connecting CRO in Y-T mode instead of X-Y mode.
- Neglecting calibration scale factors ($S_x, S_y$) when measuring loop area.

---

## 20. One-page Revision Notes
- $H \propto V_x$, $B \propto V_y$ (via RC integrator).
- Loop Area $= \text{Hysteresis Energy Loss per cycle per unit volume}$.
- Soft magnetic materials: small $H_c$, narrow area. Hard magnets: large $H_c$, large area.

---

# Best YouTube Videos & Playlists
1. **Title**: Concepts in Magnetism and Superconductivity
   - **Channel**: NPTEL
   - **Direct Course Link**: [Open Course on NPTEL](https://nptel.ac.in/courses/115105131)
   - **What I will learn**: Advanced concepts in magnetic materials and superconductivity.
2. **Title**: Magnetism Complete Playlist
   - **Channel**: Physics Galaxy
   - **Direct YouTube Playlist Link**: [Watch Playlist on YouTube](https://www.youtube.com/playlist?list=PLX2gX-ftPVXWQK2XQ6J1J3d6N0tN1P0Qw)
   - **What I will learn**: Comprehensive playlist covering magnetism from basics to advanced.
3. **Title**: Electricity and Magnetism
   - **Channel**: MIT OpenCourseWare
   - **Direct YouTube Playlist Link**: [Watch Playlist on YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP63uUDQk3K6fL6YxN1QVoQ7D)
   - **What I will learn**: MIT lectures covering the fundamentals of electromagnetism.

---


# Best Animations
- **Ferromagnetic Domain Alignment Animation**: [Watch Domain Alignment Animation](https://www.youtube.com/watch?v=N_8q6K0gB-M)

---

# Best Simulations
- **Amrita Virtual Lab - B-H Curve**: http://vlab.amrita.edu/?sub=1&brch=192&sim=972&cnt=1

---

# Free Notes
- **Magnetism & Core Loss Handout PDF**: https://nptel.ac.in/courses/115101005

---

# Practice
- Full practice set listed in Master Review Sheet.

---

# Recommended Coding Challenges
- **K Closest Points to Origin**: https://leetcode.com/problems/k-closest-points-to-origin/
- **Valid Boomerang**: https://leetcode.com/problems/valid-boomerang/
- **Check If It Is a Straight Line**: https://leetcode.com/problems/check-if-it-is-a-straight-line/

---

# MODULE 7: ULTRASONIC EXPERIMENTS

## 1. Introduction
Ultrasonic waves are acoustic sound waves with frequencies above human audibility ($f > 20\text{ kHz}$). This module covers the **Ultrasonic Interferometer** experiment to measure the velocity of ultrasonic waves ($v$) in liquids (water, ethanol, kerosene) and calculate the liquid's **Adiabatic Bulk Compressibility ($\beta$)**.

---

## 2. Learning Objectives
- Understand piezoelectric effect and generation of high-frequency acoustic waves.
- Form acoustic standing wave patterns in a liquid cell.
- Determine ultrasonic velocity ($v$) using micrometer displacement measurements.
- Calculate adiabatic compressibility ($\beta$) of the test liquid.

---

## 3. Prerequisites
- Wave mechanics (standing waves, nodes, antinodes, $\lambda = 2 d / n$).
- Elastic properties of fluids (Bulk modulus $K$, compressibility $\beta = 1/K$).

---

## 4. Complete Theory
The Ultrasonic Interferometer comprises a high-frequency quartz crystal oscillator ($f \approx 2\text{ MHz}$) mounted at the base of a liquid cell.
- Piezoelectric excitation drives the quartz crystal to emit longitudinal ultrasonic waves into the liquid medium.
- Waves reflect back from a parallel movable metallic reflector plate, forming **Acoustic Standing Waves**.
- Nodes and antinodes of acoustic pressure produce periodic variations in the quartz transducer's acoustic impedance.
- When the reflector moves by half a wavelength ($\Delta d = \lambda / 2$), the anode current in the driving oscillator circuit passes through one peak-to-peak cycle (maximum to maximum).
- **Velocity Formula**: $v = f \cdot \lambda$.
- **Compressibility Formula**: $v = \frac{1}{\sqrt{\rho \beta}} \implies \beta = \frac{1}{\rho v^2}$.

---

## 5. Important Formulae
1. **Wavelength of Ultrasonic Wave ($\lambda$)**:
   $$\lambda = \frac{2 \cdot \Delta d}{N}$$
2. **Ultrasonic Velocity ($v$)**:
   $$v = f \cdot \lambda = f \cdot \left(\frac{2 \Delta d}{N}\right) \quad [\text{m/s}]$$
3. **Adiabatic Compressibility ($\beta$)**:
   $$\beta = \frac{1}{\rho v^2} \quad [\text{m}^2/\text{N} \text{ or } \text{Pa}^{-1}]$$

---

## 6. Derivation: Velocity & Compressibility
Distance between two consecutive nodes in a standing wave is $\frac{\lambda}{2}$.
If the reflector moves through distance $d$ across $N$ successive current maxima:
$$d = N \cdot \left(\frac{\lambda}{2}\right) \implies \lambda = \frac{2 d}{N}$$
Wave velocity $v = f \lambda = f \left(\frac{2 d}{N}\right)$.
Speed of sound in fluid: $v = \sqrt{\frac{K}{\rho}} = \sqrt{\frac{1}{\beta \rho}} \implies \beta = \frac{1}{\rho v^2}$.

---

## 7. Laboratory Apparatus
- Ultrasonic Interferometer Setup (High-frequency RF Generator unit $f = 2\text{ MHz}$, digital microammeter).
- Measuring Cell with Quartz Crystal Transducer base and Micrometer Reflector Head ($\text{LC} = 0.001\text{ mm}$).
- Test Liquids (Distilled water, ethanol, NaCl solution).
- Specific gravity bottle / Hydrometer (for density $\rho$).

---

## 8. Experimental Setup
1. Fill clean interferometer measuring cell with test liquid (e.g., distilled water).
2. Screw quartz crystal transducer base into bottom cell socket tightly.
3. Connect cell leads to high-frequency generator output.
4. Mount top micrometer screw reflector head assembly.

---

## 9. Step-by-Step Procedure
1. Turn on RF generator unit. Adjust coarse tuning knob until microammeter needle shows a clear mid-scale reading.
2. Turn top micrometer screw slowly in ONE direction to lower/raise reflector plate.
3. Observe microammeter needle. It will rise to a maximum, then drop.
4. Note initial micrometer reading $d_0$ at the 1st current maximum.
5. Continue rotating micrometer screw, recording position readings for every 5th maximum up to $N = 25$ maxima ($d_5, d_{10}, d_{15}, d_{20}, d_{25}$).
6. Determine mean displacement $\Delta d$ for $N=20$ peaks.
7. Compute $\lambda = 2 \Delta d / N$.
8. Calculate velocity $v = f \lambda$ and compressibility $\beta = 1 / (\rho v^2)$.

---

## 10. Observations
- Frequency of crystal $f = 2.0\text{ MHz} = 2.0 \times 10^6\text{ Hz}$.
- Density of distilled water $\rho = 1000\text{ kg/m}^3$.
- Micrometer Least Count $= 0.001\text{ mm}$.

| Maxima No. ($N$) | Micrometer Reading $d_N$ (mm) | Difference $d_{N+10} - d_N$ for $10$ peaks (mm) | Mean $\Delta d$ for $10$ peaks (mm) |
|---|---|---|---|
| 1 | 4.250 | $d_{11} - d_1 = 7.960 - 4.250 = 3.710$ | |
| 5 | 5.734 | $d_{15} - d_5 = 9.445 - 5.734 = 3.711$ | 3.7105 |
| 11 | 7.960 | | |
| 15 | 9.445 | | |

$\Delta d$ for 10 peaks $= 3.7105\text{ mm} \implies \lambda/2 = 0.37105\text{ mm} \implies \lambda = 0.7421\text{ mm} = 7.421 \times 10^{-4}\text{ m}$.

---

## 11. Calculations
- $v = f \lambda = (2.0 \times 10^6\text{ Hz}) \times (7.421 \times 10^{-4}\text{ m}) = 1484.2\text{ m/s}$.
- Standard velocity of sound in water at $25^\circ\text{C} = 1497\text{ m/s}$ (Error $= 0.85\%$).
- $\beta = \frac{1}{\rho v^2} = \frac{1}{1000 \times (1484.2)^2} = 4.54 \times 10^{-10}\text{ Pa}^{-1}$.

---

## 12. Graphs
Plot Micrometer Reading $d_N$ (mm) vs Peak Number $N$. Slope $= \lambda / 2$.

---

## 13. Sources of Error
- Temperature fluctuations in liquid cell changing sound velocity during measurement.
- Air bubbles trapped on quartz crystal surface scattering acoustic energy.

---

## 14. Precautions
- Do not run high-frequency generator without liquid in cell (damages quartz crystal).
- Turn micrometer screw gently in one direction to avoid mechanical thread backlash.

---

## 15. Viva Questions with Answers
1. **Q: What are Ultrasonic waves?**
   *A: Sound waves with frequencies higher than human upper audible limit ($>20\text{ kHz}$).*
2. **Q: Principle used to generate ultrasonics in this lab?**
   *A: Piezoelectric Effect (mechanical deformation of quartz crystal under AC voltage).*
3. **Q: Why cannot electromagnetic waves be used here?**
   *A: Ultrasonic waves are mechanical longitudinal pressure waves, requiring a physical liquid medium.*
4. **Q: What happens to ultrasonic velocity if temperature of water increases?**
   *A: Increases (unlike gases where sound speed decreases with density, water's bulk modulus elasticity increases with temp up to $74^\circ\text{C}$).*
5. **Q: Define Adiabatic Bulk Compressibility.**
   *A: Fractional change in volume per unit pressure change under adiabatic conditions ($\beta = -\frac{1}{V}\frac{dV}{dP}$).*

---

## 16. Numerical Problems
1. *Problem*: An ultrasonic interferometer operating at $3\text{ MHz}$ recorded a micrometer shift of $3.75\text{ mm}$ for $15$ current maxima in an unknown liquid ($\rho = 800\text{ kg/m}^3$). Calculate wave velocity and bulk compressibility.
   *Solution*: $\lambda / 2 = 3.75 / 15 = 0.25\text{ mm} \implies \lambda = 0.50\text{ mm} = 5 \times 10^{-4}\text{ m}$. $v = 3 \times 10^6 \times 5 \times 10^{-4} = 1500\text{ m/s}$. $\beta = 1 / (800 \times 1500^2) = 5.55 \times 10^{-10}\text{ Pa}^{-1}$.

---

## 17. Previous University Questions
- Explain working principle of Ultrasonic Interferometer and derive formula for velocity of ultrasonic waves in liquid. (8 Marks)
- What is Piezoelectric Effect? Draw circuit diagram of Piezoelectric Oscillator. (6 Marks)

---

## 18. Practical Applications
- Medical Diagnostic Ultrasound imaging (SONOGRAM) and Echocardiography.
- Industrial Nondestructive Testing (NDT) for internal crack detection in metal forgings.
- SONAR navigation and underwater bathymetry mapping.

---

## 19. Common Mistakes
- Miscounting peak numbers on microammeter during rapid micrometer movement.
- Forgetting to factor in $\times 10^6$ for crystal generator frequency ($\text{MHz}$).

---

## 20. One-page Revision Notes
- Piezoelectric effect generates ultrasonics ($f > 20\text{ kHz}$).
- $\lambda = 2 d / N$; $v = f \lambda$.
- $\beta = 1 / (\rho v^2)$.

---

# Best YouTube Videos & Playlists
1. **Title**: Ultrasonic Waves / Acoustics Playlist
   - **Channel**: NPTEL
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@nptelhrd/search?query=ultrasonic%20waves)
   - **What I will learn**: NPTEL lectures covering acoustics and ultrasonic waves.
2. **Title**: Ultrasonic Waves (Engineering Physics)
   - **Channel**: Neso Academy
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@nesoacademy/search?query=ultrasonic%20waves)
   - **What I will learn**: Fundamentals of ultrasonic waves and engineering applications.
3. **Title**: Ultrasonic Interferometer Experiment
   - **Channel**: Easy Engineering Classes
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@EasyEngineeringClasses/search?query=ultrasonic%20interferometer)
   - **What I will learn**: Step-by-step experiment video for ultrasonic interferometer.

---


# Best Animations
- **Acoustic Standing Wave & Node Formation Animation**: [Watch Standing Wave Animation](https://www.youtube.com/watch?v=zJg6X5S-Y-I)

---

# Best Simulations
- **Amrita Virtual Lab - Ultrasonic Interferometer**: http://vlab.amrita.edu/?sub=1&brch=282&sim=1510&cnt=1

---

# Free Notes
- **Engineering Physics Ultrasonics Handout**: https://nptel.ac.in/courses/115101005

---

# Practice
- Full problem set included in final compilation.

---

# Recommended Coding Challenges
*No coding challenges necessary.*

---

# MODULE 8: MODERN PHYSICS EXPERIMENTS

## 1. Introduction
Modern Physics established the wave-particle duality of light and quantum energy discretization. This module focuses on the **Photoelectric Effect** and determination of **Planck's Constant ($h$)** using Light Emitting Diodes (LEDs) of different wavelengths or photoemissive vacuum tubes with monochromatic spectral filters.

---

## 2. Learning Objectives
- Understand photon energy quantization ($E = h\nu$), work function ($\Phi$), and stopping potential ($V_0$).
- Measure knee turn-on voltages ($V_\gamma$) of multicolor LEDs (Red, Yellow, Green, Blue).
- Calculate Planck's Constant ($h$) experimental value and work function ($\Phi$).
- Verify Einstein's Photoelectric Equation ($e V_0 = h \nu - \Phi$).

---

## 3. Prerequisites
- Photons, frequency ($\nu = c / \lambda$), electron-volts ($1\text{ eV} = 1.602 \times 10^{-19}\text{ J}$).
- Semiconductor P-N junction forward bias turn-on voltage theory.

---

## 4. Complete Theory
When a light emitting diode is forward biased, electrons cross the junction and recombine with holes, emitting photons of energy corresponding to the semiconductor band gap:
$$E = h \nu = \frac{h c}{\lambda}$$
The minimum forward voltage required to initiate photon emission (knee voltage $V_0$) converts electrical potential energy $e V_0$ into optical photon energy:
$$e V_0 \approx h \nu = \frac{h c}{\lambda} \implies V_0 = \left(\frac{h c}{e}\right) \frac{1}{\lambda}$$
Plotting knee voltage $V_0$ vs inverse wavelength $1/\lambda$ yields a straight line whose slope $m = \frac{h c}{e}$.
Thus:
$$h = \frac{e}{c} \times \text{Slope}$$

---

## 5. Important Formulae
1. **Planck's Energy Quantization**:
   $$E = h \nu = \frac{h c}{\lambda}$$
2. **Knee Voltage / Planck Relation**:
   $$V_0 = \left(\frac{h c}{e}\right) \left(\frac{1}{\lambda}\right)$$
3. **Planck's Constant ($h$)**:
   $$h = \frac{e}{c} \times \text{Slope of } V_0 \text{ vs } (1/\lambda) \quad [\text{J}\cdot\text{s}]$$
4. **Percentage Error**:
   $$\text{Error} = \left|\frac{h_{\text{exp}} - 6.626 \times 10^{-34}}{6.626 \times 10^{-34}}\right| \times 100\%$$

---

## 6. Derivation: Determination of $h$ via LED Method
Energy of emitted photon in LED transition across band gap:
$$E_{\text{photon}} = h \nu = \frac{h c}{\lambda}$$
At the onset of conduction (knee voltage $V_0$), electron energy supplied by bias source equals photon energy:
$$e V_0 = h \nu = \frac{h c}{\lambda} \implies V_0 = \left(\frac{h c}{e}\right) \frac{1}{\lambda}$$
This fits the linear form $y = m x + c_0$, where $y = V_0$, $x = \frac{1}{\lambda}$, and slope $m = \frac{h c}{e}$.
Solving for $h$:
$$m = \frac{h c}{e} \implies h = \frac{e \cdot m}{c}$$

---

## 7. Laboratory Apparatus
- Planck's Constant Experimental Kit (variable regulated DC power supply $0-5\text{ V}$, digital voltmeter $0-20\text{ V}$, digital microammeter $0-2000\,\mu\text{A}$).
- Set of Calibrated Precision LEDs:
  - Red ($\lambda = 650\text{ nm}$)
  - Yellow ($\lambda = 590\text{ nm}$)
  - Green ($\lambda = 525\text{ nm}$)
  - Blue ($\lambda = 470\text{ nm}$)
- Current limiting resistors and selector switches.

---

## 8. Experimental Setup
1. Connect target LED (e.g., Red LED) into the test socket of the Planck kit.
2. Connect voltmeter across LED terminals and microammeter in series.
3. Ensure power supply control knob is set to minimum ($0\text{ V}$).

---

## 9. Step-by-Step Procedure
1. Select Red LED ($\lambda = 650\text{ nm}$).
2. Increase forward DC voltage in steps of $0.1\text{ V}$ from $0\text{ V}$ upward.
3. Record forward current $I\,(\mu\text{A})$ corresponding to each voltage step.
4. Plot $I-V$ curve for the Red LED. Extrapolate straight-line conduction region down to zero current axis to find precise knee voltage $V_0$.
5. Repeat steps 1–4 for Yellow ($590\text{ nm}$), Green ($525\text{ nm}$), and Blue ($470\text{ nm}$) LEDs.
6. Calculate inverse wavelength $1/\lambda\,(\text{m}^{-1})$ for each LED.
7. Plot $V_0$ (y-axis) vs $1/\lambda$ (x-axis). Find slope $m$.
8. Compute $h = \frac{e}{c} \cdot m$.

---

## 10. Observations
- $e = 1.602 \times 10^{-19}\text{ C}$, $c = 3 \times 10^8\text{ m/s}$.

| LED Color | Peak Wavelength $\lambda$ (nm) | $1/\lambda$ ($\times 10^6\text{ m}^{-1}$) | Extrapolated Knee Voltage $V_0$ (V) |
|---|---|---|---|
| Red | 650 | 1.538 | 1.65 |
| Yellow | 590 | 1.695 | 1.92 |
| Green | 525 | 1.905 | 2.25 |
| Blue | 470 | 2.128 | 2.58 |

---

## 11. Calculations
- Slope $m = \frac{\Delta V_0}{\Delta(1/\lambda)} = \frac{2.58 - 1.65}{(2.128 - 1.538) \times 10^6} = 1.576 \times 10^{-6}\text{ V}\cdot\text{m}$.
- $h = \frac{e}{c} \times m = \frac{1.602 \times 10^{-19}}{3.0 \times 10^8} \times (1.576 \times 10^{-6}) = 6.74 \times 10^{-34}\text{ J}\cdot\text{s}$.
- Standard $h = 6.626 \times 10^{-34}\text{ J}\cdot\text{s}$. Error $= 1.72\%$.

---

## 12. Graphs
1. Plot $I$ vs $V$ for all 4 LEDs to determine turn-on voltage intercepts ($V_0$).
2. Plot Knee Voltage $V_0$ vs $1/\lambda$. Straight line with positive slope $= h c / e$.

---

## 13. Sources of Error
- Spectral linewidth dispersion of LEDs.
- Subjective extrapolation of non-linear $I-V$ knee region.

---

## 14. Precautions
- Do not exceed maximum rated LED forward current ($>20\text{ mA}$) to avoid thermal damage.
- Use precise knee extrapolation on graph paper for accurate $V_0$ determination.

---

## 15. Viva Questions with Answers
1. **Q: What is Planck's Constant?**
   *A: A fundamental physical constant ($h \approx 6.626 \times 10^{-34}\text{ J}\cdot\text{s}$) relating photon energy to frequency ($E = h\nu$).*
2. **Q: Why does Blue LED require higher turn-on voltage than Red LED?**
   *A: Blue light has shorter wavelength $\to$ higher frequency $\to$ higher photon energy ($E=h\nu$), requiring larger voltage to overcome band gap.*
3. **Q: What is stopping potential in photoelectric effect?**
   *A: The minimum negative collector potential required to stop the fastest emitted photoelectron ($K_{\text{max}} = e V_0$).*
4. **Q: Does stopping potential depend on light intensity?**
   *A: No, it depends solely on light frequency $\nu$ and cathode work function $\Phi$.*
5. **Q: Work function unit?**
   *A: Electron-volt ($\text{eV}$).*

---

## 16. Numerical Problems
1. *Problem*: A photo-cathode has work function $\Phi = 2.1\text{ eV}$. Light of wavelength $\lambda = 400\text{ nm}$ strikes it. Calculate stopping potential $V_0$.
   *Solution*: $E = 1240 / 400 = 3.1\text{ eV}$. $e V_0 = 3.1 - 2.1 = 1.0\text{ eV} \implies V_0 = 1.0\text{ V}$.

---

## 17. Previous University Questions
- Describe the LED method for determining Planck's constant. Derive necessary relation. (8 Marks)
- State Einstein's photoelectric equation and explain stopping potential vs frequency graph. (6 Marks)

---

## 18. Practical Applications
- Photodetector and solar photovoltaic cell optimization.
- Night-vision image intensifiers and photomultiplier tubes.

---

## 19. Common Mistakes
- Confusing peak emission wavelength $\lambda$ with linewidth.
- Forgetting to multiply slope by $e/c$ when computing $h$.

---

## 20. One-page Revision Notes
- $e V_0 = h \nu = h c / \lambda$.
- Slope of $V_0$ vs $1/\lambda$ equals $h c / e$.
- $h = (e/c) \times \text{Slope} \approx 6.626 \times 10^{-34}\text{ J}\cdot\text{s}$.

---

# Best YouTube Videos & Playlists
1. **Title**: Modern Physics Playlist
   - **Channel**: NPTEL
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@nptelhrd/search?query=modern%20physics)
   - **What I will learn**: University lectures on quantum theory and modern physics.
2. **Title**: Quantum Physics / Modern Physics Playlist
   - **Channel**: Neso Academy
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@nesoacademy/search?query=modern%20physics)
   - **What I will learn**: Conceptual foundation of quantum mechanics and modern physics.
3. **Title**: Modern Physics Playlist
   - **Channel**: Physics Galaxy
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@PhysicsGalaxy/search?query=modern%20physics)
   - **What I will learn**: In-depth lectures on modern physics topics.

---


# Best Animations
- **Photoelectric Effect & Electron Ejection Animation**: [Watch Photoelectric Animation](https://www.youtube.com/results?search_query=Photoelectric+Effect+Animation+Physics)

---

# Best Simulations
- **PhET Photoelectric Effect Simulation**: https://phet.colorado.edu/en/simulations/photoelectric
- **Amrita Virtual Lab - Planck's Constant**: http://vlab.amrita.edu/?sub=1&brch=195&sim=547&cnt=1

---

# Free Notes
- **Modern Physics NPTEL Lecture Handout**: https://nptel.ac.in/courses/115101007

---

# Practice
- Included in final review sheet.

---

# Recommended Coding Challenges
- **Random Pick with Weight**: https://leetcode.com/problems/random-pick-with-weight/
- **Generate Random Point in a Circle**: https://leetcode.com/problems/generate-random-point-in-a-circle/

---

# MODULE 9: EXPERIMENTAL DATA ANALYSIS

## 1. Introduction
No physical measurement is completely exact. Data analysis enables experimentalists to quantify uncertainty, eliminate systematic bias, compute line-of-best-fit parameters using **Linear Least Squares Regression**, and present scientific results with correct **Significant Figures** and error bars.

---

## 2. Learning Objectives
- Classify errors into Systematic, Random, and Gross errors.
- Calculate Mean, Standard Deviation ($\sigma$), and Standard Error of Mean ($\sigma_m$).
- Perform Error Propagation for addition, subtraction, multiplication, and power laws.
- Master Method of Least Squares for linear fitting ($y = m x + c$).
- Plot standard scientific graphs following formal lab conventions.

---

## 3. Prerequisites
- Basic statistics (summations $\sum x_i$, arithmetic mean $\bar{x}$).
- Differential calculus for error propagation ($\delta f = \left|\frac{\partial f}{\partial x}\right| \delta x + \dots$).

---

## 4. Complete Theory
### A. Classification of Errors
1. **Systematic Errors**: Biases that shift measurements consistently in one direction (instrument zero error, calibration drift). Can be eliminated by calibration.
2. **Random Errors**: Fluctuations caused by unpredictable environmental noise. Reduced by taking multiple trials ($N$) and computing arithmetic mean.

### B. Statistical Measures
- **Mean**: $\bar{x} = \frac{1}{N} \sum_{i=1}^N x_i$
- **Standard Deviation**: $\sigma = \sqrt{\frac{\sum (x_i - \bar{x})^2}{N - 1}}$
- **Standard Error of Mean**: $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{N}}$

### C. Method of Least Squares
For data points $(x_i, y_i)$, fit the linear model $y = m x + c$ by minimizing the sum of squared residuals $S = \sum (y_i - (m x_i + c))^2$.
$$m = \frac{N \sum(x_i y_i) - (\sum x_i)(\sum y_i)}{N \sum(x_i^2) - (\sum x_i)^2}$$
$$c = \frac{(\sum y_i)(\sum x_i^2) - (\sum x_i)(\sum x_i y_i)}{N \sum(x_i^2) - (\sum x_i)^2} = \bar{y} - m \bar{x}$$

---

## 5. Important Formulae
1. **Absolute Error**: $\Delta x_i = |x_i - \bar{x}|$
2. **Relative / Fractional Error**: $\frac{\Delta x}{\bar{x}}$
3. **Percentage Error**: $\frac{\Delta x}{\bar{x}} \times 100\%$
4. **Error Propagation Rules**:
   - Addition/Subtraction ($Z = A \pm B$): $\Delta Z = \sqrt{(\Delta A)^2 + (\Delta B)^2}$.
   - Multiplication/Division ($Z = A \cdot B$ or $A/B$): $\frac{\Delta Z}{Z} = \sqrt{\left(\frac{\Delta A}{A}\right)^2 + \left(\frac{\Delta B}{B}\right)^2}$.
   - Power Law ($Z = A^n B^m$): $\frac{\Delta Z}{Z} = |n| \frac{\Delta A}{A} + |m| \frac{\Delta B}{B}$.

---

## 6. Derivations
### Derivation of Least Squares Normal Equations
Minimize residual sum of squares: $S(m,c) = \sum_{i=1}^N (y_i - m x_i - c)^2$.
Set partial derivatives to zero:
1. $\frac{\partial S}{\partial c} = -2 \sum (y_i - m x_i - c) = 0 \implies \sum y_i = m \sum x_i + N c$
2. $\frac{\partial S}{\partial m} = -2 \sum x_i (y_i - m x_i - c) = 0 \implies \sum x_i y_i = m \sum x_i^2 + c \sum x_i$

Solving simultaneously for $m$:
$$m = \frac{N \sum(x_i y_i) - (\sum x_i)(\sum y_i)}{N \sum(x_i^2) - (\sum x_i)^2}$$

---

## 7. Laboratory Apparatus
- Scientific Calculator / Python NumPy / SciPy environment.
- Millimeter graph paper, ruler, sharp pencil.

---

## 8. Experimental Setup / Workflow
1. Tabulate raw data with appropriate units and instrument least count uncertainties.
2. Construct columns for $x_i^2$, $y_i^2$, and $x_i y_i$.
3. Sum each column ($\sum x_i, \sum y_i, \sum x_i^2, \sum x_i y_i$).

---

## 9. Step-by-Step Procedure
1. Inspect raw experimental data for obvious outlier points.
2. Compute column sums for $N$ data points.
3. Calculate slope $m$ and y-intercept $c$ using Least Squares formulas.
4. Draw axes on graph paper. Choose scale so curve occupies $>70\%$ of grid area.
5. Plot data points with error bars ($\pm \Delta x, \pm \Delta y$).
6. Overlay calculated regression line passing through centroid $(\bar{x}, \bar{y})$.
7. Report final parameter values with uncertainties (e.g., $m \pm \sigma_m$).

---

## 10. Observations & Calculation Table
Example: Fitting force $F = k x$ to measure spring constant $k$.

| Point $i$ | $x_i$ (cm) | $F_i$ (N) | $x_i^2$ ($\text{cm}^2$) | $x_i F_i$ ($\text{N}\cdot\text{cm}$) |
|---|---|---|---|---|
| 1 | 1.0 | 0.20 | 1.00 | 0.20 |
| 2 | 2.0 | 0.41 | 4.00 | 0.82 |
| 3 | 3.0 | 0.59 | 9.00 | 1.77 |
| 4 | 4.0 | 0.82 | 16.00 | 3.28 |
| 5 | 5.0 | 1.01 | 25.00 | 5.05 |
| **Sum $\sum$** | **15.0** | **3.03** | **55.00** | **11.12** |

---

## 11. Calculations
- $N = 5$.
- $m = \frac{5(11.12) - (15.0)(3.03)}{5(55.0) - (15.0)^2} = 0.203\text{ N/cm}$.
- Intercept $c = \bar{y} - m \bar{x} = 0.606 - (0.203)(3.0) = -0.003\text{ N}$.
- Resulting Spring Constant $k = 0.203\text{ N/cm} = 20.3\text{ N/m}$.

---

## 12. Graphs
Graph layout guidelines:
- Title centered at top.
- Labeled axes with quantity name and units: e.g., "Extension $x$ (cm)".
- Data points depicted with neat dots enclosed in small circles $\odot$.

---

## 13. Sources of Error
- Poor choice of graph scale causing compression of data points into a tiny corner.
- Rounding off intermediate summation terms prematurely.

---

## 14. Precautions
- Always include units in slope calculations.
- Always check that the regression line passes through centroid point $(\bar{x}, \bar{y})$.

---

## 15. Viva Questions with Answers
1. **Q: Difference between precision and accuracy?**
   *A: Accuracy is closeness of measured value to true value; Precision is repeatability/agreement among multiple measurements.*
2. **Q: Why do we minimize squared residuals in least squares?**
   *A: Squaring prevents positive and negative residuals from canceling each other out and penalizes larger outliers more heavily.*
3. **Q: What is standard error of the mean?**
   *A: $\sigma_{\bar{x}} = \sigma / \sqrt{N}$, quantifying how close sample mean is to true population mean.*
4. **Q: How does fractional error propagate in $Z = A^3$?**
   *A: $\frac{\Delta Z}{Z} = 3 \frac{\Delta A}{A}$.*
5. **Q: What is an outlier?**
   *A: A data point that differs significantly from other observations, often due to an experimental gross error.*

---

## 16. Numerical Problems
1. *Problem*: Density $\rho = \frac{M}{\pi r^2 L}$. Mass $M$ has $1\%$ error, radius $r$ has $2\%$ error, length $L$ has $1.5\%$ error. Calculate total percentage error in $\rho$.
   *Solution*: $\frac{\Delta \rho}{\rho} = \frac{\Delta M}{M} + 2 \frac{\Delta r}{r} + \frac{\Delta L}{L} = 1\% + 2(2\%) + 1.5\% = 6.5\%$.

---

## 17. Previous University Questions
- State the normal equations for linear least square fitting $y = mx + c$ and derive expressions for $m$ and $c$. (8 Marks)
- Explain rules for error propagation in multiplication and power laws with examples. (6 Marks)

---

## 18. Practical Applications
- Sensor calibration curves in industrial instrumentation.
- Statistical quality control in automated manufacturing.

---

## 19. Common Mistakes
- Drawing line-of-best-fit by connecting first and last points instead of minimizing overall distance to all points.
- Miscalculating percentage error by omitting exponent multipliers.

---

## 20. One-page Revision Notes
- $m = \frac{N \sum xy - \sum x \sum y}{N \sum x^2 - (\sum x)^2}$.
- $Z = A^a B^b \implies \frac{\Delta Z}{Z} = a \frac{\Delta A}{A} + b \frac{\Delta B}{B}$.
- Graph line must pass through centroid $(\bar{x}, \bar{y})$.

---

# Best YouTube Videos & Playlists
1. **Title**: Experimental Physics / Error Analysis
   - **Channel**: NPTEL
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@nptelhrd/search?query=error%20analysis%20physics)
   - **What I will learn**: Concepts of experimental errors, statistical analysis, and fitting.
2. **Title**: Measurement, Errors and Graph Analysis
   - **Channel**: Khan Academy
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@khanacademy/search?query=measurement%20error%20analysis)
   - **What I will learn**: Tutorial lectures on measurements, graphing, and uncertainties.
3. **Title**: Experimental Methods / Physics Lab
   - **Channel**: MIT OpenCourseWare
   - **Direct YouTube Search/Playlist Link**: [Watch on YouTube](https://www.youtube.com/@mitocw/search?query=physics%20lab)
   - **What I will learn**: Lab experiments and methods from MIT OpenCourseWare.

---


# Best Animations
- **Least Squares Fitting & Residual Minimization Visualizer**: [Watch Least Squares Animation](https://www.youtube.com/results?search_query=Least+Squares+Method+3D+Animation)

---

# Best Simulations
- **PhET Curve Fitting Simulation**: https://phet.colorado.edu/en/simulations/curve-fitting
- **Amrita Virtual Lab - Error Analysis**: http://vlab.amrita.edu/?sub=1&brch=280

---

# Free Notes
- **IIT Delhi Error Analysis & Data Processing Manual PDF**: https://www.iitd.ac.in/physics-error-analysis

---

# Practice
- Full summary synthesis provided below.

---

# Recommended Coding Challenges
- **Mean of Array After Removing Some Elements**: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
- **Average Salary Excluding the Minimum and Maximum Salary**: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
- **Running Sum of 1d Array**: https://leetcode.com/problems/running-sum-of-1d-array/
- **Find Pivot Index**: https://leetcode.com/problems/find-pivot-index/
- **Maximum Average Subarray I**: https://leetcode.com/problems/maximum-average-subarray-i/
- **Third Maximum Number**: https://leetcode.com/problems/third-maximum-number/
- **Contains Duplicate**: https://leetcode.com/problems/contains-duplicate/
- **Majority Element**: https://leetcode.com/problems/majority-element/

---

# MASTER REVISION & EXAM PREPARATION GUIDE

## 1. Complete Formula Sheet
| Module | Experiment | Primary Master Formula | Parameters |
|---|---|---|---|
| 1 | Vernier Caliper | $\text{LC} = \frac{1\text{ MSD}}{N}$ | $\text{MSD} = 1\text{ mm}$, $N = 10\text{ or }50$ |
| 1 | Screw Gauge | $\text{LC} = \frac{\text{Pitch}}{\text{Total CSD}}$ | $\text{Pitch} = 0.5\text{ or }1.0\text{ mm}$ |
| 2 | Laser Wavelength | $\lambda = \frac{\sin \theta_m}{m N}$ | $N = \text{grating lines/m}$, $\theta_m = \tan^{-1}(y_m/D)$ |
| 3 | Newton's Rings | $\lambda = \frac{D_{n+p}^2 - D_n^2}{4 p R}$ | $D_n = \text{ring diameter}$, $R = \text{lens radius}$ |
| 4 | Fiber Optics NA | $NA = \sin \theta_a = \sqrt{n_1^2 - n_2^2} = \frac{W}{\sqrt{W^2 + 4D^2}}$ | $W = \text{spot diameter}$, $D = \text{distance}$ |
| 5 | Energy Band Gap | $E_g = \frac{- \text{Slope}}{5036}\text{ eV}$ | $\text{Slope from } \log_{10} I_0 \text{ vs } 10^3/T$ |
| 5 | Hall Effect | $R_H = \frac{V_H w}{I_x B_z}$, $n = \frac{1}{\|R_H\| e}$ | $V_H = \text{Hall voltage}$, $w = \text{probe thickness}$ |
| 6 | B-H Curve | $W_h = \text{Area} \times S_x \times S_y$ | $W_h = \text{energy loss/m}^3/\text{cycle}$ |
| 7 | Ultrasonic Velocity | $v = f \cdot \left(\frac{2 \Delta d}{N}\right)$, $\beta = \frac{1}{\rho v^2}$ | $f = \text{frequency}$, $\rho = \text{liquid density}$ |
| 8 | Planck's Constant | $h = \frac{e}{c} \times \text{Slope}$ | $\text{Slope from } V_0 \text{ vs } 1/\lambda$ |
| 9 | Least Squares Fit | $m = \frac{N \sum xy - \sum x \sum y}{N \sum x^2 - (\sum x)^2}$ | $y = m x + c$ |

---

## 2. Comprehensive Mind Map
```
                       APPLIED PHYSICS LAB SYLLABUS
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
OPTICS & LASERS           SEMICONDUCTOR & MAGNETIC          ACOUSTICS & MEASUREMENT
    │                               │                               │
    ├─ Laser Wavelength             ├─ Band Gap (PN Diode)          ├─ Vernier & Screw Gauge
    ├─ Newton's Rings               ├─ Hall Effect (p/n, RH)        ├─ Ultrasonics (v, Bulk Beta)
    └─ Fiber Optics (NA, TIR)       └─ B-H Curve (Br, Hc Loss)      ├─ Planck's Constant (LEDs)
                                                                    └─ Least Squares Fitting
```

---

## 3. Laboratory Cheat Sheet
- **Stokes' Phase Shift Rule**: Light reflecting off an optically denser interface undergoes a $\pi$ ($180^\circ$) phase change (equivalent to $\lambda/2$ path difference).
- **Dark Central Spot in Newton's Rings**: Occurs because at contact point $t=0$, path difference $\Delta = 0 + \lambda/2 = \lambda/2 \to$ destructive interference.
- **TIR Condition**: $n_1 > n_2$ and angle of incidence $\theta > \theta_c = \sin^{-1}(n_2/n_1)$.
- **Negative Sign of Hall Coefficient**: Indicates $N$-type semiconductor (electrons dominate conduction).
- **B-H Integrator Requirement**: $R_2 C \gg T_{\text{period}}$ so that capacitor voltage $V_C \propto \int e_s \, dt \propto B$.
- **Graphing Centroid Rule**: The line of best fit in linear least squares MUST pass through the centroid $(\bar{x}, \bar{y})$.

---

## 4. One-Day Revision Notes
1. **Vernier Caliper**: $\text{LC} = 1\text{ MSD} / N$. Corrected $=$ Observed $-$ (Zero Error).
2. **Laser**: $(e+d)\sin\theta = m\lambda$. Spot divergence $\theta = (d_2-d_1)/(D_2-D_1)$.
3. **Newton's Rings**: $\lambda = (D_{n+p}^2 - D_n^2) / (4pR)$. Air film thickness $t = r^2 / 2R$.
4. **Fiber Optics**: $NA = \sin\theta_a = \sqrt{n_1^2 - n_2^2} = W / \sqrt{W^2 + 4D^2}$.
5. **Band Gap**: Plot $\log_{10} I_0$ vs $1/T$. Slope $= -E_g / (2.303 k_B)$. Ge $E_g \approx 0.67\text{ eV}$.
6. **Hall Effect**: $V_H = R_H I B / w$. $R_H = 1 / (n e)$. P-type ($R_H > 0$), N-type ($R_H < 0$).
7. **B-H Curve**: $H \propto V_x$, $B \propto V_y$. Loop area $=$ Hysteresis loss density $[\text{J/m}^3/\text{cycle}]$.
8. **Ultrasonic**: $v = f \lambda = f (2 d / N)$. Compressibility $\beta = 1 / (\rho v^2)$.
9. **Planck's Constant**: $e V_0 = h \nu = h c / \lambda$. Slope of $V_0$ vs $1/\lambda \implies h = (e/c) \times \text{Slope} = 6.626 \times 10^{-34}\text{ J s}$.
10. **Error Fitting**: $m = \frac{N \sum xy - \sum x \sum y}{N \sum x^2 - (\sum x)^2}$. Relative error in $A^a B^b \implies a \frac{\Delta A}{A} + b \frac{\Delta B}{B}$.

---

## 5. Most Expected Viva Questions (Top 15 Master List)
1. **Q: Why is laser light monochromatic and coherent?**
   *A: Stimulated emission forces all emitted photons to be in phase, with identical frequency and direction.*
2. **Q: Why are Newton's rings closer together as ring order $n$ increases?**
   *A: Since $D_n \propto \sqrt{n}$, the rate of increase of diameter slows down as $n$ grows, crowding outer fringes.*
3. **Q: What physical quantity does Numerical Aperture represent?**
   *A: The light-gathering power of an optical fiber.*
4. **Q: Why is reverse saturation current $I_0$ temperature-dependent in a P-N diode?**
   *A: Thermal energy breaks covalent bonds, generating electron-hole minority pairs across the band gap $E_g$.*
5. **Q: How do you determine whether a semiconductor sample is N-type or P-type using Hall effect?**
   *A: By checking the polarity of the Hall Voltage $V_H$. Positive $V_H \to$ P-type; Negative $V_H \to$ N-type.*
6. **Q: What is the role of the RC circuit in the B-H curve CRO experiment?**
   *A: It acts as an integrator to convert secondary induced voltage $e_s \propto dB/dt$ into a voltage proportional to magnetic flux density $B$.*
7. **Q: What is the difference between soft and hard magnetic materials?**
   *A: Soft materials have low coercivity and small loop area (low hysteresis loss); hard materials have high coercivity and large loop area.*
8. **Q: What generates ultrasonic waves in an interferometer?**
   *A: The inverse piezoelectric effect in a quartz crystal excited by a high-frequency RF generator.*
9. **Q: Why does sound velocity increase with temperature in water?**
   *A: Water's bulk modulus increases with temperature up to $\sim 74^\circ\text{C}$, overcoming density expansion effects.*
10. **Q: What is the physical significance of Planck's constant?**
    *A: It is the fundamental quantum of action relating photon energy to electromagnetic frequency ($E = h\nu$).*
11. **Q: What is backlash error and how do you eliminate it?**
    *A: Lag in movement caused by thread wear when reversing screw rotation. Eliminated by turning screw in ONE direction only.*
12. **Q: What is the least count of a standard Vernier caliper?**
    *A: $\text{LC} = 1\text{ MSD} - 1\text{ VSD} = 0.1\text{ mm} = 0.01\text{ cm}$.*
13. **Q: What is zero error?**
    *A: Reading shown by an instrument when the measuring jaws/spindles are touching with no specimen present.*
14. **Q: What is a diffraction grating?**
    *A: An optical element consisting of a large number of equidistant parallel narrow slits.*
15. **Q: How does error propagate in a power relation $Z = X^n$?**
    *A: Fractional error multiplies by exponent: $\frac{\Delta Z}{Z} = n \frac{\Delta X}{X}$.*

---

## 6. Most Important Practical Exam Questions
1. **Experiment 1**: Determine the wavelength of He-Ne laser light using a plane diffraction grating.
2. **Experiment 2**: Determine the radius of curvature of a plano-convex lens by Newton's rings method using sodium light.
3. **Experiment 3**: Calculate the Numerical Aperture and acceptance angle of a given step-index optical fiber.
4. **Experiment 4**: Determine the energy band gap of a Germanium P-N junction diode.
5. **Experiment 5**: Measure the Hall coefficient, carrier type, and concentration of a given semiconductor probe.
6. **Experiment 6**: Trace the B-H hysteresis curve of a transformer core on CRO and compute hysteresis loss per cycle.
7. **Experiment 7**: Determine the velocity of ultrasonic waves in water using an ultrasonic interferometer and calculate bulk compressibility.
8. **Experiment 8**: Calculate Planck's constant ($h$) using light-emitting diodes (LEDs) of different wavelengths.

---

## 7. University Exam Strategy & Marking Scheme
- **Total Marks**: 50 Marks (Practical Lab Exam)
  - **Circuit / Setup Alignment**: 10 Marks
  - **Theory & Formula Derivation**: 10 Marks
  - **Observations & Tabulation**: 15 Marks
  - **Calculations & Graph**: 10 Marks
  - **Viva-Voce**: 5 Marks

---

## 8. Best Free Websites for Practice & Virtual Labs
1. **Amrita Virtual Labs (Physical Sciences)**: http://vlab.amrita.edu
2. **PhET Interactive Simulations (University of Colorado Boulder)**: https://phet.colorado.edu
3. **NPTEL Online Courses & Lab Manuals (IITs)**: https://nptel.ac.in
4. **NCERT Physics Practical Manuals**: https://ncert.nic.in/laboratory-manuals.php
5. **MIT OpenCourseWare Physics Labs**: https://ocw.mit.edu
