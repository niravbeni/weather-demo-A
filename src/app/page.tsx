'use client';

import { useState } from 'react';
import LocationSearch from '@/components/LocationSearch';
import WeatherDisplay from '@/components/WeatherDisplay';
import ErrorDisplay from '@/components/ErrorDisplay';
import { WeatherData, WeatherError } from '@/types/weather';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async (location: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
      const data = await response.json();
      
      if (!response.ok) {
        setError((data as WeatherError).error || 'Failed to fetch weather data');
        setWeatherData(null);
      } else {
        setWeatherData(data as WeatherData);
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('An error occurred while fetching weather data');
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Weather App</h1>
          <p className="text-gray-600">Get current weather and clothing recommendations</p>
        </div>

        <LocationSearch onSearch={handleSearch} isLoading={isLoading} />

        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <ErrorDisplay message={error} />
          ) : weatherData ? (
            <WeatherDisplay data={weatherData} />
          ) : (
            <div className="text-center py-10 text-gray-500">
              <p>Enter a location to see the weather forecast</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
