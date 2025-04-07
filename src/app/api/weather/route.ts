import { NextResponse } from 'next/server';

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  // Debug: Check if API key is defined
  if (!API_KEY) {
    return NextResponse.json(
      { error: 'API key is not configured' },
      { status: 500 }
    );
  }

  if (!location) {
    return NextResponse.json(
      { error: 'Location parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Fetch current weather data
    const apiUrl = `${BASE_URL}/weather?q=${location}&units=metric&appid=${API_KEY}`;
    
    // Debug: Log URL to Vercel logs (sensitive data, but for debugging only)
    console.log(`Fetching weather from: ${apiUrl}`);
    
    const weatherResponse = await fetch(apiUrl);
    
    // Debug: Log response status
    console.log(`Weather API response status: ${weatherResponse.status}`);
    
    if (!weatherResponse.ok) {
      const errorData = await weatherResponse.json();
      console.error('Weather API error:', errorData);
      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch weather data' },
        { status: weatherResponse.status }
      );
    }
    
    const weatherData = await weatherResponse.json();
    
    // Generate clothing recommendations based on temperature
    const temp = weatherData.main.temp;
    let clothingRecommendation = '';
    
    if (temp < 0) {
      clothingRecommendation = 'Heavy winter coat, scarf, gloves, and hat recommended.';
    } else if (temp < 10) {
      clothingRecommendation = 'Winter coat and layers recommended.';
    } else if (temp < 20) {
      clothingRecommendation = 'Light jacket or sweater recommended.';
    } else if (temp < 25) {
      clothingRecommendation = 'T-shirt with a light layer for evening.';
    } else {
      clothingRecommendation = 'Light clothing, shorts, t-shirt, and sun protection recommended.';
    }
    
    // Add rain-specific recommendations
    if (weatherData.rain || (weatherData.weather && weatherData.weather[0].main === 'Rain')) {
      clothingRecommendation += ' Don\'t forget an umbrella or raincoat.';
    }
    
    // Format response
    const formattedResponse = {
      location: weatherData.name,
      country: weatherData.sys.country,
      temperature: {
        current: Math.round(weatherData.main.temp),
        feels_like: Math.round(weatherData.main.feels_like),
        min: Math.round(weatherData.main.temp_min),
        max: Math.round(weatherData.main.temp_max)
      },
      weather: {
        main: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon
      },
      humidity: weatherData.main.humidity,
      wind: {
        speed: weatherData.wind.speed,
        direction: weatherData.wind.deg
      },
      clothingRecommendation
    };
    
    return NextResponse.json(formattedResponse);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    );
  }
} 