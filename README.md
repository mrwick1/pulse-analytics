# Pulse Analytics

A comprehensive analytics dashboard built with Next.js, React, and Mantine UI. Features multiple dashboard views, real-time data visualization, and a fully customizable theme system.


![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Mantine](https://img.shields.io/badge/Mantine-7-339AF0?style=flat-square&logo=mantine&logoColor=white)

## Features

- **Multiple Dashboard Views** — Default, Analytics, SaaS, eCommerce, and more
- **Data Visualization** — Interactive charts with Recharts (area, bar, line, pie, radar)
- **Built-in Apps** — Email, Chat, Projects, Calendar, Invoices, File Manager
- **Theme Customization** — Live theme editor with color, radius, and layout options
- **Authentication** — Sign in, sign up, password reset flows
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Dark Mode** — Full light/dark theme support
- **Mock API System** — Realistic data layer for all dashboard modules

## Tech Stack

- **Next.js 16** — App Router with React Server Components
- **React 19** — Latest React with React Compiler
- **Mantine 7** — 100+ accessible UI components
- **TypeScript** — End-to-end type safety
- **Recharts** — Composable charting library
- **FullCalendar** — Interactive calendar component
- **Mantine DataTable** — Advanced data grid with sorting/filtering
- **Storybook** — Component documentation and testing

## Getting Started

```bash
git clone https://github.com/mrwick1/pulse-analytics.git
cd pulse-analytics
npm install
npm run dev
```

## Dashboard Modules

| Module | Description |
|--------|------------|
| Analytics | Traffic, conversion, and engagement metrics |
| SaaS | Subscription and revenue analytics |
| eCommerce | Sales, orders, and product performance |
| CRM | Customer relationship metrics |
| Finance | Financial overview and transactions |

## Architecture

Built on Next.js App Router with a modular page structure. The theme system uses Mantine's theming engine with CSS custom properties for runtime customization. Data is served through a mock API system that mirrors real REST endpoints.

## License

MIT
