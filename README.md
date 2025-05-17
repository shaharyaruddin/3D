# Frissko – Interactive 3D Refreshment Landing Page

## 🌟 Overview

**Frissko** is a visually stunning 3D landing page designed for a modern refreshment brand. Built with cutting-edge tools like Next.js, React Three Fiber, and GSAP, this project delivers a smooth, immersive experience without relying on any CMS—**all content is hardcoded** for simplicity and speed.

## 🌐 Live Site

[Visit Frissko](https://frissko.vercel.app)

## 🛠 Tech Stack

- **Framework**: Next.js
- **3D Graphics**: React Three Fiber, Three.js
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: Tailwind CSS
- **State Management**: Zustand

## ✨ Features

### ⚡ Hardcoded Content
- No CMS or external data source
- All text and images managed directly in code
- Faster rendering and lower latency

### 🧃 3D Refreshment Scene
- Interactive 3D soda/energy drink cans
- Floating animations and responsive scaling
- Smooth mobile and desktop rendering

### 🎥 Smooth Animations
- GSAP-powered entrance and scroll animations
- Text reveals, parallax effects, and can rotations
- Timeline-based control for fine-tuned transitions

### 📱 Fully Responsive
- Tailwind-powered responsive layout
- Mobile-first design considerations
- Optimized for various screen sizes

### 🚀 Performance Optimization
- Lazy-loaded 3D models
- WebGL context managed efficiently
- Minimal bundle size using code splitting

## 🔧 Key Components

### 3D & UI
- `SodaCan.tsx` – Main 3D soda can component
- `FloatingCan.tsx` – Floating + animated version
- `HeroScene.tsx` – Entry animation + 3D scene wrapper

### UI Layout
- `HeroSection.tsx` – Catchy headline + animated intro
- `FlavorsCarousel.tsx` – Choose from different drink flavors
- `CallToAction.tsx` – Buttons and prompts

### Utility
- `useStore.ts` – Zustand for state and loading
- `useAnimations.ts` – Custom GSAP hooks

## 🧪 Getting Started

### Requirements
- Node.js 16+
- npm or yarn

### Installation
```bash
git clone https://github.com/your-username/frissko.git
cd frissko
npm install
npm run dev
