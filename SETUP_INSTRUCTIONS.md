# 🚀 Quick Setup Guide for ZeaTechGuru Profile Website

## Step 1: Install Node.js

If you don't have Node.js installed:

1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the prompts
4. Verify installation by opening PowerShell and typing:
   ```powershell
   node --version
   npm --version
   ```

## Step 2: Install Project Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages (React, Vite, Tailwind CSS, etc.)

## Step 3: Add Your Profile Photo

1. Save your profile photo as `profile.jpg`
2. Place it in the `public` folder
3. The photo should be:
   - High quality (at least 800x800 pixels)
   - Professional headshot
   - Square or portrait orientation works best

## Step 4: Run the Development Server

```powershell
npm run dev
```

The website will open at: `http://localhost:5173`

## Step 5: Customize Your Content

### Update Contact Information

**File: `src/components/Contact.jsx`**
- Line 35-51: Update email, phone, and location

### Update Social Media Links

**File: `src/components/Hero.jsx`**
- Lines 56-71: Add your LinkedIn, GitHub, Twitter URLs

**File: `src/components/Footer.jsx`**
- Lines 40-67: Update social media links

### Customize Services

**File: `src/components/Services.jsx`**
- Lines 11-68: Edit or add services you offer

### Add Your Projects

**File: `src/components/Portfolio.jsx`**
- Lines 8-53: Replace with your actual projects

### Update About Section

**File: `src/components/About.jsx`**
- Lines 42-58: Edit your professional bio
- Lines 64-76: Update stats (years of experience, projects, etc.)

## Step 6: Build for Production

When ready to deploy:

```powershell
npm run build
```

This creates optimized files in the `dist` folder.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. Run: `vercel`
4. Follow the prompts

### Option 2: Netlify (Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder to Netlify
3. Your site is live!

### Option 3: GitHub Pages

1. Push code to GitHub
2. Go to repository Settings > Pages
3. Select branch and folder
4. Your site will be live at `username.github.io/repo-name`

## 🎨 Color Customization

To change the black/white theme:

**File: `tailwind.config.js`**
```javascript
colors: {
  primary: '#000000',    // Change main black
  secondary: '#ffffff',  // Change main white
  accent: '#1a1a1a',    // Change accent color
}
```

## 📱 Testing Responsiveness

Test your site on different screen sizes:
- Desktop: Full browser window
- Tablet: Resize browser to ~768px width
- Mobile: Resize browser to ~375px width

Or use browser DevTools (F12) > Toggle Device Toolbar

## ⚡ Performance Tips

1. Optimize images before adding them
2. Use WebP format for better compression
3. Keep image sizes under 500KB
4. Use lazy loading for images

## 🐛 Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Reinstall Node.js and restart PowerShell

### Port 5173 already in use
- Another app is using the port
- Kill the process or change port in `vite.config.js`

### Blank page after build
- Check browser console for errors
- Ensure all image paths are correct
- Verify all imports in components

## 📞 Need Help?

If you encounter issues:
1. Check the browser console (F12) for errors
2. Review the README.md file
3. Check that all files are in the correct locations

---

**Happy Coding! 🚀**

