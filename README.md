# Snapgram

> A full-stack **TypeScript** social media platform — React 19 frontend, NestJS backend, PostgreSQL with Prisma. Create posts, explore content, discover creators, and interact with a community in a sleek dark-themed UI.

---

## Tech Stack

### Frontend

- **React 19** — UI library with latest concurrent features
- **TypeScript** — End-to-end type safety
- **Vite** — Lightning-fast dev server and bundler
- **TanStack Query (React Query)** — Server state management, caching, and infinite scroll
- **shadcn/ui** — Accessible, composable component primitives
- **Tailwind CSS** — Utility-first styling
- **React Hook Form + Zod** — Form handling and schema validation
- **React Router v6** — Client-side routing

### Backend

- **NestJS** — Modular, scalable Node.js framework
- **PostgreSQL** — Relational database
- **Prisma ORM** — Type-safe database access and migrations
- **JWT** — Authentication with access/refresh token strategy
- **Multer / Cloud Storage** — File uploads for post images and avatars

---

## Features

- **Authentication** — Secure sign up, sign in, and sign out with JWT sessions
- **Post Management** — Create, edit, delete posts with image uploads, captions, tags, and location
- **Feed** — Paginated infinite-scroll home feed ordered by recency
- **Explore** — Search posts by caption with real-time results
- **Likes & Saves** — Like and bookmark posts; view saved posts in a dedicated page
- **User Profiles** — View any user's profile, their posts, and liked content
- **People Discovery** — Browse and discover all users on the platform
- **Responsive UI** — Optimized for mobile (bottom nav), tablet, and desktop (left sidebar + creator panel)
- **Avatar Initials** — Auto-generated avatar from user's name on signup

---

## Project Structure

```
├── frontend/                   # React + Vite application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── forms/
│   │   │   ├── shared/
│   │   │   └── ui/             # shadcn/ui primitives
│   │   ├── context/            # Auth context / global state
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/
│   │   │   ├── api/            # API client functions (axios/fetch)
│   │   │   ├── react-query/    # TanStack Query hooks
│   │   │   └── validation/     # Zod schemas
│   │   ├── pages/              # Route-level page components
│   │   └── types/              # Shared TypeScript types
│   └── index.html
│
└── backend/                    # NestJS application
    ├── src/
    │   ├── auth/               # JWT auth, guards, strategies
    │   ├── users/              # User CRUD, profile, discovery
    │   ├── posts/              # Post CRUD, feed, search
    │   ├── likes/              # Like / unlike post
    │   ├── saves/              # Save / unsave post
    │   ├── storage/            # File upload handling
    │   └── prisma/             # Prisma service + schema
    └── prisma/
        └── schema.prisma
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or pnpm

### 1. Clone the repository

```bash
git clone https://github.com/your-username/snapgram.git
cd snapgram
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/snapgram"
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
STORAGE_BUCKET=your_storage_bucket   # or local path
PORT=3000
```

Run database migrations and start the server:

```bash
npx prisma migrate dev --name init
npx prisma generate
npm run start:dev
```

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend`:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## API Overview

| Method   | Endpoint           | Description                    |
| -------- | ------------------ | ------------------------------ |
| `POST`   | `/auth/signup`     | Register a new user            |
| `POST`   | `/auth/signin`     | Sign in and receive tokens     |
| `DELETE` | `/auth/signout`    | Invalidate current session     |
| `GET`    | `/auth/me`         | Get current authenticated user |
| `GET`    | `/posts`           | Get paginated recent posts     |
| `POST`   | `/posts`           | Create a new post              |
| `GET`    | `/posts/:id`       | Get a post by ID               |
| `PATCH`  | `/posts/:id`       | Update a post                  |
| `DELETE` | `/posts/:id`       | Delete a post                  |
| `GET`    | `/posts/search?q=` | Search posts by caption        |
| `PATCH`  | `/posts/:id/like`  | Like or unlike a post          |
| `POST`   | `/saves`           | Save a post                    |
| `DELETE` | `/saves/:id`       | Remove a saved post            |
| `GET`    | `/users`           | Get all users                  |
| `GET`    | `/users/:id`       | Get a user by ID               |
| `GET`    | `/users/:id/posts` | Get posts by a user            |
| `PATCH`  | `/users/:id`       | Update user profile            |

---

## Scripts

### Frontend

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

### Backend

| Command                  | Description               |
| ------------------------ | ------------------------- |
| `npm run start:dev`      | Start with hot reload     |
| `npm run start:prod`     | Start production build    |
| `npm run build`          | Compile TypeScript        |
| `npx prisma studio`      | Open Prisma visual editor |
| `npx prisma migrate dev` | Run pending migrations    |

---

## Environment Variables

### Backend

| Variable                 | Description                       |
| ------------------------ | --------------------------------- |
| `DATABASE_URL`           | PostgreSQL connection string      |
| `JWT_ACCESS_SECRET`      | Secret for signing access tokens  |
| `JWT_REFRESH_SECRET`     | Secret for signing refresh tokens |
| `JWT_ACCESS_EXPIRES_IN`  | Access token TTL (e.g. `15m`)     |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token TTL (e.g. `7d`)     |
| `PORT`                   | Port for the NestJS server        |

### Frontend

| Variable            | Description                |
| ------------------- | -------------------------- |
| `VITE_API_BASE_URL` | Base URL of the NestJS API |

---

## License

This project is licensed under the [MIT License](LICENSE).
