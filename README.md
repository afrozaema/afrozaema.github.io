# 🌟 Afroza Akter Ema - Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://afrozaema.github.io)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> **A beautiful, responsive personal portfolio showcasing the journey of a passionate student, IEEE member, and future data scientist.**

![Portfolio Preview](https://avatars.githubusercontent.com/u/178381093?)

## ✨ About

This is the personal portfolio website of **Afroza Akter Ema**, a dedicated student at Jahangirnagar University (2022-23), IEEE member, and aspiring data scientist. The portfolio showcases her academic journey, skills, future goals, and personal interests in a beautifully designed, interactive web experience.

### 🎯 Key Highlights

- **Student** at Jahangirnagar University
- **IEEE Member** - Active in professional networking
- **Future Data Scientist** - Passionate about AI and machine learning
- **Cultural Explorer** - Loves reading Islamic literature and fiction
- **Women in STEM Advocate** - Committed to empowering women in technology

## 🚀 Features

### 🎨 **Beautiful Design**
- **Modern UI/UX** with gradient backgrounds and smooth animations
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Interactive Elements** - Hover effects, micro-interactions, and smooth scrolling
- **Apple-level Aesthetics** - Clean, sophisticated, and attention to detail

### 📱 **Fully Responsive**
- **Mobile-First** approach with optimized layouts
- **iPad/Tablet** optimized navigation and content
- **Desktop** enhanced with advanced animations and effects
- **Cross-browser** compatibility

### 🔧 **Smart Features**
- **Dynamic CV Download** - Automatically detects and downloads PDF files
- **Smooth Navigation** - Seamless scrolling between sections
- **Interactive Gallery** - Lightbox with navigation controls
- **Contact Integration** - Easy ways to get in touch

### 📊 **Sections Included**
- **Hero Section** - Eye-catching introduction with social links
- **About** - Personal story and highlights
- **Education** - Academic journey and achievements
- **Skills** - Technical and professional capabilities with progress bars
- **Future Goals** - Vision and aspirations with timelines
- **Hobbies** - Personal interests and passions
- **Gallery** - Visual journey with categorized images
- **Contact** - Multiple ways to connect

## 🛠️ Tech Stack

### **Frontend**
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 10.16.16** - Smooth animations and transitions

### **Build Tools**
- **Vite 5.4.2** - Lightning-fast build tool
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### **Icons & Assets**
- **Lucide React** - Beautiful, customizable icons
- **Google Fonts** - Inter & Crimson Text typography
- **Pexels Images** - High-quality stock photography

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/afrozaema/afrozaema.github.io.git
cd afrozaema.github.io
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:5173
```

### 📁 **CV Upload Feature**

The portfolio includes a smart CV download feature that automatically detects PDF files:

1. **Upload your CV** to the `public` folder with any of these names:
   - `cv.pdf` ✅ (recommended)
   - `resume.pdf`
   - `portfolio.pdf`
   - `curriculum-vitae.pdf`
   - `Afroza_Akter_Ema_CV.pdf`

2. **Reload the page** - The system automatically detects your file

3. **Click "Download CV"** - Downloads the detected PDF file

**No code changes needed!** Just upload and reload. 🎉

## 📂 Project Structure

```
afrozaema.github.io/
├── public/
│   ├── cv.pdf                 # Your CV file (auto-detected)
│   ├── vite.svg
│   └── demo-cv.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.tsx     # Smart navigation with mobile support
│   │   ├── Hero.tsx          # Hero section with dynamic CV download
│   │   ├── About.tsx         # Personal story and highlights
│   │   ├── Education.tsx     # Academic journey
│   │   ├── Skills.tsx        # Skills with progress bars
│   │   ├── FutureGoals.tsx   # Vision and aspirations
│   │   ├── Hobbies.tsx       # Personal interests
│   │   ├── Gallery.tsx       # Interactive photo gallery
│   │   ├── Contact.tsx       # Contact information
│   │   └── Footer.tsx        # Footer with social links
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── package.json
├── tailwind.config.js        # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── README.md
```

## 🎨 Customization

### **Colors & Themes**
The portfolio uses a beautiful gradient color system:
- **Primary**: Blue to Purple gradients
- **Secondary**: Purple to Pink gradients
- **Accent**: Emerald, Amber, Cyan variations

### **Fonts**
- **Primary**: Inter (clean, modern sans-serif)
- **Secondary**: Crimson Text (elegant serif for quotes)

### **Animations**
- **Smooth scrolling** between sections
- **Hover effects** on interactive elements
- **Loading animations** for better UX
- **Micro-interactions** for engagement

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Laptops */
2xl: 1536px /* Large screens */
```

## 🚀 Deployment to GitHub Pages

This portfolio is automatically deployed to GitHub Pages. Here's how it works:

### **Automatic Deployment**
1. **Push to main branch** - Changes are automatically deployed
2. **GitHub Actions** - Builds and deploys the site
3. **Live at**: [https://afrozaema.github.io](https://afrozaema.github.io)

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### **Custom Domain (Optional)**
1. Add a `CNAME` file to the `public` folder
2. Configure your domain in GitHub repository settings
3. Update DNS records to point to GitHub Pages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### **Development Guidelines**
1. **Code Style**: Follow existing TypeScript and React patterns
2. **Components**: Keep components focused and reusable
3. **Styling**: Use Tailwind CSS classes consistently
4. **Accessibility**: Ensure all interactive elements are accessible
5. **Performance**: Optimize images and minimize bundle size

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Features in Detail

### **🎯 Smart Navigation**
- Responsive design with mobile hamburger menu
- Smooth scrolling to sections
- Active section highlighting
- Beautiful hover effects and animations

### **📊 Skills Section**
- Interactive progress bars
- Categorized skill sets (Technical & Professional)
- Hover animations and effects
- Certification showcase

### **🎨 Gallery**
- Category-based filtering
- Lightbox with navigation
- Responsive grid layout
- Smooth transitions

### **📱 Mobile Optimization**
- Touch-friendly navigation
- Optimized image sizes
- Fast loading times
- Intuitive user experience

## 🔗 Connect

- **Email**: [emaafroza0@gmail.com](mailto:emaafroza0@gmail.com)
- **Location**: Faridpur, Bangladesh
- **Facebook**: [Afroza Akter Ema](https://www.facebook.com/afroza.ema.2024)
- **Response Time**: Within 24 hours

## 💝 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and Apple design principles
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent icons
- **Images**: [Pexels](https://www.pexels.com/) for high-quality stock photography
- **Fonts**: [Google Fonts](https://fonts.google.com/) for typography
- **Framework**: [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Fast Loading**: Optimized images and code splitting
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessible**: WCAG 2.1 AA compliant

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

---

<div align="center">

**Built with ❤️ by Afroza Akter Ema**

*Driven by curiosity, grounded in values, and fueled by dreams.*

[![GitHub stars](https://img.shields.io/github/stars/afrozaema/afrozaema.github.io?style=social)](https://github.com/afrozaema/afrozaema.github.io)
[![GitHub forks](https://img.shields.io/github/forks/afrozaema/afrozaema.github.io?style=social)](https://github.com/afrozaema/afrozaema.github.io)

**🌐 Live Demo**: [https://afrozaema.github.io](https://afrozaema.github.io)

</div>
