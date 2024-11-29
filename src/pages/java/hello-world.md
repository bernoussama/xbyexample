---
layout: "@layouts/MdLayout.astro"
title: Hello World
author: Oussama Bernou
description: "Java Hello World"
image:
  url: "https://www.oracle.com/a/ocom/img/social-og-java-logo-1200x628.jpg"
  alt: "ORACLE Java illustration"
pubDate: 2024-11-27
tags: ["java", "hello world"]
---

<div class="example-body">

Our first program obviously will print the classic “hello world” message. Here’s the full source code.

<br/>

To run the program compile using `javac` command and run the compiled class using `java` command.

</div>

<div class="example-snippet">

```java
public class HelloWorld {
  // to run a Java program it should have a main method
  public static void main(String[] args) {
      // print line to stdout
      System.out.println("Hello, World!");
  }
}
```

- compile and run

```bash
 javac HelloWorld.java # compile
 java HelloWorld # run
```

- or run directly

```bash
java HelloWorld.java # compile and run
```

- output

```text
Hello, World!
```
