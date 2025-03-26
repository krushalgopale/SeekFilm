# SeekFilm

A sleek and modern movie application built with React (Vite) and TMDB API. This app lets users discover trending movies, search for movies and add and remove movies from favorites.

Installation and Setup

Follow these steps to set up and run the project:

Clone the Repository

git clone https://github.com/KrushalGopale/SeekFilm.git

Install Dependencies

npm install

Get TMDB API Key

Visit https://www.themoviedb.org/

Sign up or log in

Navigate to Settings → API

Click "Create API Key"

Choose Developer key and generate your API key

Copy the API key

Configure Environment Variables

Create a .env file in the project root and add:

VITE_API_KEY=your_api_key_here
VITE_API_URL = https://api.themoviedb.org/3

Start the Development Server

npm run dev