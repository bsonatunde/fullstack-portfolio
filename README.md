# Bolaji Onatunde - Professional Portfolio

A modern, responsive portfolio website for Bolaji Onatunde, a fullstack and mobile developer based in Lagos, Nigeria.

## About

This portfolio showcases Bolaji Onatunde's expertise in:
- Fullstack Web Development (React, Node.js, MongoDB, etc.)
- Mobile App Development (React Native, Flutter)
- Modern JavaScript frameworks and technologies
- Clean, maintainable code architecture

## Contact

- **Email**: onatunde.samuel@gmail.com
- **GitHub**: https://github.com/bsonatunde
- **LinkedIn**: https://www.linkedin.com/in/bolaji-onatunde-b42130100/
- **Twitter**: https://x.com/bhinary_jay
- **Location**: Lagos, Nigeria

## Features

- **Professional Design**: Clean, modern interface with smooth animations
- **Responsive Layout**: Works perfectly on all devices and screen sizes
- **Project Showcase**: Dedicated section to upload and display your projects
- **Skills Display**: Visual representation of your technical skills with progress bars
- **Contact Form**: Functional contact form for potential clients and employers
- **Interactive Navigation**: Smooth scrolling and mobile-friendly navigation
- **Dynamic Project Upload**: Add new projects through an intuitive upload interface

## Sections

### 1. Hero Section
- Eye-catching introduction with your name and title
- Professional tagline and brief description
- Social media links (GitHub, LinkedIn, etc.)
- Call-to-action buttons

### 2. About Section
- Personal introduction and background
- Professional journey and expertise
- Key highlights and achievements
- Statistics showcasing your experience

### 3. Skills Section
- Technical skills organized by category:
  - Frontend Development (React, JavaScript, CSS, etc.)
  - Backend Development (Node.js, Python, databases, etc.)
  - Mobile Development (React Native, Flutter, etc.)
  - Tools & Technologies (Git, Docker, AWS, etc.)
- Visual progress bars showing proficiency levels

### 4. Projects Section
- Filterable project gallery
- Search functionality
- Project categories (Frontend, Backend, Fullstack, Mobile)
- Each project includes:
  - Description and technologies used
  - Live demo and GitHub links
  - Featured project highlighting

### 5. Contact Section
- Contact information display
- Functional contact form
- Social media links
- Professional email and phone

### 6. Project Upload Page
- Dedicated page for adding new projects
- Form fields for:
  - Project title and description
  - Category selection
  - Technology tags
  - Image URL
  - GitHub and live demo links
  - Featured project option
- Local storage integration for project persistence

## Technologies Used

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS3 with modern features, CSS Grid, Flexbox
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Storage**: Local Storage for project data persistence
- **Build Tool**: Create React App
- **Fonts**: Inter font family from Google Fonts

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Replace "Your Name" with your actual name
   - Update the description and tagline
   - Add your social media links

2. **About Section** (`src/components/About.js`):
   - Update the personal description
   - Modify statistics and achievements
   - Add your professional highlights

3. **Skills Section** (`src/components/Skills.js`):
   - Update skill categories and proficiency levels
   - Add or remove technologies based on your expertise

4. **Contact Section** (`src/components/Contact.js`):
   - Update contact information (email, phone, location)
   - Add your actual social media profiles

5. **Meta Information** (`public/index.html`):
   - Update the page title and meta description

### Adding Projects

You can add projects in two ways:

1. **Using the Upload Interface**:
   - Navigate to `/upload` in your browser
   - Fill out the project form
   - Projects are saved to local storage

2. **Manually in Code**:
   - Edit `src/components/Projects.js`
   - Add projects to the `sampleProjects` array

### Styling Customization

The portfolio uses CSS modules with consistent color schemes:
- Primary colors: `#667eea` and `#764ba2` (gradient)
- Background: `#f8f9fa` for sections
- Text: `#1a1a1a` for headings, `#666` for body text

Update these colors in the respective CSS files to match your brand.

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Contact.js & Contact.css
│   │   ├── Footer.js & Footer.css
│   │   └── ProjectUpload.js & ProjectUpload.css
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── ...
├── package.json
└── README.md
```

## Deployment

This portfolio can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## Performance Features

- Lazy loading for images
- Smooth scrolling animations
- Responsive images
- Optimized CSS with minimal unused styles
- Fast loading with Create React App optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or want to contribute improvements, please create an issue or pull request.

## Email Configuration

The contact form uses EmailJS to send emails directly to your inbox. To set it up:

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Verify your email

### 2. Set Up Email Service
1. Go to "Email Services" in your dashboard
2. Add a new service (Gmail, Outlook, Yahoo, etc.)
3. Connect your email account and verify

### 3. Create Email Template
1. Go to "Email Templates"
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email (onatunde.samuel@gmail.com)

Example template:
```
Subject: {{subject}}

Hi Bolaji,

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

### 4. Configure Your App
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual EmailJS credentials:
   - `serviceId`: Your EmailJS service ID
   - `templateId`: Your EmailJS template ID
   - `publicKey`: Your EmailJS public key

### 5. Test the Contact Form
1. Visit your portfolio at `http://localhost:3000`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the message

**Note**: EmailJS has a free tier that allows 200 emails per month, which should be sufficient for a personal portfolio.

---

**Note**: Remember to update all placeholder content with your actual information before deploying your portfolio!
