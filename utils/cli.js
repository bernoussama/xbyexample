import { writeFile, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { program } from "commander";

function createLanguagePage(dirPath) {
  mkdirSync(dirPath, { recursive: true });
  const filePath = join(dirPath, `index.astro`);
  const content = `---
import Layout from '@layouts/Layout.astro';
const allExamples = await Astro.glob('./*.md');

const path = Astro.url.pathname
import {capitalize} from '@/utils'

---

<Layout title={capitalize(path.substring(path.lastIndexOf("/")+1))} description=''>
  <main>
    <hgroup>
<p>
<!-- language description -->
</p>
    </hgroup>
<br/>
    <ul>
    {allExamples.map((post) => <li><a href={post.url}>{capitalize(post.frontmatter.title)}</a></li>)}

    </ul>
  </main>
</Layout>
`;

  writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error creating file:", err);
      process.exit(1);
    }
    console.log(`File created: ${filePath}`);
  });
}

// Get the current directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

program
  .description("Add an example for a language")
  .option("-l, --language <language>", "programming language of the example")
  .parse();

const options = program.opts();
const fileName = program.args[0];
const language = options.language;

if (!fileName) {
  console.error("Please provide a file name as the first argument.");
  process.exit(1);
}

if (!language) {
  console.error("error: specify the language using '-l' flag");
  process.exit(1);
}

// Construct the full file path
const dirPath = join(__dirname, "../src/pages/", `${language}/`);

if (!existsSync(dirPath)) {
  console.log("creating language page");
  createLanguagePage(dirPath);
}

const filePath = join(dirPath, `${fileName}.md`);

const today = new Date();
const formattedDate = today.toISOString().split("T")[0];

const content = `---
layout: "@layouts/MdLayout.astro"
title: <title here>
author: <your name>
description: "enter description here"
image:
  url: ""
  alt: "illustration"
pubDate: ${formattedDate}
tags: ["${language}"]
---

<div class="example-body">

<!-- text here -->

</div>

<div class="example-snippet">

\`\`\`${language}
<!-- snippet here -->
\`\`\`

\`\`\`bash
 # compile
 # run
\`\`\`

\`\`\`text
<!-- output here -->
\`\`\`

</div>
`;

// Create the file with content
writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Error creating file:", err);
    process.exit(1);
  }
  console.log(`File created: ${filePath}`);
});
