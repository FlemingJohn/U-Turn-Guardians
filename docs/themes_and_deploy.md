# Color Themes Configuration

The website supports 3 distinct color themes. To switch themes, open `style.css` and simply comment/uncomment the corresponding blocks in the `:root` variable definition at the top of the file.

## Available Themes

### 1. Cyber-Safety (Default)
**Best for:** Professional presentations, high contrast.
- **Background:** Dark Slate (`#0f172a`)
- **Accents:** Neon Red & Green
- **Vibe:** Technical, Trustworthy, Modern.

### 2. Midnight Neon
**Best for:** Hackathons, impressive dark mode.
- **Background:** True Black (`#000000`)
- **Accents:** Cyan & Magenta
- **Vibe:** Futuristic, Cyberpunk, High-Energy.

### 3. Industrial Amber
**Best for:** Engineering hardware focus.
- **Background:** Dark Grey (`#1c1917`)
- **Accents:** Amber & Lime
- **Vibe:** Rugged, Hardware-Centric, Warning-style.

## How to Deploy to Vercel

Since this is a static website (HTML/CSS/JS), deployment is instant.

### Option A: Drag & Drop (Easiest)
1. Go to [Vercel.com](https://vercel.com) and log in.
2. Click **"Add New"** > **"Project"**.
3. Drag the `docs` folder from your project directly onto the upload area.
4. Click **Deploy**.

### Option B: Git Integration (Recommended)
1. Push your changes to GitHub.
2. Go to Vercel and **Import** your repository.
3. In "Build & Output Settings":
    - **Root Directory:** select `docs` (or leave empty if you want to deploy the whole repo, but `docs` is cleaner for this).
    - **Framework Preset:** "Other" (Static).
4. Click **Deploy**.
