![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
# Mind Musings Blog

A personal blogging website built with **React**, **Vite**, and **Tailwind CSS** for sharing thoughts, observations, and plans in a clean and readable format.

---

## Features

- **Dynamic Blog Listing:** Responsive grid to view all blogs.
- **Individual Blog Pages:** Each blog has its own page with full content, images, and tags.
- **Rich Content Support:** Blogs are written in HTML strings with headings, bold/italic text, lists, and images.
- **Search & Pagination:** Easily find blogs by title or tags, and navigate multiple pages.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Clean & Modern UI:** Tailwind CSS ensures readable and visually appealing layout.

---

## Technologies Used

- **React** - Frontend library for building UI.
- **Vite** - Fast development build tool.
- **Tailwind CSS** - Utility-first CSS framework.
- **React Router DOM** - Routing library for single-page application navigation.

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/mind-musings-blog.git
```

2. Navigate to the project folder:
```bash
cd mind-musings-blog
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open the local URL (usually `http://localhost:5173`) in your browser.

---

## Adding Blogs

- Blogs are stored in `src/data/blogs.js` as objects with the following structure:

```js
export const blogs = [
  {
    id: 1,
    title: "My First Blog",
    date: "2025-10-18",
    tags: ["react", "thoughts"],
    image: "https://example.com/image.jpg",
    summary: "A short summary for preview cards",
    content: `
      <h2>Subheading</h2>
      <p>This is <strong>bold</strong> and <em>italic</em> text.</p>
      <ul><li>Item 1</li><li>Item 2</li></ul>
      <img src="https://example.com/image.jpg" class="rounded-lg my-4" />
    `,
  },
];
```

- You can write **HTML directly in `content`** and use Tailwind classes for styling.

---

## Deployment

You can deploy this project on platforms like **Netlify**, **Vercel**, or **GitHub Pages**. Example for Vercel:

```bash
npm install -g vercel
vercel
```

---

## License

This project is licensed under the **MIT License**. See `LICENSE` file for details.

---

## Author

Your Name – Personal blog project for sharing thoughts, observations, and plans.