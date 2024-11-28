---
layout: ../layouts/MdLayout.astro
title: String Operations
author: Oussama Bernou
description: "Java String Operations/Methods"
image:
  url: "https://www.oracle.com/a/ocom/img/social-og-java-logo-1200x628.jpg"
  alt: "ORACLE Java illustration"
pubDate: 2024-11-28
tags: ["java", "strings", "string operations"]
---

<div class="example-body">
<br/>

Here's a sample of string operations available in Java as methods for the `String` class.

</div>

<div class="example-snippet">

```java
public class StringsExample {
  public static void main(String[] args) {

    String a = " Hello ";

    a = a.trim();
    System.out.println("trim: " + a);

    String b = a.concat("World");// or a+"World"
    System.out.println("concat: " + b);

    String c = b.toLowerCase();
    System.out.println("toLowerCase: " + c);

    String d = b.toUpperCase();
    System.out.println("toUpperCase: " + d);

    boolean e = d.contains("W");
    System.out.println("contains: " + e);
  }
}
```

- compile and run

```bash
 javac StringsExample.java
 java StringsExample
```

```
trim: Hello
concat: HelloWorld
toLowerCase: helloworld
toUpperCase: HELLOWORLD
contains: true
```
