# Contentful Blog Fetcher

This script fetches blog posts from Contentful and saves them to a JSON file.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the project root with your Contentful credentials:
```env
CONTENTFUL_SPACE_ID=364mkgnw7a3c
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

## Usage

Run the script to fetch blogs:
```bash
npm run fetch-blogs
```

This will:
1. Fetch all blog entries from Contentful
2. Convert rich text content to HTML
3. Generate slugs from titles
4. Save the data to `data/blogs.json`
5. Regenerate `public/sitemap.xml` from the fetched posts

## Sitemap

`scripts/generate-sitemap.js` builds `public/sitemap.xml` from the static routes plus
every slug in `data/blogs.json` and `data/recursos.json`, using each post's
`updatedAt`/`rawDate` as `<lastmod>`.

It runs automatically after `npm run fetch-blogs` and before `npm run build` /
`npm run generate`, but can also be run on its own:

```bash
npm run generate-sitemap
```

Set `SITE_URL` to override the default `https://mamainformada.org` base URL.

## Output Format

The script generates a JSON file with the following structure:

```json
[
  {
    "id": "contentful-entry-id",
    "slug": "titulo-del-blog",
    "title": "Título del Blog",
    "description": "Descripción breve",
    "image": "https://images.ctfassets.net/...",
    "date": "12 de octubre, 2025",
    "rawDate": "2025-10-12",
    "content": "<p>HTML content...</p>",
    "category": "Blog",
    "createdAt": "2025-10-12T16:42:59.705Z",
    "updatedAt": "2025-10-13T13:58:59.376Z"
  }
]
```

## Using the Data

To use the fetched blog data in your Nuxt pages, import the JSON file:

```javascript
import blogs from '@/data/blogs.json'
```

Then you can use it in your components or pages.

