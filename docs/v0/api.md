---
head:
  - - meta
    - name: robots
      content: noindex, nofollow
---

# API

## Intro

<p align="center">
    <img src="https://circleci.com/gh/Qu4k3/disboard-api.svg?style=svg&circle-token=c1aea5451e8ad018851e45c477d8f4112b7ebfb4" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781988862-3ea72d807b59330ef0d3eaac.svg?label=server&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781988862-3ea72d807b59330ef0d3eaac.svg?label=server%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781896193-0fc26013b414711d48d26082.svg?label=API%20status&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781896193-0fc26013b414711d48d26082.svg?label=API%20uptime&style=flat" />
</p>
<p align="center">
    <img width="250" height="300" src="/images/shuvi.gif">
</p>

### About

API made in nodejs connected through mongoose to a mongodb database hosted in a mongodb Atlas cluster.

Project hosted in Heroku.

### Color code

<span style="line-height: 2.2;">RGB <span style="background-color: #a61a5e;padding:5px 10px;color:#fff;">#a61a5e</span>&nbsp;&nbsp;<span style="background-color: #a61a5e;padding:5px 10px;color:#fff;">rgb(166, 26, 94)</span> / sRGB <span style="background-color: #c21360;padding:5px 10px;color:#fff;">#c21360</span>&nbsp;&nbsp;<span style="background-color: #c21360;padding:5px 10px;color:#fff;">rgb(194, 19, 96)</span></span>

### Used

<p align="center" class="spaced-items">
    <img width="100" src="/images/node_3.png"><img width="100" src="/images/mongoose.png"><img width="100" src="/images/mongodb_2.png"><img width="100" src="/images/discord_3.png"><!--<img width="100" src="/images/jwt.png">--><img width="100" src="/images/heroku_3.png"><img width="100" src="/images/robo3t.png"><img width="100" src="/images/postman.png"><img width="100" src="/images/circleci.png">
</p>

- Nodejs
- MongoDB Atas Cluster - [site](https://www.mongodb.com/cloud/atlas)
- Heroku - [site](https://www.heroku.com)
- Discord OAuth2

#### Other

<!-- JSON Web Tokens - [site](https://jwt.io)-->
- Robo3T
- MongoDB Compass
- Postman
- CircleCI

### Dependencies

- Express
- body-parser
- dotenv
- btoa
- dotenv - [docs](https://github.com/motdotla/dotenv)
- mongoose
- nanoid - [docs](https://github.com/ai/nanoid)
- nodemon - [site](https://www.npmjs.com/package/nodemon)

### Check page

[https://api.disboard.team](https://api.disboard.team)

### Repository <Badge text="private" type="warning" vertical="top"/>

[https://github.com/Qu4k3/disboard-api](https://github.com/Qu4k3/disboard-api)

## Players

### Resource description /players

| METHOD        | PATH           | DESCRIPTION  |
| ------------- |-------------| -----|
| GET       | /players | Retrieve a list of all players |
| GET       | /players/:playerId      |   Retrieve a specific player by it's ID _*check note_ |
| POST      | /players      |    Add a new player to database |
| PUT       | /players/:playerId      |    Edit information from a specific player |
| DEL       | /players/:playerId      |    Delete a player |

::: tip NOTE
**:playerId** can be both the user's ID provided by the app or its Discord unique ID
:::

::: warning PERMISSIONS
Some routes are autenticated and will not be available for public
:::

### Endpoints and methods /players

### Parameters /players

### Request example /players

### Response example and schema /players

``` json
{
    "player_id" : String, // Player ID
    "player_name" : String, // Player nickname
    "player_team" : String, // Refer to team's Id
    "country" : {
        "name" : String, // Country
        "code" : String // Country code
    },
    "player_registry" : [
        {
            "role" : String, // Role type (ex: member, ally, trial)
            "in" : Date, // join date
            "out" : Date, // leave date
        }
    ],
    "discord" : {
        "unique_id" : String, // Discord unique Id
        "user_tag" : String, // Discord user tag
        "avatar_url" : String, // Discord's user profile picture
        "roles" : [
            {
                "role" : String, // Discord role
                "role_color" : String // Discord role color in hexadecimal
            }
        ]
    },
    "switch_fc" : String, // Nintendo Switch's friend code
    "mkc_player_profile" : String // mkc team link (ex: https://www.mariokartcentral.com/mkc/players/10)
}
```

## Teams

### Resource description /teams

| METHOD        | PATH           | DESCRIPTION  |
| ------------- |-------------| -----|
| GET       | /teams | Retrieve a list of all teams |
| GET       | /teams/{teamId}      |   Retrieve a specific team by it's ID |
| POST      | /teams      |    Add a new team to database |
| PUT       | /teams/{teamId}      |    Edit information from a specific team |
| DEL       | /teams/{teamId}      |    Delete a team |

::: warning PERMISSIONS
Some routes are autenticated and will not be available for public
:::

### Endpoints and methods /teams

### Parameters /teams

### Request example /teams

### Response example and schema /teams

``` json
{
    "team_id" : String, // Team unique ID
    "team_name" : String, // Team name
    "team_tag" : String, // Team tag
    "team_logo" : String, // direct image link
    "mkc_team_profile" : String // mkc team link (ex: https://www.mariokartcentral.com/mkc/teams/42)
}
```

s

### Resource description /wars

| METHOD        | PATH           | DESCRIPTION  |
| ------------- |-------------| -----|
| GET       | /wars | Retrieve a list of all wars |
| GET       | /wars/:warId      |   Retrieve a specific war by it's ID |
| POST      | /wars      |    Add a new war to database |
| PUT       | /wars/:warId      |    Edit inforamation |
| DEL       | /wars/:warId      |    Delete a war |

::: warning PERMISSIONS
Some routes are autenticated and will not be available for public
:::

### Endpoints and methods /wars

### Parameters /wars

### Request example /wars

### Response example and schema /wars

``` json
{
    "war_id": String, // War unique ID
    "played_at" : Date, // Date where the war was played
    "game" : {
        "name" : String, // Game's code --default: MK8D
        "mode" : String // Game's mode code --default: 150cc
    },
    "type" : String, // Type of game played --default: friendly
    "tags" : [
        String // Tags to make wars groups or associations
    ],
    "results" : [
        {
            "team" : ObjectId, // Refer to team Id
            "host" : Boolean, // Define if the team is hosting the game
            "score" : Number, // Team final score
            "penality" : Number, // Penality points
            "players" : [
                {
                    "player" : ObjectId, // Refer to player Id
                    "score" : Number // player score
                }
            ]
        },
        {
            "team" : ObjectId, // Refer to team's Id
            "host" : Boolean, // Define if the team is hosting the game
            "score" : Number, // Team final score
            "penality" : Number, // Penality points
            "players" : [
                {
                    "player" : String, // Player name
                    "score" : Number // player score
                }
            ]
        }
    ]
}
```
