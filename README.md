# Kesandu Uchenyi — React Portfolio

A responsive, dark-themed portfolio built with React, Vite, Lucide icons and custom CSS.

## 1. Install the tools
1. Install Node.js LTS from https://nodejs.org/
2. Install Visual Studio Code from https://code.visualstudio.com/
3. Install Git from https://git-scm.com/ (recommended)

Restart your terminal after installing Node.js and Git.

## 2. Open the project
Extract this ZIP. In VS Code, choose **File → Open Folder** and select `kesandu-portfolio`.

Open **Terminal → New Terminal**.

Check installations:
```bash
node -v
npm -v
git --version
```

## 3. Install dependencies and run locally
```bash
npm install
npm run dev
```
Open the local URL Vite prints, usually `http://localhost:5173`.

Keep the terminal running while you work. Press `Ctrl+C` to stop the dev server.

## 4. Personalise before publishing
Edit `src/main.jsx`:
- Replace `YOUR_EMAIL@example.com` with your real professional email.
- Add your exact LinkedIn profile URL.
- Add links to the real project repositories and case studies.
- Confirm dates, titles and descriptions before publishing.
- The healthcare case study is labelled as independent work; keep that wording if it has not been validated by an employer or client.
- Add a downloadable CV only after you have a final PDF ready.

Edit `src/styles.css` to adjust colours, spacing and layout.

## 5. Check the production build
```bash
npm run build
npm run preview
```
If the build completes, Vite creates the deployable site in `dist/`.

## 6. Push to GitHub
Create a new empty repository on https://github.com/new named `kesandu-portfolio`. Do not initialise it with a README if you are pushing this project as-is.

In the VS Code terminal, from the project folder:
```bash
git init
git add .
git commit -m "Build portfolio website"
git branch -M main
git remote add origin https://github.com/Kessi-ux/kesandu-portfolio.git
git push -u origin main
```
If your GitHub username or repository name differs, change the remote URL accordingly. GitHub may ask you to sign in in a browser.

## 7. Deploy free with Vercel
1. Visit https://vercel.com/ and sign in using GitHub.
2. Select **Add New → Project**.
3. Import your `kesandu-portfolio` repository.
4. Confirm the framework is detected as **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

Vercel will provide a live URL. Every time you push a new commit to the connected GitHub repository, it can rebuild and redeploy the site.

Alternative: Netlify also supports Vite projects with build command `npm run build` and publish directory `dist`.

## 8. Final launch checklist
- [ ] Test at mobile, tablet and desktop widths.
- [ ] Check every link and button.
- [ ] Replace the placeholder email.
- [ ] Verify all project details and dates.
- [ ] Make sure no confidential work information is included.
- [ ] Check the site on a phone after deployment.
- [ ] Share the live URL on your CV and LinkedIn.

## Project structure
```text
kesandu-portfolio/
├── index.html
├── package.json
├── src/
│   ├── main.jsx
│   └── styles.css
└── README.md
```
