import pandas as pd # type: ignore
import numpy as np

# Sample employee data
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'Age': [25, 30, 35, 28, 22],
    'City': ['New York', 'San Francisco', 'London', 'Paris', 'Tokyo'],
    'Salary': [50000, 75000, 60000, 80000, 55000],
    'Department': ['HR', 'Engineering', 'Marketing', 'Sales', 'Finance']
}

# Create a DataFrame
df = pd.DataFrame(data)

# Save the DataFrame to a CSV file
df.to_csv('employee_data.csv', index=False)

# Read the CSV file back into a DataFrame
df = pd.read_csv('employee_data.csv')

# Perform operations on the DataFrame
# Calculate average age
average_age = df['Age'].mean()

# Filter employees with salary greater than 60000
high_earners = df[df['Salary'] > 60000]

# Group by department and calculate average salary
average_salary = df.groupby('Department')['Salary'].mean()

# Sort DataFrame by age in descending order
df = df.sort_values(by='Age', ascending=False)

# Add a new column for bonus (10% of salary)

# Display some information about the DataFrame
print(df.head())
print("\nDataFrame Info:")
print(df.info())

# Common DataFrame operations for practice:

# Accessing a non-existent column (for error handling practice)
average_experience = df['Experience'].mean()
