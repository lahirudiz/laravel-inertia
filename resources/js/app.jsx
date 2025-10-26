// resources/js/app.jsx
import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from '@/Layouts/Layout';

createInertiaApp({
  resolve: (name) => {
    const modules = import.meta.glob('./Pages/**/*.{jsx,tsx,js,ts}', { eager: true });

    const pageModule =
      modules[`./Pages/${name}.jsx`] ??
      modules[`./Pages/${name}.tsx`] ??
      modules[`./Pages/${name}.js`] ??
      modules[`./Pages/${name}.ts`];

    if (!pageModule?.default) {
      throw new Error(`Inertia page not found: ${name}`);
    }

    pageModule.default.layout = pageModule.default.layout || ((page) => <Layout>{page}</Layout>);

    return pageModule;

  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
