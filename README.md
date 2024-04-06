# XMTP Docs Bot

This is a PoC for an XMTP bot that receives questions/prompts from users and returns answers. The bot is built using the [Brian SDK](https://www.npmjs.com/package/@brian-ai/sdk).

## How does it work

At the current SOTA the bot is really simple. Just send it a message and it will return an answer based on the prompt you just submitted. The bot is leveraging [Brian](https://brianknows.org) to generate the answers based on the XMTP docs.

## Getting started

To install dependencies:

```bash
yarn
```

To run:

```bash
yarn build
yarn start
```

To run with hot-reload:

```bash
yarn build:watch
yarn start:watch
```

### Environment

```bash
cp .env.example .env
```

then populate the environment variables accordingly
