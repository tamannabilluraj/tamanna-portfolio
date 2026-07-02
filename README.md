# Tamanna Billuraj — Portfolio

A fully responsive personal portfolio built with **React + Vite + Tailwind CSS**, featuring dark mode, smooth animations, and a single editable data file for all content.

## ✏️ Editing content

Almost everything on the site — your name, bio, projects, education, skills, certifications, leadership roles, and future goals — lives in one file:

```
src/data/portfolioData.js
```

Open that file, edit the arrays/objects, save, and the site updates. You should never need to touch the component files in `src/components` or `src/sections` just to update your information.

**To add a new project**, copy the commented template at the bottom of the `projects` array in `portfolioData.js` and fill in your details.

**To swap your resume**, drop a PDF into the `public/` folder (e.g. `public/resume.pdf`) and make sure `personalInfo.resumeUrl` in the data file points to it.

## 🖥️ Running locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 🚀 Deploying to GitHub Pages

1. **Set the base path.** In `vite.config.js`, set `base` to match your repository name:
   ```js
   base: '/your-repo-name/'
   ```
   If your repo is named `<your-username>.github.io`, set `base: '/'` instead.

2. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```
   This builds the site and pushes the `dist/` folder to a `gh-pages` branch automatically.

4. **Enable Pages in GitHub:** Go to your repo → Settings → Pages → set Source to "Deploy from a branch" → select the `gh-pages` branch, `/root` folder → Save.

Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

5. **Redeploying after future edits:**
   ```bash
   git add .
   git commit -m "Update projects"
   git push
   npm run deploy
   ```

## 📁 Project structure

```
src/
  components/     # Reusable UI pieces (navbar, buttons, cursor, etc.)
  sections/       # Page sections (Hero, About, Projects, Contact, etc.)
  data/
    portfolioData.js   # ← Edit this file to update your content
  hooks/          # Custom React hooks (theme, scroll tracking, count-up)
  App.jsx
  main.jsx
  index.css
```

## 🎨 Tech stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## 📧 Enabling the contact form

The contact form works out of the box in demo mode (it simulates sending). To connect it to a real inbox:

1. Sign up at [emailjs.com](https://www.emailjs.com) and set up a service + template.
2. `npm install @emailjs/browser`
3. Follow the commented instructions inside `src/sections/Contact.jsx`.
