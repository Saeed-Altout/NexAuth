# NexAuth - Next.js Authentication Starter Kit

> 🚀 **A complete, production-ready authentication solution for Next.js applications**

Stop building authentication from scratch. NexAuth is a comprehensive starter kit that provides everything you need to add secure authentication to your Next.js project in minutes, not days.

[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.1.0-2D3748)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 📖 What is NexAuth?

NexAuth is a **battle-tested authentication boilerplate** built with modern web technologies. It's designed for developers who want to:

- ✅ Skip the tedious authentication setup
- ✅ Start with production-ready security features
- ✅ Focus on building their unique product features
- ✅ Learn authentication best practices

**Perfect for:** SaaS applications, admin dashboards, customer portals, internal tools, and any Next.js project requiring user authentication.

---

## ✨ Features

### 🔐 Complete Authentication System
- **Email/Password Login** - Traditional credentials-based authentication
- **OAuth Integration** - Sign in with Google and GitHub (easily extensible)
- **Two-Factor Authentication (2FA)** - Email-based OTP for enhanced security
- **Email Verification** - Verify user emails before account activation
- **Password Reset** - Secure password recovery flow with token expiration

### 🛡️ Security First
- **bcrypt Password Hashing** - Industry-standard password encryption
- **JWT Session Management** - Stateless, scalable session handling
- **Role-Based Access Control (RBAC)** - Admin and User roles out of the box
- **Protected Routes** - Automatic authentication checks via middleware
- **Token Expiration** - All tokens expire after 1 hour for security

### 👤 User Management
- **User Registration** - Complete signup flow with validation
- **Profile Management** - Users can update their information
- **Account Settings** - Enable/disable 2FA, change password, update email
- **Admin Dashboard** - Example admin-only pages and API routes

### 🎨 Modern UI/UX
- **Radix UI Components** - 30+ accessible, customizable components
- **Tailwind CSS 4** - Utility-first styling with dark mode support
- **Responsive Design** - Mobile-first, works on all devices
- **Toast Notifications** - User feedback with Sonner
- **Form Validation** - Real-time validation with React Hook Form & Zod
- **Loading States** - Smooth UX with spinners and transitions

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have:
- **Node.js 20+** installed ([Download](https://nodejs.org/))
- **PostgreSQL database** (local or cloud - see [Database Setup](#database-setup))
- **Resend account** for emails ([Sign up free](https://resend.com/))
- *(Optional)* Google/GitHub OAuth credentials

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourusername/nexauth.git
cd nexauth

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database Connection
DATABASE_URL="postgresql://user:password@localhost:5432/nexauth?schema=public"

# NextAuth Configuration
AUTH_SECRET="your-secret-key-here"  # Generate with: openssl rand -base64 32
AUTH_URL="http://localhost:3000"

# Application URL (for email links)
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Email Service (Resend)
RESEND_API_KEY="re_xxxxxxxxxxxx"  # Get from https://resend.com/api-keys

# OAuth Providers (Optional - see OAuth Setup below)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

**🔑 Generate AUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 3. Set Up Database

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations (creates all tables)
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view your database
npx prisma studio
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You're ready to go! 🎉

---

## 📚 How to Use This Starter Kit

### Creating Your First User

1. **Navigate to Registration**
   - Go to `http://localhost:3000/auth/register`
   - Fill in your name, email, and password (minimum 6 characters)
   - Click "Register"

2. **Verify Your Email**
   - Check your email inbox for a verification link
   - Click the link to verify your account
   - You'll be redirected to the login page

3. **Log In**
   - Go to `http://localhost:3000/auth/login`
   - Enter your email and password
   - Click "Login"
   - You'll be redirected to `/settings` (the default protected page)

### Enabling Two-Factor Authentication

1. Log in to your account
2. Navigate to `/settings`
3. Toggle "Two-Factor Authentication" to ON
4. On your next login, you'll receive a 6-digit code via email
5. Enter the code to complete login

### Testing OAuth Login

1. **Set up OAuth providers** (see [OAuth Setup](#oauth-provider-setup))
2. Go to `/auth/login`
3. Click "Continue with Google" or "Continue with GitHub"
4. Authorize the application
5. You'll be automatically logged in (email is auto-verified for OAuth users)

### Understanding Protected Routes

All routes under `app/(protected)/` require authentication:

```
app/(protected)/
├── (routes)/
│   ├── admin/          # Only accessible by ADMIN role
│   ├── client/         # Example client page
│   ├── server/         # Example server page
│   └── settings/       # User settings (default redirect after login)
```

**Try it:**
1. Log out (if logged in)
2. Try to access `http://localhost:3000/settings`
3. You'll be automatically redirected to `/auth/login`

### Testing Admin Features

1. **Manually set a user as admin** (in database):
   ```bash
   npx prisma studio
   ```
   - Open the `users` table
   - Find your user
   - Change `role` from `USER` to `ADMIN`

2. **Access admin routes:**
   - Navigate to `/admin` (only visible to admins)
   - Try the admin API endpoint

---

## 🏗️ Project Structure Explained

```
nexauth/
├── app/                          # Next.js App Router
│   ├── (protected)/              # 🔒 Protected routes (requires login)
│   │   ├── (routes)/             # Your protected pages
│   │   │   ├── admin/            # Admin-only pages
│   │   │   ├── settings/         # User settings page
│   │   │   └── ...               # Add your pages here
│   │   └── layout.tsx            # Protected layout wrapper
│   │
│   ├── auth/                     # 🔓 Authentication pages
│   │   ├── (routes)/
│   │   │   ├── login/            # Login page
│   │   │   ├── register/         # Registration page
│   │   │   ├── reset/            # Password reset request
│   │   │   ├── new-password/     # Set new password
│   │   │   └── new-verification/ # Email verification
│   │   └── layout.tsx            # Auth layout
│   │
│   ├── api/                      # API routes
│   │   ├── admin/                # Admin API endpoints
│   │   └── auth/[...nextauth]/   # NextAuth API handler
│   │
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (public)
│
├── actions/                      # 🎯 Server Actions (business logic)
│   ├── login.ts                  # Login logic
│   ├── register.ts               # Registration logic
│   ├── logout.ts                 # Logout logic
│   ├── reset.ts                  # Password reset request
│   ├── new-password.ts           # Password update
│   ├── new-verification.ts       # Email verification
│   ├── settings.ts               # User settings update
│   └── admin.ts                  # Admin actions
│
├── components/                   # React components
│   ├── auth/                     # Authentication components
│   │   ├── login-form.tsx        # Login form
│   │   ├── register-form.tsx     # Registration form
│   │   ├── google.tsx            # Google OAuth button
│   │   ├── github.tsx            # GitHub OAuth button
│   │   └── ...                   # Other auth components
│   │
│   └── ui/                       # 🎨 Reusable UI components (30+)
│       ├── button.tsx            # Button component
│       ├── input.tsx             # Input component
│       ├── card.tsx              # Card component
│       └── ...                   # All Radix UI components
│
├── data/                         # 💾 Data Access Layer
│   ├── user.ts                   # User queries
│   ├── account.ts                # Account queries
│   ├── verification-token.ts     # Verification token queries
│   ├── password-reset-token.ts   # Password reset queries
│   └── two-factor-*.ts           # 2FA queries
│
├── hooks/                        # Custom React hooks
│   ├── use-current-user.ts       # Get current user
│   ├── use-current-role.ts       # Get current user role
│   └── use-mobile.ts             # Mobile detection
│
├── lib/                          # 🛠️ Utilities
│   ├── prisma.ts                 # Prisma client instance
│   ├── auth.ts                   # Auth helper functions
│   ├── mail.ts                   # Email sending utility
│   ├── tokens.ts                 # Token generation
│   └── utils.ts                  # General utilities
│
├── prisma/                       # Database
│   └── schema.prisma             # Database schema
│
├── schemas/                      # Validation schemas
│   └── index.ts                  # Zod schemas for forms
│
├── auth.config.ts                # NextAuth provider config
├── auth.ts                       # NextAuth main config
├── routes.ts                     # Route access control
└── middleware.ts                 # (Optional) Add your middleware
```

---

## 🎯 Common Use Cases

### 1. Adding a New Protected Page

```typescript
// app/(protected)/(routes)/dashboard/page.tsx
import { currentUser } from "@/lib/auth";

export default async function DashboardPage() {
  const user = await currentUser();
  
  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      {/* Your dashboard content */}
    </div>
  );
}
```

### 2. Creating an Admin-Only API Route

```typescript
// app/api/admin/users/route.ts
import { currentRole } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const role = await currentRole();
  
  if (role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  
  // Your admin logic here
  return NextResponse.json({ users: [] });
}
```

### 3. Using Current User in Client Component

```typescript
"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

export function UserProfile() {
  const user = useCurrentUser();
  
  return <div>Hello, {user?.name}</div>;
}
```

### 4. Adding a New OAuth Provider

1. Install the provider package (if needed)
2. Add credentials to `.env`
3. Update `auth.config.ts`:

```typescript
import LinkedIn from "next-auth/providers/linkedin";

export default {
  providers: [
    // ... existing providers
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
```

---

## 🔧 Configuration

### Database Setup

#### Option 1: Local PostgreSQL

```bash
# macOS
brew install postgresql
brew services start postgresql
createdb nexauth

# Ubuntu/Debian
sudo apt-get install postgresql
sudo service postgresql start
sudo -u postgres createdb nexauth

# Windows
# Download from https://www.postgresql.org/download/windows/
# Use pgAdmin to create database
```

Update `.env`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/nexauth?schema=public"
```

#### Option 2: Cloud PostgreSQL (Recommended for Production)

**Vercel Postgres:**
```bash
# Install Vercel CLI
npm i -g vercel

# Create database
vercel postgres create

# Copy connection string to .env
```

**Supabase:**
1. Go to [supabase.com](https://supabase.com/)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string
5. Add to `.env`

**Neon:**
1. Go to [neon.tech](https://neon.tech/)
2. Create a new project
3. Copy the connection string
4. Add to `.env`

### OAuth Provider Setup

#### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure consent screen if prompted
6. Application type: **Web application**
7. Add authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
8. Copy **Client ID** and **Client Secret** to `.env`

#### GitHub OAuth

1. Go to [GitHub Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in:
   - **Application name:** Your app name
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
4. Click **Register application**
5. Copy **Client ID** and generate **Client Secret**
6. Add both to `.env`

### Email Service (Resend)

1. Go to [resend.com](https://resend.com/)
2. Sign up for a free account
3. Verify your domain (or use their test domain for development)
4. Go to **API Keys** → **Create API Key**
5. Copy the key to `.env` as `RESEND_API_KEY`

**Free tier includes:** 100 emails/day, 3,000 emails/month

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `http://localhost:3000` |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npx prisma generate` | Generate Prisma Client after schema changes |
| `npx prisma migrate dev` | Create and apply a new database migration |
| `npx prisma migrate deploy` | Apply migrations in production |
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma db push` | Push schema changes without migrations (dev only) |

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Click **Import Project**
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**
   - In Vercel dashboard, go to **Settings** → **Environment Variables**
   - Add all variables from your `.env` file
   - Update `AUTH_URL` and `NEXT_PUBLIC_APP_URL` to your production domain

4. **Set up Database**
   - Use Vercel Postgres, Supabase, or Neon
   - Update `DATABASE_URL` in Vercel environment variables

5. **Update OAuth Callback URLs**
   - In Google/GitHub OAuth settings, add production callback URLs:
     ```
     https://yourdomain.com/api/auth/callback/google
     https://yourdomain.com/api/auth/callback/github
     ```

6. **Deploy**
   - Click **Deploy**
   - Vercel will build and deploy your app

### Post-Deployment

```bash
# Run migrations in production
npx prisma migrate deploy
```

---

## 🐛 Troubleshooting

### "Prisma Client did not initialize yet"

**Solution:**
```bash
npx prisma generate
npm run dev
```

### "Invalid `prisma.user.create()` invocation"

**Cause:** Database schema not migrated

**Solution:**
```bash
npx prisma migrate dev
```

### Email verification link not working

**Checklist:**
- ✅ `RESEND_API_KEY` is set correctly
- ✅ `NEXT_PUBLIC_APP_URL` matches your domain
- ✅ Email domain is verified in Resend (or using test domain)

### OAuth login fails with "OAuthAccountNotLinked"

**Cause:** Email already registered with credentials

**Solution:** Users must log in with the original method. To link accounts, implement account linking in settings.

### Session not persisting

**Checklist:**
- ✅ `AUTH_SECRET` is set
- ✅ Cookies are enabled in browser
- ✅ `AUTH_URL` matches your domain

### "Role is not assignable to type UserRole"

**Solution:**
```bash
npx prisma generate
```

---

## 🎓 Learning Resources

### Understanding the Code

- **Server Actions:** All authentication logic is in `actions/` - study these to understand the flows
- **Data Layer:** Check `data/` to see how database queries are abstracted
- **Validation:** Look at `schemas/index.ts` to see Zod validation patterns
- **Auth Config:** Read `auth.ts` and `auth.config.ts` to understand NextAuth setup

### External Documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [NextAuth.js v5](https://authjs.dev/)
- [Prisma ORM](https://www.prisma.io/docs)
- [Radix UI](https://www.radix-ui.com/docs/primitives)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zod Validation](https://zod.dev/)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with amazing open-source technologies:
- [Next.js](https://nextjs.org/) by Vercel
- [NextAuth.js](https://authjs.dev/) by the Auth.js team
- [Prisma](https://www.prisma.io/) by Prisma
- [Radix UI](https://www.radix-ui.com/) by WorkOS
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs

---

## 💬 Support

- 📧 **Email:** saeedaltout25@gmail.com

---

**Built with ❤️ using Next.js and NextAuth.js**

**Star ⭐ this repo if you find it helpful!**
