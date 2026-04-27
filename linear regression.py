import numpy as np
import matplotlib.pyplot as plt

# Input data
x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
              11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

y = np.array([2, 4, 5, 4, 5, 6, 7, 8, 9, 10,
              11, 10, 12, 13, 14, 15, 16, 15, 17, 18])

# Calculate mean
x_mean = np.mean(x)
y_mean = np.mean(y)

# Calculate slope (m) and intercept (b)
num = np.sum((x - x_mean) * (y - y_mean))
den = np.sum((x - x_mean) ** 2)

m = num / den
b = y_mean - m * x_mean

print("Slope (m):", m)
print("Intercept (b):", b)

# Regression line
y_pred = m * x + b

# Plot graph
plt.scatter(x, y, color='blue', label="Data Points")
plt.plot(x, y_pred, color='red', label="Regression Line")
plt.xlabel("X values")
plt.ylabel("Y values")
plt.title("Simple Linear Regression")
plt.legend()
plt.show()