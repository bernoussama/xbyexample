# X by Example

[xbyexample.dev][site] is a website that serve as a reference for programming languages via annotated example programs.

## Motivation

I have a lot of unorganised notes of programming languages and i needed somewhere to put them, so i built this website to organise my notes, keep them as a reference and share them with the community.

I decided to go with [Astro][astro] because of markdown support, i write examples in markdown and Astro generate the static HTML, that's all i needed.

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
│       └── [language]
│           └── index.astro
│           └── *.md
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

## 👏 Contributing

I would love your help! Contribute by forking the repo and opening pull requests.
All pull requests should be submitted to the main branch.

### How to Contribute

- Fork the repo
- Clone your fork locally
- install dependencies(make sure you have node installed)
- Add an Example
  - to add an example, run `npm run add -l <language> <example-name>`, a script will generate a markdown named `<example-name>.md` in the `src/pages/<language>`, containing a boilerplate to add your example.

## License

> This project is [MIT][license] licensed

> The examples are licensed under [CreativeCommons by 3.0 ][ccby3.0]

## 👀 Acknowledgments

- Thanks [Go by Example][gobyexample] for inspiring this project.
- Made with [Astro][astro]

[site]: https://xbyexample.dev
[astro]: https://astro.build
[gobyexample]: https://gobyexample.com
[ccby3.0]: https://creativecommons.org/licenses/by/3.0/
[license]: /LICENSE
