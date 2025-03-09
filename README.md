# Zach Lagden Portfolio

![Next.js Version](https://img.shields.io/badge/Next.js-15.2.1-black)
![React Version](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-teal)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, responsive portfolio website for Zach Lagden built with Next.js, React, TypeScript, Framer Motion, and Tailwind CSS.

![Portfolio Preview](/public/og-image.png)

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Smooth Animations**: Engaging UI animations using Framer Motion
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Fast load times with optimized assets
- **SEO Ready**: Comprehensive metadata, OpenGraph, and structured data
- **Error Tracking**: Integrated Sentry for monitoring and error reporting
- **Analytics**: Google Analytics integration for visitor insights

## 📋 Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/zachlagden/cv.zachlagden.uk.git
cd cv.zachlagden.uk
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a `.env` file in the root directory with your Sentry DSN (optional):

```
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## 💻 Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

For faster refresh with Turbopack:

```bash
npm run devturbo
# or
yarn devturbo
# or
pnpm devturbo
# or
bun devturbo
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🏗️ Building for Production

Generate a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## 🧪 Linting

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## 📁 Project Structure

```
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── ...           # Other files and routes
│   └── instrumentation.ts # Sentry instrumentation
├── sentry.*.config.ts    # Sentry configuration files
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🧩 Key Components

The main components in the portfolio include:

- **Header**: Introduction section with animated elements
- **About**: Brief professional summary and values
- **Experience**: Work history with detailed descriptions
- **Education**: Academic background and achievements
- **Skills**: Technical and professional competencies
- **Certifications**: Professional certifications with links

## 📱 Responsive Design

The portfolio is fully responsive with dedicated layouts for:

- Mobile devices
- Tablets
- Desktops
- Large screens

## 🔄 Deployment

The project can be deployed to various hosting platforms that support Next.js applications. Follow the deployment instructions in the deployment section below for more details.

## 📊 Analytics & Monitoring

- **Google Analytics**: Track user behavior and site metrics
- **Sentry**: Monitor application performance and capture errors in production

## 🛡️ Environment Variables

The project uses Sentry for error tracking which is configured directly in the Sentry configuration files rather than through environment variables. No specific environment variables are required to run the application.

## 🔧 Customization

To customize this portfolio for your own use:

1. Update personal information in `src/app/page.tsx`
2. Replace images in the `public` directory
3. Modify metadata in `src/app/layout.tsx`
4. Adjust colors and styling in `src/app/globals.css`

## 🌐 Deployment

The simplest way to deploy this portfolio is using [Vercel](https://vercel.com/), the platform created by the makers of Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzachlagden%2Fcv.zachlagden.uk)

Alternatively, you can deploy to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Self-hosted (Node.js server)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - React framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons
- [Vercel](https://vercel.com/) - Deployment platform
- [Sentry](https://sentry.io/) - Error tracking

## 📞 Contact

Zach Lagden - [zachlagden@lagden.dev](mailto:zachlagden@lagden.dev)

Project Link: [https://cv.zachlagden.uk](https://cv.zachlagden.uk)

---

Designed & developed with ❤️ by Zach Lagden