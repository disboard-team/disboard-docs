---
title: "Discord Bot Documentation"
description: "Documentation for the Disboard Discord bot, its dependencies, and available commands."
---

# Bot

## Intro

<p align="center">
    <img src="https://img.shields.io/uptimerobot/status/m781988851-938274f9a647999f631d51b0.svg?label=server&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781988851-938274f9a647999f631d51b0.svg?label=server%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/uptimerobot/status/m781341370-d375025844aeece012d108ba.svg?label=bot&style=flat" /> <img src="https://img.shields.io/uptimerobot/ratio/m781341370-d375025844aeece012d108ba.svg?label=bot%20uptime&style=flat" />&nbsp;
    <img src="https://img.shields.io/discord/410932889601966100.svg?style=flat&logo=discord&logoColor=%23ffffff&colorB=%23FF1865" />

</p>

<p align="center">
    <img width="250" height="300" src="/images/tet_github.png">
</p>

### About

Discord bot built for team management, quick info checking and some other helpful available commands.

### Color code

<span style="line-height: 2.2;">RGB <span style="background-color: #e91e63;padding:5px 10px;color:#fff;">#e91e63</span>&nbsp;&nbsp;<span style="background-color: #e91e63;padding:5px 10px;color:#fff;">rgb(233, 30, 99)</span> / sRGB <span style="background-color: #ff1865;padding:5px 10px;color:#fff;">#ff1865</span>&nbsp;&nbsp;<span style="background-color: #ff1865;padding:5px 10px;color:#fff;">rgb(255, 24, 101)</span></span>

### Used

<p align="center" class="spaced-items">
    <img width="100" src="/images/node_2.png"><img width="100" src="/images/discordjs.png"><img width="100" src="/images/discord.png"><img width="100" src="/images/webhooks.png"><img width="100" src="/images/glitch.png"><img width="100" src="/images/flyio.png">
</p>

- Nodejs
- Glitch hosting - [site](https://glitch.com)

#### Other

- Discord Developer Portal - [site](https://discordapp.com/developers)
- Discord Webhooks
- Fly.io (Custom domain manager)  - [site](https://fly.io/)

### Dependencies

- express
- discord.js - [site](https://discord.js.org)
- http
- _dotenv_ (implicit)

### Check page

[https://bot.disboard.team](https://bot.disboard.team)

### Repository <Badge text="public"/>

[https://github.com/Qu4k3/disboard-bot](https://github.com/Qu4k3/disboard-bot)

## Commands

**Legend**

`static` &nbsp; - Retrieve a pre-set information

`library` - Retrieve information by using discord.js library

`API` - Retrieve information by calling the API

::: tip Additional note
 _Not a command but..._ depending on the role that is attributed to new members, an embeded response is shown to the user, with an introtuction/welcoming message. `static`
:::

### List of available commands

| Commands  | Type  | Description           | Usage  |
|:----------|:----------|:----------------------|:-------|
| +tag | `static`      | Shows an embeded response with name and team tag.                                                                                                                                | +tag |
| +tabla | `static`    | Shows an embeded response with a direct link to table generator.                                                                                                                 | +tabla |
| +info | `library`<hr class="no-border">`API`     | Shows an embeded response with user information: incorporation date, played games, average points, W/L ratio.<br>Can be used to check other teammate's information.              | +info<hr class="no-border">+info&#160;@user |
| +wars | `API`     | Shows an embeded response with team information: played matches, victories, loses, draws, % wined matches.                                                                       | +wars |
| +disboard | `library` | Shows an embeded response with a list of members split by their role, in order to check how many members/allys/trials there are, as well as the number of members on the server. | +disboard |
| ~~+snl~~ | `static`  | Shows a list of registered users elegible to compete in the league.<br>`removed`                                                                                                 | ~~+snl~~ |
| +invi | `static`     | Shows an embeded response with an invite server link.                                                                                                                            | +invi |
| +r | `static`        | Shows a random image/gif from NGNL series.                                                                                                                                       | +r  |
| +help | `static`     | Shows an embeded response with a list of commands available.                                                                                                                     | +help |
