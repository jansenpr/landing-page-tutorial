# Antigravity Landing Page Wizard

This wizard helps users generate a conversion-optimized landing page for their startup idea. It quizzes the user for key information and uses the **Google Stitch MCP** to generate a complete, deployable static site (e.g., for Firebase Hosting).

*Initially created for a pre-event for Startup Weekend Women Bohol 2026.*

## Overview

The wizard guides you through a step-by-step process to:
1. Define your product's core identity and value proposition.
2. Generate optimized copy for Hero, Problem, Value Props, and CTA sections.
3. Select visual design directions.
4. Generate the actual code for the landing page.

## Usage

### Step 1: Initialize the Wizard

Start the process in Antigravity by typing the following command into the chat panel:

```text
Execute the meta-prompt detailed in @landing_page_prompts.txt. Start from the beginning, read the context, and guide me through the quiz questions step-by-step.
```

### Step 2: Follow the Workflow

The Agent will:
1. Read the `landing_page_prompts.txt` file.
2. Initialize the context.
3. Ask you various questions.
4. Proceed through the prompts individually, writing your specific requirements to `specific_prompts.txt`.

### Step 3: Trigger Generation

Once the wizard completes the interview and populates the specific prompts, trigger the final Stitch generation by typing:

```text
Execute the instructions in @specific_prompts.txt
```