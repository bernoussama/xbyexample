---
layout: "@layouts/MdLayout.astro"
title: StringBuilder
author: Oussama Bernou
description: "Java String Builder class"
image:
  url: "https://www.oracle.com/a/ocom/img/social-og-java-logo-1200x628.jpg"
  alt: "ORACLE Java illustration"
pubDate: 2024-11-28
tags: ["java"]
---

<div class="example-body"></div>
`StringBuilder` is a class that let you build strings without having to create intermediate strings because of the immutable nature of `String`

> ⚠️ `StringBuilder` is not a `String`

- Some methods such as `substring`, `indexOf`, `charAt` are identical to that of String class
- Extra methods are available: `append`, `insert`, `delete`, `reverse`.
- Sequence of chars must be continuous, it may not have gaps of no characters at all.
  It is useful when the fully constructed String is not required until the end of some processing

</div>

<div class="example-snippet">

```java
public class StringBuilderEx {
  public static void main(String[] args) {
    // create a StringBuilder instance
    StringBuilder stringB = new StringBuilder();
    System.out.println("initial capacity: " + stringB.capacity());
    System.out.println("initial length: " + stringB.length());
    // concatenate to a string builder instance
    stringB.append("this is a");
    stringB.append("StringBuilder instance");

    // delete one char at idx 0
    stringB.delete(0,1);

    // insert char "T" at idx 0
    stringB.insert(0,"T");
    stringB.insert(9," ");
    System.out.println("capacity: " + stringB.capacity());
    System.out.println("length: " + stringB.length());

    // turn StringBuilder instance to a String
    String realString = stringB.reverse().toString();
    System.out.println(realString);
  }
}
```

```bash
javac StringBuilderEx.java # compile
java StringBuilderEx # run
```

- output:

```text
initial capacity: 16
initial length: 0
capacity: 34
length: 32
ecnatsni redliuBgnirtS a si sihT
```

</div>
