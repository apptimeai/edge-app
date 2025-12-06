# Nuxt Edge App

A demonstration Nuxt application designed for edge deployment, showcasing dynamic server-side rendering with real-time IP detection at the edge.

## Features

- 🌍 **Edge Rendering** - HTML dynamically rendered from edge locations near your users
- 🎨 **Modern UI** - Beautiful gradient animations and responsive design built with Tailwind CSS
- 🚀 **Server API** - API endpoint that detects visitor IP addresses using edge headers
- ⚡ **Fast Loading** - Optimized for performance at the edge

## What It Does

This app demonstrates edge computing by:
- Displaying your IP address detected from the edge server
- Showing the generation timestamp for each request
- Rendering HTML dynamically at edge locations for minimal latency

## Tech Stack

- **[Nuxt 4](https://nuxt.com)** - Vue.js meta-framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **Custom Edge Preset** - Nitro preset for edge deployment
- **Edge API** - Server routes that extract visitor information

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Deployment

This application is optimized for edge deployment on [Apptime AI](https://apptime.ai). The custom Nitro preset in `preset/` configures the build for edge environments.

## Project Structure

- `app/` - Main application code and Vue components
- `server/api/` - Edge API endpoints (IP detection)
- `preset/` - Custom Nitro preset for edge deployment
- `public/` - Static assets

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [Apptime AI](https://apptime.ai)
- [GitHub Repository](https://github.com/apptimeai/edge-app)
