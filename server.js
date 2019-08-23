var express = require('express');
var graphqlHTTP  = require('express-graphql');
var { buildSchema } = require('graphql');
var Music = require("./music.json")

var SERVER_PORT = 4000

var schema = buildSchema(`
    type Query {
        onemusic(id: Int!): Music
        getmusic(name: String): [Music]
    },
    type Mutation {
        updateMusic(id: Int!, name: String!): Music
    },
    type Music {
        id: Int,
        name: String,
        author: String
    }
`)

var getMusic = function(args) { 
    var id = args.id;
    return Music.filter(music => {
        return music.id == id;
    })[0];
}

var getMusics = function(args) {
    if (args.name) {
        var name = args.name;
        return Music.filter(music => music.name === name);
    } else {
        return Music;
    }
}

var updateMusic = function ({id, name}) {
    Music.map(music => {
        if (music.id ===id) {
            music.name = name
            return music
        }
    })
    return Music.filter(music => music.id === id) [0]
}

var root = {
    onemusic: getMusic,
    getmusic: getMusics,
    updateMusic: updateMusic
}

var app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(SERVER_PORT)