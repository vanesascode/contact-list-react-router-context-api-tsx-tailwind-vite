# Contact List + React + React Router + Context API + TypeScript + Tailwind + Vite

Contact List using 4GeeksAcademy API - You can create and keep an agenda of contacts:

![22-9-2023](https://github.com/vanesascode/contact-list-react-router-context-api-tsx-tailwind-vite/assets/131259155/257deb0c-df43-42c1-89c7-5de15739b61f)

Visit it [HERE](https://contact-list-react-router-context-api-tsx-vanesascode.vercel.app)

❗ Since this app is only build with React as an all in one page app, you may encounter the 404 error when refreshing in certain points. Just go back to the previous URL if that happens.

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

## 🌟REACT-ROUTER

- [x] Install: `npm install react-router-dom`
- [x] Import: `import { BrowserRouter, Route, Switch } from 'react-router-dom';`

- [x] Create your Router in the higher component. Set the components you always want to appear, outsite of the Routes wrapping:

```
function App() {

  return (
    <>
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/new" element={<ContactForm />} />
          </Routes>
        <Footer/>
        </Router>
      </div>
    </>
  );
}
```

### useNavigate (function to go to another path)

To be able to use it, the component has to be inside the `Router` wrapping.

```
import { useNavigate } from "react-router-dom";

const handleClick = () => {
    navigate("/new");
  };

```

## 🌟CONTEXT-API

- [x] Create a separate file and import { createContext } (in this case it is in the `DataContext.tsx` file, in the folder `context`)

- [x] Create a `Context`. With Typescript, you'll first need to create a context type:

```
interface DataContextType {
  contactList: ContactInterface[] | null;
  setContactList: Dispatch<React.SetStateAction<ContactInterface[]>>;
  buttonOn: boolean;
  setButtonOn: Dispatch<React.SetStateAction<boolean>>;
}

//CONTEXT://

const DataContext = createContext<DataContextType>({
  contactList: null,
  setContactList: () => {},
  buttonOn: false,
  setButtonOn: () => {},
});
```

- [x] Create a `Provider` function with all the states you want to store in you context api.

- [x] In you return, wrap children with the Provider:

```
  return (
    <DataContext.Provider
      value={{ contactList, setContactList, buttonOn, setButtonOn }}
    >
      {children}
    </DataContext.Provider>
  );

```

- [x] In your `App.tsx` file or in your higher one in the tree, wrap all the components you want to benefit from the context api with the provider:

```
return (
    <>
      <div className="sm:max-container">
        {/* ROUTES */}
        <Router>
          <DataProvider>
            {/* NAVBAR */}
            <Navbar />
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/new" element={<ContactForm />} />
            </Routes>
          </DataProvider>
        </Router>
      </div>
    </>
  );
```
