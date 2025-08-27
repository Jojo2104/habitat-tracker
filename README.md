HABIT-AT: Gamified Habit-Tracking
Table of Contents
Table of Contents	2
1. Project Overview	2
2. Technical Implementation	3
2.1 Technology Stack	3
2.2 Architecture	3
2.3 Key Files Structure	3
3. Application Features	4
3.1 Interactive User Journey	4
3.2 Gamified Habit Tracking System	5
3.3 Rich User Interface	5
3.4 Habit Management Functionality	5
3.5 Multi-User Support	5
4. Data Management	5
4.1 Firebase Integration	5
4.2 User Data Model	5
5. Visual Design	6
5.1 UI Components	6
5.2 Animations	6
6. Future Development Scope	6
6.1 Short-Term	6
6.2 Medium-Term	7
6.3 Long-Term Vision	7
7. Technical Considerations	7
7.1 Scalability	7
7.2 Security	7
7.3 Performance	7
8. Implementation Guide	7
Installation	8
Firebase Setup	8
Deployment	8
9. Conclusion	8
10. Output Images	9

1. Project Overview

The Pixel Habit Tracker, affectionately named "Habitat" (a playful blend of habit and habitat), is a gamified habit-tracking application designed to create a positive, growth-focused digital environment. Much like a real habitat, this app is a space where users can thrive—building routines, breaking bad habits, and growing into better versions of themselves.
We built this project not only to encourage self-discipline but also to bring people together. With multi-user support and fun, nostalgic visuals, friends can connect, hold each other accountable, and stay motivated together. The retro pixel-art style was chosen deliberately to evoke the playful charm of early gaming eras—a nod to the collective childhood of our generation. This nostalgia-driven aesthetic makes habit-tracking feel less like a chore and more like an adventure.
By combining purposeful habit-tracking tools with thoughtful visual storytelling and a collaborative spirit, Habitat becomes more than an app—it becomes a community for growth.

2. Technical Implementation

2.1 Technology Stack
- Frontend: React.js (v18.2.0)
- Backend: Firebase Firestore
- Authentication: Firebase Auth
- Styling: TailwindCSS (v3.4.17) with custom animations
- Routing: React Router DOM (v6.18.0)
- Build Tools: React Scripts (v5.0.1), PostCSS (v8.5.3), Autoprefixer (v10.4.21)

2.2 Architecture
The application uses a component-based architecture with clear separation of concerns:
- Modular page components
- Firebase service abstraction
- Tailwind utility classes + custom CSS animations
- Route-based navigation

2.3 Key Files Structure
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

3. Application Features

3.1 Interactive User Journey
- Splash Screen: Animated video intro
- Loading Screen: Feedback transition (500ms)
- Ready Screen: Confirmation page
- User Selection: Profile tiles
- Habit Dashboard: Core tracking interface

3.2 Gamified Habit Tracking System
- XP System: Earn experience points
- Virtual Currency: Coin rewards
- Custom Habit Points: Adjustable values
- Reward + Penalty Logic: Track progress

3.3 Rich User Interface
- Pixel Art Style: Nostalgic visuals
- Animations: Card flips, float, pop, fade-in
- Responsive Layout: Works on all screens
- Custom Font: "Press Start 2P"

3.4 Habit Management Functionality
- Add, edit, complete, and delete habits
- Real-time sync with Firebase Firestore

3.5 Multi-User Support
- Avatars (Josna, Aishwarya, Pepper, etc.)
- Profile-based data segregation

4. Data Management

4.1 Firebase Integration
- Firestore database with:
- habits: habit info
- users: progress info (XP, coins)
- Security rules (valid till May 9, 2025)

4.2 User Data Model
// User
{
xp: number,
coins: number
}

// Habit
{
name: string,
points: number
}

5. Visual Design

5.1 UI Components
- Flippable tile cards
- Progress display bars
- Habit list with buttons
- Themed backgrounds for different screens

5.2 Animations
- fadeInUp: Reveal UI progressively
- float: Gentle hover effect
- pop: Elastic scale on interaction
- cardFlip: 3D flip on selection

6. Future Development Scope

6.1 Short-Term
- User Auth (email/social)
- Habit categories
- Light/Dark theme toggle
- Data export/import
- Search feature

6.2 Medium-Term
- Habit streaks
- Weekly/monthly reports
- Push notifications
- Achievements and trophies
- Avatar customization

6.3 Long-Term Vision
- Friend connections & community challenges
- Marketplace for community habit templates
- Native mobile apps
- AI habit suggestions
- Integration with wearables
- Premium features (subscription)

7. Technical Considerations

7.1 Scalability
- Firebase backend
- Componentized UI
- Extendable routing and styling

7.2 Security
- Future auth-based rules
- Data validation & encryption

7.3 Performance
- Lazy loading
- Image optimization
- Code splitting & memoization

8. Implementation Guide

Installation
git clone [repository-url]
cd pixel-habit-tracker
npm install
npm start

Firebase Setup
- Create Firebase project
- Enable Firestore
- Update firebase.js with:
const firebaseConfig = {
apiKey: "...",
authDomain: "...",
projectId: "...",
storageBucket: "...",
messagingSenderId: "...",
appId: "..."
};
- Deploy rules:
firebase deploy --only firestore:rules

Deployment
npm run build
firebase deploy

9. Conclusion

Habitat reimagines habit tracking by turning it into a playful, engaging, and social experience. Through pixel graphics, custom animations, and a thoughtful user journey, it brings warmth and nostalgia to self-discipline. By supporting friends, rewards, and real-time updates, it becomes a place to not only build habits but to grow within a community.

Built with modern tech and creative spirit, this app balances functionality and fun, and is ready for many future expansions.

10. Output Images




