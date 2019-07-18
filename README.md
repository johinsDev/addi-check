## BAckground Check Test To Addi

This a simple background check. [Demo](https://addi-background.netlify.com)

# run

Run npx lerna bootstrap and yarn start:web

[Yarn](https://github.com/yarnpkg/)

```sh
npx lerna bootstrap  && yarn start:web

```

Go to [localhos:3000](http://localhost:3000)

## Docker

Run with docker

```sh
docker-compose up

```

Go to [localhos:4000](http://localhost:4000)

# Features

- **React router** [react-routing](https://github.com/ReactTraining/react-router) simple routing
- **Ramda** [ramda](https://github.com/ramda/ramda)
- **Test** [teact-testing-library](https://github.com/testing-library/react-testing-library)

# Organization

Modules structure

```
.
├──/src
│
│   ├──/modules -> a module is a set of views and components, for example the authentication module has submodules (login, forgot Password, and register)
│   │    ├──/module(example organization module)
│   │    │      ├──/__tests__
│   │    │      │
│   │    │      ui -> these components is only used for the module
│   │    │      │     └──/component (example estrure for a component)
│   │    │      │         ├──index.tsx
│   │    │      │         └──styles.ts
│   │    │      ├──index.tsx
│   │    │      └──styles.ts
│   │    └──/shared -> is a components shared between several modules
│   └── /utils
├── .env.example
├── .env
└── ...others configuration files
```

# Author

Johan Villamil

# License

MIT
