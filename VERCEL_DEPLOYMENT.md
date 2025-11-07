# Vercel Deployment Guide

This project has been migrated from Digital Ocean + PM2 + Nginx to Vercel for simplified deployment and hosting.

## What Changed

### Removed
- All blog functionality (Ghost CMS integration)
- Digital Ocean infrastructure (Terraform, user-data scripts)
- GitHub Actions CI/CD workflows
- PM2 process management
- Nginx reverse proxy configuration
- Blog pages (`/blog`, `/blog/[slug]`)
- Blog API routes (`/api/blog/*`)
- Ghost Content API library and dependencies

### Added
- `vercel.json` - Vercel configuration
- Simplified README with Vercel deployment instructions
- Updated `.env.local` without Ghost credentials

### Archived
- `old-infrastructure/infrastructure/` - Terraform configs, user-data scripts
- `old-infrastructure/github-workflows/` - GitHub Actions workflows

## Deployment Steps

### 1. Install Vercel CLI (Optional)

```bash
npm i -g vercel
```

### 2. Deploy via Vercel Dashboard (Recommended)

1. Visit [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import `ryanspoone/ryanspoone.com` repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

5. Add environment variables:
   - `GITHUB_TOKEN` = Your GitHub Personal Access Token

6. Click "Deploy"

### 3. Deploy via Vercel CLI

Alternatively, deploy from command line:

```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### 4. Configure Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add `ryanspoone.com` and `www.ryanspoone.com`
4. Update your DNS records as instructed by Vercel:
   - Add A record for `@` pointing to Vercel's IP
   - Add CNAME for `www` pointing to `cname.vercel-dns.com`

Vercel will automatically provision SSL certificates via Let's Encrypt.

## Environment Variables

Only one environment variable is required:

- `GITHUB_TOKEN` - GitHub Personal Access Token for fetching repository data

Add this in:
- Vercel Dashboard: Project Settings → Environment Variables
- Or during CLI deployment

## What You Get with Vercel

- Automatic deployments on every push to `master`
- Preview deployments for every pull request
- Global CDN with edge caching
- Automatic HTTPS/SSL
- Zero-config Next.js optimization
- Built-in analytics (optional)
- Serverless functions for API routes
- No server management required

## Testing Locally

Before deploying:

```bash
npm run dev     # Development server
npm run build   # Test production build
npm start       # Test production server locally
```

## Rollback

If you need to rollback to a previous deployment:

1. Go to your project on Vercel
2. Click "Deployments" tab
3. Find the previous successful deployment
4. Click "..." menu → "Promote to Production"

## Monitoring

- View deployment logs in Vercel dashboard
- Monitor build times and function performance
- Set up integrations (Slack, Discord) for deployment notifications

## Cost

Vercel is free for personal projects with:
- Unlimited deployments
- 100 GB bandwidth per month
- Serverless function execution
- Automatic SSL

Pro plan ($20/month) includes:
- More bandwidth and function execution time
- Team collaboration features
- Password protection
- Advanced analytics

## Cleanup

Once successfully deployed to Vercel, you can:

1. **Decommission Digital Ocean droplet** - Cancel the droplet to stop billing
2. **Archive old code** - The `old-infrastructure/` directory can be deleted if not needed
3. **Update GitHub secrets** - Remove Digital Ocean and SSH secrets
4. **Update DNS** - Point domain to Vercel instead of Digital Ocean IP

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
