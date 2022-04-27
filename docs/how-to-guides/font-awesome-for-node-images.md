---
id: font-awesome-for-node-images
title: Use Font Awesome icons for node images
sidebar_label: Use Font Awesome for node images
---

[![Related - Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/style-your-graphs-in-memgraph-lab.md) [![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab)

[Font Awesome](https://fontawesome.com/) is a popular icon library. You can't
use those icons directly or SVG file as background images, but there is a
workaround. Memgraph Lab supports the following image formats: `png`, `jpeg`,
`gif` (static, not dynamic) and `webp`.

## Convert the icon into PNG file ##

First, you need to find the icon that you want to convert to PNG. Go to [Font
Awesome] (https://fontawesome.com/icons/) website and locate the icon that you
want to use as a node background and download it as SVG file.

<img src={require('../data/how-to-guides/font-awesome-locate-icon.png').default} className={"imgBorder"}/>

Next, convert SVG file to PNG with your favorite image editing program, or you
can use one of the dozen online services for file conversion. 

:::info

You can use programs such as [Gimp](https://www.gimp.org/) or
[Inkscape](https://inkscape.org/) to convert SVG to PNG. 

:::

## Upload PNG file to a server ##

To use PNG file as a node background, you need to upload it to some web
server. If you are using an image hosting service, make a note of the URL. Some of
those services use URLs unrelated to the image name and are hard to come
by at a latter time.

## Update the graphic style for your graph ##

Now all you need to do is add the code for your image inside Graph Style Editor
in Memgraph Lab. You can take a look at [Graph Style Script @NodeStyle directive
properties](/memgraph-lab/style-script/gss-nodestyle-directive#image-url-string)
for additional info on the syntax. Once you apply the style, you will see the
changes to your nodes.

<img src={require('../data/how-to-guides/font-awesome-node-style.png').default} className={"imgBorder"}/>