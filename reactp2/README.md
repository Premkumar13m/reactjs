# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# TO CONFIGURE REACT WITH THE TAILWIND 
>go through this guide :  https://tailwindcss.com/docs/guides/vite
>to install the tailwindcss:-
>step 1 :npm install -D tailwindcss postcss autoprefixer 
        npx tailwindcss init -p

>step 2:     Add the paths to all of your template files in your tailwind.config.js file.

          content: [
                   "./index.html",
                   "./src/**/*.{js,ts,jsx,tsx}",
                 ],

>step 3: Add the Tailwind directives to your CSS
         Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
         
         @tailwind base;
         @tailwind components;
         @tailwind utilities;

>step 3: to run the project
       
       npm run dev



# EXTRA


>to use image in the project used the website "pexel" or "devui"
>add extension in vs code i.e., simple react snippets
after that type rfce and press enter after that your react snippets will be ready to use.
