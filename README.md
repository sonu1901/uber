# Uber - Mobile Ride Sharing Application

A modern, mobile-first MERN stack application for ride-sharing inspired by Uber. This project focuses exclusively on mobile user experience with a clean, responsive interface.

## 📱 Project Overview

This is a **mobile-only** ride-sharing platform built with the MERN stack:
- **Frontend**: React 19 + Vite + TailwindCSS
- **Database**: MongoDB (Backend - to be implemented)
- **Server**: Express.js (Backend - to be implemented)
- **Node.js**: JavaScript runtime

The application provides a seamless mobile experience for users to book rides, track drivers, and manage their ride history.

## ✨ Features

- **Mobile-First Design**: Optimized exclusively for mobile devices
- **User Authentication**: Secure login and registration system
- **Ride Booking**: Easy-to-use interface for booking rides
- **Real-time Notifications**: Toast notifications for user feedback
- **Responsive UI**: Built with TailwindCSS for stunning mobile interfaces
- **Fast Performance**: Vite build tool for optimized development and production

## 🛠️ Tech Stack

### Frontend
- **React 19.2.6** - UI library
- **Vite 8.0.12** - Build tool and dev server
- **TailwindCSS 4.3.0** - Utility-first CSS framework
- **React Router DOM 7.17.0** - Client-side routing
- **React Hot Toast 2.6.0** - Toast notifications
- **ESLint 10.3.0** - Code quality and style enforcement

## 📁 Project Structure

```
uber/
├── frontend/
│   ├── src/
│   │   ├── pages/           # Page components
│   │   │   └── Home.jsx
│   │   ├── components/      # Reusable components
│   │   ├── auth/            # Authentication logic
│   │   ├── assets/          # Static assets
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Public assets
│   ├── package.json         # Dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── eslint.config.js     # ESLint rules
│   └── index.html           # HTML entry point
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sonu1901/uber.git
   cd uber
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

Build the project for production:

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## 📖 Usage

After starting the development server, open your browser and navigate to the provided localhost URL. The application is fully responsive and optimized for mobile devices.

**Note**: This is a mobile-only application. For the best experience, use mobile browser dimensions or open DevTools with mobile emulation enabled.

## 🔧 Configuration

### Vite Configuration
The Vite configuration is defined in `vite.config.js`. It includes React plugin support and TailwindCSS integration.

### ESLint Configuration
Code style and quality rules are configured in `eslint.config.js`. The project uses:
- React best practices
- React Hooks rules
- React Refresh rules

### TailwindCSS
TailwindCSS is configured as a Vite plugin for optimized build performance and zero-configuration setup.

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.6 | UI library |
| react-dom | ^19.2.6 | React DOM rendering |
| react-router-dom | ^7.17.0 | Client-side routing |
| react-hot-toast | ^2.6.0 | Toast notifications |
| tailwindcss | ^4.3.0 | CSS framework |
| @tailwindcss/vite | ^4.3.0 | Vite integration |
| vite | ^8.0.12 | Build tool |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Notes

- **Mobile-Only**: This project is designed exclusively for mobile devices. Desktop view is not supported.
- **Authentication**: Authentication logic is located in the `src/auth/` directory.
- **Components**: Reusable UI components are in the `src/components/` directory.
- **Pages**: Page-level components are in the `src/pages/` directory.

## 🔜 Future Enhancements

- Backend API integration (Express.js + MongoDB)
- Real-time location tracking with maps
- Payment integration
- User profile management
- Ride history and analytics
- Driver registration and management
- In-app chat functionality

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Sonu** - [GitHub Profile](https://github.com/sonu1901)

## 🙏 Support

If you have any questions or need support, please open an issue on the GitHub repository.

---

**Made with ❤️ for mobile users**
