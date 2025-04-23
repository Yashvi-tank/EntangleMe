# EntangleMe

A modern, emoji-powered React single-page app with light/dark theme toggle, built with Create-React-App and Bootstrap.

---

## 🚀 Features

- **Home** page that shows a random sci-fi quote with a “New Quote” button (✨ cosmic insight).
- **Login** page with email/password form (🔑).
- **Sign Up** page with username/email/password form (📝).
- **Protected** page example that fetches from `/api/protected` and redirects to **401 Unauthorized** if you’re not logged in.
- **401 Unauthorized** page when a fetch returns HTTP 401 (🔒).
- **404 Not Found** catch-all page for unmatched URLs (🌌 lost in space).
- **Light & Dark theme** toggle (☀️ / 🌙) backed by React Context + CSS variables.
- **Responsive Bootstrap 5** styling, sans custom build steps—just install & go.
- **Emoji flair** in headings, buttons & nav for a dynamic, playful UI.

---

## 📂 Project Structure

EntangleMe/ ├── package.json ├── public/ │ └── index.html ├── src/ │ ├── index.js │ ├── index.css │ ├── context/ │ │ └── ThemeContext.js │ ├── App.js │ ├── components/ │ │ ├── Header.js │ │ └── Footer.js │ └── pages/ │ ├── Home.jsx │ ├── Login.jsx │ ├── Signup.jsx │ ├── Protected.jsx │ ├── Unauthorized.jsx │ └── NotFound.jsx └── README.md


---

## 🛠️ Prerequisites

- [Node.js 16+](https://nodejs.org) (includes `npm`)
- Optionally, [Git](https://git-scm.com) for version control
- (For deployment) A Netlify, Vercel or other static-host account

---

## ⚙️ Installation & Local Development

1. **Clone or download** this repo:
   ```bash
   git clone https://github.com/Yashvi-tank/EntangleMe
   cd EntangleMe

Install dependencies:

bash:
npm install

Start the development server:

bash:
npm start
Opens at http://localhost:3000 by default

Supports hot-reload and live edits



Deploy:

Netlify: Connect the repo, set build command npm run build, publish dir build/.

Vercel: Import as React app; defaults work.

GitHub Pages: Use a package like gh-pages or serve build/.

🧑‍💻 Extending
Hook up real authentication & replace /api/protected stub.

Add form validation (e.g. react-hook-form).

Integrate a quotes API for dynamic content.

Add page transitions with Framer Motion.

Customize Bootstrap theme via Sass or CSS variables.



👩‍💻 Built with ♥️ by Yashvi TANK 
