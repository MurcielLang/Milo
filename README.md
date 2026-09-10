# 🐈 Milo

A chill Discord bot with a gray-cat personality.

Milo is a Discord bot built with TypeScript and Node.js. The project is focused on learning backend development through a real, incrementally-built application.

## Features

Milo currently focuses on the fundamental features of a Discord bot:

- Discord Gateway connection
- Slash commands
- Command handling
- Event handling
- Basic utility commands
- Basic moderation commands
- Error handling
- Logging

More features may be added in the future.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [discord.js](https://discord.js.org/)
- npm
- Git
- GitHub

## 📁 Project Structure

```text
milo/
├── src/
│   ├── commands/
│   │   ├── utility/
│   │   └── moderation/
│   ├── events/
│   ├── config/
│   ├── utils/
│   ├── types/
│   └── index.ts
│
├── tests/
├── .env.example
├── .gitignore
├── eslint.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

## Getting Started

### Prerequisites

You will need:

- Node.js
- npm
- A Discord account
- A Discord application and bot created through the Discord Developer Portal

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd milo
```

Install dependencies:

```bash
npm install
```

Create a `.env` file based on `.env.example`:

```text
DISCORD_TOKEN=
CLIENT_ID=
GUILD_ID=
```

Fill in the required Discord application values.

### Development

Start Milo in development mode:

```bash
npm run dev
```

### Build

Build the TypeScript project:

```bash
npm run build
```

### Start

Run the compiled application:

```bash
npm start
```

## Commands

The command list will grow as Milo develops.

### Utility

| Command       | Description                      |
| ------------- | -------------------------------- |
| `/ping`       | Check whether Milo is responding |
| `/help`       | Show available commands          |
| `/serverinfo` | Show basic server information    |
| `/userinfo`   | Show information about a user    |
| `/avatar`     | Display a user's avatar          |

### Moderation

| Command    | Description              |
| ---------- | ------------------------ |
| `/kick`    | Kick a member            |
| `/ban`     | Ban a member             |
| `/timeout` | Timeout a member         |
| `/warn`    | Warn a member            |
| `/purge`   | Delete multiple messages |

### Future

Milo may eventually receive additional functionality such as persistent data, server configuration, advanced moderation, and other community features.

These features are intentionally outside the initial scope.

## Security

Never commit your Discord bot token or other secrets to Git.

Keep secrets inside `.env` and make sure `.env` is included in `.gitignore`.

If a token is accidentally exposed, revoke it immediately through the Discord Developer Portal.

## Learning Goals

Milo is also a learning project.

The main goals are to gain practical experience with:

- Backend architecture
- Node.js
- TypeScript
- APIs
- Event-driven applications
- Environment configuration
- Error handling
- Testing
- Git and GitHub
- Software project structure

## License

This project is licensed under the MIT License.
