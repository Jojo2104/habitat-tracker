# 🎮 HABIT-AT: Gamified Habit Tracker

**"Habitat" - Where habits grow and thrive!**

A gamified habit-tracking application that transforms self-improvement into an engaging, nostalgic adventure. Built with pixel-art aesthetics and designed to bring friends together in their journey toward better habits.

## 🌟 Overview

The Pixel Habit Tracker, affectionately named "Habitat" (a playful blend of habit and habitat), creates a positive, growth-focused digital environment. Much like a real habitat, this app is a space where users can thrive—building routines, breaking bad habits, and growing into better versions of themselves.

### Why Habitat?

- **Community-Focused**: Multi-user support lets friends connect, hold each other accountable, and stay motivated together
- **Nostalgic Design**: Retro pixel-art style evokes the playful charm of early gaming eras
- **Gamified Experience**: Makes habit-tracking feel less like a chore and more like an adventure
- **Growth-Oriented**: Combines purposeful tools with thoughtful visual storytelling

## 🚀 Features

### 📱 Interactive User Journey
- **Splash Screen**: Animated video introduction
- **Loading Screen**: Smooth feedback transitions (500ms)
- **Ready Screen**: User confirmation page
- **User Selection**: Character profile tiles
- **Habit Dashboard**: Core tracking interface

### 🎯 Gamified Tracking System
- **XP System**: Earn experience points for completed habits
- **Virtual Currency**: Collect coins as rewards
- **Custom Habit Points**: Adjustable point values for different habits
- **Reward & Penalty Logic**: Comprehensive progress tracking

### 🎨 Rich User Interface
- **Pixel Art Style**: Nostalgic 8-bit visuals
- **Smooth Animations**: Card flips, floating effects, pop animations, fade-ins
- **Responsive Design**: Works seamlessly across all screen sizes
- **Custom Typography**: "Press Start 2P" font for authentic retro feel

### 🛠️ Habit Management
- Add, edit, complete, and delete habits
- Real-time synchronization with Firebase Firestore
- Persistent data storage across sessions

### 👥 Multi-User Support
- Character avatars (Josna, Aishwarya, Pepper, and more)
- Profile-based data segregation
- Individual progress tracking

## 🏗️ Technical Stack

- **Frontend**: React.js (v18.2.0)
- **Backend**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Styling**: TailwindCSS (v3.4.17) with custom animations
- **Routing**: React Router DOM (v6.18.0)
- **Build Tools**: React Scripts (v5.0.1), PostCSS (v8.5.3), Autoprefixer (v10.4.21)

## 📁 Project Structure

```
/src/
├── pages/
│   ├── SplashScreen.js
│   ├── LoadingScreen.js
│   ├── ReadyScreen.js
│   ├── TileSelection.js
│   └── HabitTrackingPage.js
├── App.js
├── firebase.js
├── index.css
└── index.js
/public/
├── index.html
├── script.js
└── style.css
/assets/
firebase.json
firestore.rules
package.json
tailwind.config.js
```

## 🗄️ Data Models

### User Model
```javascript
{
  xp: number,
  coins: number
}
```

### Habit Model
```javascript
{
  name: string,
  points: number
}
```

## 🎨 Animations & Effects

- **fadeInUp**: Progressive UI reveals
- **float**: Gentle hover effects
- **pop**: Elastic scale interactions
- **cardFlip**: 3D flip transitions on selection

## 🚀 Getting Started

### Installation

```bash
git clone [repository-url]
cd pixel-habit-tracker
npm install
npm start
```

### Firebase Setup

1. Create a new Firebase project
2. Enable Firestore database
3. Update `firebase.js` with your configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

4. Deploy Firestore security rules:

```bash
firebase deploy --only firestore:rules
```

### Deployment

```bash
npm run build
firebase deploy
```

## 🎯 Roadmap

### 🔜 Short-Term Goals
- User authentication (email/social login)
- Habit categories and organization
- Light/Dark theme toggle
- Data export/import functionality
- Search and filter features

### 🎮 Medium-Term Features
- Habit streaks and consistency tracking
- Weekly/monthly progress reports
- Push notifications and reminders
- Achievement system and trophies
- Avatar customization options

### 🌟 Long-Term Vision
- Friend connections and community challenges
- Marketplace for community habit templates
- Native mobile applications
- AI-powered habit suggestions
- Wearable device integrations
- Premium subscription features

## 🔧 Technical Considerations

### Scalability
- Firebase backend for seamless scaling
- Componentized UI architecture
- Extendable routing and styling system

### Security
- Firebase Auth integration planned
- Data validation and encryption
- Secure Firestore rules (valid until May 9, 2025)

### Performance
- Lazy loading implementation
- Image optimization
- Code splitting and memoization

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests, report bugs, or suggest new features.

## 📄 License

This project is open source.

## 🎉 Conclusion

Habitat reimagines habit tracking by transforming it into a playful, engaging, and social experience. Through pixel graphics, custom animations, and a thoughtful user journey, it brings warmth and nostalgia to self-discipline. By supporting friends, rewards, and real-time updates, it becomes more than just an app—it becomes a community for growth.

Built with modern technology and creative spirit, Habitat balances functionality with fun and is ready for exciting future expansions.

---

**Made with ❤️ for building better habits together**
