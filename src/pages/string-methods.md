---
layout: ../layouts/MdLayout.astro
title: String Mehods/Operations
author: Oussama Bernou
description: "Java String Methods / Operations"
image:
  url: "https://www.oracle.com/a/ocom/img/social-og-java-logo-1200x628.jpg"
  alt: "ORACLE Java illustration"
pubDate: 2024-11-28
tags: ["java", "strings", "string operations", "string methods"]
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

    // substring from idx 0 to 5
    String hello = d.substring(0,5);
    System.out.println("substring: " + e);

    int firstL = hello.indexOf('L')
    System.out.println("index of char: " + firstL);

    int lastL = hello.lastIndexOf('L')
    System.out.println("last index of char: " + lastL);

    // char at idx 0
    char firstChar = hello.charAt(0);
    // if index is out of bounds it throws an exception
    System.out.println("char at index: " + firstChar);
  }
}
```

- compile and run

```bash
 javac StringsMethods.java
 java StringsMethods
```

- output

```text
trim: Hello
concat: HelloWorld
toLowerCase: helloworld
toUpperCase: HELLOWORLD
contains: true
substring: HELLO
index of char: 2
last index of char: 3
char at index: H
```
