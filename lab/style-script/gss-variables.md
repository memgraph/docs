---
id: gss-variables
title: Graph Style Script built-in variables
sidebar_label: GSS variables
---

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

In the following example, you can see the usage of the variable `graph`:

```
@NodeStyle {
  size: Sqrt(NodeCount(graph))
}

@EdgeStyle {
  width: If(Greater(EdgeCount(graph), 1000), 1, 2)
}
```

The `graph` variable is not bound to any of the directives (`@NodeStyle`,
`@EdgeStyle`) so you can use it wherever you want in the Graph Style Script
code.
