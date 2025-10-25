// resources/js/app.jsx
import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.{jsx,tsx,js,ts}', { eager: true });
    return (
      pages[`./Pages/${name}.jsx`] ??
      pages[`./Pages/${name}.tsx`] ??
      pages[`./Pages/${name}.js`] ??
      pages[`./Pages/${name}.ts`]
    )?.default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
