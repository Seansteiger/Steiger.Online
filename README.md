# JSH | Digital Architects

**Forging Digital Realities.**

JSH is a premier South African web development agency specializing in high-performance, futuristic web experiences. This project is the official portfolio website built with React, Vite, and TailwindCSS (via CDN).

## Features
- **Futuristic Design**: Glassmorphism, neon accents, and dynamic animations.
- **AI Integration**: Powered by Gemini 3 Flash for an intelligent assistant experience.
- **Responsive Layout**: Optimized for all devices from mobile to desktop.
- **Performance**: High-speed loading with localized assets.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Visit `http://localhost:3000` to view the site.

### Environment Setup
Create a `.env.local` file in the root directory and add your Gemini API key:
```env
GEMINI_API_KEY=your_api_key_here
```

## Deployment

### Automatic Deployment to GitHub Pages
This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Setup Instructions:**
1. Go to your repository Settings > Pages
2. Under "Source", select "GitHub Actions"
3. The site will automatically deploy when you push to the `main` branch
4. Your site will be available at: `https://seansteiger.github.io/JSH-Digital-Architects/`

### Manual Deployment
To deploy manually:
1. Build the project:
   ```bash
   npm run build
   ```
2. The output will be in the `dist` folder.
3. Deploy the content of `dist` to your hosting provider.

## Technologies
- **React** 19
- **Vite**
- **Tailwind CSS** (CDN)
- **Framer Motion** (via CSS animations)
- **Google GenAI SDK**

---
Generated with Google AI Studio & Antigravity.
