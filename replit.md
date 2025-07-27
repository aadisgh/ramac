# Rama Coaching Center Website

## Overview

This is a modern, responsive web application for Rama Coaching Center - an educational institution providing coaching services from Nursery to 12th grade, including specialized Navodaya entrance preparation and computer classes. The application is built using a full-stack TypeScript architecture with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API architecture
- **Data Storage**: In-memory storage with interface for future database integration
- **Development Server**: Integrated Vite development server for hot reloading

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with mobile-responsive design
- **Hero Section**: Landing page with call-to-action buttons
- **Services Overview**: Key features and benefits showcase
- **About Section**: Institution information and founder details
- **Classes Section**: Course offerings from Nursery to 12th grade
- **Gallery Section**: Photo gallery with category filtering
- **Testimonials Section**: Parent and student feedback display
- **Notice Board**: Important announcements and updates
- **Contact Section**: Inquiry form with validation
- **Footer**: Site links and contact information
- **Floating Buttons**: WhatsApp contact and scroll-to-top functionality

### Backend Services
- **Storage Interface**: Abstracted storage layer supporting future database migration
- **API Routes**: RESTful endpoints for testimonials, notices, gallery, and inquiries
- **Validation**: Zod schema validation for all data inputs
- **Error Handling**: Centralized error handling with appropriate HTTP status codes

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express routes handle requests with validation
3. **Data Storage**: In-memory storage simulates database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **UI Updates**: React components update based on server responses

### Data Models
- **Inquiries**: Student enrollment inquiries with contact information
- **Testimonials**: Parent/student feedback with ratings
- **Notices**: Important announcements with categorization
- **Gallery Items**: Photo gallery with category filtering
- **Users**: Basic user management (future authentication)

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Icons**: Lucide React icons and React Icons (FontAwesome)
- **Fonts**: Google Fonts (Poppins, Inter)
- **Images**: Unsplash for placeholder educational images
- **Styling**: Tailwind CSS with custom color palette

### Backend Dependencies
- **Database Ready**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL sessions
- **Validation**: Drizzle-Zod for schema validation
- **Development**: TSX for TypeScript execution

### Development Tools
- **Build**: ESBuild for production bundling
- **Type Checking**: TypeScript compiler
- **Database**: Drizzle Kit for schema management
- **Development**: Vite with React plugin and Replit integration

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite development server with Express integration
- **Type Safety**: Full TypeScript support across frontend and backend
- **Database**: Ready for PostgreSQL integration via Drizzle ORM
- **Environment**: Replit-optimized with development banners and cartographer

### Production Build
- **Frontend**: Static files built with Vite and served from `/dist/public`
- **Backend**: Bundled with ESBuild to `/dist/index.js`
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Sessions**: PostgreSQL-backed sessions for user management

### Configuration
- **Environment Variables**: `DATABASE_URL` for database connection
- **Build Scripts**: Separate development and production configurations
- **Static Assets**: Served through Express static middleware in production
- **Error Handling**: Development error overlay in Replit environment

## Recent Changes

### January 27, 2025 - Enhanced UI/UX Design
- **Pixar-Style Branding**: Implemented bright, educational color palette (blue, orange, yellow, green)
- **Advanced Animations**: Added custom CSS animations including fade-in, slide-up, bounce-in, pulse-glow effects
- **Interactive Elements**: Enhanced hover effects with lift animations and glow effects
- **Animated Counters**: Implemented count-up animations for statistics (500+ students, 10+ years, 95% success rate)
- **Photo Carousel**: Added auto-playing slideshow component showcasing learning environment
- **Enhanced Navigation**: Sticky navbar with backdrop blur and enhanced branding
- **Modern Typography**: Large, bold, readable fonts with proper hierarchy
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens
- **Interactive Buttons**: Floating WhatsApp button with pulse animation and smooth scroll-to-top
- **Enhanced Galleries**: Image hover effects with overlay information and smooth transitions
- **Custom Scrollbar**: Styled scrollbar with gradient colors matching brand
- **Testimonials Enhancement**: Added quote decorations and staggered animations
- **Contact Form Improvements**: Enhanced visual design with gradient backgrounds and shadow effects
- **Highlighted Sections**: Special emphasis on 9th & 10th grade classes and Navodaya preparation
- **Smooth Scrolling**: Implemented throughout the application for better user experience

### Content Updates
- **Class Structure**: Corrected and highlighted "1st to 12th" grade offerings
- **Navodaya Emphasis**: Special highlighting of Navodaya Vidyalaya entrance preparation
- **Computer Classes**: Enhanced visibility and modern presentation
- **Founder Profile**: Enhanced Mrs. Pushpa's profile with badges and qualifications
- **Interactive Elements**: Clickable phone numbers and WhatsApp integration

The application now features a modern, Pixar-style design with comprehensive animations, enhanced user interactions, and professional presentation suitable for an educational institution.

The application is designed to be easily deployable on platforms like Replit, with clear separation between development and production configurations, and ready for database integration when needed.