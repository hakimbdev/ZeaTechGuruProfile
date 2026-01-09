# ZeaTechGuru - Professional Developer Profile

A modern, professional developer portfolio website built with React and Vite, featuring a sleek black and white design theme.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite for blazing-fast performance
- **Responsive Design**: Fully responsive layout that works on all devices
- **Sleek UI**: Professional black and white color scheme with smooth animations
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Interactive Components**: Smooth scrolling, hover effects, and dynamic content filtering
- **Contact Form**: Functional contact form for client inquiries

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with professional headline and profile photo
2. **About Section**: Comprehensive bio highlighting expertise and achievements
3. **Services Section**: Detailed overview of all services offered
4. **Portfolio Section**: Showcase of featured projects with filtering capability
5. **Contact Section**: Professional contact form and contact information
6. **Footer**: Social links and additional navigation

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Add Your Profile Photo**
   - Place your profile photo in the `public` folder
   - Name it `profile.jpg` (or update the path in `src/components/Hero.jsx`)

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   - The site will be available at `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   ```
   - Production files will be in the `dist` folder

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Edit `src/components/Contact.jsx`
2. **Social Media Links**: Update links in `src/components/Hero.jsx` and `src/components/Footer.jsx`
3. **Services**: Modify service offerings in `src/components/Services.jsx`
4. **Portfolio Projects**: Add/edit projects in `src/components/Portfolio.jsx`
5. **About Section**: Update bio and stats in `src/components/About.jsx`

### Color Scheme

The black and white theme is configured in:
- `tailwind.config.js` - Custom color definitions
- `src/index.css` - Global styles and animations

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Framer Motion** - Animation library (optional)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

## 📝 SEO Optimization

The site includes:
- Meta descriptions and keywords
- Semantic HTML structure
- Optimized page titles
- Social media meta tags (Open Graph)

## 🤝 Support

For questions or support, contact: contact@zeatechguru.com

## 📄 License

© 2026 ZeaTechGuru. All rights reserved.

---

**Built with ❤️ by ZeaTechGuru**

