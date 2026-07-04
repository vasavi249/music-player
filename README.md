# Music Player Web Application

## Project Overview
A premium, feature-rich Music Player Web Application built from scratch using only HTML5, CSS3, and Vanilla JavaScript (ES6). This project mimics the modern, polished interfaces of top music streaming platforms like Spotify and Apple Music, utilizing glassmorphism and neumorphism design trends. 

## Features
- **Premium UI/UX:** Glassmorphism and Neumorphism design elements with an animated gradient background.
- **Audio Playback:** Play, pause, stop, next, previous, shuffle, and repeat functionalities.
- **Dynamic Playlist:** View, search, and filter songs seamlessly.
- **Favorites System:** Like songs and view them in a dedicated favorites list.
- **Recently Played:** Automatically tracks and displays recently played songs.
- **Lyrics Panel:** Scrollable lyrics that simulate auto-scrolling with playback time.
- **Category Filtering:** Filter songs by genres like Pop, Rock, Jazz, EDM, etc.
- **Equalizer Animation:** Visual audio equalizer that animates during playback.
- **Toast Notifications:** Animated feedback for user actions (e.g., adding to favorites, changing volume).
- **Keyboard Shortcuts:** Control playback and UI using spacebar, arrows, and designated keys.
- **Local Storage Persistence:** Remembers user preferences, volume, theme, and play history across sessions.
- **Dark/Light Mode:** Toggle between themes effortlessly.
- **Responsive Design:** Optimized for Desktop, Laptop, Tablet, and Mobile devices.

## Folder Structure
```text
Music-Player/
│
├── index.html        # Main HTML layout and structure
├── style.css         # Styling, glassmorphism, animations, theming
├── script.js         # Player logic, state management, UI manipulation
│
├── music/            # Directory for .mp3 audio files
├── images/           # Directory for album cover images
├── lyrics/           # Directory for .txt lyrics files
│
└── README.md         # Project documentation
```

## Technologies Used
- **HTML5:** Semantic structuring and Audio API integration.
- **CSS3:** Custom properties (variables), Grid, Flexbox, Keyframe animations, Glassmorphism techniques.
- **Vanilla JavaScript (ES6):** State management, DOM manipulation, LocalStorage API, Event Delegation.
- **Font Awesome:** Scalable vector icons for the UI.
- **Google Fonts (Inter):** Premium typography.

## Installation
1. Clone or download this repository to your local machine.
2. Ensure you have the exact folder structure shown above.
3. Place your `.mp3` files in the `music/` folder.
4. Place your album art `.jpg` or `.png` files in the `images/` folder.
5. Place your lyrics `.txt` files in the `lyrics/` folder.
6. Open `script.js` and update the `songs` array with your local file paths.
7. Open `index.html` in any modern web browser (Google Chrome, Firefox, Safari, Edge).
   - *Note: No build tools or local servers are strictly required, but using a Live Server extension in VSCode can prevent potential local file CORS issues during development.*

## Screenshots
> *Placeholder: Add screenshots of your application here (e.g., Desktop View, Mobile View, Light Theme)*

![Desktop View](images/placeholder-desktop.jpg)
![Mobile View](images/placeholder-mobile.jpg)

## Future Enhancements
- Integration with an actual backend REST API or a third-party music API (like Spotify API).
- Real-time lyric synchronization parsing precise LRC file timestamps.
- Audio context API integration for real audio frequency analysis (replacing the simulated equalizer).
- User authentication and cloud syncing of playlists/favorites.
