# GitHub Actions Setup

This repository uses GitHub Actions to automatically fetch blog posts from Contentful and deploy the site to GitHub Pages.

## Required Secrets

You need to add the following secrets to your GitHub repository:

### Settings → Secrets and variables → Actions → New repository secret

1. **`CONTENTFUL_SPACE_ID`**
   - Your Contentful space ID
   - Value: `364mkgnw7a3c`

2. **`CONTENTFUL_ACCESS_TOKEN`**
   - Your Contentful Content Delivery API access token
   - Get it from: Contentful Dashboard → Settings → API keys
   - Use the "Content Delivery API - access token"

## GitHub Pages Setup

### Enable GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save

That's it! The workflow uses `GITHUB_TOKEN` which is automatically available.

## Workflow Triggers

The workflow runs:
- **Daily at 6 AM UTC** - Automatically fetches latest blogs from Contentful
- **Manual trigger** - You can run it manually from GitHub Actions tab
- **On push to main** - Deploys when you push changes

## What It Does

1. **Fetches blogs** - Runs `npm run fetch-blogs` to get latest content from Contentful
2. **Commits changes** - If blogs.json changed, commits and pushes to the repo
3. **Builds site** - Runs `npm run generate` to create static site
4. **Deploys** - Deploys the updated site to GitHub Pages

## Manual Trigger

To manually trigger the workflow:
1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select "Update Blogs from Contentful" workflow
4. Click "Run workflow" button
5. Select the branch and click "Run workflow"

## Alternative Deployment Platforms

### If using Vercel instead of GitHub Pages:

Replace the build and deploy steps with:

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
    vercel-args: '--prod'
```

Required secrets:
- `VERCEL_TOKEN` - Get from Vercel Dashboard → Settings → Tokens
- `VERCEL_ORG_ID` - Run `npx vercel link` and check `.vercel/project.json`
- `VERCEL_PROJECT_ID` - Run `npx vercel link` and check `.vercel/project.json`

### If using Netlify:

Replace the build and deploy steps with:

```yaml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2.1
  with:
    publish-dir: '.output/public'
    production-deploy: true
    github-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-message: "Deploy from GitHub Actions"
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

Required secrets:
- `NETLIFY_AUTH_TOKEN` - Get from Netlify → User Settings → Applications → Personal access tokens
- `NETLIFY_SITE_ID` - Get from Netlify → Site Settings → Site details → API ID

## Troubleshooting

### "Process completed with exit code 1" on fetch-blogs
- Check that CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are set correctly
- Verify the access token has read permissions

### Deploy fails
- Make sure GitHub Pages is enabled in repository settings
- Check that **Settings → Pages → Source** is set to **GitHub Actions**
- Verify the build completed successfully in the workflow logs

### Git push fails
- The workflow uses `GITHUB_TOKEN` which should work automatically
- If issues persist, you may need to create a Personal Access Token with repo permissions

### Site not updating
- Check the Actions tab to see if the workflow ran successfully
- GitHub Pages may take a few minutes to update after deployment
- Clear your browser cache

