# ÉLÉGANCE - Premium Fashion E-Commerce Website

A modern, elegant fashion e-commerce website built with React.js, inspired by high-end fashion brands. This project showcases a complete frontend implementation with smooth animations, responsive design, and professional UI/UX.

## 🌟 Features

### Core Functionality
- **Product Browsing**: Browse through a curated collection of premium fashion items
- **Advanced Filtering**: Filter by category (Women, Men, Accessories) and price range
- **Smart Sorting**: Sort products by price (low to high, high to low) and ratings
- **Search**: Real-time product search functionality
- **Product Details**: Detailed product pages with image gallery and size selection
- **Shopping Cart**: Full cart management with quantity controls and localStorage persistence
- **Wishlist**: Save favorite items for later (with localStorage)

### Design & UX
- **Luxury Aesthetic**: Clean, minimal design with soft colors and elegant typography
- **Smooth Animations**: Fade-in, slide-in, and hover effects throughout
- **Responsive Design**: Fully mobile-friendly and tablet-optimized
- **Image Hover Effects**: Product images swap on hover for better preview
- **Sticky Navigation**: Always-accessible navigation bar
- **Loading States**: Professional loading indicators

### Technical Features
- **React Router**: Seamless navigation between pages
- **Context API**: Global state management for cart and wishlist
- **localStorage**: Persistent cart and wishlist data
- **Reusable Components**: Modular, maintainable code structure
- **Clean Code**: Well-commented and organized codebase

## 📁 Project Structure

```
fashion-store/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation with search and cart
│   │   ├── Footer.js          # Footer with links and social media
│   │   └── ProductCard.js     # Reusable product card component
│   ├── pages/
│   │   ├── Home.js            # Landing page with hero and featured products
│   │   ├── ProductListing.js  # Product grid with filters and sorting
│   │   ├── ProductDetail.js   # Individual product page
│   │   └── Cart.js            # Shopping cart page
│   ├── context/
│   │   └── CartContext.js     # Global state management
│   ├── data/
│   │   └── products.js        # Mock product data (15 items)
│   ├── styles/
│   │   ├── App.css            # Global styles and animations
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── ProductCard.css
│   │   ├── ProductListing.css
│   │   ├── ProductDetail.css
│   │   └── Cart.css
│   ├── App.js                 # Main app component with routing
│   └── index.js               # Entry point
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd fashion-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🎨 Design Philosophy

### Color Palette
- **Primary**: #2c2c2c (Dark charcoal)
- **Secondary**: #8b7355 (Warm brown)
- **Accent**: #d4af37 (Gold)
- **Background**: #f9f7f4 (Soft cream)

### Typography
- **Headings**: Cormorant Garamond (Serif - elegant and classic)
- **Body**: Montserrat (Sans-serif - clean and modern)

### Key Design Elements
- Large, high-quality product images
- Generous white space
- Subtle shadows and transitions
- Minimal, distraction-free interface
- Luxury brand aesthetic

## 📱 Pages Overview

### 1. Home Page
- Full-width hero banner with call-to-action
- Category showcase (Women, Men, Accessories)
- Featured products section
- Brand story section

### 2. Product Listing Page
- Sidebar with filters (category, price range)
- Sort options (featured, price, rating)
- Responsive product grid
- Search integration

### 3. Product Detail Page
- Image gallery with thumbnails
- Product information and description
- Size selection
- Add to cart and wishlist buttons
- Related products section
- Star ratings display

### 4. Cart Page
- List of cart items with images
- Quantity controls (+/-)
- Remove item functionality
- Order summary with total
- Empty cart state

## 🛠️ Technologies Used

- **React.js** (v18.2.0) - UI library
- **React Router DOM** (v6.20.0) - Navigation
- **Context API** - State management
- **CSS3** - Styling with custom properties
- **Google Fonts** - Typography
- **Unsplash** - High-quality product images

## 💡 Key Features Explained

### Cart Management
- Items persist in localStorage
- Supports multiple sizes of the same product
- Real-time total calculation
- Quantity validation

### Wishlist
- Toggle items in/out of wishlist
- Visual indicator on product cards
- Persists across sessions

### Filtering & Sorting
- Real-time filtering without page reload
- URL parameter support for shareable links
- Multiple filter combinations

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly interactions

## 🎯 Resume/Portfolio Highlights

This project demonstrates:
- ✅ Modern React development with hooks
- ✅ Component-based architecture
- ✅ State management with Context API
- ✅ Client-side routing
- ✅ Responsive web design
- ✅ Clean, maintainable code
- ✅ Professional UI/UX design
- ✅ Performance optimization
- ✅ localStorage integration
- ✅ Production-ready code structure

## 🔮 Future Enhancements

Potential additions for extended learning:
- User authentication
- Backend integration (Node.js/Express)
- Payment gateway integration
- Product reviews and ratings
- Order history
- Email notifications
- Admin dashboard
- Dark mode toggle
- Multi-language support
- Advanced search with filters

## 📝 Notes

- This is a frontend-only project (no backend)
- Product data is stored in a local JSON file
- Images are sourced from Unsplash (free stock photos)
- No actual payment processing
- Perfect for portfolio and learning purposes

## 👨‍💻 Author

Created as a portfolio project to demonstrate modern React.js development skills and professional UI/UX design capabilities.

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ using React.js**
