# Pulse Analytics

A comprehensive analytics dashboard built with Next.js, React, and Mantine UI. Features 13 dashboard variants, built-in app modules, real-time data visualization, and a fully customizable theme system.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Mantine](https://img.shields.io/badge/Mantine-7-339AF0?style=flat-square&logo=mantine&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

<!-- ![Pulse Analytics Screenshot](docs/screenshot.png) -->

## Features

- **13 Dashboard Variants** — Analytics, SaaS, eCommerce, CRM, Finance, Marketing, Healthcare, Education, Logistics, HR, Real Estate, LLM/AI, and Default
- **Built-in Apps** — Email, Chat, Calendar, Invoices, Projects, Orders, Products, Customers, Tasks (Kanban), File Manager, Notifications, Profile, Settings
- **Data Visualization** — Interactive charts with Recharts (area, bar, line, pie, radar, composed)
- **Theme Customizer** — Live preview editor for colors, radius, layout, and color scheme
- **Authentication** — Sign in, sign up, password reset flows with Clerk integration support
- **Mock API System** — 30+ REST endpoints backed by 76 JSON data files
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Dark Mode** — Full light/dark theme support
- **Storybook** — Component documentation and visual testing

## Getting Started

```bash
git clone https://github.com/mrwick1/pulse-analytics.git
cd pulse-analytics
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm prettier` | Format all files |

## Dashboard Modules

| Module | Description |
|--------|-------------|
| Default | Overview with key metrics and activity |
| Analytics | Traffic, conversion, and engagement metrics |
| SaaS | Subscription, MRR, and churn analytics |
| eCommerce | Sales, orders, and product performance |
| CRM | Leads, deals, and customer pipeline |
| Finance | Cash flow, expenses, and invoice tracking |
| Marketing | Campaign performance and traffic sources |
| Healthcare | Patient metrics and department performance |
| Education | Enrollment, grades, and course completion |
| Logistics | Shipments, fleet status, and delivery metrics |
| HR | Attendance, recruitment, and employee distribution |
| Real Estate | Property listings, pricing, and sales trends |
| LLM/AI | Model usage, token trends, and cost analysis |

## Tech Stack

- **Next.js 16** — App Router with React Server Components and React Compiler
- **React 19** — Latest React with concurrent features
- **Mantine 7** — 100+ accessible UI components
- **Recharts** — Composable charting library
- **FullCalendar** — Interactive calendar component
- **Tiptap** — Rich text editor
- **Tabler Icons** — Icon library
- **Storybook** — Component documentation
- **Changesets** — Version management

## Project Structure

```
src/
├── app/
│   ├── api/               # 30+ mock data API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # 13 dashboard variants
│   ├── apps/              # Built-in app modules
│   ├── pages/             # Static pages (about, pricing)
│   └── (public)/          # Public routes (changelog, announcements)
├── components/            # 48 reusable component directories
├── contexts/              # Theme customizer and notification contexts
├── layouts/               # Guest and Main layout components
├── constants/             # Sidebar links, features, tech stack
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── theme/                 # Mantine theme configuration
├── providers/             # React context providers
├── routes/                # Centralized route definitions
└── utils/                 # Utility functions
public/
└── mocks/                 # 76 JSON mock data files
```

## Architecture

Built on Next.js App Router with a modular page structure. The theme system uses Mantine's theming engine with CSS custom properties managed through a `ThemeCustomizerContext` for runtime customization. Data is served through mock API routes that read from `public/mocks/*.json`, mirroring real REST endpoints for easy migration to a real backend.

Key architectural decisions:
- **App Router** — File-based routing with layouts and loading states
- **Mock API layer** — All data flows through `/api/*` routes for easy backend swapping
- **Context-based theming** — Runtime theme customization persisted to localStorage
- **Component co-location** — Dashboard-specific components grouped by module

## License

[MIT](LICENSE)
