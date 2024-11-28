import { writeFile } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
// Get the current directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Get the first command-line argument
// Get the first command-line argument
const fileName = process.argv[2];

if (!fileName) {
  console.error("Please provide a file name as the first argument.");
  process.exit(1);
}

// Construct the full file path
const filePath = join(__dirname, "../src/pages", `${fileName}.md`);

const today = new Date();
const formattedDate = today.toISOString().split("T")[0];

const content = `---
layout: ../layouts/MdLayout.astro
title: <title here>
author: <your name>
description: "enter description here"
image:
  url: "https://www.oracle.com/a/ocom/img/social-og-java-logo-1200x628.jpg"
  alt: "ORACLE Java illustration"
pubDate: ${formattedDate}
tags: ["java"]
---

<div class="example-body">

<!-- text here -->

</div>

<div class="example-snippet">

\`\`\`java
<!-- snippet here -->
\`\`\`

\`\`\`bash
javac <program>.java # compile
java <class> # run
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
