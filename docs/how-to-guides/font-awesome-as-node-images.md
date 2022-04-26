---
id: font-awesome-as-images
title: Use Font Awesome as node images
sidebar_label: Use Font Awesome as node images
---

[![Related - Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/style-your-graphs-in-memgraph-lab.md) [![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab)

[Font Awesome](https://fontawesome.com/) is a popular icon library. You can not use those icons directly or SVG file as background images but there is a workaround. Supported
format are `png`, `jpeg`, `gif` (static, not dynamic) and `webp`.

## 1. Convert the icon into PNG file ##

First you need to find the icon that want to convert to PNG. Go to [Font Awesome] (https://fontawesome.com/icons/) web site and locate the icon that you want to use as a node background and download it as SVG file. Next, convert SVG file to PNG with your favorite image editing program or you can use one of the dozen online services for file conversion. 

:::info

You can use programs such as [Gimp](https://www.gimp.org/) or [Inkscape](https://inkscape.org/) to convert SVG to PNG. 

:::



## 2. Upload PNG file to a server ##

In order to use PNG file as a node background you need to upload it to some web server. If you are using image hosting service make a note of the URL. Some of those services use unique URLs fro images and this URLs are not related to image name.

## 3. Update GSS style ##
