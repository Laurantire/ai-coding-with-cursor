import pandas as pd # type: ignore
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime

# Sample weather data
data = {
    'Date': ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
             '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09', '2023-01-10'],
    'Temperature': [32, 28, 30, 35, 40, 42, 38, 36, 33, 29],
    'Humidity': [80, 75, 82, 70, 65, 68, 72, 78, 85, 79],
    'Precipitation': [0.5, 0.2, 0.8, 0.0, 0.0, 0.1, 0.3, 0.7, 0.9, 0.4],
    'WindSpeed': [10, 15, 8, 12, 20, 17, 9, 11, 14, 16],
    'Location': ['City A', 'City A', 'City A', 'City A', 'City A',
                'City B', 'City B', 'City B', 'City B', 'City B']
}

# Create a DataFrame
df = pd.DataFrame(data)

# Convert Date column to datetime
df['Date'] = pd.to_datetime(df['Date'])

# Save the DataFrame to a CSV file
df.to_csv('weather_data.csv', index=False)

# Read the CSV file back into a DataFrame
df = pd.read_csv('weather_data.csv')

# Calculate average temperature
average_temperature = df['Temperature'].mean()                              

# Find days with precipitation greater than 0.5
days_with_precipitation = df[df['Precipitation'] > 0.5]

# Group by location and calculate average weather metrics
average_weather = df.groupby('Location').mean()

# Sort DataFrame by temperature in descending order
df = df.sort_values(by='Temperature', ascending=False)      

# Add a new column for "feels_like" temperature (temperature - wind_speed/5)
df['feels_like'] = df['Temperature'] - df['WindSpeed'] / 5

# Display DataFrame information
print(df.info())

# Additional operations:    
# Resample daily data to find weekly averages (will require datetime index)
df = df.set_index('Date')   
weekly_averages = df.resample('W').mean()

# Create a simple plot of temperature over time
plt.figure(figsize=(10, 5))
plt.plot(df.index, df['Temperature'], label='Temperature')
plt.xlabel('Date')


# Find the day with maximum humidity
max_humidity = df['Humidity'].idxmax()  

# Calculate the correlation between temperature and humidity
correlation = df['Temperature'].corr(df['Humidity'])

# Accessing a non-existent column (for error handling practice)
max_wind_speed = df['WindSpeed'].idxmax()

# Display the results
print(f"Average temperature: {average_temperature:.2f}°F")
print(f"Days with precipitation > 0.5: {len(days_with_precipitation)}")


