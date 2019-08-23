# Graphql Query
[![Graphql](https://avatars0.githubusercontent.com/u/12972006?s=200&v=4)](https://graphql.org/)

## Accessing The GraphQL API
### Query
```
query getSingleMusic($musicId: Int!) {
  onemusic (id: $musicId) {
    name
    author
  }
}
```
### Query Variable
```json
{
	"musicId": 3
}
```
### Result
```json
{
  "data": {
    "onemusic": {
      "name": "As if it you last",
      "author": "BlackPink"
    }
  }
}
```
## Using Aliases & Fragments
### Query
```
query getSingleMusic($musicId1: Int!, $musicId2: Int!) {
  music1: onemusic (id: $musicId1) {
    ...musicField
  },
  music2: onemusic (id: $musicId2) {
    ...musicField
  }
}
fragment musicField on Music {
  name
  author
}
```
### Query Variable
```json
{
  "musicId1": 3,
  "musicId2": 5
}
```
### Result
```json
{
  "data": {
    "music1": {
      "name": "As if it you last",
      "author": "BlackPink"
    },
    "music2": {
      "name": "Done for me",
      "author": "Punch"
    }
  }
}
```

## Mutations
### Query
```
mutation updateMusic($id: Int!, $name: String) {
  updateMusic(id: $id, name: $name) {
    ...musicField
  }
}
fragment musicField on Music {
  name
  author
}
```

### Query Variable
```json
{
  "id": 1,
  "name": "Someday"
}
```

### Result
```json
{
  "data": {
    "updateMusic": {
      "name": "Someday",
      "author": "IU"
    }
  }
}
```

## Credit
[Sebastian Eschweiler](https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1)


