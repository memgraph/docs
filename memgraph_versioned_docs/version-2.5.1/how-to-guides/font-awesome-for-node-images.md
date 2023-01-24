---
id: font-awesome-for-node-images
title: How to use Font Awesome icons for node images
sidebar_label: Use Font Awesome for node images
---

[![Related - Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/style-your-graphs-in-memgraph-lab.md) [![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab)

[Font Awesome](https://fontawesome.com/) is a popular icon library. If you ever
tried to use a font awesome icon as a background image for a node, you might
have noticed you were not able to do that by using the icon directly. Memgraph
Lab doesn't support `SVG` format at this time, but it supports `PNG`, `JPEG`,
`GIF` and `WEBP` formats. Here is a workaround for this problem.

1. Find the Font Awesome icon that you want to convert to PNG. Go to the [Font
   Awesome](https://fontawesome.com/icons/) website and locate the icon that you
   want to use as a node background and download it in SVG format.

<img src={require('../data/how-to-guides/font-awesome-locate-icon.png').default} className={"imgBorder"}/>


2. Convert SVG file to PNG with your favorite image editing program, or you can use one of the dozen online services for file conversion.


:::info

You can use programs such as [Gimp](https://www.gimp.org/) or
[Inkscape](https://inkscape.org/) to convert SVG to PNG.

:::

3. Upload the PNG file to a web server so that you can set it for node background.
   If you are using an image hosting service, make a note of the URL. Some of those
   services use URLs unrelated to the image name and are hard to come by at a
   latter time.

4. Edit the code of the Graph Style Editor in Memgraph Lab by adding the `image-url` property to the `@NodeStyle` class. Here is an example:

```
image-url: "https://i.imgur.com/bLF8qWQ.png"
```

Your `@NodeStyle` block of code should look something like this:

```
@NodeStyle {
  size: 6
  color: #DD2222
  border-width: 0.6
  border-color: #1d1d1d
  font-size: 3
  image-url: "https://i.imgur.com/bLF8qWQ.png"
}
```

You can look at [Graph Style Script @NodeStyle directive
properties](/memgraph-lab/style-script/gss-nodestyle-directive#image-url-string)
for additional info on the syntax.

5. Apply the style and review changes.

<img src={require('../data/how-to-guides/font-awesome-node-style.png').default} className={"imgBorder"}/>
