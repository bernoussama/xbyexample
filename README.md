# Java by Example

[Website](java.bernoussama.com)

## Motivation

i'm a huge fan of [Go by Example](https://gobyexample.com), it was great reference when building Go projects.As i was learning Java i felt the need for something like it, and i didn't find any, so obviously i had to build it, and here we are.

I decided to go with Astro because of markdown support it's the best, i write examples in markdown and Astro generate the html, that's all i needed.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └──
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│       └── *.md
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👏 Contributing

I would love your help! Contribute by forking the repo and opening pull requests.
All pull requests should be submitted to the main branch.

## 👀 Acknowledgment

- [Go by Example](https://gobyexample.com)
- [Learn more about Java](https://dev.java/getting-started)
