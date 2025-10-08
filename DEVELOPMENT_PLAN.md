# OVI MVP - Development Plan

## Project Overview
Minimal MVP for OVI (Onco Vida Integrativa) - A specialized directory of complementary health resources for oncology patients.

## Tech Stack
- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **UI Components:** shadcn/ui
- **CMS:** Sanity.io (Embedded Studio)
- **Hosting:** Vercel

---

## Development Guidelines

### Working Methodology
1. **One section at a time** - Complete one logical section before moving to the next
2. **Explain before coding** - Understand what will be built and why
3. **Test each section** - Verify functionality works before proceeding
4. **Git commits** - Commit after each completed section with clear messages
5. **Code in English** - All code, variables, comments, file names in English
6. **UI in Spanish** - User-facing text in Spanish only

### Section Completion Checklist
- [ ] Code explained and understood
- [ ] Files created/modified
- [ ] Functionality tested locally
- [ ] Ready for git commit
- [ ] Human approval to proceed

---

## Development Phases

### ✅ Phase 0: Initial Setup (COMPLETED)
- [x] Next.js app with TypeScript
- [x] Tailwind CSS configured
- [x] shadcn/ui installed
- [x] Sanity account created
- [x] Sanity Studio accessible at `/studio`

---

### 🔨 Phase 1: Sanity Configuration (IN PROGRESS)

#### 1.1 Core Sanity Setup
**What we're building:**
- Sanity client configuration to fetch data
- TypeScript types matching our Sanity schemas
- GROQ queries to retrieve resources

**Files created:**
- ✅ `lib/sanity.ts` - Sanity client + image URL builder
- ✅ `lib/types.ts` - TypeScript interfaces (tag-based)
- ✅ `lib/queries.ts` - GROQ queries

**What we did:**
- Created reusable Sanity client using environment variables
- Defined TypeScript types for Resource (tag-based, no categories)
- Wrote GROQ queries to fetch data from Sanity

#### 1.2 Sanity Schemas (Tag-Based Approach)
**What we're building:**
- Resource schema ONLY - no categories needed
- Tags are the PRIMARY way to classify and filter resources
- Examples: `['comida saludable', 'vegano', 'delivery']` or `['terapia', 'introspección', 'online']`

**Why tags instead of categories:**
- More flexible - resources can have multiple tags
- Easier to manage - no separate category entity
- Better for nuanced classification (e.g., "spiritual cooking class")
- Perfect for MVP - simpler data model

**Files created:**
- ✅ `src/sanity/schemaTypes/resource.ts`
- ✅ Updated `src/sanity/schemaTypes/index.ts`

**What we did:**
- Created Resource schema with all fields (contact, social, tags, featured)
- Tags array is the main filtering mechanism
- Removed category references entirely

#### 1.3 Test Sanity Integration
**TODO - Next Step:**
- [ ] Add sample data in Sanity Studio
- [ ] Test fetching data with GROQ queries
- [ ] Verify types work correctly

**Git Commit Point:** "feat: configure Sanity schemas and client"

---

### 📦 Phase 2: Landing Page Components (PENDING)

#### 2.1 Install Required shadcn/ui Components
**Components needed:**
- Button
- Card
- Badge

#### 2.2 Create Landing Sections
**Files to create:**
- `components/landing/Hero.tsx` - Hero section with CTA
- `components/landing/Features.tsx` - Features grid
- `components/landing/CTA.tsx` - Call to action for professionals

#### 2.3 Update Landing Page
**Files to modify:**
- `app/page.tsx` - Compose landing page with sections

**Git Commit Point:** "feat: create landing page components"

---

### 📂 Phase 3: Directory Page - Basic Structure (PENDING)

#### 3.1 Create Directory Components
**Files to create:**
- `components/directory/ResourceCard.tsx` - Individual resource card with tags
- `components/directory/DirectoryGrid.tsx` - Grid layout
- `components/directory/TagFilter.tsx` - Tag-based filtering UI

#### 3.2 Create Directory Page
**Files to create:**
- `app/directory/page.tsx` - Fetch and display resources

**Git Commit Point:** "feat: create directory page structure"

---

### 🔍 Phase 4: Filtering Logic (PENDING)

#### 4.1 Implement Tag-Based Filtering
- Tag filter (primary filtering mechanism)
- Featured resources toggle
- Multiple tag selection support

#### 4.2 Add Search Functionality (Optional)
- Text search by name/description

**Git Commit Point:** "feat: add tag-based filtering"

---

### 🎨 Phase 5: Layout & Navigation (PENDING)

#### 5.1 Create Navigation
**Files to modify:**
- `app/layout.tsx` - Add navigation header

#### 5.2 Polish Styling
- Responsive design
- Color scheme (green primary #16a34a)
- Spacing consistency

**Git Commit Point:** "feat: add navigation and polish UI"

---

### ✅ Phase 6: Testing & Deployment (PENDING)

#### 6.1 Final Testing
- [ ] Test all pages on mobile/desktop
- [ ] Verify Sanity Studio works
- [ ] Test filtering functionality
- [ ] Check all links and buttons

#### 6.2 Environment Variables
- [ ] Add env vars to Vercel
- [ ] Test production build

#### 6.3 Deploy to Vercel
- [ ] Deploy and test live site

**Git Commit Point:** "chore: prepare for production deployment"

---

## Current Status

**Last Completed:** Phase 1.2 - Tag-based Sanity Schemas ✅

**What Changed:**
- Removed Category schema entirely (simpler approach)
- Tags are now the PRIMARY filtering mechanism
- Updated all types and queries to reflect tag-based model

**Next Step:** Phase 1.3 - Test Sanity Integration
- Go to `localhost:3000/studio`
- Verify "Recurso" appears in sidebar
- Add 1-2 sample resources with tags
- Test queries to verify data fetching works

**Waiting for:** Human to test the Studio and confirm schemas work

---

## Notes
- Keep commits small and focused
- Test locally before each commit
- Ask questions before proceeding to next phase
- This is a 7-day MVP - prioritize speed over perfection
