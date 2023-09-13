# Contact List + React + React Router + Context API + TypeScript + Tailwind + Vite

## 🌟VITE

- To create a project:

- [x] run: `npm create vite@latest`

select 'React' as the framework and select 'Javascript' as the variant.

- [x] run: `npm install` to install all the dependencies

---

- To run the project:

- [x] run: `npm run dev`

---

## 🌟TAILWIND

Go to the frameworks guides. [In this case for Vite](https://tailwindcss.com/docs/guides/vite)

- [x] `npm install -D tailwindcss postcss autoprefixer`

- [x] `npx tailwindcss init -p`

To generate a TypeScript config file, use the --ts flag:

- [x] `npx tailwindcss init --ts`

💡 Generate a complete configuration file that includes all of Tailwind’s default configuration:

- [x] `npx tailwindcss init --full`

---

## 🌟DEPLOYMENT - VITE & VERCEL

Prepare your Vite application:

- [x] Run `npm run build`

In Vite, running the npm run build command triggers the build process, which generates a production-ready build of your application, the folder `dist`

If you don't have Vercel installed:

- [x] Create an account in Vercel.com
- [x] Install the Now package in the terminal, globally: `npm install now -g`
- [x] Run: `now` in the terminal, inside the root folder of the project.
- [x] The terminal will ask you your email.
- [x] Then, you'll receive an email in which you will have to verify your credentials.

Deployment steps:

- [x] Run: `now` again.
- [x] It will ask you if you want to deploy. You say Y
- [x] Asks the scope (your name)
- [x] Asks if you want to link to existing project. You say N
- [x] In which directory is your code located? If it's in the root folder just leave it like this: ./
- [x] You want to override the settings? You say N
- [x] You can now get the URL that is in the ✅ production line. It's live!

Add new changes to the live URL

- [x] Run: `now --prod` Then, changes are saved in the same URL you published before.

---
