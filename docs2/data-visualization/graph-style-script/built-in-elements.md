# Built in elements

## Colors

Graph Style Script comes with built-in colors that you can use by their name.

Example of using color names:

```cpp
@NodeStyle {
  color: aquamarine
  color-hover: Darker(cyan)
}
```

Example of using color codes:

```cpp
@NodeStyle {
  color: #7FFFD4
  color-hover: Darker(#00FFFF)
}
```

The color names come from a list of the [X11
colors](https://www.w3.org/TR/css-color-3/#svg-color) supported by popular
browsers with the addition of gray/grey variants from SVG 1.0.

| Color name           | HEX code                                                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------------------------- |
| blue                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF0000' }}></span> #FF0000 |
| aliceblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F0F8FF' }}></span> #F0F8FF |
| antiquewhite         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FAEBD7' }}></span> #FAEBD7 |
| aqua                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FFFF' }}></span> #00FFFF |
| aquamarine           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#7FFFD4' }}></span> #7FFFD4 |
| azure                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F0FFFF' }}></span> #F0FFFF |
| beige                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F5F5DC' }}></span> #F5F5DC |
| bisque               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFE4C4' }}></span> #FFE4C4 |
| black                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#000000' }}></span> #000000 |
| blanchedalmond       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFEBCD' }}></span> #FFEBCD |
| blue                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#0000FF' }}></span> #0000FF |
| blueviolet           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8A2BE2' }}></span> #8A2BE2 |
| brown                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#A52A2A' }}></span> #A52A2A |
| burlywood            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DEB887' }}></span> #DEB887 |
| cadetblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#5F9EA0' }}></span> #5F9EA0 |
| chartreuse           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#7FFF00' }}></span> #7FFF00 |
| chocolate            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D2691E' }}></span> #D2691E |
| coral                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF7F50' }}></span> #FF7F50 |
| cornflowerblue       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#6495ED' }}></span> #6495ED |
| cornsilk             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFF8DC' }}></span> #FFF8DC |
| crimson              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DC143C' }}></span> #DC143C |
| cyan                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FFFF' }}></span> #00FFFF |
| darkblue             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00008B' }}></span> #00008B |
| darkcyan             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#008B8B' }}></span> #008B8B |
| darkgoldenrod        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B8860B' }}></span> #B8860B |
| darkgray             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#A9A9A9' }}></span> #A9A9A9 |
| darkgreen            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#006400' }}></span> #006400 |
| darkgrey             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#A9A9A9' }}></span> #A9A9A9 |
| darkkhaki            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#BDB76B' }}></span> #BDB76B |
| darkmagenta          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8B008B' }}></span> #8B008B |
| darkolivegreen       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#556B2F' }}></span> #556B2F |
| darkorange           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF8C00' }}></span> #FF8C00 |
| darkorchid           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#9932CC' }}></span> #9932CC |
| darkred              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8B0000' }}></span> #8B0000 |
| darksalmon           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#E9967A' }}></span> #E9967A |
| darkseagreen         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8FBC8F' }}></span> #8FBC8F |
| darkslateblue        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#483D8B' }}></span> #483D8B |
| darkslategray        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#2F4F4F' }}></span> #2F4F4F |
| darkslategrey        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#2F4F4F' }}></span> #2F4F4F |
| darkturquoise        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00CED1' }}></span> #00CED1 |
| darkviolet           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#9400D3' }}></span> #9400D3 |
| deeppink             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF1493' }}></span> #FF1493 |
| deepskyblue          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00BFFF' }}></span> #00BFFF |
| dimgray              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#696969' }}></span> #696969 |
| dimgrey              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#696969' }}></span> #696969 |
| dodgerblue           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#1E90FF' }}></span> #1E90FF |
| firebrick            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B22222' }}></span> #B22222 |
| floralwhite          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFAF0' }}></span> #FFFAF0 |
| forestgreen          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#228B22' }}></span> #228B22 |
| fuchsia              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF00FF' }}></span> #FF00FF |
| gainsboro            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DCDCDC' }}></span> #DCDCDC |
| ghostwhite           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F8F8FF' }}></span> #F8F8FF |
| gold                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFD700' }}></span> #FFD700 |
| goldenrod            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DAA520' }}></span> #DAA520 |
| gray                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#808080' }}></span> #808080 |
| green                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#008000' }}></span> #008000 |
| greenyellow          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#ADFF2F' }}></span> #ADFF2F |
| grey                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#808080' }}></span> #808080 |
| honeydew             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F0FFF0' }}></span> #F0FFF0 |
| hotpink              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF69B4' }}></span> #FF69B4 |
| indianred            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#CD5C5C' }}></span> #CD5C5C |
| indigo               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#4B0082' }}></span> #4B0082 |
| ivory                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFFF0' }}></span> #FFFFF0 |
| khaki                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F0E68C' }}></span> #F0E68C |
| lavender             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#E6E6FA' }}></span> #E6E6FA |
| lavenderblush        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFF0F5' }}></span> #FFF0F5 |
| lawngreen            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#7CFC00' }}></span> #7CFC00 |
| lemonchiffon         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFACD' }}></span> #FFFACD |
| lightblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#ADD8E6' }}></span> #ADD8E6 |
| lightcoral           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F08080' }}></span> #F08080 |
| lightcyan            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#E0FFFF' }}></span> #E0FFFF |
| lightgoldenrodyellow | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FAFAD2' }}></span> #FAFAD2 |
| lightgray            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D3D3D3' }}></span> #D3D3D3 |
| lightgreen           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#90EE90' }}></span> #90EE90 |
| lightgrey            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D3D3D3' }}></span> #D3D3D3 |
| lightpink            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFB6C1' }}></span> #FFB6C1 |
| lightsalmon          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFA07A' }}></span> #FFA07A |
| lightseagreen        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#20B2AA' }}></span> #20B2AA |
| lightskyblue         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#87CEFA' }}></span> #87CEFA |
| lightslategray       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#778899' }}></span> #778899 |
| lightslategrey       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#778899' }}></span> #778899 |
| lightsteelblue       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B0C4DE' }}></span> #B0C4DE |
| lightyellow          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFFE0' }}></span> #FFFFE0 |
| lime                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FF00' }}></span> #00FF00 |
| limegreen            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#32CD32' }}></span> #32CD32 |
| linen                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FAF0E6' }}></span> #FAF0E6 |
| magenta              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF00FF' }}></span> #FF00FF |
| maroon               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#800000' }}></span> #800000 |
| mediumaquamarine     | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#66CDAA' }}></span> #66CDAA |
| mediumblue           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#0000CD' }}></span> #0000CD |
| mediumorchid         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#BA55D3' }}></span> #BA55D3 |
| mediumpurple         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#9370DB' }}></span> #9370DB |
| mediumseagreen       | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#3CB371' }}></span> #3CB371 |
| mediumslateblue      | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#7B68EE' }}></span> #7B68EE |
| mediumspringgreen    | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FA9A' }}></span> #00FA9A |
| mediumturquoise      | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#48D1CC' }}></span> #48D1CC |
| mediumvioletred      | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#C71585' }}></span> #C71585 |
| midnightblue         | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#191970' }}></span> #191970 |
| mintcream            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F5FFFA' }}></span> #F5FFFA |
| mistyrose            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFE4E1' }}></span> #FFE4E1 |
| moccasin             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFE4B5' }}></span> #FFE4B5 |
| navajowhite          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFDEAD' }}></span> #FFDEAD |
| navy                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#000080' }}></span> #000080 |
| oldlace              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FDF5E6' }}></span> #FDF5E6 |
| olive                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#808000' }}></span> #808000 |
| olivedrab            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#6B8E23' }}></span> #6B8E23 |
| orange               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFA500' }}></span> #FFA500 |
| orangered            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF4500' }}></span> #FF4500 |
| orchid               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DA70D6' }}></span> #DA70D6 |
| palegoldenrod        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#EEE8AA' }}></span> #EEE8AA |
| palegreen            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#98FB98' }}></span> #98FB98 |
| paleturquoise        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#AFEEEE' }}></span> #AFEEEE |
| palevioletred        | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DB7093' }}></span> #DB7093 |
| papayawhip           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFEFD5' }}></span> #FFEFD5 |
| peachpuff            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFDAB9' }}></span> #FFDAB9 |
| peru                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#CD853F' }}></span> #CD853F |
| pink                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFC0CB' }}></span> #FFC0CB |
| plum                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#DDA0DD' }}></span> #DDA0DD |
| powderblue           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B0E0E6' }}></span> #B0E0E6 |
| purple               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#800080' }}></span> #800080 |
| red                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF0000' }}></span> #FF0000 |
| rosybrown            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#BC8F8F' }}></span> #BC8F8F |
| royalblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#4169E1' }}></span> #4169E1 |
| saddlebrown          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#8B4513' }}></span> #8B4513 |
| salmon               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FA8072' }}></span> #FA8072 |
| sandybrown           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F4A460' }}></span> #F4A460 |
| seagreen             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#2E8B57' }}></span> #2E8B57 |
| seashell             | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFF5EE' }}></span> #FFF5EE |
| sienna               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#A0522D' }}></span> #A0522D |
| silver               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#C0C0C0' }}></span> #C0C0C0 |
| skyblue              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#87CEEB' }}></span> #87CEEB |
| slateblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#6A5ACD' }}></span> #6A5ACD |
| slategray            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#708090' }}></span> #708090 |
| slategrey            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#708090' }}></span> #708090 |
| snow                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFAFA' }}></span> #FFFAFA |
| springgreen          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00FF7F' }}></span> #00FF7F |
| steelblue            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#4682B4' }}></span> #4682B4 |
| tan                  | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D2B48C' }}></span> #D2B48C |
| teal                 | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#008080' }}></span> #008080 |
| thistle              | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#D8BFD8' }}></span> #D8BFD8 |
| tomato               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FF6347' }}></span> #FF6347 |
| turquoise            | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#40E0D0' }}></span> #40E0D0 |
| violet               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#EE82EE' }}></span> #EE82EE |
| wheat                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F5DEB3' }}></span> #F5DEB3 |
| white                | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFFFF' }}></span> #FFFFFF |
| whitesmoke           | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#F5F5F5' }}></span> #F5F5F5 |
| yellow               | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFFF00' }}></span> #FFFF00 |
| yellowgreen          | <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#9ACD32' }}></span> #9ACD32 |

## Functions

Graph Style Script has a large number of built-in functions. With these
functions, you can achieve the right style for your graph.

## Color functions

### `Darker(color)`

Returns a darker version of the given color.

Example:

- `color-hover: Darker(#dd2222)` will make the hover event color darker.

Inputs:

- `color: Color`

Outputs:

- `Color`

### `Lighter(color)`

Returns a lighter version of the given color.

Example:

- `color-hover: Lighter(#dd2222)` sets a lighter on hover event color.

Inputs:

- `color: Color`

Outputs:

- `Color`

### `Mix(color1, color2)`

Mixes given colors (performs linear interpolation).

Example:

- `Mix(#1B5E20, orange)`

Inputs:

- `color1: Color`
- `color2: Color`

Outputs:

- `Color`

### `Red(color)`

Returns the red component of a given color. The value will be between 0 and 255
(both inclusive).

Examples:

- `Red(mediumseagreen)` will return the value 60.
- `Red(#6a0dad)` will return the value 106.

Inputs:

- `color: Color`

Outputs:

- `number`

### `Green(color)`

Returns the green component of a given color. The value will be between 0 and
255 (both inclusive).

Examples:

- `Green(mediumseagreen)` will return the value 179.
- `Green(#6a0dad)` will return the value 13.

Inputs:

- `color: Color`

Outputs:

- `number`

### `Blue(color)`

Returns the blue component of a given color. The value will be between 0 and 255
(both inclusive).

Examples:

- `Blue(mediumseagreen)` will return the value 113.
- `Blue(#6a0dad)` will return the value 173.

Inputs:

- `color: Color`

Outputs:

- `number`

### `RGB(red, green, blue)`

Creates a new color with given components.

Example:

- `RGB (128, 159, 255)` will return the color that has value #809fff.

Inputs:

- `red: number`
- `green: number`
- `blue: number`

Outputs:

- `Color`

### `RGBA(red, green, blue, alpha)`

Creates a new color with given components. Same as `RGB` with an additional
`alpha` value (between 0 and 1) for transparency.

Example:
- `RGBA(128, 159, 255, 0.2)` will return the color that has value #809fff33.

Inputs:

- `red: number`
- `green: number`
- `blue: number`
- `alpha: number`

Outputs:

- `Color`

### `Hue(color)`

Returns the hue (HSL) component of a given color. The value will
be between 0 and 359 (both inclusive).

Example:

- `Hue(aliceblue)` will return value 208.
- `Hue(#00FFFF)` will return value 180.

Inputs:

- `color: Color`

Outputs:

- `number`

### `Saturation(color)`

Returns the saturation (HSL) component of a given color. The value will
be between 0 and 100 (both inclusive).

Example:

- `Saturation(aliceblue)` will return value 100.
- `Saturation(#77a4ab)` will return value 24.

Inputs:

- `color: Color`

Outputs:

- `number`

### `Lightness(color)`

Returns the lightness (HSL) component of a given color. The value will
be between 0 and 100 (both inclusive).

Example:

- `Lightness(aliceblue)` will return value 97.
- `Lightness(#FFFF00)` will return value 50.

Inputs:

- `color: Color`

Outputs:

- `number`

### `HSL(hue, saturation, lightness)`

Creates a new color with given HSL (hue, saturation, lightness) values. Hue
value must be between 0 and 359 (both inclusive), saturation and lightness
values must be between 0 and 100 (both inclusive).

Example:

- `HSL(282, 23, 56)` will return the color that has value #9975a9.

Inputs:

- `hue: number`
- `saturation: number`
- `lightness: number`

Outputs:

- `Color`

### `HSLA(hue, saturation, lightness, alpha)`

Creates a new color with given components. Same as `HSL` with an additional
`alpha` value (between 0 and 1) for transparency.

Example:

- `HSLA(282, 23, 56, 0.2)` will return the color that has value #9975a933.

Inputs:

- `hue: number`
- `saturation: number`
- `lightness: number`
- `alpha: number`

Outputs:

- `Color`

### `Alpha(color)`

Returns `alpha` (transparency) component of a given color. The value will
be between 0 and 1 (both inclusive).

Examples:

- `Alpha(aliceblue)` will return value 1.
- `Alpha(#FFFF0033)` will return value 0.2.
- `Alpha(RGBA(282, 23, 56, 0.8))` will return value 0.8.
- `Alpha(HSLA(282, 23, 56, 0.2))` will return value 0.2.

Inputs:

- `color: Color`

Outputs:

- `number`

## Conditional functions

### `And(value...)`

Returns `True` if all the given values are `Truthy`. Returns False otherwise.
Expressions after the first expression that evaluates to `Falsy` are not
evaluated.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Example:

- `And(HasProperty(node, "a"), HasProperty(node, "b"))` will return `True` if
  node has properties `a` and `b`.

Inputs:

- `value1: any`
- `value2: any`
- `valueN: any`

Outputs:

- `boolean`

### `Or(value...)`

Returns `True` if any of the given values is `Truthy`. Returns `False`
otherwise. Expressions after the first expression that evaluates to `Truthy` are
not evaluated.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Example:

- `Or(Less(Property(node, "age"),20), Greater(Property(node, "age"),40))`
  returns `True` if the node's `age` property is either less than 20 or greater
  than 40.

Inputs:

- `value1: any`
- `value2: any`
- `valueN: any`

Outputs:

- `boolean`

### `Not(value)`

Returns `True` if the value is `Falsy` and returns `False` if the value is
`Truthy`.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Example:

- `@NodeStyle Not(HasProperty(node, "count")) {...}` will apply the defined
  styles to the nodes without the `count` property.

Inputs:

- `value: any`

Outputs:

- `boolean`

### `Equals(value1, value2)`

Returns `True` if given values are equal, `False` otherwise. Numbers, Strings
and Booleans are compared by value, Arrays and Maps by the content, Nodes and
Edges are compared by identity.

Example:

- `Equals(Property(edge, "category"), "Food")` checks if `edge.category` equals
  to text "Food".
- `Equals(Property(node, "name"), "Jon Snow")` returns `True` if the condition
  is met.

Inputs:

- `value1: any`
- `value2: any`

Outputs:

- `boolean`

### `Greater(value1, value2)`

Returns `True` if `value1` is greater than `value2`, `False` otherwise.

Example:

- `Greater(Size(Labels(node)), 0)`

Inputs:

- `value1: number`
- `value2: number`

Outputs:

- `boolean`

### `Less(number1, number2)`

Returns `True` if `value1` is less than `value2`, `False` otherwise.

Example:

- `Less(Property(node, "age"),40)` will return `True` if given `node.age` is
  less than 40.

Inputs:

- `value1: number`
- `value2: number`

Outputs:

- `boolean`

### `If(condition, then, else)`

If condition is `Truthy` returns the `then` value, otherwise returns the `else`
value.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Example:

- `label: If(HasProperty(node, "name"), Property(node, "name"), "No name")`
  returns the property `name` as label if the node has one, or `No name` if the
  node doesn't have it.

Inputs:

- `condition: any`
- `then: any`
- `else: any`

Outputs:

- `any`

## Graph functions

### `HasLabel(node, label)`

Returns `True` if the given graph node has a label, `False` otherwise.

Example:

- `HasLabel(node, "Category")` will return `True` if a node has a label with the
  name `Category`.

Inputs:

- `node: Node`
- `label: string`

Outputs:

- `boolean`

### `HasProperty(nodeOrEdge, propertyName)`

Returns `True` if a given graph node or relationship has the property
`propertyName`.

Example:

- `HasProperty(node, "City")` will return `True` if a node has a property with
  the name `City`.

Inputs:

- `nodeOrEdge: Node | Relationship`
- `propertyName: string`

Outputs:

- `boolean`

### `Id(nodeOrEdge)`

Returns the ID of a given graph `node` or `edge`.

Example:

- `label: AsText(Id(node))` sets the label to be the node ID.

Inputs:

- `nodeOrEdge: Node | Relationship`

Outputs:

- `number`

### `Identity(nodeOrEdge)`

Returns the ID of a given graph `node` or `edge`.

Example:

- `label: AsText(Identity(node))` sets the label to be the node ID.

Inputs:

- `nodeOrEdge: Node | Relationship`

Outputs:

- `number`

### `Labels(node)`

Returns the list of labels of the given graph node.

Example:

- `label: Labels(node)` sets the label to be a list of all the node's labels.

Inputs:

- `node: Node`

Outputs:

- `List[string]`

### `Property(nodeOrEdge, propertyName)`

Returns the property with the name `propertyName` of given graph node or
relationship.

Example:

- `label: AsText(Property(node, "name"))` creates a label using the node's
  `name` property.

Inputs:

- `nodeOrEdge: Node | Relationship`
- `propertyName: string`

Outputs:

- `any`

### `Type(edge)`

Returns the type of a given graph relationship.

Example:

- `label: Type(edge)` sets the label to the relationship type.

Inputs:

- `edge: Relationship`

Outputs:

- `string`

### `InEdges(node)`

Returns the list of inbound edges from a given graph node.

Example:

- `size: Size(InEdges(node))` sets the size to be equal to the count of inbound
  edges.

Inputs:

- `node: Node`

Outputs:

- `List[Relationship]`

### `OutEdges(node)`

Returns the list of outbound edges from a given graph node.

Example:

- `size: Size(OutEdges(node))` sets the size to be equal to the count of
  outbound edges.

Inputs:

- `node: Node`

Outputs:

- `List[Relationship]`

### `Edges(graphOrNode)`

Returns the list of inbound and outbound edges from a given graph node. It
returns all the edges in the graph if the input is a graph.

Examples:

- `size: Size(Edges(graph))` sets the size to be equal to the count of all
  graph edges.
- `size: Size(Edges(node))` sets the size to be equal to the count of inbound
  and outbound edges.

Inputs:

- `graphOrNode: Graph | Node`

Outputs:

- `List[Relationship]`

### `Nodes(graphOrEdge)`

Returns the list of start and end nodes from a given graph edge. It returns
all the nodes in the graph if the input is a graph.

Examples:

- `size: Size(Nodes(graph))` sets the size to be equal to the count of all
  graph nodes.
- `size: Size(Nodes(edge))` sets the size to be equal to the count of nodes
  that edge connects (usually 2).

Inputs:

- `graphOrEdge: Graph | Relationship`

Outputs:

- `List[Node]`

### `AdjacentNodes(node)`

Returns the list of adjacent nodes for a given graph node. An adjacent node is a
node connected directly with a single edge, inbound or outbound.

Example:

- `size: Size(AdjacentNodes(node))` sets the size to be equal to the count of
  adjacent nodes.

Inputs:

- `node: Node`

Outputs:

- `List[Node]`

### `StartNode(edge)`

Returns the start (source) node for a given graph edge.

Example:

- `label: AsText(Id(StartNode(edge)))` sets the label of the edge to be the
  start node ID.

Inputs:

- `edge: Relationship`

Outputs:

- `Node`

### `EndNode(edge)`

Returns the end (target) node for a given graph edge.

Example:

- `label: AsText(Id(EndNode(edge)))` sets the label of the edge to be the end
  node ID.

Inputs:

- `edge: Relationship`

Outputs:

- `Node`

### `NodeCount(graph)`

Returns the total number of nodes in the graph.

Example:

- `size: NodeCount(graph)` sets the size to be the total number of nodes in the
  graph.

Inputs:

- `graph: Graph`

Outputs:

- `number`

### `EdgeCount(graph)`

Returns the total number of edges in the graph.

Example:

- `size: EdgeCount(graph)` sets the size to be the total number of edges in the
  graph.

Inputs:

- `graph: Graph`

Outputs:

- `number`

## Map functions

### `MapKeys(map)`

Returns an array of all map keys.

Example:

- `MapKeys(AsMap("key1", "value1", "key2", "value2")))` will return an array `["key1", "key2"]`.

Inputs:

- `map: Map[string, any]`

Outputs:

- `List[string]`

### `MapValues(map)`

Returns an array of all map values.

Example:

- `MapValues(AsMap("key1", "value1", "key2", 12)))` will return an array `["value1", 12]`.

Inputs:

- `map: Map[string, any]`

Outputs:

- `List[any]`

> Check other map functions down below: `AsMap`, `IsMap`, `Get`, `Set`, `Del`.

## Math functions

### `Add(value...)`

Returns the sum of given values.

Example:

- `Add(10, Property(node, "age"))` will give node.age + 10 if age is defined (as
  a number).

Inputs:

- `value1: number`
- `value2: number`
- `valueN: number`

Outputs:

- `number`

### `Div(value1, value2)`

Returns `value1` divided by `value2`.

Example:

- `Div(Property(node, "population"), 2)` will divide `node.population` with 2 if
  population is defined (as a number).

Inputs:

- `value1: number`
- `value2: number`

Outputs:

- `number`

### `Exp(value)`

Returns 2.71828... raised to the power value.

Example: -`Exp(2)` will return the number 7.38905609893

Inputs:

- `value: number`

Outputs:

- `number`

### `Log(value)`

Returns the logarithm (to the base e) of a value.

Example:

- `Log(Property(node, "sales"))`

Inputs:

- `value: number`

Outputs:

- `number`

### `Log10(value)`

Returns the logarithm (to the base 10) of a value.

Example:

- `Log10(Property(node, "sales"))`

Inputs:

- `value: number`

Outputs:

- `number`

### `Mul(value...)`

Returns the product of given values.

Example:

- `Mul(2,10,3)` returns 60 (2*10*3).

Inputs:

- `value1: number`
- `value2: number`
- `valueN: number`

Outputs:

- `number`

### `Random()`

Returns a random number between 0 (inclusive) and 1 (exclusive). All the
possible numbers are equally likely to be returned.

Example:

- `Random()`

Outputs:

- `number`

### `RandomInt(bound)`

Returns a random integer between 0 (inclusive) and bound (exclusive). All the
possible numbers are equally likely to be returned.

Example:

- `RandomInteger(Property(node, "population"))` will return an integer between 0
  and `node.population` if population is defined (as a number).

Inputs:

- `bound: number`

Outputs:

- `number`

### `Sqrt(value)`

Returns the square root of a value.

Example:

- `Sqrt(Property(node, "surface"))` will return the square root of a
  `node.surface`.

Inputs:

- `value: number`

Outputs:

- `number`

### `Sub(value1, value2)`

Subtracts `value2` from `value1`.

Example:

- `Sub(Property(node, "age"),10)` returns `node.age` - 10 if age is defined (as
  a number).

Inputs:

- `value1: number`
- `value2: number`

Outputs:

- `number`

### `Floor(value)`

Returns the largest integer less than or equal to the input value.

Examples:

- `Floor(2.8)` will return number `2`.
- `Floor(2)` will return number `2`.

Inputs:

- `value: number`

Outputs:

- `number`

### `Ceil(value)`

Returns the smallest integer greater than or equal to the input value.

Examples:

- `Ceil(2.1)` will return number `3`.
- `Ceil(2)` will return number `2`.

Inputs:

- `value: number`

Outputs:

- `number`

### `Round(value)`

Returns the closest integer to the input value.

Examples:

- `Round(2.1)` will return number `2`.
- `Round(2.5)` will return number `3`.
- `Round(2.8)` will return number `3`.

Inputs:

- `value: number`

Outputs:

- `number`

### `Sum(array)`

Returns the sum of all numbers in the input array. For an empty array,
it returns `0`.

Example:

- `Sum(AsArray())` will return number `0`.
- `Sum(AsArray(1, 2, 3, 4))` will return number `10`.
- `Sum(AsArray(5.0, 6.5))` will return number `11.5`.

Inputs:

- `array: List[number]`

Outputs:

- `number`

### `Avg(array)`

Returns the average of all numbers in the input array. An array
should have at least one number.

Example:

- `Avg(AsArray(1))` will return number `1`.
- `Avg(AsArray(1, 2, 3, 4, 5))` will return number `3`.
- `Avg(AsArray(4.8, 6.2))` will return number `5.5`.

Inputs:

- `array: List[number]`

Outputs:

- `number`

### `Min(array)`

Returns the minimum of all numbers in the input array. An
array should have at least one number.

Example:

- `Min(AsArray(1))` will return number `1`.
- `Min(AsArray(1, 2, 3, 4, 5))` will return number `1`.
- `Min(AsArray(4.8, 6.2))` will return number `4.8`.

Inputs:

- `array: List[number]`

Outputs:

- `number`

### `Max(array)`

Returns the maximum of all numbers in the input array. An
array should have at least one number.

Example:

- `Max(AsArray(1))` will return number `1`.
- `Max(AsArray(1, 2, 3, 4, 5))` will return number `5`.
- `Max(AsArray(4.8, 6.2))` will return number `6.2`.

Inputs:

- `array: List[number]`

Outputs:

- `number`

## Text functions

### `Concat(value...)`

Concatenates given strings or arrays.

Example:

- `Concat("City", " ", "of", " ", "London")` will return `City of London`.
- `Concat(AsArray(1, 2, 3), AsArray(4, 5))` will return `[1, 2, 3, 4, 5]`.

Inputs:

- `value1: string | List[any]` - `value2: string | List[any]` - `valueN: string
| List[any]`

Outputs:

- `string | List[any]`

### `Slice(value, start, end?)`

Returns a string or array slice defined by the start and optional end index.
Negative indexes will also work.

Examples:

- `Slice("Hello", 1)` will return `"ello"`.
- `Slice("Hello", -3, -1)` will return `"ll"`.
- `Slice(AsArray(1, 2, 3, 4, 5), 1, 3)` will return `[2, 3]`.
- `Slice(AsArray(1, 2, 3, 4, 5), -2)` will return `[4, 5]`.

Inputs:

- `value: string | List[any]`
- `start: number`
- `end?: number`

Outputs:

- `string | List[any]`

### `Split(text, delimiter)`

Returns a string or array slice defined by the start and optional end index.
Negative indexes will also work.

Examples:

- `Split("Hello", "x")` will return `["Hello"]`.
- `Split("Hello", "")` will return `["H", "e", "l", "l", "o"]`.
- `Split("Hello", "lo")` will return `["Hel", ""]`.
- `Split("Hello there", " ")` will return `["Hello", "there"]`.

Inputs:

- `text: string`
- `delimiter: string`

Outputs:

- `List[string]`

### `Format(formatString, value...)`

Substitutes occurrences of curly brace pairs in formatString with textual
representations of given values. The first occurrence is substituted with the
first value, the second occurrence with the second value and so on.

Examples:

- `Format("{}, {}!", "Hello", "World")` -> `"Hello, World!"`

Text inside curly braces is ignored.

- `Format("{name}: {age}", "Antun", 23)` -> `"Antun: 23"`

Inputs:

- `formatString: string`
- `value1: any`
- `valueN: any`

Outputs:

- `string`

### `Matches(text, regex)`

Returns `True` if text matches regex. The evaluation of the regex is done with
the Javascript function `RegExp.test(text)`.

Examples:

- `Matches("Graph style script", "style")` -> `True`
- `Matches("Graph style script", "st.* script")` -> `True`
- `Matches("Graph style script", "^G")` -> `True`
- `Matches("Graph style script", "GRAPH?")` -> `False`

Inputs:

- `text: string`
- `regex: string`

Outputs:

- `boolean`

### `Replace(text, regex, replacement)`

Returns a new string where a replacement value will be used instead of the
first regex match. The creation of the regex is done with the Javascript
function `new RegExp(text)`.

Examples:

- `Replace("Graph style script", "xyz", "text")` -> `"Graph style script"`
- `Replace("Graph style script", "style ", "")` -> `"Graph script"`
- `Replace("Graph style script", "style.*", "rocks!")` -> `"Graph rocks!"`
- `Replace("Graph style script", "s", "S!")` -> `"Graph S!tyle script"`

Inputs:

- `text: string`
- `regex: string`
- `replacement: string`

Outputs:

- `string`

### `LowerCase(text)`

Returns the value of a string converted to lower case.

Example:

- `AsText(LowerCase(Property(node, "name")))` will return node name in lower
  case.

Inputs:

- `text: string`

Outputs:

- `string`

### `UpperCase(text)`

Returns the value of a string converted to upper case.

Example:

- `AsText(UpperCase(Property(node, "name")))` will return the node name in upper
  case.

Inputs:

- `text: string`

Outputs:

- `string`

### `Trim(text)`

Returns the string without starting and ending whitespaces.

Example:

- `Trim("  Hello  there!  ")` will return `"Hello  there!`.

Inputs:

- `text: string`

Outputs:

- `string`

## Array functions

### `Join(array, delimiter)`

Returns a new string by joining array elements with the delimiter.

Example:

- `label: Join(Labels(node), ", ")` creates a label which is a string made out
  of all the labels delimited with a comma.

Inputs:

- `array: List[any]`
- `delimiter: string`

Outputs:

- `string`

### `Contains(array, value)`

Returns `True` if the array contains the defined value, `False` otherwise.

Example:

- `Contains(AsArray(2,7,8,9), 2)` will return `True`.

Inputs:

- `array: List[any]`
- `value: any`

Outputs:

- `boolean`

### `RandomOf(array)`

Returns a random element of the given array. All the elements are equally likely
to be chosen.

Example:

- `RandomOf(AsArray(1,3,5,7,11,13))` will return one of the array elements.

Inputs:

- `array: List[any]`

Outputs:

- `any | null`

### `Find(array, function)`

Returns the first element of the given array for which the function yields
`Truthy` value.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `Find(AsArray(1, 2, 3, 4), Function(item, Greater(item, 2)))` will return
  number `3`.
- `Find(AsArray(1, 2, 1, 1), Function(item, Greater(item, 2)))` will return
  `Null`.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `any | null`

### `Filter(array, function)`

Returns the new array with elements of the given array for which the function
yields `Truthy` value.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `Filter(AsArray(1, 2, 3, 4), Function(item, Greater(item, 2)))` will return
  array `[3, 4]`.
- `Filter(AsArray(1, 2, 1, 1), Function(item, Greater(item, 2)))` will return
  `[]`.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `List[any]`

### `Map(array, function)`

Returns the new array where each element of the given array is converted
(mapped) with the defined function.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `Map(AsArray(1, 2, 3, 4), Function(item, Mul(item, 2)))` will return array
  `[2, 4, 6, 8]`.
- `Map(AdjacentNodes(node), Function(n, Property(n, "name")))` will return the
  list of names of adjacent nodes.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `List[any]`

### `Reduce(array, function, initialValue)`

The `Reduce()` function returns a single value generated by reducing an array of values.
The `function `parameter has two arguments, `previous reduced value` and `current array value`.
The `initalValue` parameter specifies the initial value used for the first reduce iteration.

Example:

- The following example does a sum of all elements in the array with the initial
  value of `1`. Because the array is empty, the returned value is the initial one: `1`.

```
Reduce(
  AsArray(),
  Function(prev, current, Add(prev, current)),
  1
)
```

- The same example as the above one, but with a defined array of three elements. The result
  will be number `6`.

```
Reduce(
  AsArray(1, 2, 3),
  Function(prev, current, Add(prev, current)),
  0
)
```

- The following example joins all letters from an array into a single text `"ABC"`.

```
Reduce(
  AsArray("A", "B", "C"),
  Function(prev, current, Format("{}{}", prev, current)),
  ""
)
```

Inputs:

- `array: List[any]`
- `function: Function`
- `initalValue: any`

Outputs:

- `any`

### `All(array, function)`

Returns `True` if the function yields `Truthy` value for all elements of the
given array.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `All(AsArray(1, 2, 3, 4), Function(item, Greater(item, 2)))` will return
  `False`.
- `All(AsArray(1, 2, 1, 1), Function(item, Less(item, 3)))` will return `True`.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `boolean`

### `Any(array, function)`

Returns `True` if the function yields `Truthy` value for any element of the
given array.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `Any(AsArray(1, 2, 3, 4), Function(item, Greater(item, 2)))` will return
  `True`.
- `Any(AsArray(1, 2, 1, 1), Function(item, Greater(item, 3)))` will return
  `False`.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `boolean`

### `Uniq(array)`

Returns an array of unique elements of the given array.

Example:

- `Uniq(AsArray(2,1,1,2,1,3,1))` will return `[2, 1, 3]`.
- `Uniq(AsArray("1", "1", 1, True, True, 1))` will return `["1", 1, True]`.

Inputs:

- `array: List[any]`

Outputs:

- `List[any]`

### `Reverse(array)`

Returns an array with reversed elements of the given array.

Example:

- `Reverse(AsArray(1, 2, 3))` will return `[3, 2, 1]`.

Inputs:

- `array: List[any]`

Outputs:

- `List[any]`

### `Sort(array)`

Returns an array with sorted items. The sort works only on arrays with
primitive types: strings, numbers, and booleans.

Example:

- `Sort(AsArray(3, 2, 1, 8, 3))` will return `[1, 2, 3, 3, 8]`.

Inputs:

- `array: List[string] | List[boolean] | List[number]`

Outputs:

- `List[string] | List[boolean] | List[number]`

### `Next(iterator)`

Returns the next item in the iterator. If iterator has no items,
it returns `Null`.

Example:

- `Next(AsIterator(AsArray(3, 2, 1)))` will return `3`.

Inputs:

- `iterator: Iterator[any]`

Outputs:

- `any | null`

## Type functions

### `AsArray(value...)`

Creates and returns an array of given values. The function can be used
to convert `Iterator` back to the array with `AsArray(AsIterator(AsArray(1, 2)))`.

Examples:

- `AsArray("Alfa", "Bravo", "Charlie", "Delta", "Echo")` -> `["Alfa", "Bravo",
  "Charlie", "Delta", "Echo"]`
- `AsArray(AsIterator(AsArray(1, 2, 3)))` -> `[1, 2, 3]`.

Inputs:

- `value1: any`
- `value2: any`
- `valueN: any`

Outputs:

- `List[any]`

### `AsMap(key, value, ...)`

Creates and returns a map of given pairs of keys and values. There must be an even
number of inputs because each key should have its own value. Keys must be type of string.
Values can be any type.

Example:

- `AsMap("1", 10, "2", 20)` -> `{"1": 10, "2": 20}`

Inputs:

- `key1: string`
- `value1: any`
- `keyN: string`
- `valueN: any`

Outputs:

- `Map[string, any]`

### `AsIterator(array)`

Creates and returns an iterator of given array. Iterator values can be used only once with
`Next` function until all values have been used.

Example:

- `AsIterator(AsArray(1, 2, 3))` -> `(1, 2, 3)`

Inputs:

- `array: List[any]`

Outputs:

- `Iterator[any]`

### `AsNumber(value)`

Parses the given string or boolean and returns a number. The string should
contain only one number in base 10 and nothing else. Boolean `True` returns
number 1. Boolean `False` returns number 0.

Example:

- `AsNumber("8")` will return number 8.

Inputs:

- `value: string | number | boolean`

Outputs:

- `number`

### `AsText(value)`

Returns a textual representation of a given value.

Example:

- `AsText(Property(node, "age"))` will return `node.age` as string.

Inputs:

- `value: any`

Outputs:

- `string`

### `TypeOf(value)`

Returns the type of a given value. Type is returned as a string. Following types
are used in GSS:

- `"number"` - represents numbers
- `"boolean"` - represents booleans (`True` and `False`)
- `"string"` - represents textual values
- `"Null"` - represents null value (`Null`)
- `"Color"` - represents colors
- `"Node"` - represents graph node
- `"Edge"` - represents graph relationship
- `"Graph"` - represents graph
- `"List"` - represents an array object (e.g. `[1, 2, 3]`)
- `"Iterator"` - represents an iterator object (e.g. `(1, 2, 3)`)
- `"Map"` - represents a map object (e.g. `{ "name": "GSS" }`)
- `"Function"` - represents function object

Example:

- `TypeOf(Property(node, "name"))` returns `string`.

Inputs:

- `value: any`

Outputs:

- `string`

### `IsArray(value)`

Returns `True` if the input value is an array, otherwise `False`.

Examples:

- `IsArray(10.2)` returns `False`.
- `IsArray(AsArray(1, 2, 3))` returns `True`.

Inputs:

- `value: any`

Outputs:

- `boolean`

### `IsMap(value)`

Returns True if the input value is a map, otherwise False.

Examples:

- `IsMap(10.2)` returns `False`.
- `IsMap(AsMap("key", "value"))` returns `True`.

Inputs:

- `value: any`

Outputs:

- `boolean`

### `IsIterator(value)`

Returns True if the input value is an iterator, otherwise False.

Examples:

- `IsIterator(AsArray(1, 2, 3))` returns `False`.
- `IsIterator(AsIterator(AsArray(1, 2, 3)))` returns `True`.

Inputs:

- `value: any`

Outputs:

- `boolean`

### `IsNumber(value)`

Returns `True` if the input value is a number, otherwise `False`.

Example:

- `IsNumber(10.2)` returns `True`.

Inputs:

- `value: any`

Outputs:

- `boolean`

### `IsBoolean(value)`

Returns `True` if the input value is a boolean, otherwise `False`.

Example:

- `IsBoolean(False)` returns `True`.

Inputs:

- `value: any`

Outputs:

- `boolean`

### `IsString(value)`

Returns `True` if the input value is a string, otherwise `False`.

Example:

- `IsString("text")` returns `True`.

Inputs:

- `value: any`

Outputs:

- `boolean`

### `IsNull(value)`

Returns `True` if the input value is a `Null`, otherwise `False`.

Example:

- `IsNull(Null)` returns `True`.

Inputs:

- `value: any`

Outputs:

- `boolean`

## Utility functions

### `Define(name, value)`

Binds the given value to the given name. Names can be redefined.

Example:

- `Define(city, "London")` will set the value of the `city` to `London`.

Inputs:

- `name: Variable`
- `value: any`

### `Function(arg..., body)`

Creates a function. `body` is the expression to evaluate when the function is
called. All arguments except `body` are argument names of the function to
create. When the created function is called names `arg1`, `arg2`, ... are bound
to function arguments and available in the `body` expression. This function is
most useful in combination with `Define`.

Examples:

```
Define(makeGreeting, Function(firstName, Format("Hello, {}!", firstName)))
makeGreeting("World") // -> Hello, World!
```

```
Define(pow, Function(x, n, If(Equals(n, 1), x, Mul(x, pow(x, Sub(n, 1))))))
pow(2, 10) // -> 1024
```

Inputs:

- `arg1: Variable`
- `argN: Variable`
- `body: any`

Outputs:

- `Function`

### `Execute(expression...)`

Executes all expressions given as arguments. The function comes in handy when there
are set of commands that should be executed, e.g. setting several items on the map
with `Set` and returning the last value.

Example:

```
Define(map, AsMap())
Define(mapKeys, Execute(
  Set(map, "key1", "value1"),
  Set(map, "key2", "value2"),
  MapKeys(map),
))
```

Variable `map` will be `{"key1": "value1", "key2": "value2"}`. Execution returns the
last value of the variable `mapKeys` which is an array of keys: `["key1", "key2"]`.

Inputs:

- `expression1: Expression`
- `expressionN: Expression`

Outputs:

- `any`

### `Get(object, key, defaultValue?)`

If `obj` is a List, returns the element with index `key` of list `obj` (indexing
is zero based). If `obj` is a Map, returns the value for key `key`. If `obj` is
a string, returns the letter with index `key` of string `obj` (indexing is zero
based). If `obj` is a Node, returns the value for key `key`. If `obj` is a
Relationship, returns the value for key `key`.

In case of invalid input or missing value, it returns `defaultValue` or `Null` if
default value is not defined.

Examples:

- `Get(AsArray(3,6,7,3), 2)` returns number 7.
- `Get(Property(node, "map"), "year") will get the property `year` from the map
  of node properties.

Inputs:

- `object: List | Map | string | Node | Relationship`
- `key: number | string`
- `defaultValue?: any`

Outputs:

- `any`

### `Set(object, key, value)`

If `obj` is a List, sets the value with index `key` (indexing is zero based). Value will
be returned on successful set. If index is out of ranges of the list, nothing will
be set, and `Null` will be returned.

If `obj` is a Map, sets the value for key `key`. Key must be a string type. Input value
will be returned.

Examples:

- `Define(array, AsArray(1, 2, 3)) Set(array, 1, 5)` returns number `5` and array will be `[1, 5, 3]`.
- `Define(map, AsMap()) Set(map, "key", "value")` returns `"value"` and map will be `{"key": "value"}`.

Inputs:

- `object: List | Map`
- `key: number | string`
- `value: any`

Outputs:

- `any | null`

### `Del(map, key)`

Removes a value from a map under key `key`. Removed value will be returned. If key
was missing in a map, `Null` will be returned.

Examples:

- `Define(map, AsMap("a", 1, "b", 2)) Del(map, "a")` returns `1` and map will be `{"b": 2}`.
- `Define(map, AsMap("a", 1)) Del(map, "b")` returns `Null` and map will be `{"a": 1}`.

Inputs:

- `map: Map[string, any]`
- `key: string`

Outputs:

- `any | null`

### `Size(value)`

If value is of type `List` or `Map`, returns its size. If value is of type
`string`, returns its length. If value is of type `Node`, returns the size of
node properties. If value is of type `Relationship`, returns the size of
relationship properties. If value is of type `Graph`, returns the size of the
graph (nodes and relationships)

Example:

- `Size(Property(node, "name"))` returns the size of the node's `name` property.

Inputs:

- `value: List | Map | string | Node | Relationship | Graph`

Outputs:

- `number`

### `Coalesce(value...)`

Returns the first non-null value. In case of empty call or all values being
`Null`, `Null` will be returned.

Example:

- `Coalesce()` returns `Null`
- `Coalesce(Null, 1, False)` returns `1`

Inputs:

- `value1: any`
- `valueN: any`

Outputs:

- `any | null`

## Variables

Graph Style Script has a few built-in variables that you can use.

## `node`

The variable `node` is bound to the graph node for which the style directive
`@NodeStyle` is being evaluated. Graph node is of type `Map` and has all
information about the node (`properties`, `labels`, `id`).

In the following example, you can see the usage of the variable `node` within
the `@NodeStyle` directive.

```
@NodeStyle {
  label: Property(node, "name")
  size: Mul(Size(Edges(node)), 5)
}
```

If `node` is used outside `@NodeStyle` directive, a compile error will be
thrown.

## `edge`

The variable `edge` is bound to the graph relationship for which the style
directive `@EdgeStyle` is being evaluated. Graph relationship is of type `Map`
and has all information about the relationship (`properties`, `type`, `start`,
`end`, `id`).

In the following example, you can see the usage of the variable `edge` within
the `@EdgeStyle` directive.

```
@EdgeStyle {
  label: Format("From node {}", Property(StartNode(edge), "name"))
  size: AsNumber(Property(edge, "importance"))
}
```

If `edge` is used outside `@EdgeStyle` directive, a compile error will be
thrown.

## `graph`

The variable `graph` is bound to the overall graph that contains nodes and
edges. It can be useful to get the total count of nodes and edges with the
following functions: `NodeCount(graph)` and `EdgeCount(graph)`.

In the following example, you can see the usage of the variable `graph` in
the directive context (`@NodeStyle`, `@EdgeStyle`) and global context
(variable `EDGE_COUNT`);

```
// Global context acts like a cache because the
// following expression will be evaluated only once
Define(EDGE_COUNT, EdgeCount(graph))

@NodeStyle {
  size: Sqrt(NodeCount(graph))
}

@EdgeStyle {
  width: If(Greater(EDGE_COUNT, 1000), 1, 2)
}
```

The `graph` variable is not bound to any of the directives (`@NodeStyle`,
`@EdgeStyle`) so you can use it wherever you want in the Graph Style Script
code.