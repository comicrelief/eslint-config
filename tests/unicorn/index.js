// Using modern JavaScript features
export const numbers = [1, 2, 3, 4, 5];
export const doubled = numbers.map(number => number * 2);

// Proper error handling
export const safeJsonParse = (str) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return { error: error.message };
  }
};

// Using template literals properly
export const formatGreeting = (name) => `Hello, ${name}!`;

// Using proper array methods
export const findItem = (items, id) => items.find(item => item.id === id);
