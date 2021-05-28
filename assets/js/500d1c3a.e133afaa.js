(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4201],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(r),d=i,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},61651:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o={id:"movie-recommendation",title:"Movie recommendation system",sidebar_label:"Movie recommendation system"},s={unversionedId:"tutorials/movie-recommendation",id:"version-1.5.0/tutorials/movie-recommendation",isDocsHomePage:!1,title:"Movie recommendation system",description:"This article is a part of a series intended to show users how to use Memgraph",source:"@site/memgraph_versioned_docs/version-1.5.0/tutorials/movie-recommendation.md",sourceDirName:"tutorials",slug:"/tutorials/movie-recommendation",permalink:"/memgraph/tutorials/movie-recommendation",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/tutorials/movie-recommendation.md",version:"1.5.0",sidebar_label:"Movie recommendation system",frontMatter:{id:"movie-recommendation",title:"Movie recommendation system",sidebar_label:"Movie recommendation system"},sidebar:"version-1.5.0/memgraph",previous:{title:"Marvel Comic Universe social network",permalink:"/memgraph/tutorials/marvel-universe"},next:{title:"Game of Thrones deaths",permalink:"/memgraph/tutorials/got-deaths"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Importing the dataset",id:"importing-the-dataset",children:[]},{value:"Example queries",id:"example-queries",children:[]}],m={toc:l};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article is a part of a series intended to show users how to use Memgraph\non real-world data and, by doing so, retrieve some interesting and useful\ninformation."),(0,a.kt)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/tutorials/tutorials"},"tutorial overview section"),"."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This example shows how to implement a simple recommendation system\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"openCypher")," in Memgraph.\nFirst, we will show how to perform simple operations,\nand then we will implement a query for the movie recommendation."),(0,a.kt)("h2",{id:"data-model"},"Data model"),(0,a.kt)("p",null,"In this example, we will use reduced MovieLens dataset (less than 1000 movies).\nThere are three different types of data: ",(0,a.kt)("inlineCode",{parentName:"p"},"Movie"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Genre"),".\nMovies have properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),"\nUsers have properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\nGenres have a property: ",(0,a.kt)("inlineCode",{parentName:"p"},"name")),(0,a.kt)("p",null,"Each movie can be connected with ",(0,a.kt)("inlineCode",{parentName:"p"},":ofGenre")," edge to different genres.\nA user can rate some movie. Rating is modeled with ",(0,a.kt)("inlineCode",{parentName:"p"},":Rating")," edge\nand this edge has property ",(0,a.kt)("inlineCode",{parentName:"p"},"score")," ","\u2014"," float number between 0 and 5."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Movies",src:r(84214).Z})),(0,a.kt)("h2",{id:"importing-the-dataset"},"Importing the dataset"),(0,a.kt)("p",null,"To import the dataset, download the ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab"),"\ndesktop application and navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there,\nchoose the dataset ",(0,a.kt)("inlineCode",{parentName:"p"},"MovieLens: Movies, genres and users")," and continue with the tutorial."),(0,a.kt)("h2",{id:"example-queries"},"Example queries"),(0,a.kt)("p",null,"1) List first 10 movies sorted by title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (movie:Movie)\nRETURN movie\nORDER BY movie.title\nLIMIT 10;\n")),(0,a.kt)("p",null,"2) List last 15 users sorted by name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (user:User)\nRETURN user\nORDER BY user.name DESC\nLIMIT 15;\n")),(0,a.kt)("p",null,"3) List 10 movies that have ",(0,a.kt)("em",{parentName:"p"},"Comedy")," and ",(0,a.kt)("em",{parentName:"p"},"Action")," genres and sort them by title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (movie:Movie)-[:ofGenre]->(:Genre {name:"Action"})\nMATCH (movie)-[:ofGenre]->(:Genre {name:"Comedy"})\nRETURN movie.title\nORDER BY movie.title\nLIMIT 10;\n')),(0,a.kt)("p",null,"4) Uniqueness constraint for genre:"),(0,a.kt)("p",null,"Let's create a new unique constraint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (genre:Genre) ASSERT genre.name IS UNIQUE;\n")),(0,a.kt)("p",null,"And now we can try to create new ",(0,a.kt)("inlineCode",{parentName:"p"},"Genre"),' node with existing `name\': "Comedy":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Genre {name: "Comedy"});\n')),(0,a.kt)("p",null,'This query returns an error because genre "Comedy" already exists.'),(0,a.kt)("p",null,"5) Average score for ",(0,a.kt)("em",{parentName:"p"},"Star Wars")," movie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:User)-[rating:Rating]->(:Movie {title:"Star Wars"})\nRETURN avg(rating.score);\n')),(0,a.kt)("p",null,"6) Average scores for first 10 movies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:User)-[:Rating]->(movie:Movie)\nRETURN movie.title, avg(r.score) AS score\nORDER BY score DESC\nLIMIT 10;\n")),(0,a.kt)("p",null,"7) Create a new user and rate some movies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:User {id:1000, name:"Aladin"});\n')),(0,a.kt)("p",null,"Check if new user is created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (user:User{name:"Aladin"})\nRETURN user;\n')),(0,a.kt)("p",null,"Rate some movies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (u:User {id:1000}), (m:Movie {title:"Trois couleurs : Rouge"})\nMERGE (u)-[:Rating {score:3.0}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"20,000 Leagues Under the Sea"})\nMERGE (u)-[:Rating {score:1.0}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Star Trek: Generations"})\nMERGE (u)-[:Rating {score:0.5}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Rebecca"})\nMERGE (u)-[:Rating {score:3.0}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"The 39 Steps"})\nMERGE (u)-[:Rating {score:4.5}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Faster, Pussycat! Kill! Kill!"})\nMERGE (u)-[:Rating {score:3.5}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Once Were Warriors"})\nMERGE (u)-[:Rating {score:3.5}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Sleepless in Seattle"})\nMERGE (u)-[:Rating {score:4.0}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Don Juan DeMarco"})\nMERGE (u)-[:Rating {score:4.0}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Jack & Sarah"})\nMERGE (u)-[:Rating {score:1.5}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Mr. Holland\'s Opus"})\nMERGE (u)-[:Rating {score:2.0}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"The Getaway"})\nMERGE (u)-[:Rating {score:3.0}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Color of Night"})\nMERGE (u)-[:Rating {score:4.0}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Reality Bites"})\nMERGE (u)-[:Rating {score:2.5}]-(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Notorious"})\nMERGE (u)-[:Rating {score:3.5}]-(m);\n')),(0,a.kt)("p",null,"8) Recommendation system:"),(0,a.kt)("p",null,"The idea is to implement simple ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Collaborative_filtering"},"memory based collaborative filtering"),"."),(0,a.kt)("p",null,"Let's recommend some movies for user Aladin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User {id:1000})-[r:Rating]-(m:Movie)\n      -[other_r:Rating]-(other:User)\nWITH other.id AS other_id,\n     avg(abs(r.score-other_r.score)) AS similarity,\n     count(*) AS similar_user_count\nWHERE similar_user_count > 2\nWITH other_id\nORDER BY similarity\nLIMIT 10\nWITH collect(other_id) AS similar_user_set\nMATCH (some_movie: Movie)-[fellow_rate:Rating]-(fellow_user:User)\nWHERE fellow_user.id IN similar_user_set\nWITH some_movie, avg(fellow_rate.score) AS prediction_score\nRETURN some_movie.title AS Title, prediction_score\nORDER BY prediction_score DESC;\n")),(0,a.kt)("p",null,"How does this query work?"),(0,a.kt)("p",null,"This query has two parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finding similar users"),(0,a.kt)("li",{parentName:"ul"},"Predicting the score for some movie (recommendation)")),(0,a.kt)("p",null,"In the first part, we are looking for similar users.\nFirst, we need to define similar users:\nTwo users are considered similar if they tend to give\nsimilar scores to the same movies.\nFor the target user (Aladin) and some other user we are searching\nfor the same movies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User {id:1000})-[r:Rating]-(m:Movie)-[other_r:Rating]-(other:User);\n")),(0,a.kt)("p",null,"But this is not enough for finding similar users. We need to choose users\nwith the same movies and similar scores:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"WITH other.id AS other_id,\n     avg(abs(r.score-other_r.score)) AS similarity,\n     count(*) AS similar_user_count\nWHERE similar_user_count > 2\nWITH other_id\nORDER BY similarity\nLIMIT 10;\n")),(0,a.kt)("p",null,"Here we calculate similarities as the average distance between\ntarget user score and some other user score on the same set of movies.\nThere are two parameters: similarUserCount limit (2)\nand similar user set size limit (10).\nSimilar user count limit is used for filtering users who have\nat least 2 movies in common with the target user.\nSimilar user set size is used to peek top 10 similar users (10 or less)."),(0,a.kt)("p",null,"Now we have similar user set. We will use those users to\ncalculate the average score for all movies in the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (some_movie: Movie)-[fellow_rate:Rating]-(fellow_user:User)\nWHERE fellow_user.id IN similar_user_set\nWITH some_movie, avg(fellow_rate.score) AS prediction_score\nRETURN some_movie.title AS title, prediction_score\nORDER BY prediction_score DESC;\n")),(0,a.kt)("p",null,"We encourage you to play with some parameters, like similar user count limit\nand similar user set size limit.\nYou can also try to use different similarity functions,\nfor example ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Euclidean_distance"},"Euclidean distance"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"sqrt(reduce(a=0, x IN collect((r.score - other_r.score) * (r.score - other_r.score)) | a + x)) AS similarity;\n")),(0,a.kt)("p",null,"Here we use ",(0,a.kt)("inlineCode",{parentName:"p"},"reduce")," function. Reduce function accumulate list elements\ninto a single result by applying an expression.\nIn our query, this function starts with 0 and sums up squared differences.\n",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function is used for putting squared differences into the list."))}u.isMDXComponent=!0},84214:function(e,t,r){"use strict";t.Z=r.p+"assets/images/movie_metagraph-3c8255437b14fe249a17b70d212785b4.png"}}]);