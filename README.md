# 🚀 Remix App Starter

A modern, full-stack React Router application starter with authentication, database integration, and responsive design built with CSS modules.

## ✨ Features

- **🎨 CSS Modules**: Scoped styling with comprehensive theming system
- **🌙 Dark Mode**: Built-in light/dark mode with system preference detection  
- **📱 Mobile First**: Responsive design with mobile-first approach
- **🔐 Authentication**: Ready for mock and real authentication integration
- **🗄️ Database Ready**: Prepared for Neon PostgreSQL with Prisma ORM
- **🚀 CI/CD Ready**: Set up for GitHub Actions and Netlify deployment

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Input)
│   ├── layout/       # Layout components (Navigation, Layout)
│   └── theme/        # Theme system (ThemeProvider, ThemeToggle)
├── pages/            # Page components (Home, Dashboard, Profile, etc.)
├── styles/           # Global styles and CSS variables
└── types/            # TypeScript type definitions
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:3000` to see your application running!

## 🎨 Theme System

The app includes a comprehensive theme system with:

- CSS custom properties for consistent design tokens
- Light and dark mode support
- System preference detection
- Persistent theme storage
- Smooth theme transitions

## 📱 Responsive Design

Built with mobile-first principles:

- Touch-friendly UI components
- Responsive navigation with hamburger menu
- Flexible grid layouts
- Consistent breakpoints across components

## 🧩 UI Components

### Button Component
```tsx
<Button variant="primary" size="lg" loading={isLoading}>
  Click me
</Button>
```

### Input Component
```tsx
<Input 
  label="Email" 
  type="email" 
  error={error}
  fullWidth 
/>
```

## 🛣️ Routing

The app uses React Router with nested routing:

- `/` - Home page with feature showcase
- `/dashboard` - Dashboard (ready for protected routes)
- `/profile` - User profile management
- `/auth/login` - Login page
- `*` - 404 Not Found page

## 🔧 Next Steps

This starter is ready for:

1. **Authentication Implementation**
   - JWT token management
   - Protected routes
   - User session handling

2. **Database Integration**
   - Prisma ORM setup
   - Neon PostgreSQL connection
   - Database migrations

3. **CI/CD Pipeline**
   - GitHub Actions workflows
   - Netlify deployment
   - Environment management

## 📄 License

MIT License - feel free to use this starter for your projects!
