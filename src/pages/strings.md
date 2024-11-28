---
layout: ../layouts/MdLayout.astro
title: Strings
author: Oussama Bernou
description: "Java Strings"
image:
  url: "https://www.oracle.com/a/ocom/img/social-og-java-logo-1200x628.jpg"
  alt: "ORACLE Java illustration"
pubDate: 2024-11-28
tags: ["java", "strings"]
---

<div class="example-body">

A Java `String` is a class `java.lang.String` that represents an **immutable** sequence of `UTF-16` encoded characters. And a character is 16bit value.

> Note that in Java `String` is a class not a primitive.

the JVM(Java Virtual Machine) can optimize memory allocated by maintaining a single copy of each String literal in the **String Pool** memory area.

> ⚠️ **a `String` instantiated using the `new` keyword are not interned**

</div>

<div class="example-snippet">

```java
public class StringsExample {
  public static void main(String[] args) {
    // strings can contain emojis
    String s = "☕";
    // strings can be instantiated using ""
    String a = "hello";
    // or using the new keyword
    String b = new String("world");

    String c = b.intern();
    // strings can be concatenated using + operator
    String sentence = a + b + " " + s;
    System.out.println(sentence);
    // String length
    System.out.println("length: " + sentence.length());
  }
}
```

- compile and run

```bash
 javac StringsExample.java
 java StringsExample
```

- output

```text
helloworld
length: 12
```
