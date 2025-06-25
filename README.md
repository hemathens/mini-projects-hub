<!-- Badges: build your brand at the top -->
[![GitHub stars](https://img.shields.io/github/stars/hemathens/kaggle-projects?style=social)](https://github.com/hemathens/kaggle-projects/stargazers)
[![Kaggle Profile](https://img.shields.io/badge/Kaggle-hem%20ajit%20patel-20BEFF?logo=kaggle)](https://www.kaggle.com/hemajitpatel)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hem%20Ajit%20Patel-0A66C2?logo=linkedin)](https://www.linkedin.com/in/hem-patel19)
[![GitHub](https://img.shields.io/badge/GitHub-hemathens-181717?logo=github)](https://github.com/hemathens)

# Mini Projects Hub

A collection of small, focused web tools showcasing core JavaScript, HTML, and CSS skills—packaged together under a single, easy-to-navigate dashboard. Each mini-project lives in its own folder and can be launched right from the hub.

---

## 🚀 Live Demo

🔗 [Click Here](https://mini-projects-7q7cxnna9-hem-patels-projects.vercel.app/)
*(Deployed on Vercel — updates auto-deploy on every push to `main`)*

---

## 📋 Table of Contents

- [About](#about)  
- [Features](#features)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Mini-Projects Overview](#mini-projects-overview)  
- [Customization & Deployment](#customization--deployment)  
- [Contributing](#contributing)  
- [Contact & Links](#contact--links)  
- [License](#license)  

---

## 📖 About

**Mini Projects Hub** is a single-page dashboard that hosts six lightweight web applications, each demonstrating a particular concept or feature:

- **Stop Watch** ⏱️ — lap timer with start/stop/reset  
- **Code Compiler** 🧑‍💻 — in-browser code editor & runner  
- **Login Form Validator** 🔐 — client-side form validation  
- **Random Quotes Generator** 📅 — fetches and displays random messages  
- **CSS Changer App** 🎨 — dynamic CSS theme switcher  
- **Random Number & Probability Analyzer** 🎲 — number/dice/card generator with live stats  

This project is ideal for quick demos, teaching fundamentals, or as a template for your own micro-apps.

---

## ✨ Features

- **Unified Dashboard** with searchable dropdown navigator  
- **Persistent State**: remembers last-opened project on refresh  
- **Responsive Design**: works on desktop and mobile  
- **Dark/Light Mode** switch  
- **Interactive IFrame Loader** for seamless navigation  
- **Home Page** with personal introduction and profile links  

---

## 🛠️ Getting Started

### Prerequisites

- Git  
- Node.js & npm (optional, only if you plan to run a local server via packages)  
- Or Python 3.x for simple HTTP serving  

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/hemathens/mini-projects-hub.git
   cd mini-projects-hub

## ▶️ Usage
Open index.html in your browser (via Live Server or double-click).

Use the Select Mini Project dropdown to pick any tool.

Press Home to return to the welcome page.

Your last-opened project will reload automatically on refresh.

## 📂 Project Structure
mini-projects-hub/
│
├── index.html        # Main dashboard
├── home.html         # Landing / about page
├── style.css         # Global styles
├── script.js         # Dashboard logic
│
├── stop-watch/       # Project 1: Stop Watch
│   └── stop-watch.html
│
├── code-editor/      # Project 2: Code Compiler
│   └── code-editor.html
│
├── form-validat/     # Project 3: Login Form Validator
│   └── form-validat.html
│
├── day-of-week/      # Project 4: Random Quotes
│   └── day-of-week.html
│
├── css-changer/      # Project 5: CSS Changer App
│   └── css-changer.html
│
└── random-number-generator/  # Project 6: Probability Analyzer
    └── random-number-generator.html

## 🔍 Mini-Projects Overview
| Project                     | Description                                                 |
| --------------------------- | ----------------------------------------------------------- |
| **Stop Watch**              | Lap timer with start, stop, reset, and lap logging.         |
| **Code Compiler**           | In-browser code editor supporting HTML/CSS/JS live preview. |
| **Login Form Validator**    | Client-side validation for username/email/password.         |
| **Random Quotes Generator** | Displays a fresh random quote on each load.                 |
| **CSS Changer App**         | Live CSS theme switcher with upload & save features.        |
| **Probability Analyzer**    | Generates random numbers, dice, and cards with stats.       |

## ⚙️ Customization & Deployment

-To add a new mini-project:
-Create a new folder under root.
-Add your *.html, *.css, *.js.
-Update index.html → <a data-page="your-folder/your-file.html">…</a>.
-Deploying on Vercel:
-Push to GitHub.
-Import repo at vercel.com/new.
-Set framework to “Static”, root /, and click Deploy.

## 🤝 Contributing

Fork this repository.
Create a feature branch: git checkout -b feature/YourFeature
Commit your changes: git commit -m "Add YourFeature"
Push to branch: git push origin feature/YourFeature
Open a Pull Request—happy to review and merge!

## 📬 Contact & Links

If you have questions, ideas, or want to collaborate:

🔗 LinkedIn: https://www.linkedin.com/in/hem-patel19

🧠 Kaggle: https://www.kaggle.com/hemajitpatel

💻 GitHub: https://github.com/hemathens

## 📄 License
This project is released under the MIT License.
Feel free to use, modify, and share—no attribution required beyond a link back!
