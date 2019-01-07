---
title: "Title"
header-title: "Header Title"
date: 20YY-MM-DD
copyright: "©20YY Memgraph Ltd. All rights reserved."
titlepage: true
titlepage-color: FFFFFF
titlepage-text-color: 101010
titlepage-rule-color: 101010
titlepage-rule-height: 1
...

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa leo,
tempus non tincidunt ut, tempor id tortor. Mauris pretium maximus dui vitae
porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi
tincidunt nisl metus, in molestie erat rutrum vitae. Mauris hendrerit tortor eu
molestie luctus. Suspendisse et tortor ac magna laoreet sollicitudin. Maecenas
non nunc sodales, tincidunt metus id, maximus enim. Maecenas suscipit dignissim
libero, tincidunt finibus diam eleifend eget. Ut fringilla ut nisi elementum
facilisis. Donec vehicula libero ac enim rhoncus porttitor. Nulla aliquet purus
non dui fringilla, sit amet semper diam tincidunt. Aenean sem ante, varius
mollis porta ac, maximus a arcu.

In consequat consectetur magna at efficitur. Praesent semper fringilla
imperdiet. Integer non est id nulla efficitur mollis. Suspendisse quis diam in
est maximus consequat. Aenean et ullamcorper diam. Aliquam nunc lacus, lacinia
id purus et, blandit dictum nulla. Integer tempor ipsum magna, sed rutrum erat
dignissim vitae. Donec a erat tellus. Duis in lacus et leo sagittis posuere.
Donec accumsan, purus eget condimentum placerat, sem est porta lectus, quis
vestibulum orci libero vitae est. Lorem ipsum dolor sit amet, consectetur
adipiscing elit.

## Heading 2

Nulla facilisi. In varius suscipit risus ac dictum. Aenean gravida euismod
enim, eget fermentum sem viverra in. Sed id orci arcu. Donec vel est metus.
Etiam bibendum feugiat elit. Praesent eu sodales nulla. Quisque gravida congue
porta. Sed ac dui mattis, suscipit sapien eget, rutrum urna. Nullam non pretium
dui. Praesent in blandit est.

### Heading 3

Praesent a lorem turpis. Pellentesque sollicitudin suscipit nunc a maximus.
Proin egestas dolor sapien, a egestas quam consectetur accumsan. Mauris feugiat
nisi est, et rhoncus dui ultricies a. Pellentesque aliquam sodales elit, nec
posuere sem faucibus eu. Duis posuere lectus erat, eu volutpat purus tempus
sed. Fusce non urna vel neque iaculis luctus at nec velit. Praesent et
fringilla ipsum. Vestibulum accumsan at magna eu fringilla. Duis scelerisque
neque ac massa hendrerit molestie. Quisque pulvinar odio non pharetra
porttitor. Quisque dignissim mauris ac neque scelerisque, et facilisis dolor
commodo.

# Lists

List 1

* Item 1
* Item 2
* Very Long Item 3 - Donec porta ultricies enim, consequat pretium odio fringilla ut. Sed pulvinar purus ut tempor auctor. Ut ultricies consectetur mi. In hac habitasse platea dictumst. Mauris bibendum lacinia diam vehicula eleifend. Pellentesque id tincidunt libero. Nunc ut felis ac lacus sodales eleifend. Proin aliquam magna id erat venenatis, ut feugiat metus dignissim. Proin tempor nulla in cursus ornare. Ut aliquam placerat lorem vulputate ornare. Suspendisse massa lorem, auctor in lorem ut, malesuada ultricies lacus. Nunc et eros in orci bibendum posuere elementum ac odio. Suspendisse mattis volutpat sem vitae molestie.

# Tables

 Type | Description
---------------|--------------------------------------------------
 `Null`        | Denotes that the property has no value. This is the same as if the property does not exist.
 `String`      | A character string, i.e. text.
 `Boolean`     | A boolean value, either `true` or `false`.
 Integer       | An integer number.
 `Float`       | A floating-point number, i.e. a real number.
 `List`        | A list containing any number of property values of any supported type. It can be used to store multiple values under a single property name.
 `Map`         | A mapping of string keys to values of any supported type.

# Code

## openCypher

openCypher is default. `listings` package doesn't support custom languages.
The only reasonable workaround is to set openCypher as a default language
in listings.

```
MATCH (n:Person) WHERE n.name = "John" AND n.age > 25
RETURN collect(n.name, n.age) AS map_name_to_age
```

```
RETURN 'WHERE string 1234 false'
```

    // comment...
    RETURN "(,),-,<-,->,<,>,=,[,]"

```
RETURN True, false, NULL, null
```

```
RETURN "bfs"
```

```
MATCH (v1)-[e1:EdgeType]->(v2)
RETURN v1, e1, v2
```

```
MATCH (v1)<-[e1:EdgeType]-(v2)
RETURN v1, e1, v2
```

```
// comment ... 1234 False "test"
MATCH (n) RETURN n // comment ...
MATCH (n) WHERE n.x = '// not a comment ...' RETURN n
/* comment 1234 False "test"
...*/
RETURN n
```

openCypher Extension

```
MATCH (a {id: 723})-[*bfs..10 (e, n | e.x > 12 AND n.y < 3)]-() RETURN *
```

```
MATCH (a {id: 1})-[le *wShortest 10 (e, n | e.w) total_weight]-(b {id: 2})
RETURN *
```

## Enumerated Steps

1) Step 1
```
MATCH (n) RETURN n;
```

2) Step 2
```
MATCH (n) RETURN n;
```

## C++

```c++
#include <iostream>
using namespace std;

int main() {
    int n1, n2;

    cout << "Enter two numbers: ";
    cin >> n1 >> n2;

    while(n1 != n2) {
        if(n1 > n2)
            n1 -= n2;
        else
            n2 -= n1;
    }

    cout << "HCF = " << n1;
    return 0;
}
```

## Python

```python
from sys import exit

'''
Comment 1
Comment 1
'''

"""
Comment 2
Comment 2
"""

# One line comment

for i in range(5):
    print(i)

exit(0)
```

## C\#

```csh
using System.Diagnostics;
using MathNet.Numerics.LinearAlgebra.Double;
using MathNet.Numerics.LinearAlgebra.Double.Factorization;

namespace App
{
    public partial class Form_Main : Form
    {
        private void saveObjectToTemp()
        {
            // path to the tempfolder of this application.
            string path = Path.GetTempPath() + @"\temperatureapp";
            // check if the folder "temperatureapp" exist in the local temp folder (if not create it)
            bool folderExist = System.IO.Directory.Exists(path);
            if (!folderExist)
                System.IO.Directory.CreateDirectory(path);
        }

        private void test()
        {
            var names = new List<string>() { "John", "Tom", "Peter" };
            foreach (string name in names)
            {
                Console.WriteLine(name);
            }
        }
    }
}
```

## Java

```java
import java.util.*;

public class Example {
    public static void main(String[] args) {
        for (int i = 0; i < 5; ++i) {
            System.out.println(i);
        }
    }
}
```

## JavaScript

```javascript
function myFunction() {
    var x = "", i;
    for (i=0; i<5; i++) {
        x = x + "The number is " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = x;
}
```

## Bash

```bash
function fact {
  result=1
  n=$1
  while [ "$n" -ge 1 ]
  do
    result=$(expr $n \* $result)
    n=$(expr $n - 1)
  done
  echo $result
}
```
