# Courses Page - Documentation

## Overview
A dedicated courses page showcasing all training programs offered by The Trucking Vault. Built with Next.js 14 App Router.

## File Structure
```
app/courses/
└── page.tsx          # Courses page route
components/
└── CoursesList.tsx   # Main courses listing component
```

## Pages Created

### 1. `/courses` - Courses Page
**File**: `app/courses/page.tsx`
- **Route**: `/courses`
- **Purpose**: Dedicated page displaying all available training courses
- **Components Used**: 
  - `Header` - Navigation
  - `CoursesList` - Course cards grid
  - `Footer` - Site footer
- **SEO**: 
  - Title: "CDL Training Courses | The Trucking Vault"
  - Description: "Explore our comprehensive CDL training courses, endorsements, dispatch training, and trucking business courses. FMCSA ELDT compliant programs."

## Components Created

### CoursesList Component
**File**: `components/CoursesList.tsx`

**Features**:
- ✅ 7 comprehensive course cards
- ✅ Animated glassmorphism design
- ✅ Badge system (Most Popular, Business)
- ✅ Responsive grid layout (1 column mobile, 2 columns desktop)
- ✅ Animated background effects
- ✅ Staggered fade-in animations
- ✅ "Ideal For" callout boxes
- ✅ Bottom consultation CTA section

**Courses Included**:

1. **Class A CDL Training** (Most Popular)
   - Icon: Truck
   - Duration: 3-6 weeks
   - Features: ELDT compliant, theory + practical, job placement
   - Ideal for: OTR, regional, local driving jobs

2. **Class B CDL Training**
   - Icon: Bus
   - Duration: 2-4 weeks
   - Features: ELDT compliant, pre-trip inspection, road test
   - Ideal for: Delivery drivers, school bus operators

3. **CDL Upgrade: Class B to Class A**
   - Icon: Arrow Up
   - Fast-track program for existing Class B holders
   - Focused skills training

4. **CDL Restriction Removal**
   - Icon: Gear/Cog
   - Manual transmission training
   - Air brake endorsement
   - One-on-one coaching

5. **CDL Endorsement Courses**
   - Icon: Certificate
   - Hazmat, Tanker, Doubles/Triples, Passenger
   - Online ELDT theory training
   - Practice tests included

6. **Dispatching Course** (Business)
   - Icon: Clipboard
   - Load boards, rate negotiation, carrier setup
   - Bonus forms and scripts
   - Side hustle or full-time option

7. **Start Your Trucking Business Course** (Business)
   - Icon: Briefcase
   - Business formation (LLC, EIN, DOT/MC)
   - Insurance, compliance, IRP/IFTA
   - Complete startup blueprint

**Design Elements**:
- Gold gradient icon containers
- Glass-morphism cards with hover effects
- Feature bullet points with gold dots
- "Ideal For" bordered callout boxes
- Full-width "Enroll Now" buttons
- Bottom consultation CTA with dual buttons

## Navigation Updates

### Header Component
**Updated**: `components/Header.tsx`

**Changes**:
- Added "Courses" navigation link
- Updated href structure:
  - `Home` → `/` (absolute path)
  - `About` → `/#about` (hash navigation)
  - `Courses` → `/courses` (new dedicated page)
  - `Programs` → `/#programs` (hash navigation)
  - `Contact` → `/#contact` (hash navigation)

**Benefits**:
- ✅ Proper routing between pages
- ✅ Hash navigation for homepage sections
- ✅ Dedicated courses page accessible from anywhere

### Programs Component
**Updated**: `components/Programs.tsx`

**Changes**:
- Added "View All Courses" link below section header
- Links to `/courses` page
- Styled with gold accent and arrow icon
- Smooth hover transition

## Styling & Design

### Color Scheme
- Primary Gold: `#D4A748`
- Background: Dark gradients (`#0A0F1C`, `#1A1F2E`)
- Glass effects with subtle gold borders

### Typography
- Headings: Syne font family
- Body: Inter font family
- Sizes: Responsive scaling (text-xs to text-5xl)

### Animations
- Fade-in-up on scroll
- Staggered delays (0.1s increments)
- Smooth hover transitions (300ms)
- Glassmorphism effects

### Layout
- Responsive grid: 1 column (mobile) → 2 columns (desktop)
- Max-width container: `max-w-7xl`
- Consistent padding: `section-padding` utility
- Glass cards with subtle shadows

## User Experience

### Navigation Flow
1. User clicks "Courses" in header → Navigates to `/courses`
2. User clicks "View All Courses" in Programs section → Navigates to `/courses`
3. User clicks "Enroll Now" on any course → Scrolls to contact/enrollment section

### Mobile Optimization
- Single column layout on mobile
- Full-width CTA buttons
- Readable text sizes
- Touch-friendly spacing

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Descriptive link text
- ARIA-compliant icons
- High contrast text

## SEO Optimization

### Metadata
- Unique page title
- Descriptive meta description
- Keywords: CDL, training, ELDT, trucking, courses

### Content Structure
- H1: "Our Training Courses"
- H2: Course titles
- H3: Feature sections
- Descriptive course descriptions
- "Ideal for" use case descriptions

## Call-to-Actions

### Primary CTAs
- "Enroll Now" buttons on each course card
- Link to `#enroll` section

### Secondary CTAs
- "Schedule a Consultation" button (bottom section)
- "Call Us Today" button (phone link)
- "View All Courses" link (Programs section)

## Technical Details

### Next.js Features Used
- App Router (`app/` directory)
- Server-side metadata
- File-based routing
- Client components (`"use client"`)

### React Icons
- `FaTruck` - Class A
- `FaBus` - Class B
- `FaArrowUp` - Upgrade
- `FaCog` - Restriction Removal
- `FaCertificate` - Endorsements
- `FaClipboardList` - Dispatching
- `FaBriefcase` - Business

### Tailwind Classes
- Custom utilities: `.section-padding`, `.glass-card`, `.btn-primary`, `.btn-secondary`
- Gradient text: `.gradient-text`
- Animation: `.animate-fade-in-up`
- Responsive breakpoints: `md:`, `lg:`

## Future Enhancements

### Potential Additions
- [ ] Course filtering by category
- [ ] Price display
- [ ] Course comparison tool
- [ ] Student testimonials per course
- [ ] Course schedule calendar
- [ ] Online enrollment form
- [ ] Course prerequisite checker
- [ ] FAQ section per course
- [ ] Video previews
- [ ] Downloadable course brochures

### Integrations
- [ ] Payment processing
- [ ] Booking system
- [ ] Live chat support
- [ ] Email notifications
- [ ] Student dashboard
- [ ] Progress tracking

## Testing Checklist

- [x] Page loads without errors
- [x] All courses display correctly
- [x] Navigation links work
- [x] Mobile responsive layout
- [x] Animations play smoothly
- [x] Icons render properly
- [x] CTA buttons functional
- [x] ESLint validation passes
- [x] TypeScript compilation success
- [x] SEO metadata present

## Deployment Notes

### Build Command
```bash
npm run build
```

### Routes Added
- `/courses` - Courses listing page

### Assets Required
None - all icons use React Icons library

---

**Created**: October 6, 2025  
**Version**: 1.0  
**Status**: ✅ Complete and Production-Ready
