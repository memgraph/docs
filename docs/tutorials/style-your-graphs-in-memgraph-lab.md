---
id: style-your-graphs-in-memgraph-lab
title: Style your graphs in Memgraph Lab
sidebar_label: Style your graphs in Memgraph Lab
---

### Introduction

In this tutorial, you will learn how to use Style script to add style to your graphs. You will use  Memgraph sandbox site to try out some of the styling.


## Prerequisites

For this tutorial there are no special prerequisites. All that you need for is a web browser.


## Step 1 — Connecting to Memgraph sandbox

First, you will connect to [Memgraph sandbox Europe backpacking](https://playground.memgraph.com/sandbox/europe-backpacking). When the sandbox is loaded do the following:

1. Expand **Sample Query Examples**.
2. Run the first query to display the shortest path from Spain to Russia.
3. Click the cogwheel icon to open **Style editor**

![style-graphs-open-style-editor](../data/tutorials/style-your-graphs-in-memgraph-lab/style-graphs-open-style-editor.png)

## Step 2 — Adding a style to a graph

With a Style editor in front of you, you are ready to style your graph!

## Step 3 — Installing Memgraph Lab and connecting to Memgraph

Start ...

## Step 4 — Testing the Memgraph Lab's connection to Memgraph

You ...

## Conclusion

In this tutorial, you have learned how to style graphs using Memgraph Lab. 

You can continue playing in Playground, or even better  [download and install Memgraph](/docs/memgraph/installation) on your computer.

Be sure to checkout [Quick start guide to Style script](/docs/memgraph-lab/style-script/quick-start) or take a deep dive into [Style script reference guide](http://localhost:3000/docs/memgraph-lab/style-script/reference-guide) to learn more about Style script.


:::info

This code will be used in steps that follows 

:::

```
@NodeStyle {
  size: 50
  border-width: 5
  border-color: #ffffff
  shadow-color: #bab8bb
  shadow-size: 6
}

@NodeStyle Greater?(Size(Labels(node)), 0) {
  label: Format(":{}", Join(Labels(node), " :"))
}

@NodeStyle HasLabel?(node, "Country") {
  color: #dd2222
  color-hover: Darker(#dd2222)
  color-selected: #dd2222
  font-family: "cursive"
}

@NodeStyle HasProperty?(node, "name") {
  label: AsText(Property(node, "name"))
}

@EdgeStyle {
  width: 4
  arrow-size: 1
  color: #ff8000
  label: Type(edge)
  color-hover: #ff0000
    font-family: "fantasy"
}

@NodeStyle Equals?(Property(node, "name"), "Russia") {
   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png"
}

@NodeStyle Equals?(Property(node, "name"), "Spain") {
  image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"
 }
 ```