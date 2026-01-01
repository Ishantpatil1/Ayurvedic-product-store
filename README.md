# 🌿 HansrajVeda - Premium Ayurvedic E-Commerce Store

A modern, fully responsive e-commerce platform for authentic, handmade Ayurvedic wellness products. Built with React and designed with a premium Ayurvedic aesthetic.

## ✨ Features

### 🎨 Premium Design System
- **Ayurvedic Color Palette**: Earthy greens, browns, beige, and saffron tones
- **Premium Typography**: Playfair Display for headings, Poppins for body text
- **Consistent Design Tokens**: CSS variables for colors, spacing, shadows, and transitions
- **Smooth Animations**: Hover effects, transitions, and entrance animations

### 📱 Mobile-First & Responsive
- **100% Mobile Optimized**: Complete mobile experience, not a cut-down version
- **Responsive Navigation**: Hamburger menu for mobile devices
- **Adaptive Layouts**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Touch-Friendly**: Large tap targets and mobile-optimized interactions

### 🛍️ E-Commerce Features
- **Product Catalog**: 8+ Ayurvedic products across multiple categories
- **Category Filters**: Skincare, Hair Care, Body Care, Herbal Powders, Oral Care
- **Sorting Options**: Featured, Price (Low to High), Price (High to Low)
- **Product Cards**: Premium design with hover effects and badges
- **Product Details**: Ingredients, usage instructions, benefits, and reviews

### 📄 Complete Page Structure
1. **Home/Hero Section**
   - Compelling Ayurvedic messaging
   - Trust badges (100% Natural, Handmade, Chemical-Free, Traditional Recipes)
   - Call-to-action buttons

2. **Products Section**
   - Filterable product grid
   - Sorting functionality
   - Premium product cards with hover effects

3. **About Section**
   - Brand story
   - Ayurvedic philosophy
   - Core values (Pure & Natural, Handmade, Ancient Wisdom, Holistic Wellness)
   - Purity promise with guarantees

4. **Testimonials Section**
   - Customer reviews with 5-star ratings
   - Real testimonials with photos
   - Trust statistics (10,000+ customers, 4.9/5 rating, 95% repeat customers)

5. **Contact Section**
   - Contact form with validation
   - Business information (email, phone, address)
   - Social media links

6. **Footer**
   - Comprehensive site links
   - Product categories
   - Customer care information
   - Social media integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saarthi-ayurveda-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Design System

### Color Palette
```css
Primary Green: #2d5016
Secondary Beige: #d4a574
Accent Brown: #8b4513
Background Cream: #faf8f3
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

### Spacing System
- Extra Small: 0.5rem
- Small: 1rem
- Medium: 1.5rem
- Large: 2.5rem
- Extra Large: 4rem

## 📦 Component Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation with mobile menu
│   ├── Hero.jsx            # Hero section with trust badges
│   ├── Products.jsx        # Product listing with filters
│   ├── ProductCard.jsx     # Reusable product card
│   ├── ProductDetail.jsx   # Product detail modal
│   ├── About.jsx           # Brand story and philosophy
│   ├── Testimonials.jsx    # Customer reviews
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Site footer
├── App.jsx                 # Main app component
├── index.css               # Global styles & design tokens
└── main.jsx                # App entry point
```

## 🌟 Key Features Implementation

### Responsive Navigation
- Desktop: Horizontal navigation with hover effects
- Mobile: Hamburger menu with slide-in drawer
- Smooth animations and transitions

### Product Filtering & Sorting
- Category-based filtering (All, Skincare, Hair Care, etc.)
- Price-based sorting (Low to High, High to Low)
- Featured products sorting

### Mobile Optimization
- Touch-friendly buttons and controls
- Optimized font sizes for readability
- Proper spacing for mobile interaction
- Full-screen mobile layouts

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly

## 🛠️ Technologies Used

- **React 19.1.0** - UI framework
- **Vite 7.0.4** - Build tool and dev server
- **CSS3** - Styling with CSS variables and modern features
- **Google Fonts** - Playfair Display & Poppins

## 📝 Product Categories

1. **Skincare**: Face masks, serums, gels
2. **Hair Care**: Oils, treatments
3. **Body Care**: Massage oils, body care products
4. **Herbal Powders**: Ayurvedic supplements
5. **Oral Care**: Natural tooth powders

## 🎯 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Order management system
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Real-time inventory management
- [ ] Multi-language support
- [ ] Advanced search functionality

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Designed with inspiration from traditional Ayurvedic wisdom
- Built with modern web technologies for optimal performance
- Crafted with attention to detail and user experience

---

**HansrajVeda** - Bringing Ancient Ayurvedic Wisdom to Modern Wellness 🌿

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
