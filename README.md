# ryanspoone.com

Personal portfolio and website built with Next.js 14, showcasing professional experience, projects, and case studies.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vercel** - Deployment platform
- **GitHub API** - Fetch repository data
- **LinkedIn** - Professional experience data

## Features

- Server-side rendering for optimal performance
- Responsive design for all devices
- GitHub integration showing featured and all repositories
- LinkedIn experience timeline
- Case studies with expandable details
- Archive of all projects
- Monolithic architecture with direct function imports

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- GitHub Personal Access Token

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ryanspoone/ryanspoone.com.git
cd ryanspoone.com
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
GITHUB_TOKEN=your_github_personal_access_token
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `GITHUB_TOKEN` - Your GitHub personal access token
4. Deploy!

Vercel will automatically:
- Build your Next.js application
- Deploy to a global CDN
- Provide preview deployments for pull requests
- Enable automatic HTTPS

### Manual Build

To build for production:
```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   ├── github/          # GitHub API endpoints
│   │   └── linkedin/        # LinkedIn data endpoints
│   ├── archive/             # Projects archive page
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── About.js
│   ├── CaseStudies.js
│   ├── Contact.js
│   ├── Intro.js
│   └── Projects.js
├── lib/                     # Utility functions and data fetching
│   ├── github/              # GitHub API integration
│   └── linkedin/            # LinkedIn data
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── images/
│   └── robots.txt
├── styles/                  # CSS modules
│   ├── About.css
│   ├── Archive.css
│   ├── CaseStudies.css
│   ├── Contact.css
│   ├── Intro.css
│   └── Projects.css
└── vercel.json             # Vercel configuration
```

## Environment Variables

### Required

- `GITHUB_TOKEN` - GitHub Personal Access Token for fetching repository data

### Optional

- `NODE_ENV` - Environment (development/production)

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a monolithic Next.js application that:
- Uses server-side rendering (SSR) for all pages
- Fetches data directly in server components (no HTTP self-requests)
- Implements API routes for external access if needed
- Uses static assets for images and icons

## License

MIT

## Contact

Ryan Spoone - [me@ryanspoone.com](mailto:me@ryanspoone.com)

Website: [https://ryanspoone.com](https://ryanspoone.com)
