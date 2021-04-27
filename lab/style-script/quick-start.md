---
id: quick-start
title: Quick start guide to Style script
sidebar_label: Quick start
---

This guide will show you how to easily get started with style script. For 
complete list available features consult 
[style script reference](./reference-guide.md).

## Graph example

In this guide, we will use an example graph with European countries and cities. 
The data can be found [here](https://docs.memgraph.com/memgraph/tutorials-overview/backpacking-through-europe).
Countries have the label `Country`, while cities have the label `City`. All 
nodes have the property `name`. Cities have many additional properties, 
including `country` (containing country) and `drinks_USD` (average drink price).

## Setting graph labels

We want to label country nodes with country names, and city nodes with city,
names and containing country names. To achieve that we can use to directives.
The first one selects countries and the second one selects cities.

```
@NodeStyle HasLabel?(node, "Country") {
  label: Format(Property(node, "name"))
}

@NodeStyle HasLabel?(node, "City") {
    label: Format(Format("{cityName}, {countryName}"),
                  Property(node, "name"),
                  Property(node, "country_name"))
}
```

The content inside the curly braces is ignored, but can be helpful for clarity.

## Setting node images

It would be nice to display flags in the country nodes. This can be achieved 
using URLs of flag images. There is a website that hosts many world flags so we
can use images from [there](https://cdn.countryflags.com). Their API expects a 
country name as a part of URL path so we will make the following directive.

```
@NodeStyle HasLabel?(node, "Country") {
  image-url: Format("https://cdn.countryflags.com/thumbs/{}/flag-800.png",
                    LowerCase(Proeprty(node, "name")))
}
```

Unfortunately, this won't work for all countries. Flags for England and Scotland 
cannot be found on the website because they aren't real countries. So we can 
get around that by providing custom directives below the general one above.

```
@NodeStyle Equals?(Property(node, "name"), "England") {
   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"
}

@NodeStyle Equals?(Property(node, "name"), "Scotland") {
  image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png"
 }
```

Also, URLs for a country name with whitespace inside them don't so we also have 
to provide custom URLs for the Czech Republic and Bosnia and Herzegovina.

```
@NodeStyle Equals?(Property(node, "name"), "Bosnia and Herzegovina") {
   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png"
 }

 @NodeStyle Equals?(Property(node, "name"), "Czech Republic") {
   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png"
 }
```

Now all the country nodes have their flags displayed.

## Highlighting interesting nodes

We can highlight nodes with low drink price in the following way. We want to 
use a beer image and a bigger size along with a red shadow.

```
@NodeStyle And()
     HasLabel?(node, "City"),
     Less?(Property(node, "drinks_USD"), 5)) {
  size: 50
  image-url: "https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg"
  shadow-color: red
 }
```
