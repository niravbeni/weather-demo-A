export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};

export const getBackgroundColor = (weatherMain: string): string => {
  const backgrounds: Record<string, string> = {
    Clear: 'bg-gradient-to-br from-blue-400 to-blue-200',
    Clouds: 'bg-gradient-to-br from-gray-300 to-gray-100',
    Rain: 'bg-gradient-to-br from-gray-600 to-gray-400',
    Drizzle: 'bg-gradient-to-br from-blue-500 to-gray-400',
    Thunderstorm: 'bg-gradient-to-br from-gray-800 to-gray-600',
    Snow: 'bg-gradient-to-br from-blue-50 to-gray-100',
    Mist: 'bg-gradient-to-br from-gray-400 to-gray-200',
    Fog: 'bg-gradient-to-br from-gray-400 to-gray-200',
    Haze: 'bg-gradient-to-br from-yellow-100 to-gray-300',
    Smoke: 'bg-gradient-to-br from-gray-500 to-gray-300',
    Dust: 'bg-gradient-to-br from-yellow-200 to-yellow-100',
    Sand: 'bg-gradient-to-br from-yellow-300 to-yellow-100',
    Ash: 'bg-gradient-to-br from-gray-700 to-gray-500',
    Squall: 'bg-gradient-to-br from-blue-600 to-gray-400',
    Tornado: 'bg-gradient-to-br from-gray-800 to-gray-600',
  };

  return backgrounds[weatherMain] || 'bg-gradient-to-br from-blue-300 to-blue-100';
};

export const getWeatherIcon = (weatherMain: string): string => {
  const icons: Record<string, string> = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Fog: '🌫️',
    Haze: '🌫️',
    Smoke: '🌫️',
    Dust: '💨',
    Sand: '💨',
    Ash: '💨',
    Squall: '💨',
    Tornado: '🌪️',
  };

  return icons[weatherMain] || '🌡️';
}; 