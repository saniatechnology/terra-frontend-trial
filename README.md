# Terra Frontend Project

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit [http://localhost:4321](http://localhost:4321) in your browser.

---

## Approach
Because my time was limited, I focused on getting what would be seen and interacted with by the user first on the page, and then added improvements and optimizations to the best of my ability with the time I had.

It was a good opportunity to learn more about Astro and Terra's own tools; I find it really interesting and impressive that you keep these tools up to date to use them across your own projects, so I was glad to dig into that. You may notice, however, that I didn't use as much of these tools as I would have liked to (especially the design system), as by the time I was getting familiar with them I had to focus on delivering the assignment.

---

## Further work if I'd had more time

- **Design improvements:**
  - Thoroughly test responsiveness across different devices and screen sizes.
  - Thoroughly test design (fonts, colors, etc.) across different browsers and devices.
  - Unify CSS approach further (e.g. use Terra's design system for most of the project).

- **Accessibility improvements:**
  - Thoroughly test accessibility across different browsers, devices and accessibility needs.
  - Ensure all interactive elements are keyboard accessible.
  - Add ARIA live regions for dynamic content.
  - Test with screen readers and improve color contrast if needed.

- **Performance improvements:**
  - Thoroughly test performance across different browser and devices.
  - Use an image CDN for automatic resizing and modern formats.
  - Extract and inline critical CSS for faster first paint.
  - Split code and lazy-load heavy JS only where needed.

---