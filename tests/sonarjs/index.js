// Good practices according to sonarjs
export const goodFunction = (condition) => {
  if (condition) {
    return 'condition is true';
  }
  return 'condition is false';
};

// Function with reasonable complexity
export const processData = (data) => {
  const result = [];
  for (const item of data) {
    if (item && typeof item === 'object') {
      result.push(item.value);
    }
  }
  return result;
};
