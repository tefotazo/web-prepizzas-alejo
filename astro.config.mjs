import { defineConfig } from 'astro/config';

export default defineConfig({
  // Para que las clases pasadas a <Letras> reciban los estilos de la página.
  scopedStyleStrategy: 'class',
  vite: {
    server: {
      // Permite acceder al dev server desde el tunel.
      allowedHosts: ['alejo.tt.estefano.ai'],
    },
  },
});
