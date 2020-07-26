# wow-website

A template website to use for your TrinityCore wow server (tested on AzerothCore but I have faith it'll work anywhere).

**This is for the 3.3.5 version of TrinityCore only. Other versions probably have different database schemas and shouldn't be compatible.**

## Prerequisites

- _Node_
- _Yarn_
- _Docker_
- _Docker-compose_

## Development

To run the server you'll have to setup your _.env_ file in the server directory as specified in _.env.example_.

```env
HOST=<local ip, usually localhost. default is 0.0.0.0>
MYSQL_PORT=<default is 3306>
MYSQL_USER=<MYSQL user>
MYSQL_PASSWORD=<MYSQL password>
AUTH_DATABASE=<auth database name. default is "auth">
JWT_SECRET=<arbitrary secret to sign your json web tokens>
```

Then you'll need to run these commands in the root directory of the app.

```sh
$ yarn
$ yarn dev
```

et voila! It should hopefully work. If it doesn't check the _.env_ file you created.

## Deployment

Run the following command

```sh
$ docker-compose up
```

This should take care of everything.

After it's done, the app should be running on port _80_ on your _localhost_. This is a docker container so you could deploy it wherever not not necessarily locally.
