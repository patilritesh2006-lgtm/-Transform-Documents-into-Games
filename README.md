# 🤖 AI-Powered Document to Game Transformer

<div align="center">

<!-- TODO: Add a compelling project logo or banner -->

[![GitHub stars](https://img.shields.io/github/stars/patilritesh2006-lgtm/-Transform-Documents-into-Games?style=for-the-badge)](https://github.com/patilritesh2006-lgtm/-Transform-Documents-into-Games/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/patilritesh2006-lgtm/-Transform-Documents-into-Games?style=for-the-badge)](https://github.com/patilritesh2006-lgtm/-Transform-Documents-into-Games/network)
[![GitHub issues](https://img.shields.io/github/issues/patilritesh2006-lgtm/-Transform-Documents-into-Games?style=for-the-badge)](https://github.com/patilritesh2006-lgtm/-Transform-Documents-into-Games/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE) <!-- TODO: Verify actual license, inferred MIT as common -->

**Turn Boring PDFs into Fun Quizzes! Upload any study material, notes, or textbook chapters. Our AI instantly creates interactive games to help you master the topic.**

[Live Demo]([https://sl1nk.com/concept-game-engine]) <!-- TODO: Add actual live demo link if available --> |
[Documentation](https://docs.doc-to-game.com) <!-- TODO: Add documentation link if available -->

</div>

## 📖 Overview

The **AI-Powered Document to Game Transformer** is an innovative full-stack web application designed to revolutionize the way users interact with their study materials. By leveraging advanced AI capabilities, it transforms static documents—such as PDFs, notes, or textbook chapters—into engaging, interactive quizzes and games. This project aims to make learning more dynamic and effective, providing a fun alternative to traditional studying methods.

This application is built with a modern, type-safe stack, featuring a React frontend, a Node.js tRPC backend, and Drizzle ORM for robust data management with PostgreSQL.

## ✨ Features

- 🧠 **AI-Powered Quiz Generation**: Automatically transforms uploaded document content into intelligent, interactive quizzes and games.
- 📤 **Document Upload & Processing**: Seamlessly upload various study materials (e.g., PDFs) for AI analysis.
- 🎮 **Interactive Game Experience**: Engage with generated content through diverse game formats, enhancing retention and understanding.
- 💻 **Intuitive User Interface**: A modern and responsive frontend built with React and Tailwind CSS, providing a smooth user experience.
- 🛡️ **Type-Safe API Communication**: Utilizes tRPC to ensure end-to-end type safety between the frontend and backend.
- 🗄️ **Robust Data Management**: Persistent storage and querying of documents, generated quizzes, and user progress via Drizzle ORM and PostgreSQL.
- 🛠️ **Modular & Scalable Architecture**: A well-organized monorepo structure separating client, server, and shared logic, enabling easier development and scaling.

## 🖥️ Screenshots

<!-- TODO: Add actual screenshots of the application's key functionalities and UI -->
![Homepage Screenshot](path-to-homepage-screenshot.png)
_A captivating view of the application's homepage, inviting users to transform their documents._

![Quiz Game Screenshot](path-to-quiz-game-screenshot.png)
_An example of an interactive quiz generated from a document, showcasing the game interface._

## 🛠️ Tech Stack

**Frontend:**
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

**Backend:**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![tRPC](https://img.shields.io/badge/tRPC-2596be?style=for-the-badge&logo=trpc&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) <!-- Inferred, common for Node.js backends -->
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-FFE75B?style=for-the-badge&logo=dotenv&logoColor=black)

**Database:**
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-blue?style=for-the-badge&logo=drizzle&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-42F559?style=for-the-badge&logo=neon&logoColor=white)

**Tools & Other:**
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7BA3E?style=for-the-badge&logo=prettier&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E93D7?style=for-the-badge&logo=vitest&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white) <!-- Detected from `package.json` scripts, though `package-lock.json` suggests npm -->

## 🚀 Quick Start

Follow these steps to get a development environment up and running.

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js**: `v18.x` or higher (recommended for pnpm)
- **pnpm**: Version `8.x` or higher (preferred package manager)
- **PostgreSQL**: A running instance or access to a cloud-based PostgreSQL service (e.g., Neon.tech).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/patilritesh2006-lgtm/-Transform-Documents-into-Games.git
    cd -Transform-Documents-into-Games
    ```

2.  **Install pnpm (if not already installed)**
    ```bash
    npm install -g pnpm
    ```

3.  **Install dependencies**
    Navigate to the root of the project and install dependencies for all workspaces:
    ```bash
    pnpm install
    ```

4.  **Environment setup**
    Create a `.env` file in the project root based on the `.env.example` (or common variables inferred):
    ```bash
    cp .env.example .env
    ```
    Configure your environment variables in the newly created `.env` file:

    | Variable         | Description                                       | Default     | Required |
    |------------------|---------------------------------------------------|-------------|----------|
    | `DATABASE_URL`   | Connection string for your PostgreSQL database.   | `undefined` | Yes      |
    | `PORT`           | Port for the backend server to listen on.         | `3000`      | No       |
    | `AI_API_KEY`     | API key for integrating with the AI service.      | `undefined` | Yes      |
    | `WEB_CLIENT_URL` | URL of the frontend application (for CORS etc.).  | `http://localhost:5173` | Yes |
    <!-- TODO: Review actual .env.example content or backend code for exact variable names -->

5.  **Database setup**
    Run Drizzle ORM migrations to set up your database schema:
    ```bash
    pnpm db:migrate
    ```

6.  **Start development servers**
    Start both the frontend and backend development servers:
    ```bash
    pnpm dev
    ```

7.  **Open your browser**
    Visit `http://localhost:5173` (or the port configured for the client) to access the application.

## 📁 Project Structure

The project follows a monorepo structure, organizing the codebase into logical workspaces:

```
.
├── .gitignore             # Git ignored files
├── .replit                # Replit configuration
├── client/                # Frontend application (React, Vite)
│   ├── src/               # React source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages/routes
│   │   ├── hooks/         # Custom React hooks
│   │   ├── api/           # tRPC client setup
│   │   └── main.tsx       # Main client entry point
│   ├── public/            # Static assets
│   └── index.html         # HTML entry file
├── server/                # Backend application (Node.js, tRPC, Express)
│   ├── src/               # Server source code
│   │   ├── routers/       # tRPC router definitions
│   │   ├── services/      # Business logic services (e.g., AI integration)
│   │   ├── db/            # Database connection and schema
│   │   ├── index.ts       # Main server entry point
│   └── tsconfig.json      # TypeScript configuration for server
├── shared/                # Code shared between client and server (e.g., tRPC types, Zod schemas)
│   └── src/
│       └── trpc.ts        # Shared tRPC definitions
├── script/                # Utility scripts (e.g., database seeding)
├── drizzle.config.ts      # Drizzle ORM configuration
├── package.json           # Monorepo and root dependencies/scripts
├── package-lock.json      # pnpm lock file
├── postcss.config.js      # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # Root TypeScript configuration
└── vite.config.ts         # Vite build configuration (primarily for client)
```

## ⚙️ Configuration

### Environment Variables
Sensitive information and configurations are managed via environment variables. Refer to the `.env.example` file for a comprehensive list.

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `DATABASE_URL` | Connection string for PostgreSQL. | `undefined` | Yes |
| `PORT` | Port for the backend server. | `3000` | No |
| `AI_API_KEY` | API key for the AI service. | `undefined` | Yes |
| `WEB_CLIENT_URL` | URL of the frontend app for CORS. | `http://localhost:5173` | Yes |

### Configuration Files
- `drizzle.config.ts`: Configures Drizzle ORM for schema definition and migrations.
- `tailwind.config.ts`: Defines Tailwind CSS customizations, themes, and plugins.
- `postcss.config.js`: PostCSS configuration for processing CSS, including Tailwind CSS.
- `vite.config.ts`: Configures Vite for the client-side build process, including React plugin and path aliases.
- `tsconfig.json`: TypeScript compiler options for the entire project.

## 🔧 Development

### Available Scripts
The `package.json` includes several scripts to streamline development:

| Command             | Description                                          |
|---------------------|------------------------------------------------------|
| `pnpm dev`          | Starts both the client and server in development mode. |
| `pnpm client:dev`   | Starts the frontend development server.              |
| `pnpm server:dev`   | Starts the backend development server (with `ts-node-dev`). |
| `pnpm build`        | Builds the entire project for production (client and server). |
| `pnpm client:build` | Builds the frontend for production.                  |
| `pnpm server:build` | Compiles the backend TypeScript to JavaScript.       |
| `pnpm start`        | Starts the production server (after building).       |
| `pnpm test`         | Runs all tests using Vitest.                         |
| `pnpm lint`         | Lints all code using ESLint.                         |
| `pnpm format`       | Formats all code using Prettier.                     |
| `pnpm db:migrate`   | Applies pending Drizzle ORM database migrations.     |
| `pnpm db:push`      | Pushes the Drizzle schema directly to the database.  |
| `pnpm db:studio`    | Opens Drizzle Studio for database inspection.        |

### Development Workflow
1.  **Code Changes**: Make changes in `client/`, `server/`, or `shared/`.
2.  **Live Reload**: The `pnpm dev` command provides live reloading for both frontend and backend changes.
3.  **Type Checking**: TypeScript provides static type checking during development and build steps.
4.  **Linting & Formatting**: Ensure code quality by running `pnpm lint` and `pnpm format` regularly.

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for unit and integration testing.

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage report
pnpm test --coverage
```

## 🚀 Deployment

### Production Build
To prepare the application for production deployment, run the build command:
```bash
pnpm build
```
This will create optimized client assets in `client/dist` and compiled server code in `server/dist`.

### Deployment Options
-   **Frontend**: The `client/dist` directory can be deployed to static hosting services like Vercel, Netlify, or AWS S3/CloudFront.
-   **Backend**: The `server/dist` directory can be deployed to Node.js hosting platforms like Vercel (serverless functions), AWS EC2, DigitalOcean, Heroku, or Render.
-   **Database**: Leverage cloud-managed PostgreSQL services like [Neon.tech](https://neon.tech/) (used in the stack), AWS RDS, or Google Cloud SQL for a robust and scalable database solution.

## 📚 API Reference

The backend API is built with [tRPC](https://trpc.io/), providing a fully type-safe API layer without code generation. The API schema and types are defined in the `server/src/routers/` and `shared/` directories.

### Base URL
The API is typically served from `http://localhost:3000/trpc` in development, or your configured backend URL in production.

### Endpoints (Example)
All API procedures are accessible via the `trpc` client, leveraging TypeScript for auto-completion and compile-time error checking.

Example of a tRPC procedure in `server/src/routers/documents.ts`:
```typescript
// router.query('getDocuments', {
//   async resolve({ ctx }) {
//     // Logic to fetch user documents
//   },
// });

// router.mutation('uploadDocument', {
//   input: z.object({ file: z.string(), name: z.string() }),
//   async resolve({ input, ctx }) {
//     // Logic to handle document upload and AI processing
//   },
// });

// router.query('getQuizById', {
//   input: z.object({ id: z.string() }),
//   async resolve({ input, ctx }) {
//     // Logic to fetch a specific quiz
//   },
// });
```

### Usage on Client
```typescript
import { trpc } from '../shared/trpc'; // Or wherever your shared tRPC client is initialized

const { data: documents, isLoading: loadingDocs } = trpc.getDocuments.useQuery();
const { mutate: uploadDoc } = trpc.uploadDocument.useMutation({
  onSuccess: () => {
    // Document uploaded, maybe refetch quizzes
  },
});

// Example of calling a mutation
uploadDoc({ file: base64EncodedFile, name: 'My Study Notes' });
```

## 🤝 Contributing

We welcome contributions to make this project even better! Please consider:
-   Forking the repository.
-   Creating a new branch for your feature or bug fix.
-   Submitting a Pull Request with a clear description of your changes.

### Development Setup for Contributors
Ensure you follow the [Quick Start](#🚀-quick-start) guide to set up your environment.

### Running Tests
Before submitting a pull request, please ensure all tests pass and consider adding new tests for your changes:
```bash
pnpm test
```

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details. <!-- Inferred MIT License, please create a LICENSE file if not present -->

## 🙏 Acknowledgments

-   **React** for building interactive user interfaces.
-   **Node.js & tRPC** for a robust and type-safe backend.
-   **Tailwind CSS & Shadcn UI** for beautiful and accessible UI components.
-   **PostgreSQL & Drizzle ORM** for powerful and typesafe database management.
-   **Vite** for an incredibly fast development experience.
-   Special thanks to the open-source community for countless libraries and tools that made this possible.

## 📞 Support & Contact

-   📧 Email: [ritesh.patil@example.com](mailto:ritesh.patil@example.com) <!-- TODO: Add actual contact email for patilritesh2006-lgtm -->
-   🐛 Issues: [GitHub Issues](https://github.com/patilritesh2006-lgtm/-Transform-Documents-into-Games/issues)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [patilritesh2006-lgtm](https://github.com/patilritesh2006-lgtm)

</div>
