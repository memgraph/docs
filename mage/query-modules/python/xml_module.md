---
id: xml_module
title: xml_module
sidebar_label: xml_module
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunOnSubgraph from '../../templates/_run_on_subgraph.mdx';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

The XML module enhances graph database capabilities by providing support for loading and parsing XML data.

[![docs-source](https://img.shields.io/badge/source-xml_module-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/xml_module.py)


| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |



## Functions

### `parse(xml_input, simple, path)`

Parses an XML string or file into a map. Since this is a function and not a procedure, it can be used inline in your Cypher queries.

#### Input:

- `xml_input: string` ➡ input XML string.
- `simple: bool (default = false)` ➡ configuration bool used for specifying whether simple mode should be used. [**Simple configuration explanation**](#simple-configuration-explanation).
- `path: string (default = "")` ➡ path to the XML file that needs to be parsed. If the path is not empty, the `xml_input` string is ignored, and only the file is parsed. 

#### Output:

The output of this function is a parsed XML map.

#### Simple configuration explanation

In XML file format, every element is represented as a map. For every element, its children elements are represented as a key-value pair inside that map, the key being `_children`, and the value an array of children elements. But, when `simple` is `True`, the key of children elements is not `_children`, but rather the name of the parent element. 

Consider a root element named `catalog`. When parsing this element, if `simple` is `False`, the key-value pair of children elements will look like this: `_children: [child_element_1, child_element_2, ....]`. But, when `simple` is `True`, the key-value pair will look like this `_catalog: [child_element_1, child_element_2, ....]`. Using simple mode makes nested XML elements accessible via an element name prefixed with an `_`.

#### Usage:

This section shows the usage of the function.

<Tabs
groupId="example_parse"
defaultValue="usage1"
values={[
{label: 'Step 1: Parsing XML from string', value: 'usage1'},
{label: 'Step 2: Parsing with simple', value: 'usage2'},
{label: 'Step 3: Parsing from a file, with simple', value: 'usage3'},
]
}>

<TabItem value="usage1">

```cypher
WITH '<catalog><book id="1"><title>Book 1</title><author>Author 1</author><publication><year>2022</year><publisher>Publisher A</publisher></publication></book><book id="2"><title>Book 2</title><author>Author 2</author><publication><year>2023</year><publisher>Publisher B</publisher></publication></book></catalog>' AS xmlString
RETURN xml_module.parse(xmlString) AS value;
```

Output:

```plaintext
{
   "_children": [
      {
         "_children": [
            {
               "_text": "Book 1",
               "_type": "title"
            },
            {
               "_text": "Author 1",
               "_type": "author"
            },
            {
               "_children": [
                  {
                     "_text": "2022",
                     "_type": "year"
                  },
                  {
                     "_text": "Publisher A",
                     "_type": "publisher"
                  }
               ],
               "_type": "publication"
            }
         ],
         "_type": "book",
         "id": "1"
      },
      {
         "_children": [
            {
               "_text": "Book 2",
               "_type": "title"
            },
            {
               "_text": "Author 2",
               "_type": "author"
            },
            {
               "_children": [
                  {
                     "_text": "2023",
                     "_type": "year"
                  },
                  {
                     "_text": "Publisher B",
                     "_type": "publisher"
                  }
               ],
               "_type": "publication"
            }
         ],
         "_type": "book",
         "id": "2"
      }
   ],
   "_type": "catalog"
}
```
</TabItem>

<TabItem value="usage2">

```cypher
WITH '<catalog><book id="1"><title>Book 1</title><author>Author 1</author><publication><year>2022</year><publisher>Publisher A</publisher></publication></book><book id="2"><title>Book 2</title><author>Author 2</author><publication><year>2023</year><publisher>Publisher B</publisher></publication></book></catalog>' AS xmlString
RETURN xml_module.parse(xmlString, true) AS value;
```

Output:

```plaintext
{
   "_catalog": [
      {
         "_book": [
            {
               "_text": "Book 1",
               "_type": "title"
            },
            {
               "_text": "Author 1",
               "_type": "author"
            },
            {
               "_publication": [
                  {
                     "_text": "2022",
                     "_type": "year"
                  },
                  {
                     "_text": "Publisher A",
                     "_type": "publisher"
                  }
               ],
               "_type": "publication"
            }
         ],
         "_type": "book",
         "id": "1"
      },
      {
         "_book": [
            {
               "_text": "Book 2",
               "_type": "title"
            },
            {
               "_text": "Author 2",
               "_type": "author"
            },
            {
               "_publication": [
                  {
                     "_text": "2023",
                     "_type": "year"
                  },
                  {
                     "_text": "Publisher B",
                     "_type": "publisher"
                  }
               ],
               "_type": "publication"
            }
         ],
         "_type": "book",
         "id": "2"
      }
   ],
   "_type": "catalog"
}
```
</TabItem>

<TabItem value="usage3">

##### Parsing an XML file:

The following example shows how the parse this file:

```plaintext

file.xml

<catalog>
  <book id="1">
    <title>Book 1</title>
    <author>Author 1</author>
    <publication>
      <year>2022</year>
      <publisher>Publisher A</publisher>
    </publication>
  </book>
  <book id="2">
    <title>Book 2</title>
    <author>Author 2</author>
    <publication>
      <year>2023</year>
      <publisher>Publisher B</publisher>
    </publication>
  </book>
</catalog>
```
Cypher: 

```cypher
RETURN xml_module.parse("", true,"/home/demonstration/Documents/file.xml") AS value;
```

Output:

```plaintext
{
   "_catalog": [
      {
         "_book": [
            {
               "_text": "Book 1",
               "_type": "title"
            },
            {
               "_text": "Author 1",
               "_type": "author"
            },
            {
               "_publication": [
                  {
                     "_text": "2022",
                     "_type": "year"
                  },
                  {
                     "_text": "Publisher A",
                     "_type": "publisher"
                  }
               ],
               "_type": "publication"
            }
         ],
         "_type": "book",
         "id": "1"
      },
      {
         "_book": [
            {
               "_text": "Book 2",
               "_type": "title"
            },
            {
               "_text": "Author 2",
               "_type": "author"
            },
            {
               "_publication": [
                  {
                     "_text": "2023",
                     "_type": "year"
                  },
                  {
                     "_text": "Publisher B",
                     "_type": "publisher"
                  }
               ],
               "_type": "publication"
            }
         ],
         "_type": "book",
         "id": "2"
      }
   ],
   "_type": "catalog"
}
```
</TabItem>

</Tabs>

## Procedures

### `load(xml_url, simple, path, xpath, headers)`

Loads and parses an XML file from a URL or a local file. Supports simple mode, and XPath expressions. You can choose to execute the procedure in simple mode, explained in the [**Simple configuration**](#simple-configuration-explanation) section.

#### Input:

- `xml_url: string` ➡ input URL where the XML file is located.
- `simple: bool (default = false)` ➡ bool used for specifying whether simple mode should be used.
- `path: string (default = "")` ➡ path to the XML file that needs to be parsed. If the path is not empty, `xml_input` string is ignored, and only the file is parsed.
- `xpath: string (default = "")` ➡ XPath expression. If the expression is not empty, the result of the procedure is all elements satisfying the expression.
- `headers: Map (default = {})` ➡ map of additional HTTP headers used when fetching a file from URL.

#### Output:

- `output_map: Map` ➡ parsed XML map.

If the XPath expression is not empty, the output is all elements that satisfy the expression.


#### XPath

This procedure supports the usage of XPath expressions. Since the module is implemented in Python, XPath expressions should follow, and are limited to the XPath syntax explained here [**XML python docs**](https://docs.python.org/3/library/xml.etree.elementtree.html#xpath-support). XPath implemented this way cannot use absolute paths, so one of these 3 prefixes must be used to avoid errors: `. .. *`. The current node is the root node.

#### Usage:

This section shows the usage of the procedure. [**The URL where the XML file is located**](https://www.w3schools.com/xml/note.xml)

<Tabs
groupId="example"
defaultValue="usage1"
values={[
{label: 'Step 1: Parsing XML from URL', value: 'usage1'},
{label: 'Step 2: Usage with simple', value: 'usage2'},
{label: 'Step 3: Parsing XML from a file', value: 'usage3'},
{label: 'Step 4: XPath usage', value: 'usage4'},
]
}>

<TabItem value="usage1">

```cypher
WITH "https://www.w3schools.com/xml/note.xml" AS xmlUrl
CALL xml_module.load(xmlUrl, false, "", "", {}) YIELD output_map RETURN output_map;
```
Output:

```plaintext
{
   "_children": [
      {
         "_text": "Tove",
         "_type": "to"
      },
      {
         "_text": "Jani",
         "_type": "from"
      },
      {
         "_text": "Reminder",
         "_type": "heading"
      },
      {
         "_text": "Don't forget me this weekend!",
         "_type": "body"
      }
   ],
   "_type": "note"
}
```

</TabItem>

<TabItem value="usage2">

```cypher
WITH "https://www.w3schools.com/xml/note.xml" AS xmlUrl
CALL xml_module.load(xmlUrl, true, "", "", {}) YIELD output_map RETURN output_map;
```
Output:

```plaintext
{
   "_note": [
      {
         "_text": "Tove",
         "_type": "to"
      },
      {
         "_text": "Jani",
         "_type": "from"
      },
      {
         "_text": "Reminder",
         "_type": "heading"
      },
      {
         "_text": "Don't forget me this weekend!",
         "_type": "body"
      }
   ],
   "_type": "note"
}
```

</TabItem>


<TabItem value="usage3">

Example of the file:

```plaintext

file.xml

<catalog>
  <book id="1">
    <title>Book 1</title>
    <author>Author 1</author>
    <publication>
      <year>2022</year>
      <publisher>Publisher A</publisher>
    </publication>
  </book>
  <book id="2">
    <title>Book 2</title>
    <author>Author 2</author>
    <publication>
      <year>2023</year>
      <publisher>Publisher B</publisher>
    </publication>
  </book>
</catalog>

```

Cypher:

```cypher
CALL xml_module.load("", true, "/home/demonstration/Documents/file.xml", "", {}) YIELD output_map RETURN output_map;
```

Output:

```plaintext
{
   "_catalog": [
      {
         "_book": [
            {
               "_text": "Book 1",
               "_type": "title"
            },
            {
               "_text": "Author 1",
               "_type": "author"
            },
            {
               "_publication": [
                  {
                     "_text": "2022",
                     "_type": "year"
                  },
                  {
                     "_text": "Publisher A",
                     "_type": "publisher"
                  }
               ],
               "_type": "publication"
            }
         ],
         "_type": "book",
         "id": "1"
      },
      {
         "_book": [
            {
               "_text": "Book 2",
               "_type": "title"
            },
            {
               "_text": "Author 2",
               "_type": "author"
            },
            {
               "_publication": [
                  {
                     "_text": "2023",
                     "_type": "year"
                  },
                  {
                     "_text": "Publisher B",
                     "_type": "publisher"
                  }
               ],
               "_type": "publication"
            }
         ],
         "_type": "book",
         "id": "2"
      }
   ],
   "_type": "catalog"
}
```
</TabItem>

<TabItem value="usage4">

For the XPath demonstration, [**this**](https://www.w3schools.com/xml/cd_catalog.xml) file will be used.

The XPath expression is going to be `".//CD[YEAR='1988']"`, which will return all CD elements with attribute year equaling 1988. Note that XPath expressions cannot be absolute paths because of the Python implementation of XPath, so `.` is used as an XPath prefix for this example, meaning the search will start from the current (root) element.

```cypher
WITH "https://www.w3schools.com/xml/cd_catalog.xml" AS xmlUrl
CALL xml_module.load(xmlUrl, false, "", ".//CD[YEAR='1988']", {}) YIELD output_map RETURN output_map;
```

Result:

```plaintext

{
   "_children": [
      {
         "_text": "Hide your heart",
         "_type": "TITLE"
      },
      {
         "_text": "Bonnie Tyler",
         "_type": "ARTIST"
      },
      {
         "_text": "UK",
         "_type": "COUNTRY"
      },
      {
         "_text": "CBS Records",
         "_type": "COMPANY"
      },
      {
         "_text": "9.90",
         "_type": "PRICE"
      },
      {
         "_text": "1988",
         "_type": "YEAR"
      }
   ],
   "_type": "CD"
}

```

```plaintext

{
   "_children": [
      {
         "_text": "Stop",
         "_type": "TITLE"
      },
      {
         "_text": "Sam Brown",
         "_type": "ARTIST"
      },
      {
         "_text": "UK",
         "_type": "COUNTRY"
      },
      {
         "_text": "A and M",
         "_type": "COMPANY"
      },
      {
         "_text": "8.90",
         "_type": "PRICE"
      },
      {
         "_text": "1988",
         "_type": "YEAR"
      }
   ],
   "_type": "CD"
}

```

</TabItem>

</Tabs>