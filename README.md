# 🔬 Virtual Labs - ANDC

An interactive, web-based simulation platform designed to facilitate virtual laboratory experiments across Physical Sciences and Life Sciences. This project enables students and educators to visualize, simulate, and experiment with complex mathematical algorithms and scientific processes directly in the browser.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Simulations & Modules](#-simulations--modules)
  - [Mathematical Physics & Physical Sciences](#1-mathematical-physics--physical-sciences)
  - [Life Sciences / Zoology](#2-life-sciences--zoology)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 Overview

The **Virtual Labs ANDC** platform bridges the gap between theoretical knowledge and practical experimentation. By providing dynamic simulations and interactive graphical models, users can manipulate parameters, observe real-time behaviors, and gain intuitive understanding of both computational algorithms and biological procedures without requiring specialized laboratory hardware.

---

## ✨ Key Features

- **Interactive Simulations:** Real-time parameter tweaking and visual feedback.
- **Cross-Disciplinary Labs:** Integrates modules spanning computational physics, numerical methods, and biology.
- **Zero Installation Required:** Pure client-side web application running natively in any modern browser.
- **Smooth Animations:** Built using modern JavaScript and animation libraries for visual clarity.
- **Clean Educational Interface:** Step-by-step experiment walkthroughs, theory notes, and interactive workspaces.

---

## 🧪 Simulations & Modules

### 1. Mathematical Physics & Physical Sciences
- **Monte Carlo Simulation (`monte-sim.html`):**
  - Probabilistic modeling and estimation of mathematical constants (such as $\pi$) using random sampling.
- **Bisection Method (`bisection-sim.html`):**
  - Step-by-step root-finding visualization for non-linear equations with iterative bracket narrowing.
- **Newton-Raphson Method (`newton-rapson.html`):**
  - Tangent-based numerical convergence visualizer illustrating convergence rates and function roots.

### 2. Life Sciences / Zoology
- **DNA Extraction (`dna-extract.html`):**
  - Interactive virtual protocol simulating the step-by-step biochemical process of cell lysis, precipitation, and isolation of DNA.

---

## 🛠 Tech Stack

- **Markup & Layout:** HTML5, Semantic UI Elements
- **Styling:** CSS3, Responsive Grid & Flexbox
- **Logic & Numerical Computation:** JavaScript (Vanilla ES6+)
- **Animation & Visuals:** Canvas API / `anime.js`

---

## 📂 Project Structure

```plaintext
Virtual_Labs_ANDC/
│
├── css/                          # Stylesheets for modules & layout
│   └── style_monte-sim.css
├── js/                           # Computational logic & simulation scripts
│   └── mnty.js
├── anime/                        # Animation library scripts
├── images/                       # UI assets and diagrams
│
├── index.html                    # Main landing page
├── physicalsciences.html         # Physical Sciences hub
├── mathematical-physics.html     # Mathematical Physics directory
├── zoology.html                  # Life Sciences / Zoology hub
├── contact.html                  # Contact and info page
│
├── monte-main.html               # Monte Carlo experiment overview
├── monte-sim.html                # Monte Carlo interactive simulator
├── bisection-main.html           # Bisection method overview
├── bisection-sim.html            # Bisection method interactive simulator
├── newton-main.html              # Newton-Raphson method overview
├── newton-rapson.html            # Newton-Raphson interactive simulator
├── dna-extract.html              # DNA extraction experiment & simulator
│
├── LICENSE                       # License file
└── README.md                     # Project documentation
