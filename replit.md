# Portfolio Website - Noah Mason

## Overview

This is a modern, responsive portfolio website built for Noah Mason, a Full Stack Mobile Developer with 8+ years of experience in Android and iOS development. The application showcases professional experience in mobile development, technical skills across Android/iOS platforms, projects, education, and provides contact functionality. Built with Next.js 15, the site features a clean, professional design with dark/light theme support and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Rendering Strategy**
- Next.js 15 with App Router for modern React server/client component architecture
- Client-side rendering for interactive components with "use client" directive
- Static generation for optimal performance and SEO

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundation
- shadcn/ui component library with "new-york" style variant
- Custom component composition in `/components` directory organized by feature
- Consistent design system using CSS variables and Tailwind utilities

**Styling & Design**
- Tailwind CSS for utility-first styling with custom configuration
- CSS custom properties (variables) for theme management in `globals.css`
- Dual theme support (light/dark) with HSL color system
- Typography: Inter (body), Poppins (headers), JetBrains Mono (code)
- Responsive design with mobile-first approach

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state management
- Custom query client configuration with credential-based fetching
- Form state managed by React Hook Form with Zod validation
- Theme state persisted in localStorage via custom ThemeProvider context

**Animation & Interactivity**
- Framer Motion for page transitions and scroll animations
- React Intersection Observer for viewport-based animations
- Custom hover/active states using Tailwind utility classes

### Backend Architecture

**Database Layer**
- PostgreSQL database (configured for Neon serverless)
- Drizzle ORM for type-safe database operations
- Schema definition in `/shared/schema.ts` with Drizzle-Zod integration
- Database migrations managed in `/migrations` directory

**API Design**
- RESTful API pattern with fetch-based client requests
- Credential-based authentication using cookies
- Type-safe request/response handling with TypeScript
- Custom API utility functions in `/lib/queryClient.ts`

**Data Validation**
- Zod schemas for runtime type validation
- Form validation using @hookform/resolvers with Zod
- Database schema validation using drizzle-zod

### External Dependencies

**Core Framework**
- Next.js 15 (React framework with App Router)
- React 18+ (UI library)
- TypeScript (type safety)

**UI & Styling**
- Tailwind CSS (utility-first CSS framework)
- Radix UI (accessible component primitives)
- shadcn/ui (pre-built component library)
- Framer Motion (animation library)
- Lucide React (icon library)

**State & Data Management**
- TanStack Query v5 (server state management)
- React Hook Form (form state management)
- Zod (schema validation)

**Database & ORM**
- Drizzle ORM (TypeScript ORM)
- Drizzle Kit (migration tool)
- @neondatabase/serverless (PostgreSQL driver)
- PostgreSQL (database system)

**Development Tools**
- ESLint with Next.js config (code linting)
- PostCSS with Autoprefixer (CSS processing)
- drizzle-kit (database migrations)

**Third-Party Integrations**
- Google Fonts (Inter, Poppins, JetBrains Mono)
- Email functionality (mailto links for contact)

## Recent Changes (October 2025)

**Portfolio Migration and Resume-Based Update - October 13, 2025**
- Successfully migrated Noah Mason's portfolio from Replit Agent to Replit environment
- Updated all contact information with accurate data:
  - Email: marvelman3333@gmail.com
  - LinkedIn: http://www.linkedin.com/in/noah-mason0413
  - GitHub: https://github.com/NoahMason1012
  - Resume download: Google Drive link (https://drive.google.com/file/d/1ZSLO8uwl4DY0WB4izfaENtNpJ3YlT-bD/view?usp=sharing)
  - Phone: +1 480 749 0724
  - Address: Arizona, United States

- Experience section updated with actual work history from resume:
  - Flynaut LLC, Charlotte, NC - Full Stack Mobile Developer (Jan 2023 - Dec 2024)
    * Developed cross-platform mobile apps using React Native and Flutter
    * Implemented backend APIs with Node.js and Express.js
    * Integrated Firebase, MongoDB, and MySQL databases
  - ScottsdaleBizz, AZ - Mobile Application Developer (Oct 2021 - Dec 2022)
    * Built Android and iOS applications using Java, Kotlin, Swift, Objective-C
    * Developed web applications using Vue.js and Laravel
    * Implemented RESTful APIs and database solutions

- Skills section updated with technologies from resume:
  - Mobile: React Native, Flutter, Java, Kotlin, Swift, Objective-C, Android Studio, Xcode
  - Backend: Node.js, Express.js, Laravel, PHP, Python, Django
  - Frontend: React.js, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Tailwind CSS
  - Database: MongoDB, MySQL, PostgreSQL, SQLite, Firebase
  - Cloud & DevOps: AWS, Google Cloud, Git, CI/CD, Agile/Scrum

- Projects section now features 13 mobile applications:
  1. Phuong Dong Healthcare - Medical appointment booking (10K+ downloads)
  2. Xpress Health - Healthcare staffing platform (10K+ downloads)
  3. Msosidrop - Food delivery Tanzania (1K+ downloads)
  4. Cloutin - Influencer marketing (5K+ downloads)
  5. Otis AI - Digital marketing automation (10K+ downloads)
  6. Zyfoo - E-commerce platform (500+ downloads)
  7. Yourstore - E-commerce app (5K+ downloads)
  8. Food Delivery App - All in one (10K+ downloads)
  9. Foodies - Food delivery Maldives (10K+ downloads)
  10. Migraine Monitor - Health tracking (10K+ downloads)
  11. War Cards - Military card game (7K+ downloads)
  12. War Inc. - Strategy game (2.9K+ downloads)
  13. Business AI - Sales & marketing tools (10K+ downloads)

- Technical fixes:
  - Resolved React duplicate key warning in Skills component (changed key from skill.name-activeCategory to skill.category-skill.name)
  - Removed duplicate Firebase entry from Cloud category (kept in Database category only)
  - All components architect-reviewed and approved with no errors

**Key Design Decisions**

1. **Next.js App Router**: Chosen for modern React patterns, improved performance, and better SEO capabilities
2. **Component-First Architecture**: Separates UI components from business logic for maintainability
3. **Type Safety**: Full TypeScript implementation with Zod validation ensures runtime type safety
4. **Theme System**: CSS variables enable dynamic theming without JavaScript overhead
5. **Accessibility**: Radix UI primitives provide ARIA-compliant, keyboard-navigable components
6. **Performance**: Static generation, code splitting, and optimized animations ensure fast load times
7. **Database Flexibility**: Drizzle ORM provides database-agnostic abstraction (currently configured for PostgreSQL)