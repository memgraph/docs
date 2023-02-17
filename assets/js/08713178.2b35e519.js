"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48463],{60815:e=>{e.exports=JSON.parse('{"pluginId":"cypher-manual","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"cypher_manual":[{"type":"link","label":"Getting started","href":"/docs/cypher-manual/","docId":"overview"},{"type":"link","label":"What are graph databases","href":"/docs/cypher-manual/what-are-graph-databases","docId":"what-are-graph-databases"},{"type":"category","label":"Cypher query language","items":[{"type":"link","label":"Differences in Cypher implementations","href":"/docs/cypher-manual/differences","docId":"differences"}],"collapsed":true,"collapsible":true,"href":"/docs/cypher-manual/cypher-query-language"},{"type":"link","label":"Working with Memgraph","href":"/docs/cypher-manual/working-with-memgraph","docId":"working-with-memgraph"},{"type":"link","label":"Import data","href":"/docs/cypher-manual/import-data","docId":"import-data"},{"type":"link","label":"Connecting nodes","href":"/docs/cypher-manual/connecting-nodes","docId":"connecting-nodes"},{"type":"link","label":"Reading existing data","href":"/docs/cypher-manual/reading-existing-data","docId":"reading-existing-data"},{"type":"link","label":"Updating nodes and relationships","href":"/docs/cypher-manual/updating-nodes-and-relationships","docId":"updating-nodes-and-relationships"},{"type":"link","label":"Deleting nodes and relationships","href":"/docs/cypher-manual/deleting-nodes-and-relationships","docId":"deleting-nodes-and-relationships"},{"type":"category","label":"Clauses","items":[{"type":"link","label":"CREATE","href":"/docs/cypher-manual/clauses/create","docId":"clauses/create"},{"type":"link","label":"DELETE","href":"/docs/cypher-manual/clauses/delete","docId":"clauses/delete"},{"type":"link","label":"EXPLAIN","href":"/docs/cypher-manual/clauses/explain","docId":"clauses/explain"},{"type":"link","label":"LOAD CSV","href":"/docs/cypher-manual/clauses/load-csv","docId":"clauses/load-csv"},{"type":"link","label":"MATCH","href":"/docs/cypher-manual/clauses/match","docId":"clauses/match"},{"type":"link","label":"MERGE","href":"/docs/cypher-manual/clauses/merge","docId":"clauses/merge"},{"type":"link","label":"OPTIONAL MATCH","href":"/docs/cypher-manual/clauses/optional-match","docId":"clauses/optional-match"},{"type":"link","label":"PROFILE","href":"/docs/cypher-manual/clauses/profile","docId":"clauses/profile"},{"type":"link","label":"REMOVE","href":"/docs/cypher-manual/clauses/remove","docId":"clauses/remove"},{"type":"link","label":"RETURN","href":"/docs/cypher-manual/clauses/return","docId":"clauses/return"},{"type":"link","label":"SET","href":"/docs/cypher-manual/clauses/set","docId":"clauses/set"},{"type":"link","label":"UNION","href":"/docs/cypher-manual/clauses/union","docId":"clauses/union"},{"type":"link","label":"UNWIND","href":"/docs/cypher-manual/clauses/unwind","docId":"clauses/unwind"},{"type":"link","label":"WHERE","href":"/docs/cypher-manual/clauses/where","docId":"clauses/where"},{"type":"link","label":"WITH","href":"/docs/cypher-manual/clauses/with","docId":"clauses/with"}],"collapsed":true,"collapsible":true,"href":"/docs/cypher-manual/clauses"},{"type":"link","label":"Extension clauses","href":"/docs/cypher-manual/extension-clauses","docId":"extension-clauses"},{"type":"link","label":"Functions","href":"/docs/cypher-manual/functions","docId":"functions"},{"type":"link","label":"Graph algorithms","href":"/docs/cypher-manual/graph-algorithms","docId":"graph-algorithms"},{"type":"link","label":"Query modules","href":"/docs/cypher-manual/query-modules","docId":"query-modules"},{"type":"link","label":"Other features","href":"/docs/cypher-manual/other-features","docId":"other-features"}]},"docs":{"clauses/clauses":{"id":"clauses/clauses","title":"Cypher clauses overview","description":"The Cypher language enables users to perform standard database operations by using the following clauses:","sidebar":"cypher_manual"},"clauses/create":{"id":"clauses/create","title":"CREATE clause","description":"The CREATE clause is used to create nodes and relationships in a graph.","sidebar":"cypher_manual"},"clauses/delete":{"id":"clauses/delete","title":"DELETE clause","description":"The DELETE clause is used to delete nodes and relationships from the database.","sidebar":"cypher_manual"},"clauses/explain":{"id":"clauses/explain","title":"EXPLAIN clause","description":"The EXPLAIN clause can be used to inspect a particular Cypher query in order to see its","sidebar":"cypher_manual"},"clauses/load-csv":{"id":"clauses/load-csv","title":"LOAD CSV clause","description":"The LOAD CSV clause enables you to load and use data from a CSV file of your","sidebar":"cypher_manual"},"clauses/match":{"id":"clauses/match","title":"MATCH clause","description":"The MATCH clause is used to obtain data from the database by matching it to a given pattern.","sidebar":"cypher_manual"},"clauses/merge":{"id":"clauses/merge","title":"MERGE clause","description":"The MERGE clause is used to ensure that a pattern you are looking for exists","sidebar":"cypher_manual"},"clauses/optional-match":{"id":"clauses/optional-match","title":"OPTIONAL MATCH clause","description":"The MATCH clause can be modified by prepending the OPTIONAL keyword.","sidebar":"cypher_manual"},"clauses/profile":{"id":"clauses/profile","title":"PROFILE clause","description":"The PROFILE clause can be used to profile the execution of a query and get a detailed","sidebar":"cypher_manual"},"clauses/remove":{"id":"clauses/remove","title":"REMOVE clause","description":"The REMOVE clause is used to remove labels and properties from nodes and relationships.","sidebar":"cypher_manual"},"clauses/return":{"id":"clauses/return","title":"RETURN clause","description":"The RETURN clause defines which data should be included in the resulting set.","sidebar":"cypher_manual"},"clauses/set":{"id":"clauses/set","title":"SET clause","description":"The SET clause is used to update labels on nodes and properties on nodes and relationships.","sidebar":"cypher_manual"},"clauses/union":{"id":"clauses/union","title":"UNION clause","description":"The UNION clause is used to combine the result of multiple queries.","sidebar":"cypher_manual"},"clauses/unwind":{"id":"clauses/unwind","title":"UNWIND clause","description":"The UNWIND clause is used to unwind a list of values as individual rows.","sidebar":"cypher_manual"},"clauses/where":{"id":"clauses/where","title":"WHERE clause","description":"WHERE isn\'t usually considered a standalone clause but rather a part of the","sidebar":"cypher_manual"},"clauses/with":{"id":"clauses/with","title":"WITH clause","description":"The WITH is used to chain together parts of a query, piping the results from one to be used as starting points or criteria in the next.","sidebar":"cypher_manual"},"connecting-nodes":{"id":"connecting-nodes","title":"Connecting nodes","description":"Relationships (or edges) are the lines that connect nodes to each other","sidebar":"cypher_manual"},"cypher-query-language":{"id":"cypher-query-language","title":"Cypher query language","description":"What is Cypher?","sidebar":"cypher_manual"},"deleting-nodes-and-relationships":{"id":"deleting-nodes-and-relationships","title":"Deleting nodes and relationships","description":"DELETE","sidebar":"cypher_manual"},"differences":{"id":"differences","title":"Differences in Cypher implementations","description":"Although we try to implement the openCypher query","sidebar":"cypher_manual"},"extension-clauses":{"id":"extension-clauses","title":"Extension clauses","description":"FOREACH","sidebar":"cypher_manual"},"functions":{"id":"functions","title":"Functions","description":"User-defined Memgraph Magic functions","sidebar":"cypher_manual"},"graph-algorithms":{"id":"graph-algorithms","title":"Graph algorithms","description":"The real power of graph databases comes from graph algorithms. In Memgraph,","sidebar":"cypher_manual"},"import-data":{"id":"import-data","title":"Import data","description":"For adding new data, you can use the following clauses.","sidebar":"cypher_manual"},"other-features":{"id":"other-features","title":"Other features","description":"The following sections describe some of the other supported features.","sidebar":"cypher_manual"},"overview":{"id":"overview","title":"Getting started with Cypher","description":"Cypher is the most widely adopted, fully-specified, and open query language","sidebar":"cypher_manual"},"query-modules":{"id":"query-modules","title":"Query modules","description":"The Cypher query language can be extended with custom procedures written in","sidebar":"cypher_manual"},"reading-existing-data":{"id":"reading-existing-data","title":"Reading existing data","description":"The simplest usage of the language is to find data stored in the database. For","sidebar":"cypher_manual"},"updating-nodes-and-relationships":{"id":"updating-nodes-and-relationships","title":"Updating nodes and relationships","description":"SET clause","sidebar":"cypher_manual"},"what-are-graph-databases":{"id":"what-are-graph-databases","title":"What are graph databases?","description":"A graph database is a type of database that stores data in the form of nodes","sidebar":"cypher_manual"},"working-with-memgraph":{"id":"working-with-memgraph","title":"Working with Memgraph","description":"What is Memgraph","sidebar":"cypher_manual"}}}')}}]);