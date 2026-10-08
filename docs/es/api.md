# API

## Introducción

<p align="center">
    <img src="https://circleci.com/gh/Qu4k3/disboard-api.svg?style=svg&circle-token=c1aea5451e8ad018851e45c477d8f4112b7ebfb4" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781988862-3ea72d807b59330ef0d3eaac.svg?label=server&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781988862-3ea72d807b59330ef0d3eaac.svg?label=server%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781896193-0fc26013b414711d48d26082.svg?label=API%20status&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781896193-0fc26013b414711d48d26082.svg?label=API%20uptime&style=flat" />
</p>
<p align="center">
    <img width="250" height="300" src="/images/shuvi.gif">
</p>

### Acerca de la API

API desarrollada con Node.js y conectada mediante Mongoose a una base de datos MongoDB alojada en un clúster de MongoDB Atlas.

El proyecto está alojado en Heroku.

### Código de color

<span style="line-height: 2.2;">RGB <span style="background-color: #a61a5e;padding:5px 10px;color:#fff;">#a61a5e</span>&nbsp;&nbsp;<span style="background-color: #a61a5e;padding:5px 10px;color:#fff;">rgb(166, 26, 94)</span> / sRGB <span style="background-color: #c21360;padding:5px 10px;color:#fff;">#c21360</span>&nbsp;&nbsp;<span style="background-color: #c21360;padding:5px 10px;color:#fff;">rgb(194, 19, 96)</span></span>

### Tecnologías utilizadas

<p align="center" class="spaced-items">
    <img width="100" src="/images/node_3.png"><img width="100" src="/images/mongoose.png"><img width="100" src="/images/mongodb_2.png"><img width="100" src="/images/discord_3.png"><!--<img width="100" src="/images/jwt.png">--><img width="100" src="/images/heroku_3.png"><img width="100" src="/images/robo3t.png"><img width="100" src="/images/postman.png"><img width="100" src="/images/circleci.png">
</p>

- Node.js
- Clúster de MongoDB Atlas - [sitio web](https://www.mongodb.com/cloud/atlas)
- Heroku - [sitio web](https://www.heroku.com)
- Discord OAuth2

#### Otras herramientas

<!-- JSON Web Tokens - [sitio web](https://jwt.io)-->
- Robo3T
- MongoDB Compass
- Postman
- CircleCI

### Dependencias

- Express
- body-parser
- dotenv
- btoa
- dotenv - [documentación](https://github.com/motdotla/dotenv)
- mongoose
- nanoid - [documentación](https://github.com/ai/nanoid)
- nodemon - [sitio web](https://www.npmjs.com/package/nodemon)

### Visita la página

[https://api.disboard.team](https://api.disboard.team)

### Repositorio <Badge text="privado" type="warning" vertical="top"/>

[https://github.com/Qu4k3/disboard-api](https://github.com/Qu4k3/disboard-api)

## Jugadores

### Descripción del recurso /players

| MÉTODO | RUTA | DESCRIPCIÓN |
| ------ | ---- | ----------- |
| GET | /players | Obtiene la lista de todos los jugadores |
| GET | /players/:playerId | Obtiene un jugador concreto por su ID (_consulta la nota_) |
| POST | /players | Añade un jugador a la base de datos |
| PUT | /players/:playerId | Modifica la información de un jugador concreto |
| DEL | /players/:playerId | Elimina un jugador |

::: tip Nota
**:playerId** puede ser tanto el ID de usuario proporcionado por la aplicación como el ID único de Discord.
:::

::: warning Permisos
Algunas rutas requieren autenticación y no están disponibles públicamente.
:::

### Endpoints y métodos /players

### Parámetros /players

### Ejemplo de solicitud /players

### Ejemplo de respuesta y esquema /players

```json
{
    "player_id" : String, // ID del jugador
    "player_name" : String, // Nombre del jugador
    "player_team" : String, // Referencia al ID del equipo
    "country" : {
        "name" : String, // País
        "code" : String // Código del país
    },
    "player_registry" : [
        {
            "role" : String, // Tipo de rol (p. ej., miembro, aliado, aspirante)
            "in" : Date, // Fecha de incorporación
            "out" : Date, // Fecha de salida
        }
    ],
    "discord" : {
        "unique_id" : String, // ID único de Discord
        "user_tag" : String, // Etiqueta del usuario de Discord
        "avatar_url" : String, // URL de la imagen de perfil de Discord
        "roles" : [
            {
                "role" : String, // Rol de Discord
                "role_color" : String // Color del rol de Discord en hexadecimal
            }
        ]
    },
    "switch_fc" : String, // Código de amistad de Nintendo Switch
    "mkc_player_profile" : String // Enlace al perfil del jugador en MKC (p. ej., https://www.mariokartcentral.com/mkc/players/10)
}
```

## Equipos

### Descripción del recurso /teams

| MÉTODO | RUTA | DESCRIPCIÓN |
| ------ | ---- | ----------- |
| GET | /teams | Obtiene la lista de todos los equipos |
| GET | /teams/{teamId} | Obtiene un equipo concreto por su ID |
| POST | /teams | Añade un equipo |
| PUT | /teams/{teamId} | Modifica la información de un equipo concreto |
| DEL | /teams/{teamId} | Elimina un equipo |

::: warning Permisos
Algunas rutas requieren autenticación y no están disponibles públicamente.
:::

### Endpoints y métodos /teams

### Parámetros /teams

### Ejemplo de solicitud /teams

### Ejemplo de respuesta y esquema /teams

```json
{
    "team_id" : String, // ID único del equipo
    "team_name" : String, // Nombre del equipo
    "team_tag" : String, // Etiqueta del equipo
    "team_logo" : String, // Enlace directo a la imagen
    "mkc_team_profile" : String // Enlace al perfil del equipo en MKC (p. ej., https://www.mariokartcentral.com/mkc/teams/42)
}
```

## Guerras

### Descripción del recurso /wars

| MÉTODO | RUTA | DESCRIPCIÓN |
| ------ | ---- | ----------- |
| GET | /wars | Obtiene la lista de todas las guerras |
| GET | /wars/:warId | Obtiene una guerra concreta por su ID |
| POST | /wars | Añade una guerra |
| PUT | /wars/:warId | Modifica la información de una guerra |
| DEL | /wars/:warId | Elimina una guerra |

::: warning Permisos
Algunas rutas requieren autenticación y no están disponibles públicamente.
:::

### Endpoints y métodos /wars

### Parámetros /wars

### Ejemplo de solicitud /wars

### Ejemplo de respuesta y esquema /wars

```json
{
    "war_id": String, // ID de la guerra
    "played_at" : Date, // Fecha en que se disputó la guerra
    "game" : {
        "name" : String, // Código del juego; valor predeterminado: MK8D
        "mode" : String // Código del modo de juego; valor predeterminado: 150cc
    },
    "type" : String, // Tipo de partida; valor predeterminado: amistosa
    "tags" : [
        String // Etiquetas para agrupar o asociar guerras
    ],
    "results" : [
        {
            "team" : ObjectId, // Referencia al ID del equipo
            "host" : Boolean, // Indica si el equipo organiza la partida
            "score" : Number, // Puntuación final del equipo
            "penality" : Number, // Puntos de penalización
            "players" : [
                {
                    "player" : ObjectId, // Referencia al ID del jugador
                    "score" : Number // Puntuación del jugador
                }
            ]
        },
        {
            "team" : ObjectId, // Referencia al ID del equipo
            "host" : Boolean, // Indica si el equipo organiza la partida
            "score" : Number, // Puntuación final del equipo
            "penality" : Number, // Puntos de penalización
            "players" : [
                {
                    "player" : String, // Nombre del jugador
                    "score" : Number // Puntuación del jugador
                }
            ]
        }
    ]
}
```
