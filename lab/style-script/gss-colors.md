---
id: gss-colors
title: Graph Style Script colors
sidebar_label: GSS colors
---

## Built-in colors

Graph Style Script comes with built-in colors that you can use by
its name.

Example:

```
@NodeStyle {
  color: aquamarine
  color-hover: Darker(cyan)
}
```

Is the same as:

```
@NodeStyle {
  color: #7FFFD4
  color-hover: Darker(#00FFFF)
}
```

The color names come from a list of the [X11 colors](https://www.w3.org/TR/css-color-3/#svg-color)
supported by popular browsers with the addition of gray/grey variants from SVG 1.0.


| Color name            | HEX code                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| blue                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF0000' }}></span> #FF0000 |
| aliceblue             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F0F8FF' }}></span> #F0F8FF |
| antiquewhite          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FAEBD7' }}></span> #FAEBD7 |
| aqua                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FFFF' }}></span> #00FFFF |
| aquamarine            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#7FFFD4' }}></span> #7FFFD4 |
| azure                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F0FFFF' }}></span> #F0FFFF |
| beige                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F5F5DC' }}></span> #F5F5DC |
| bisque                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFE4C4' }}></span> #FFE4C4 |
| black                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#000000' }}></span> #000000 |
| blanchedalmond        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFEBCD' }}></span> #FFEBCD |
| blue                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#0000FF' }}></span> #0000FF |
| blueviolet            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8A2BE2' }}></span> #8A2BE2 |
| brown                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#A52A2A' }}></span> #A52A2A |
| burlywood             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DEB887' }}></span> #DEB887 |
| cadetblue             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#5F9EA0' }}></span> #5F9EA0 |
| chartreuse            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#7FFF00' }}></span> #7FFF00 |
| chocolate             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D2691E' }}></span> #D2691E |
| coral                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF7F50' }}></span> #FF7F50 |
| cornflowerblue        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#6495ED' }}></span> #6495ED |
| cornsilk              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFF8DC' }}></span> #FFF8DC |
| crimson               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DC143C' }}></span> #DC143C |
| cyan                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FFFF' }}></span> #00FFFF |
| darkblue              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00008B' }}></span> #00008B |
| darkcyan              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#008B8B' }}></span> #008B8B |
| darkgoldenrod         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B8860B' }}></span> #B8860B |
| darkgray              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#A9A9A9' }}></span> #A9A9A9 |
| darkgreen             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#006400' }}></span> #006400 |
| darkgrey              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#A9A9A9' }}></span> #A9A9A9 |
| darkkhaki             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#BDB76B' }}></span> #BDB76B |
| darkmagenta           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8B008B' }}></span> #8B008B |
| darkolivegreen        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#556B2F' }}></span> #556B2F |
| darkorange            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF8C00' }}></span> #FF8C00 |
| darkorchid            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#9932CC' }}></span> #9932CC |
| darkred               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8B0000' }}></span> #8B0000 |
| darksalmon            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#E9967A' }}></span> #E9967A |
| darkseagreen          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8FBC8F' }}></span> #8FBC8F |
| darkslateblue         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#483D8B' }}></span> #483D8B |
| darkslategray         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#2F4F4F' }}></span> #2F4F4F |
| darkslategrey         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#2F4F4F' }}></span> #2F4F4F |
| darkturquoise         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00CED1' }}></span> #00CED1 |
| darkviolet            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#9400D3' }}></span> #9400D3 |
| deeppink              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF1493' }}></span> #FF1493 |
| deepskyblue           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00BFFF' }}></span> #00BFFF |
| dimgray               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#696969' }}></span> #696969 |
| dimgrey               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#696969' }}></span> #696969 |
| dodgerblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#1E90FF' }}></span> #1E90FF |
| firebrick             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B22222' }}></span> #B22222 |
| floralwhite           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFAF0' }}></span> #FFFAF0 |
| forestgreen           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#228B22' }}></span> #228B22 |
| fuchsia               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF00FF' }}></span> #FF00FF |
| gainsboro             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DCDCDC' }}></span> #DCDCDC |
| ghostwhite            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F8F8FF' }}></span> #F8F8FF |
| gold                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFD700' }}></span> #FFD700 |
| goldenrod             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DAA520' }}></span> #DAA520 |
| gray                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#808080' }}></span> #808080 |
| green                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#008000' }}></span> #008000 |
| greenyellow           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#ADFF2F' }}></span> #ADFF2F |
| grey                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#808080' }}></span> #808080 |
| honeydew              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F0FFF0' }}></span> #F0FFF0 |
| hotpink               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF69B4' }}></span> #FF69B4 |
| indianred             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#CD5C5C' }}></span> #CD5C5C |
| indigo                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#4B0082' }}></span> #4B0082 |
| ivory                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFFF0' }}></span> #FFFFF0 |
| khaki                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F0E68C' }}></span> #F0E68C |
| lavender              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#E6E6FA' }}></span> #E6E6FA |
| lavenderblush         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFF0F5' }}></span> #FFF0F5 |
| lawngreen             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#7CFC00' }}></span> #7CFC00 |
| lemonchiffon          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFACD' }}></span> #FFFACD |
| lightblue             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#ADD8E6' }}></span> #ADD8E6 |
| lightcoral            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F08080' }}></span> #F08080 |
| lightcyan             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#E0FFFF' }}></span> #E0FFFF |
| lightgoldenrodyellow  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FAFAD2' }}></span> #FAFAD2 |
| lightgray             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D3D3D3' }}></span> #D3D3D3 |
| lightgreen            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#90EE90' }}></span> #90EE90 |
| lightgrey             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D3D3D3' }}></span> #D3D3D3 |
| lightpink             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFB6C1' }}></span> #FFB6C1 |
| lightsalmon           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFA07A' }}></span> #FFA07A |
| lightseagreen         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#20B2AA' }}></span> #20B2AA |
| lightskyblue          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#87CEFA' }}></span> #87CEFA |
| lightslategray        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#778899' }}></span> #778899 |
| lightslategrey        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#778899' }}></span> #778899 |
| lightsteelblue        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B0C4DE' }}></span> #B0C4DE |
| lightyellow           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFFE0' }}></span> #FFFFE0 |
| lime                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FF00' }}></span> #00FF00 |
| limegreen             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#32CD32' }}></span> #32CD32 |
| linen                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FAF0E6' }}></span> #FAF0E6 |
| magenta               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF00FF' }}></span> #FF00FF |
| maroon                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#800000' }}></span> #800000 |
| mediumaquamarine      | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#66CDAA' }}></span> #66CDAA |
| mediumblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#0000CD' }}></span> #0000CD |
| mediumorchid          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#BA55D3' }}></span> #BA55D3 |
| mediumpurple          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#9370DB' }}></span> #9370DB |
| mediumseagreen        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#3CB371' }}></span> #3CB371 |
| mediumslateblue       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#7B68EE' }}></span> #7B68EE |
| mediumspringgreen     | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FA9A' }}></span> #00FA9A |
| mediumturquoise       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#48D1CC' }}></span> #48D1CC |
| mediumvioletred       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#C71585' }}></span> #C71585 |
| midnightblue          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#191970' }}></span> #191970 |
| mintcream             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F5FFFA' }}></span> #F5FFFA |
| mistyrose             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFE4E1' }}></span> #FFE4E1 |
| moccasin              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFE4B5' }}></span> #FFE4B5 |
| navajowhite           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFDEAD' }}></span> #FFDEAD |
| navy                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#000080' }}></span> #000080 |
| oldlace               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FDF5E6' }}></span> #FDF5E6 |
| olive                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#808000' }}></span> #808000 |
| olivedrab             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#6B8E23' }}></span> #6B8E23 |
| orange                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFA500' }}></span> #FFA500 |
| orangered             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF4500' }}></span> #FF4500 |
| orchid                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DA70D6' }}></span> #DA70D6 |
| palegoldenrod         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#EEE8AA' }}></span> #EEE8AA |
| palegreen             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#98FB98' }}></span> #98FB98 |
| paleturquoise         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#AFEEEE' }}></span> #AFEEEE |
| palevioletred         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DB7093' }}></span> #DB7093 |
| papayawhip            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFEFD5' }}></span> #FFEFD5 |
| peachpuff             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFDAB9' }}></span> #FFDAB9 |
| peru                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#CD853F' }}></span> #CD853F |
| pink                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFC0CB' }}></span> #FFC0CB |
| plum                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DDA0DD' }}></span> #DDA0DD |
| powderblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B0E0E6' }}></span> #B0E0E6 |
| purple                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#800080' }}></span> #800080 |
| red                   | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF0000' }}></span> #FF0000 |
| rosybrown             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#BC8F8F' }}></span> #BC8F8F |
| royalblue             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#4169E1' }}></span> #4169E1 |
| saddlebrown           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8B4513' }}></span> #8B4513 |
| salmon                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FA8072' }}></span> #FA8072 |
| sandybrown            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F4A460' }}></span> #F4A460 |
| seagreen              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#2E8B57' }}></span> #2E8B57 |
| seashell              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFF5EE' }}></span> #FFF5EE |
| sienna                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#A0522D' }}></span> #A0522D |
| silver                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#C0C0C0' }}></span> #C0C0C0 |
| skyblue               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#87CEEB' }}></span> #87CEEB |
| slateblue             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#6A5ACD' }}></span> #6A5ACD |
| slategray             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#708090' }}></span> #708090 |
| slategrey             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#708090' }}></span> #708090 |
| snow                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFAFA' }}></span> #FFFAFA |
| springgreen           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FF7F' }}></span> #00FF7F |
| steelblue             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#4682B4' }}></span> #4682B4 |
| tan                   | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D2B48C' }}></span> #D2B48C |
| teal                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#008080' }}></span> #008080 |
| thistle               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D8BFD8' }}></span> #D8BFD8 |
| tomato                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF6347' }}></span> #FF6347 |
| turquoise             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#40E0D0' }}></span> #40E0D0 |
| violet                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#EE82EE' }}></span> #EE82EE |
| wheat                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F5DEB3' }}></span> #F5DEB3 |
| white                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFFFF' }}></span> #FFFFFF |
| whitesmoke            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F5F5F5' }}></span> #F5F5F5 |
| yellow                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFF00' }}></span> #FFFF00 |
| yellowgreen           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#9ACD32' }}></span> #9ACD32 |