# Nidhi Patel | Software Developer

Single-page developer portfolio built with Angular 21, standalone components, TypeScript, and SCSS.

## Requirements

- Node.js compatible with Angular 21
- npm

Install dependencies with `npm install`.

## Development

Start the local server:

```bash
npm start
```

Open `http://localhost:4200`. If port 4200 is already in use, choose another port:

```bash
npm start -- --port=4201
```

## Portfolio content and links

Edit the typed portfolio content in `src/app/data/portfolio.data.ts`. Replace the LinkedIn, GitHub, and project URL placeholders there when those links are available. TODO comments mark each placeholder.

Add the resume PDF at `public/Nidhi_Patel_Resume.pdf` for the Download Resume button.

To enable contact form submissions, replace `YOUR_FORM_ID` in `src/environments/environment.ts` with the Formspree form ID. Until configured, the form displays an email fallback and does not send a request.

## Build and test

Create an optimized production build:

```bash
npm run build
```

The static site output is in `dist/portfolio/browser`.

Run the unit tests once:

```bash
npm test -- --watch=false
```

## Deployment

Build the project, then deploy the contents of `dist/portfolio/browser` to any static web host. Configure the host to serve `index.html` for the site root and unknown paths. Use the host's HTTPS URL as the canonical site URL when adding production Open Graph metadata.