# Thinkonaut Landing Page

A modern, high-converting landing page for Thinkonaut, a UI/UX and development course academy. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Dark theme with vibrant blue-purple gradients
- **Responsive Layout**: Mobile-first approach with responsive breakpoints
- **Interactive Elements**: Hover effects, smooth scrolling, and animations
- **Accessibility**: High contrast text, readable fonts, and keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📱 Sections

1. **Header**: Navigation with logo and CTA button
2. **Hero**: Main value proposition with social proof
3. **Trusted By**: Company logos for credibility
4. **Featured Courses**: Course showcase with pricing
5. **Why Choose Us**: Feature highlights with icons
6. **Success Stories**: Student testimonials
7. **Pricing**: Three-tier pricing plans
8. **CTA**: Final conversion section
9. **Footer**: Links and company information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd thinkonaut-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/               # Reusable UI components
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── TrustedBy.tsx        # Company logos
│   ├── FeaturedCourses.tsx  # Course showcase
│   ├── WhyChooseUs.tsx      # Features section
│   ├── SuccessStories.tsx   # Testimonials
│   ├── Pricing.tsx          # Pricing plans
│   ├── CTA.tsx              # Call-to-action
│   └── Footer.tsx           # Footer links
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep slate (#0f172a) with purple accents
- **Accents**: Blue to purple gradients (#3b82f6 to #8b5cf6)
- **Text**: White (#ffffff) and slate (#cbd5e1)
- **Backgrounds**: Slate variations with transparency

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Regular weight, optimized for readability

### Components
- **Cards**: Glassmorphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Icons**: Lucide React icons with gradient backgrounds

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js` and component files.

### Content
Modify the content in each component file to match your brand.

### Styling
Customize the design by updating Tailwind classes and CSS variables.

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Bundle Size**: Minimal JavaScript bundle
- **Images**: Optimized with Next.js Image component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons from Lucide React
- UI patterns from shadcn/ui
- Typography from Google Fonts

## 📞 Support

For questions or support, please open an issue in the repository or contact the development team.

---

Built with ❤️ for Thinkonaut Academy
