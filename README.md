# Ludex — Discover, Track, and Curate Your Gaming Journey

**Ludex** is a full-stack web application that helps gamers discover, track, and manage their video game collections. Inspired by platforms like RAWG and Letterboxd, Ludex brings together discovery, personalized tracking, and a clean, modern interface — built by gamers, for gamers.

## Demo

[Live Demo]

---

## Features

- **Game Discovery** — Search and explore thousands of games via the RAWG API.
- **Personal Game Library** — Organize your collection with lists like *Wishlist*, *Playing*, *Completed*, and *Dropped*.
- **Detailed Game Pages** — View trailers, platforms, genres, screenshots, and ratings.
- **Smart Recommendations** — Discover new games based on your interests and history.
- **User Profiles** — Track your game stats and showcase your gaming journey.
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop.
- *(Planned)* **Social Features** — Follow friends and browse their libraries.
- *(Planned)* **Analytics Dashboard** — Get insights into your gaming patterns.

---

## Tech Stack

| Frontend      | Backend      | Database       | APIs & Services     |
|---------------|--------------|----------------|---------------------|
| React / Next.js | Springboot / NestJS | PostgreSQL / MongoDB | RAWG API, OAuth (Google/Steam) |

---

## Getting Started

### Prerequisites
- Node.js and npm
- RAWG API Key (you can get it at [https://rawg.io/apidocs](https://rawg.io/apidocs))
- `.env` file with API keys and configs

### Setup
# Clone the repository
git clone https://github.com/utkarsh-48/Ludex.git
cd ludex

# Install dependencies
npm install

# Create a .env file and add your RAWG API key and other configs
touch .env

# Start the development server
npm run dev


Project Goals
Ludex aims to go beyond basic CRUD apps by offering real-world value to users:

Manage your ever-growing game backlog.
Discover games you'll actually want to play.
Analyze and reflect on your gaming habits over time.


Contributing
Contributions are welcome! Feel free to fork this repository, submit a pull request, or open an issue.

Fork the project
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/AmazingFeature)
Open a pull request


License
This project is licensed under the MIT License — see the LICENSE file for details.

Acknowledgements

RAWG Video Games Database API
Letterboxd, RAWG, and other discovery platforms for inspiration
Built with passion for games, clean code, and creativity.


