# html-codes

A collection of hands-on HTML, CSS, and vanilla JavaScript practice files covering front-end web development fundamentals.

## Overview

This repository holds a set of small, self-contained web pages used to practice and demonstrate core front-end concepts: HTML tags, CSS selectors and layout, form elements, and DOM manipulation with plain JavaScript. Every file runs directly in a browser with no build step, framework, or external dependency. It is organized as a single working directory (`basics/`) rather than a graded course structure, so file names reflect the topic each example was written to explore.

## Features

- **Core HTML** — headings, text formatting (bold, italic, underline, big/small), images, hyperlinks, preformatted text, ordered lists, and an HTML `<table>` example.
- **CSS selectors** — universal (`*`), class, and ID selector examples showing how specificity and scope differ.
- **Layout techniques** — Flexbox (`justify-content: space-between`) and CSS Grid (a 4-column card grid) used in both isolated demos and full mockup pages.
- **Forms** — multiple form examples combining text inputs, radio buttons, `<select>` dropdowns, and `<textarea>`, including a student registration form and a login form.
- **Media embedding** — the `<audio>` element with default controls, `autoplay`, and `loop`.
- **DOM manipulation (vanilla JS)** — creating elements (`createElement`, `createTextNode`, `appendChild`), editing and removing elements (`replaceWith`, `outerHTML`, `remove()`), and traversing the DOM (`children`, `childNodes`, `parentElement`).
- **Interactive UI** — a button-driven light/dark background toggle wired up with `addEventListener`.
- **Mockup pages** — three related hotel landing-page drafts (`hotel.html`, `random.html`, `sample.html`) that combine the concepts above into a single-page layout with a fixed header/footer, background image, and hover animations.

## Tech Stack

| Category | Details |
|---|---|
| Frontend | HTML5, CSS3 (inline, internal `<style>`, and external stylesheets), vanilla JavaScript (DOM APIs) |

No frameworks, libraries, package manager, or build tooling are used anywhere in the repository.

## Architecture

The project is a flat collection of independent HTML files inside `basics/`. Each file is meant to be opened on its own; there is no routing, shared layout, or entry point tying them together. A small number of files share resources:

- `test.html` and `add.html` link to the shared stylesheet `mystyle.css`.
- `tests.html` loads `tests.js`, which wires a button click to a background-color toggle.

Everything else is self-contained, with CSS and JavaScript written inline in the same file.

## Project Structure

```
html-codes/
└── basics/
    ├── index.html               # Core HTML tags: headings, image, link, text formatting, <pre>
    ├── demo.html                 # Blank HTML boilerplate
    ├── lecture.html              # Blank HTML boilerplate
    ├── practice.html             # DOM traversal: parentElement, children, childNodes
    ├── hotel.html                # Hotel landing-page mockup (header/nav, grid, hover effects)
    ├── random.html               # Variant of the hotel landing-page mockup
    ├── sample.html                # Hotel signup landing page with feature cards
    ├── login_form.html           # Form: text inputs, radio buttons, select, textarea
    ├── l1p1.html                  # Student registration form
    ├── l1p2.html                  # Login form (username/password)
    ├── l1p3.html                  # Styled HTML table (contact list)
    ├── l2p1.html                  # <audio> element: controls, autoplay, loop
    ├── lp1.html                   # General page demo: formatting, list, links, footer
    ├── test.html                  # Page linked to external mystyle.css
    ├── tests.html                 # Button wired to light/dark mode toggle
    ├── tests.js                   # Light/dark mode toggle script
    ├── add.html                   # Heading/paragraph page linked to mystyle.css
    ├── mystyle.css                # Shared external stylesheet
    ├── classSelector.html        # CSS class selector demo
    ├── universalSelector.html    # CSS universal selector (*) demo
    ├── identifier.html           # CSS ID selector demo
    ├── divBetween.html           # Flexbox layout demo
    ├── windows.html               # Card/window UI component (box-shadow)
    ├── sticker.html               # Simple labeled text input form
    ├── createElementInDOM.html   # DOM: createElement, createTextNode, appendChild
    ├── editElementInDOM.html     # DOM: editing, replacing, and removing elements
    └── abc.html                   # Fully commented-out flower animation draft (inactive)
```

## Getting Started

### Prerequisites

A modern web browser. No Node.js, package manager, or build step is required.

### Run locally

Clone the repository and open any file directly in a browser:

```bash
git clone <repository-url>
cd html-codes/basics
open index.html   # or double-click the file in a file explorer
```

Some pages (for example `test.html` and `add.html`) reference a relative stylesheet (`mystyle.css`); opening them straight from the file system works, but if a page ever needs to fetch relative assets over HTTP, serve the folder instead:

```bash
npx serve basics
```

### Build

There is no build step — every file is plain, ready-to-run HTML/CSS/JS.

## Usage

Browse `basics/` and open the file that matches the concept you want to see, using the table in [Project Structure](#project-structure) as a guide. Each page is independent, so files can be opened in any order.

## Design Decisions

A few files include inline comments that explain *why* one DOM approach was chosen over another, rather than just showing the code:

- `editElementInDOM.html` builds a list with `createElement` + `appendChild` and notes that this is preferred over setting `innerHTML` on the parent because it avoids re-traversing the whole list; it also shows `replaceWith` and `outerHTML` as alternatives to direct `innerHTML` edits.
- `createElementInDOM.html` uses `setAttribute` over direct property assignment for a custom `title` attribute, with a comment marking it as the "better approach".

These comments make the DOM-manipulation examples read as deliberate comparisons between common approaches rather than single throwaway snippets.

## Future Improvements

- `hotel.html`, `random.html`, and `sample.html` are three separate, near-identical hotel landing-page drafts; consolidating them into one reference implementation would remove the duplication.
- `abc.html` is entirely wrapped in an HTML comment and references assets (`css/main.css`, `img/flowers.png`, `main.js`) that are not present in the repository, so the page currently renders blank.
- `hotel.html` and `random.html` load their background image from an external news-site URL, which makes the page's appearance dependent on a third-party host staying online.

