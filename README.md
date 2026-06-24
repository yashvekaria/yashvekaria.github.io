# yash.vekaria.in

Personal website of Yash Vekaria — a design-minded front-end software engineer.

Built with [Next.js](https://nextjs.org) (App Router, static export) and
[Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

The app lives in [`nextapp/`](./nextapp). On every push to `master` that
touches `nextapp/`, GitHub Actions builds the static export and publishes it to
GitHub Pages (see [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)).

## Getting started

```bash
cd nextapp
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
cd nextapp
npm run build    # static export to nextapp/out
```

> 📢 **PSA for those who want to fork or copy this repo for their own site:**
> Please be a decent person and give proper credit by linking back to my website.
