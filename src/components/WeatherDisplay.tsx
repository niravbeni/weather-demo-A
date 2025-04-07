'use client';

import Image from 'next/image';
import { WeatherData } from '@/types/weather';
import { getWeatherIconUrl, getWindDirection, getWeatherIcon } from '@/utils/weatherUtils';

interface WeatherDisplayProps {
  data: WeatherData;
}

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
  const {
    location,
    country,
    temperature,
    weather,
    humidity,
    wind,
    clothingRecommendation
  } = data;

  const windDirectionText = getWindDirection(wind.direction);
  const weatherEmoji = getWeatherIcon(weather.main);

  return (
    <div className="w-full rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-blue-500 to-blue-400 text-white">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">{location}</h2>
            <p className="text-lg">{country}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-5xl">{weatherEmoji}</span>
            <Image
              src={getWeatherIconUrl(weather.icon)}
              alt={weather.description}
              width={50}
              height={50}
              className="rounded-full bg-white/30 p-1"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-baseline">
            <span className="text-6xl font-bold">{temperature.current}°C</span>
            <span className="ml-2 text-sm opacity-75">Feels like: {temperature.feels_like}°C</span>
          </div>
          <p className="mt-1 capitalize">{weather.description}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white/20 p-3 rounded-lg">
            <h3 className="text-sm opacity-75">Min / Max</h3>
            <p className="text-xl font-semibold">{temperature.min}°C / {temperature.max}°C</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <h3 className="text-sm opacity-75">Humidity</h3>
            <p className="text-xl font-semibold">{humidity}%</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg col-span-2">
            <h3 className="text-sm opacity-75">Wind</h3>
            <p className="text-xl font-semibold">{wind.speed} m/s ({windDirectionText})</p>
          </div>
        </div>

        <div className="mt-6 bg-white/20 p-4 rounded-lg">
          <h3 className="text-sm opacity-75 mb-1">Clothing Recommendation</h3>
          <p className="font-medium">{clothingRecommendation}</p>
        </div>
      </div>
    </div>
  );
} 