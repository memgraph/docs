"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(r),c=a,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const i={id:"movie-recommendation",title:"Movie recommendation system",sidebar_label:"Movie recommendation system",slug:"/tutorials/movie-recommendation"},o=void 0,s={unversionedId:"tutorials/exploring-datasets/movie-recommendation",id:"version-2.9.0/tutorials/exploring-datasets/movie-recommendation",title:"Movie recommendation system",description:"This article is a part of a series intended to show users how to use Memgraph on",source:"@site/memgraph_versioned_docs/version-2.9.0/tutorials/exploring-datasets/movie-recommendation.md",sourceDirName:"tutorials/exploring-datasets",slug:"/tutorials/movie-recommendation",permalink:"/docs/memgraph/2.9.0/tutorials/movie-recommendation",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.9.0/tutorials/exploring-datasets/movie-recommendation.md",tags:[],version:"2.9.0",frontMatter:{id:"movie-recommendation",title:"Movie recommendation system",sidebar_label:"Movie recommendation system",slug:"/tutorials/movie-recommendation"},sidebar:"memgraph",previous:{title:"Marvel Comic Universe social network",permalink:"/docs/memgraph/2.9.0/tutorials/marvel-universe"},next:{title:"Style your graphs in Memgraph Lab",permalink:"/docs/memgraph/2.9.0/tutorials/style-your-graphs-in-memgraph-lab"}},l={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Data model",id:"data-model",level:2},{value:"Exploring the dataset",id:"exploring-the-dataset",level:2},{value:"Example queries",id:"example-queries",level:2}],p={toc:m};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article is a part of a series intended to show users how to use Memgraph on\nreal-world data and, by doing so, retrieve some interesting and useful\ninformation."),(0,a.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.9.0/tutorials"},"tutorial overview section"),", where you\ncan also find instructions on how to start with the tutorial."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This example shows how to implement a simple recommendation system with\n",(0,a.kt)("inlineCode",{parentName:"p"},"openCypher")," in Memgraph. First, we will show how to perform simple operations,\nand then we will implement a query for the movie recommendation."),(0,a.kt)("h2",{id:"data-model"},"Data model"),(0,a.kt)("p",null,"In this example, we will use MovieLens dataset, which consists of 9742 movies across 20 genres.\nThere are three types of nodes: ",(0,a.kt)("inlineCode",{parentName:"p"},"Movie"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Genre"),". Movie nodes\nhave properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),". Users have an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property, while genres nodes\nhave a property: ",(0,a.kt)("inlineCode",{parentName:"p"},"name")),(0,a.kt)("p",null,"Each movie can be connected with ",(0,a.kt)("inlineCode",{parentName:"p"},":OF_GENRE")," relationship to different genres. A user can\nrate some movies. Rating is modeled with ",(0,a.kt)("inlineCode",{parentName:"p"},":RATED")," relationship and this relationship has\na property ",(0,a.kt)("inlineCode",{parentName:"p"},"rating")," ","\u2014"," float number between 0 and 5."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Movies",src:r(80478).Z,width:"904",height:"252"})),(0,a.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,a.kt)("p",null,"To follow this tutorial, download the ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/download#memgraph-platform"},"Memgraph\nPlatform"),". Once you have it up\nand running, open Memgraph Lab web application within the browser on\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,a.kt)("inlineCode",{parentName:"a"},"localhost:3000"))," and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Datasets")," in the\nsidebar. From there, choose the dataset ",(0,a.kt)("inlineCode",{parentName:"p"},"MovieLens: Movies, genres and users"),"\nand continue with the tutorial. "),(0,a.kt)("h2",{id:"example-queries"},"Example queries"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1",".")," List first 10 movies sorted by title:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (movie:Movie)\nRETURN movie\nORDER BY movie.title\nLIMIT 10;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2",".")," List 15 users from the dataset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (user:User)\nRETURN user\nLIMIT 15;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3",".")," List 10 movies that have ",(0,a.kt)("em",{parentName:"p"},"Comedy")," and ",(0,a.kt)("em",{parentName:"p"},"Action")," genres and sort them by\ntitle: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (movie:Movie)-[:OF_GENRE]->(:Genre {name:'Action'})\nMATCH (movie)-[:OF_GENRE]->(:Genre {name:'Comedy'})\nRETURN movie.title\nORDER BY movie.title\nLIMIT 10;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4",".")," Average score for ",(0,a.kt)("em",{parentName:"p"},"Star Wars: Episode IV - A New Hope (1977)")," movie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:User)-[r:RATED]->(:Movie {title:"Star Wars: Episode IV - A New Hope (1977)"})\nRETURN avg(r.rating)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5",".")," Return the first 10 movies that are ordered by rating:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:User)-[r:RATED]->(movie:Movie)\nRETURN movie.title, avg(r.rating) AS rating\nORDER BY rating DESC\nLIMIT 10;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6",".")," Create a new user and rate some movies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:User {id:1000});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"7",".")," Check if new user is created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (user:User{id:1000})\nRETURN user;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"8",".")," Create some ratings for the user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (u:User {id:1000}), (m:Movie {title:"2 Guns (2013)"})\nMERGE (u)-[:RATED {rating:3.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"21 Jump Street (2012)"})\nMERGE (u)-[:RATED {rating:3.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Toy Story (1995)"})\nMERGE (u)-[:RATED {rating:3.5}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Lion King, The (1994)"})\nMERGE (u)-[:RATED {rating:4.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Dark Knight, The (2008)"})\nMERGE (u)-[:RATED {rating:4.5}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Star Wars: Episode VI - Return of the Jedi (1983)"})\nMERGE (u)-[:RATED {rating:4.5}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Godfather, The (1972)"})\nMERGE (u)-[:RATED {rating:5.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Lord of the Rings: The Return of the King, The (2003)"})\nMERGE (u)-[:RATED {rating:4.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Aladdin (1992)"})\nMERGE (u)-[:RATED {rating:4.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Pirates of the Caribbean: The Curse of the Black Pearl (2003)"})\nMERGE (u)-[:RATED {rating:4.5}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Departed, The (2006)"})\nMERGE (u)-[:RATED {rating:4.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Texas Rangers (2001)"})\nMERGE (u)-[:RATED {rating:2.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Eve of Destruction (1991)"})\nMERGE (u)-[:RATED {rating:1.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Sharkwater (2006)"})\nMERGE (u)-[:RATED {rating:2.0}]->(m);\nMATCH (u:User {id:1000}), (m:Movie {title:"Extreme Days (2001)"})\nMERGE (u)-[:RATED {rating:1.5}]->(m);\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9","."),"Check all the movies user with ",(0,a.kt)("inlineCode",{parentName:"p"},"id = 1000")," has rated: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MATCH (user:User {id:1000})-[rating:RATED]->(movie:Movie)\nRETURN user, movie, rating\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"10",".")," Recommendation system:"),(0,a.kt)("p",null,"The idea is to implement simple ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Collaborative_filtering"},"memory based collaborative\nfiltering"),"."),(0,a.kt)("p",null,"Let's recommend some movies for user with ",(0,a.kt)("inlineCode",{parentName:"p"},"id = 1000"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User {id:1000})-[r:RATED]-(m:Movie)\n      -[other_r:RATED]-(other:User)\nWITH other.id AS other_id,\n     avg(abs(r.rating-other_r.rating)) AS similarity,\n     count(*) AS same_movies_rated\nWHERE same_movies_rated > 2\nWITH other_id\nORDER BY similarity\nLIMIT 10\nWITH collect(other_id) AS similar_user_set\nMATCH (some_movie:Movie)-[fellow_rate:RATED]-(fellow_user:User)\nWHERE fellow_user.id IN similar_user_set\nWITH some_movie, avg(fellow_rate.rating) AS prediction_rating\nRETURN some_movie.title AS Title, prediction_rating\nORDER BY prediction_rating DESC;\n")),(0,a.kt)("p",null,"How does this query work?"),(0,a.kt)("p",null,"This query has two parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finding similar users"),(0,a.kt)("li",{parentName:"ul"},"Predicting the score for some movie (recommendation)")),(0,a.kt)("p",null,"In the first part, we are looking for similar users. First, we need to define\nsimilar users: Two users are considered similar if they tend to give similar\nratings to the same movies. For the target user and some other user we\nare searching for the same movies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User {id:1000})-[r:RATED]-(m:Movie)-[other_r:RATED]-(other:User)\nRETURN *;\n")),(0,a.kt)("p",null,"If you try to execute the query above with added ",(0,a.kt)("inlineCode",{parentName:"p"},"RETURN")," statement, you will get all\npotential similar users and movies they rated.\nBut this is not enough for finding similar users. We need to choose users with\nthe same movies and similar ratings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"WITH other.id AS other_id,\n     avg(abs(r.rating-other_r.rating)) AS similarity,\n     count(*) AS same_movies_rated\nWHERE same_movies_rated > 2\nWITH other_id\nORDER BY similarity\nLIMIT 10;\nWITH collect(other_id) AS similar_user_set\n")),(0,a.kt)("p",null,"Here we calculate similarities as the average distance between the target user rating\nand some other user rating on the same set of movies. There are two parameters:\n",(0,a.kt)("inlineCode",{parentName:"p"},"same_movies_rated")," defines the number of same movies (more than 3) that the target user and other users need to rate, and ",(0,a.kt)("inlineCode",{parentName:"p"},"similar_user_set")," represents the users that gave a similar rating to the movies that the target user has rated. These parameters enable extracting the best users for movie recommendations."),(0,a.kt)("p",null,"Now we have a similar user set. We will use those users to calculate the average\nrating value for all movies they rated in the database as ",(0,a.kt)("inlineCode",{parentName:"p"},"prediction_rating")," variable, and return the best-rated movies order by ",(0,a.kt)("inlineCode",{parentName:"p"},"prediction_rating")," variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (some_movie: Movie)-[fellow_rate:RATED]-(fellow_user:User)\nWHERE fellow_user.id IN similar_user_set\nWITH some_movie, avg(fellow_rate.rating) AS prediction_rating\nRETURN some_movie.title AS title, prediction_rating\nORDER BY prediction_rating DESC;\n")),(0,a.kt)("p",null,"We encourage you to play with some parameters, like ",(0,a.kt)("inlineCode",{parentName:"p"},"same_movies_rated")," limit and\n",(0,a.kt)("inlineCode",{parentName:"p"},"similar_user_set")," size limit. You can also try to use different similarity\nfunctions, for example ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Euclidean_distance"},"Euclidean\ndistance"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"sqrt(reduce(a=0, x IN collect((r.rating - other_r.rating) * (r.rating - other_r.rating)) | a + x)) AS similarity;\n")),(0,a.kt)("p",null,"Here we use ",(0,a.kt)("inlineCode",{parentName:"p"},"reduce")," function. Reduce function accumulate list elements into a\nsingle result by applying an expression. In our query, this function starts with\n0 and sums up squared differences. ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function is used for putting\nsquared differences into the list."))}d.isMDXComponent=!0},80478:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/movielens_model-15c42f1846bf29b381dc967d60f7bca3.png"}}]);