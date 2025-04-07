export interface WeatherData {
  location: string;
  country: string;
  temperature: {
    current: number;
    feels_like: number;
    min: number;
    max: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  humidity: number;
  wind: {
    speed: number;
    direction: number;
  };
  clothingRecommendation: string;
}

export interface WeatherError {
  error: string;
} 