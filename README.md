# React Flow App
# Creado por Jose Molina.

Una aplicación construida con **Next.js**, **React**, **TypeScript** y **Zustand** que permite a los usuarios autenticarse, crear flujos automatizados y visualizar dichos flujos de forma interactiva usando **React Flow**.

## Funcionalidades principales

- Sistema de autenticación básico.
- Rutas públicas y protegidas.
- Formulario dividido en tres secciones con validaciones:
  - Texto (Título + Descripción)
  - Imagen o Video, con texto de descripción
  - Nota + Enlace (cargando desde un archivo `.txt`)
- Manejo de estado global con Zustand.
- Visualización del flujo mediante nodos interactivos en React Flow.
- Edición de nodos con persistencia en el store.
- Estilizado con Material UI.

---

## Tecnologías utilizadas

- [Next.js 15+](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Flow](https://reactflow.dev/)
- [Material UI](https://mui.com/)
- [Manejo básico de archivos (FileReader, Object URLs)](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)

---

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
npm run dev
