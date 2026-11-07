# VidRepublic Frontend

VidRepublic is a modern, responsive full-stack video publishing platform built for independent creators to upload, stream, and engage with content seamlessly. This repository contains the client-side single-page application.

## 🚀 Tech Stack

* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS
* **State Management & Data Fetching:** TanStack Query (React Query) & Axios
* **Media Player:** Vidstack (`@vidstack/react`)
* **Forms & Validation:** React Hook Form & Zod
* **Routing:** React Router

---

## 📦 Key Features

* **Optimized Data Fetching:** Implements server-state caching, background refetching, and custom infinite scroll pagination via TanStack Query.
* **Custom Video Player:** Integrated with Vidstack for fine-tuned playback controls and media management.
* **Route-Level Code Splitting:** Uses `React.lazy` and suspense boundaries to minimize initial bundle size and optimize load times.
* **Type-Safe Form Validation:** Robust input verification for authentication and profile management using Zod schemas.
* **Responsive Layouts:** Fully adaptive UI designed with Tailwind CSS, featuring modern skeletons and interactive states.

---

## 📁 Project Structure

```text
src/
├── api/             # Centralized Axios service modules (auth, video, comments, etc.)
├── assets/          # Static images, icons, and branding
├── components/      # Reusable UI building blocks (Avatars, Modals, Buttons, Skeletons)
├── context/         # Global application context (Auth state)
├── hooks/           # Custom TanStack Query and utility hooks
├── pages/           # Route-level components (Home, Channel, WatchHistory, Profile)
├── schemas/         # Zod form validation schemas
├── utils/           # Helper formatting functions
├── App.jsx          # Main application router layout
└── main.jsx         # Application entry point