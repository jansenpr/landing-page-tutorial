# 🚀 Antigravity Landing Page Wizard

This wizard helps users generate a conversion-optimized landing page for their startup idea. It quizzes the user for key information and uses the design skills of the **Google Stitch MCP** to generate a complete, high-converting, visually appealing, deployed static site on Firebase Hosting (which has free SSL for custom domains and a generous free tier).

*Initially created for a pre-event for Startup Weekend Women Bohol 2026. 👩‍💻✨*

## 🌟 Overview

The wizard guides you through a step-by-step process to:
1. 🧠 Define your product's core identity and value proposition.
2. ✍️ Generate optimized copy for Hero, Problem, Value Props, and CTA sections.
3. 🎨 Select visual design directions (Modern SaaS, Cozy/Communal, or Elite Pedigree).
4. 📱 Generate a fully responsive, high-fidelity site in the `output/` folder.
5. 🚀 Deploy the site directly to Firebase Hosting.

## 🛠️ Prerequisites

1.  **Antigravity**: Install from [antigravity.google/download](https://antigravity.google/download).
2.  **Node.js & NPM**: Ensure they are installed (the wizard will check for you).
3.  **Firebase CLI**: Install using `npm install -g firebase-tools`.
4.  **Google Stitch MCP**:
    *   **🔑 Get API Key**: Go to [Stitch Settings](https://stitch.withgoogle.com/settings) and click 'Create Key'.
    *   **⚙️ Configure Agent**: Click the three dots -> **MCP Servers** -> **Manage MCP Servers**. Select **View raw config** and add the Stitch entry (replace `YOUR-API-KEY`).

## 🪄 Usage

### Step 1: Initialize the Wizard

Start the process in Antigravity by typing:

```text
Execute the meta-prompt detailed in @landing_page_prompts.txt. Start from the beginning, read the context, and guide me through the quiz questions step-by-step.
```

### Step 2: Follow the Workflow

The Agent will:
1. 📖 Read the `landing_page_prompts.txt` file.
2. 🎤 Ask questions to understand your target market and problem space.
3. 📝 Write your specific requirements and generated copy to `specific_prompts.txt`.
4. 📋 Guide you to create a Google Form and provide the embed code.

### Step 3: Global Launch (Generation & Deployment)

Once the prompt generation is complete, trigger the final build by typing:

```text
Execute the instructions in @specific_prompts.txt
```

**What happens next?**
*   **Site Building**: The agent builds your site in a dedicated `output/` folder.
*   **Mobile & Desktop**: The site is designed to look stunning on both mobile and large screens.
*   **Auto-Deployment**: The agent guides you through Firebase project selection and deploys your site live!

### ✨ Features Included
- **📱 Full Responsiveness**: Stunning transitions and layouts for both Desktop and Mobile users.
- **🎯 Magic CTA Scrolling**: All "Join" buttons smooth-scroll users directly to the signup form section.
- **📂 Clean File Structure**: All site assets, including Firebase config, are neatly contained in an `output/` directory.
- **🎨 Design System**: Tailored typography (Playfair/Roboto) and organic color palettes.
- **✍️ PAS Copywriting**: Direct Response copy designed to convert visitors into waitlist signups.
- **📄 Core Pages**: Automatically generates **About Us**, **Privacy Policy**, and **Terms of Service** boilerplate pages.