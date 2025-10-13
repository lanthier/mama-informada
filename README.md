# Mama Informada

Educational resources for mothers covering pregnancy, child development, and adolescence.

## Features

- 🏠 Landing page with hero section
- 📝 Dynamic blog system powered by Contentful CMS
- 🔄 Automated blog updates via GitHub Actions
- 📱 Fully responsive design
- 🎨 Modern UI with Poppins font

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Contentful

Create a `.env` file in the root:

```env
CONTENTFUL_SPACE_ID=364mkgnw7a3c
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

Get your access token from Contentful Dashboard → Settings → API keys.

### 3. Fetch Blog Posts

```bash
npm run fetch-blogs
```

This fetches blog posts from Contentful and saves them to `data/blogs.json`.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Contentful Integration

The site uses Contentful as a headless CMS for blog content. Blog posts are fetched and stored in `data/blogs.json`, which is committed to the repository for version control and deployment.

### Content Model

The blog content type includes:
- **titulo** (Title) - Text
- **imagen** (Image) - Asset
- **descripción** (Description) - Text
- **fecha** (Date) - Date
- **contenidoDelBlog** (Blog Content) - Rich Text

### Fetching Blogs

Run manually:
```bash
npm run fetch-blogs
```

Or let GitHub Actions do it automatically (see below).

## Automated Updates

GitHub Actions automatically:
1. Fetches latest blogs from Contentful daily at 6 AM UTC
2. Commits changes to `data/blogs.json`
3. Deploys the updated site

See `.github/README.md` for setup instructions.

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Deployment

The site is configured for deployment to GitHub Pages via GitHub Actions. Other platforms supported:

- **GitHub Pages** (configured) - Automatic via GitHub Actions
- **Vercel** - See `.github/README.md` for setup
- **Netlify** - See `.github/README.md` for setup

### GitHub Pages Setup

1. Go to repository **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Add Contentful secrets (see `.github/README.md`)
4. Push to main branch - site deploys automatically!

Your site will be available at: `https://your-username.github.io/repo-name/`

For manual deployment or other platforms, check the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Project Structure

```
mama-informada/
├── app/
│   ├── app.vue              # Root layout with header/nav
│   └── pages/
│       ├── index.vue        # Home page
│       └── blog/
│           ├── index.vue    # Blog list
│           └── [slug].vue   # Individual blog post
├── data/
│   └── blogs.json           # Blog data from Contentful (committed)
├── scripts/
│   ├── fetch-blogs.js       # Script to fetch from Contentful
│   └── README.md            # Script documentation
├── public/                  # Static assets
└── .github/
    └── workflows/
        └── update-blogs.yml # Automated blog updates & deployment
```
