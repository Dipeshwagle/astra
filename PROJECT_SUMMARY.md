# Astra Learning - 3-Screen Prototype

## Overview
This is a 3-screen prototype for Astra Learning, an e-learning platform where children (ages 8-13) develop real-world life skills through conversations with an AI mentor named Astra.

## Tech Stack
- **Frontend**: React + Next.js 15 + Tailwind CSS
- **Backend/Infrastructure**: Supabase (Auth + Database), Vercel
- **AI**: OpenAI GPT-4o via Vercel AI SDK

## Features Implemented

### Module 1: Supabase Auth with Role Selection
- ✅ Email/password authentication
- ✅ Role selection after sign-up (Child or Parent)
- ✅ Child onboarding form (name, age, interests)
- ✅ Role-based routing

### Module 2: Mentor Chat UI
- ✅ Real-time chat interface with Astra
- ✅ GPT-4o integration with streaming responses
- ✅ Kid-friendly UI with message bubbles
- ✅ Astra personality: kind, wise, and playful mentor

### Module 3: XP Dashboard
- ✅ Static XP progress bar (420/500 XP)
- ✅ 3 skill levels: Communication, Problem Solving, Leadership
- ✅ 2 achievement badges
- ✅ Personalized with child's name from onboarding

### Additional Features
- ✅ Parent placeholder page ("Coming Soon")
- ✅ Kid-friendly UI with bright colors and playful elements
- ✅ Responsive design
- ✅ Proper authentication flow and route protection

## Project Structure
```
/app
  /auth              # Authentication pages
  /chat              # AI mentor chat interface
  /dashboard         # Child's XP dashboard
  /parent-dashboard  # Parent placeholder page
  /api/chat          # Chat API endpoint
/components
  /chat              # Chat UI components
  /dashboard         # Dashboard components
  /ui                # shadcn/ui components
```

## Setup Instructions

1. Clone the repository
2. Copy `.env.example` to `.env.local` and add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `OPENAI_API_KEY`
3. Run `npm install`
4. Run `npm run dev` to start development server
5. Run database migrations in Supabase

## Flow
1. **Landing Page** → Sign Up/Login
2. **After Sign Up** → Role Selection (Child/Parent)
3. **Child Path**:
   - Role Select → Onboarding → Chat/Dashboard
4. **Parent Path**:
   - Role Select → Coming Soon Page

## Key Design Decisions
- Used Vercel AI SDK for streaming chat responses
- Implemented role-based routing with Supabase profiles
- Created a warm, encouraging UI suitable for children
- Static XP/skills data for prototype simplicity
- Separated chat and dashboard into distinct experiences

## Notes
- This is a prototype - no real progress tracking or data persistence for XP/skills
- Parent dashboard is intentionally a placeholder
- Chat history is not persisted between sessions
- All authentication is handled via Supabase