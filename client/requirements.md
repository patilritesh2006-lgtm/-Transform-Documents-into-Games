## Packages
framer-motion | Complex animations for the game interface and page transitions
lucide-react | Beautiful icons for the UI
clsx | Conditional class names
tailwind-merge | Merging tailwind classes safely

## Notes
- The app uses a playful, gamified aesthetic with bright colors and rounded corners.
- Animations are critical for the "game" feel.
- Fonts: 'Fredoka' for headings (rounded, friendly) and 'Quicksand' for body text (readable, modern).
- API endpoints:
  - POST /api/uploads (multipart/form-data)
  - POST /api/content/generate (JSON body: { uploadId })
  - GET /api/content (List generated content)
  - GET /api/content/:id (Get specific content with quiz data)
