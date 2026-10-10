# Ajay Rajendharan — Portfolio

A DevOps portfolio styled as a production status page. Built with [Astro](https://astro.build), deployed to GitHub Pages by GitHub Actions.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321 (draft postmortems visible here)
npm run build    # production build into dist/ (drafts hidden)
```

## Edit content

| What | File |
|---|---|
| Name, email, LinkedIn, GitHub links | `src/data/site.ts` |
| Services I own (SparrowPay, SparrowGenie, SparrowDesk) | `src/data/services.ts` |
| Changelog (experience) and dependencies (toolchain) | `src/data/changelog.ts` |
| Postmortems & wins — one Markdown file each | `src/content/postmortems/*.md` |
| Resume download | `public/resume.pdf` |
| Colours and fonts | `src/styles/global.css` |

Postmortems with `draft: true` show only in `npm run dev`. Set `draft: false` to publish one.
The section and its nav link stay hidden until at least one postmortem is published.

## Deploy (GitHub Pages)

1. Create a **public** repo on your personal GitHub account named `<your-username>.github.io`
   (any other name also works; the site is then served at `https://<your-username>.github.io/<repo>`).
2. Push this folder to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Each push to `main` runs `.github/workflows/deploy.yml` and publishes the site.
