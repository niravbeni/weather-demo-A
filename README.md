# Weather App

A simple weather application built with Next.js that provides current weather information and clothing recommendations based on weather conditions.

## Features

- **Location Search**: Users can enter a city name to get weather information
- **Current Weather Display**: Shows temperature, feels like, min/max, humidity, and wind information
- **Weather Visualization**: Weather conditions are displayed with appropriate icons and color themes
- **Clothing Recommendations**: Get clothing suggestions based on current weather conditions

## Tech Stack

- **Frontend**: React with TypeScript
- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS
- **API**: OpenWeather API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your OpenWeather API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Usage

The app uses the OpenWeather API to fetch current weather data. You'll need to sign up for a free API key at [OpenWeather](https://openweathermap.org/api) if you want to run your own instance of this app.

## Screenshots

![Weather App Screenshot](screenshot.png)

## License

MIT
