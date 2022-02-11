---
id: style-your-graphs-in-memgraph-lab
title: Style your graphs in Memgraph Lab
sidebar_label: Style your graphs in Memgraph Lab
---

### Introduction

In this tutorial, you will learn how to use Style script to add style to your graphs. You will use the Memgraph sandbox site that runs Memgraph Lab to try out some styling.


## Prerequisites

For this tutorial, there are no particular  prerequisites. All that you need is a web browser.


## Step 1 — Connecting to Memgraph sandbox

First, you will connect to [Memgraph sandbox Europe backpacking](https://playground.memgraph.com/sandbox/europe-backpacking). When the sandbox is loaded, do the following:

1. Expand **Sample Query Examples**.
2. Run the first query to display the shortest path from Spain to Russia.
3. Click the cogwheel icon to open **Style editor**

![style-graphs-open-style-editor](../data/tutorials/style-your-graphs-in-memgraph-lab/style-graphs-open-style-editor.png)

You will see some code already in the style editor. In the next few steps you will learn how to style your graph with colors and images.

## Step 2 — Using colors and borders to style graph nodes

With a Style editor in front of you, you are ready to style your graph! You will use Style editor to modify the existing style and add some new style rules.
First, you will modify the code that defines node style. Look for this section of the code:

```nocopy
@NodeStyle {
  size: 50
  border-width: 5
  border-color: #ffffff
  shadow-color: #bab8bb
  shadow-size: 6
}
```
This part of the code is called [directive](https://memgraph.com/docs/memgraph-lab/style-script/reference-guide#directives), and you will use it to define look and feel of the nodes. 

For start, you will make nodes smaller but with larger and darker shadow. You need to update the values for properties `size`, `shadow-color` and `shadow-size`. Set the value of `size` to `35`, `shadow-color` to `#333333` and `shadow-size` to `20`. Your code should look like this:

```
@NodeStyle {
  size: 35
  border-width: 5
  border-color: #ffffff
  shadow-color: #333333
  shadow-size: 20
}
```
Click **Apply** to see what your graph looks like now.

![style-graphs-node-size](../data/tutorials/style-your-graphs-in-memgraph-lab/style-graphs-node-size.png)

Now change the color of the nodes from red to gold and you will make them orange on hover. Find the following code:

```nocopy
@NodeStyle HasLabel?(node, "Country") {
  color: #dd2222
  color-hover: Darker(#dd2222)
  color-selected: #dd2222
}
```
 Update value for `color` to `#ffd700` and `color-hover` to `#ffa500`. The updated code should look like this:

```
@NodeStyle HasLabel?(node, "Country") {
  color: #ffd700
  color-hover: #ffa500
  color-selected: #dd2222
}
```
Don't forget to click **Apply** to see your updated graph.

![style-graphs-node-colors](../data/tutorials/style-your-graphs-in-memgraph-lab/style-graphs-node-colors.png)


## Step 3 — Add images to the nodes

Now that you have all the colors and borders in place, it is time to add images to the nodes. You will add images to the first and last node. As a source, you will use two images from Wikipedia. Each of the two nodes will have a different image. You will use a predicate to assign a value to a node with a specific node value.

To display two images add the following code at the end of the style script:

```
@NodeStyle Equals?(Property(node, "name"), "Russia") {
   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png"
}

@NodeStyle Equals?(Property(node, "name"), "Spain") {
  image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"
 }
 ```

Click **Apply** to update the style of your graph. Your graph is looking better with each step, isn't it?

![style-graphs-node-with-images](../data/tutorials/style-your-graphs-in-memgraph-lab/style-graphs-node-with-images.png)

## Step 4 — Using colors to style graph relationships

With all of the nodes looking just the way you have wanted, it is time to style the relationships between them. You will represent your relationships as straight, thin lines with no arrows. To do that, locate the `@EdgeStyle` directive and the following code:

```nocopy
@EdgeStyle {
  width: 3
  label: Type(edge)
}
```
Now replace that code with this one:

```
@EdgeStyle {
  width: 1
  label: Type(edge)
  arrow-size: 0
  type: "straight"
  color: #6AA84F
}
```

Click **Apply**, and your relationships will have new style!

![style-graphs-relationships-colors](../data/tutorials/style-your-graphs-in-memgraph-lab/style-graphs-relationships-colors.png)

### Step 5 - Checking the final result

We are at the end of this tutorial. Move the nodes around to get the final look. Your result could look similar to the image below.

![style-graphs-graph-with-new-style](../data/tutorials/style-your-graphs-in-memgraph-lab/style-graphs-graph-with-new-style.png)

The complete styling code for this graph is:

```
@NodeStyle {
  size: 35
  border-width: 5
  border-color: #ffffff
  shadow-color: #333333
  shadow-size: 20
}

@NodeStyle Greater?(Size(Labels(node)), 0) {
  label: Format(":{}", Join(Labels(node), " :"))
}

@NodeStyle HasLabel?(node, "Country") {
  color: #ffd700
  color-hover: #ffa500
  color-selected: #dd2222
}

@NodeStyle HasProperty?(node, "name") {
  label: AsText(Property(node, "name"))
}

@EdgeStyle {
  width: 1
  label: Type(edge)
  arrow-size: 0
  type: "straight"
  color: #6AA84F
}

@NodeStyle Equals?(Property(node, "name"), "Russia") {
   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png"
}

@NodeStyle Equals?(Property(node, "name"), "Spain") {
  image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"
 }
```

## Conclusion

In this tutorial, you have learned how to style graphs using Memgraph Lab. You have seen how to style both nodes and relationships. We hope that you have had fun going through this tutorial.
You can continue playing in Playground, or even better  [download and install Memgraph](/docs/memgraph/installation) on your computer. 

To get the taste of some more advanced styling features, head to our blog post [How to style your graphs in Memgraph Lab](https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab). Also, be sure to check out [Quick start guide to Style script](/docs/memgraph-lab/style-script/quick-start) or take a deep dive into the [Style script reference guide](http://localhost:3000/docs/memgraph-lab/style-script/reference-guide) to learn more about Style script.
