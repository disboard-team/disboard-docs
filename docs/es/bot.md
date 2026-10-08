---
title: "Documentación del bot de Discord"
description: "Documentación del bot de Discord de Disboard, sus dependencias y comandos disponibles."
---

# Bot

## Introducción

<p align="center">
    <img src="https://img.shields.io/uptimerobot/status/m781988851-938274f9a647999f631d51b0.svg?label=server&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781988851-938274f9a647999f631d51b0.svg?label=server%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781341370-d375025844aeece012d108ba.svg?label=bot&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781341370-d375025844aeece012d108ba.svg?label=bot%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/discord/410932889601966100.svg?style=flat&logo=discord&logoColor=%23ffffff&colorB=%23FF1865" />

</p>

<p align="center">
    <img width="250" height="300" src="/images/tet_github.png">
</p>

### Acerca del bot

Bot de Discord creado para gestionar el equipo, consultar información rápidamente y ofrecer otros comandos útiles.

### Código de color

<span style="line-height: 2.2;">RGB <span style="background-color: #e91e63;padding:5px 10px;color:#fff;">#e91e63</span>&nbsp;&nbsp;<span style="background-color: #e91e63;padding:5px 10px;color:#fff;">rgb(233, 30, 99)</span> / sRGB <span style="background-color: #ff1865;padding:5px 10px;color:#fff;">#ff1865</span>&nbsp;&nbsp;<span style="background-color: #ff1865;padding:5px 10px;color:#fff;">rgb(255, 24, 101)</span></span>

### Tecnologías utilizadas

<p align="center" class="spaced-items">
    <img width="100" src="/images/node_2.png"><img width="100" src="/images/discordjs.png"><img width="100" src="/images/discord.png"><img width="100" src="/images/webhooks.png"><img width="100" src="/images/glitch.png"><img width="100" src="/images/flyio.png">
</p>

- Node.js
- Alojamiento en Glitch - [sitio web](https://glitch.com)

#### Otras herramientas

- Discord Developer Portal - [sitio web](https://discordapp.com/developers)
- Discord Webhooks
- Fly.io (gestor de dominios personalizados) - [sitio web](https://fly.io/)

### Dependencias

- express
- discord.js - [sitio web](https://discord.js.org)
- http
- _dotenv_ (implícita)

### Visita la página

[https://bot.disboard.team](https://bot.disboard.team)

### Repositorio <Badge text="público"/>

[https://github.com/Qu4k3/disboard-bot](https://github.com/Qu4k3/disboard-bot)

## Comandos

**Leyenda**

`static` &nbsp; - Muestra información predefinida

`library` - Obtiene información mediante la biblioteca discord.js

`API` - Obtiene información consultando la API

::: tip Nota adicional
 _No es un comando, pero..._ según el rol asignado a los nuevos miembros, se les muestra una respuesta incrustada con un mensaje de bienvenida. `static`
:::

### Lista de comandos disponibles

| Comando | Tipo | Descripción | Uso |
|:--------|:-----|:------------|:----|
| +tag | `static` | Muestra una respuesta incrustada con el nombre y la etiqueta del equipo. | +tag |
| +tabla | `static` | Muestra una respuesta incrustada con un enlace directo al generador de tablas. | +tabla |
| +info | `library`<hr class="no-border">`API` | Muestra información del usuario: fecha de incorporación, juegos disputados, puntuación media y proporción de victorias y derrotas.<br>También permite consultar a otro compañero. | +info<hr class="no-border">+info&#160;@user |
| +wars | `API` | Muestra información del equipo: partidas disputadas, victorias, derrotas, empates y porcentaje de partidas ganadas. | +wars |
| +disboard | `library` | Muestra a los miembros agrupados por rol para consultar el número de miembros, aliados y aspirantes, así como el total de personas del servidor. | +disboard |
| ~~+snl~~ | `static` | Muestra una lista de usuarios registrados que pueden competir en la liga.<br>`eliminado` | ~~+snl~~ |
| +invi | `static` | Muestra un enlace de invitación al servidor. | +invi |
| +r | `static` | Muestra una imagen o GIF aleatorio de la serie NGNL. | +r |
| +help | `static` | Muestra la lista de comandos disponibles. | +help |
