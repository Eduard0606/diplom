import { resolve } from 'path'

export default {
  base: "/diplom/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        card: resolve(__dirname, 'cardForm.html'),
        clock: resolve(__dirname, 'clock.html'),
        modal: resolve(__dirname, 'modalWindow.html'),
        projects: resolve(__dirname, 'projects.html'),
      }
    }
  }
}