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

// Test cognitive complexity (sonarjs/cognitive-complexity)
export function goodComplexityFunction(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

// Test no-duplicate-string (alerts when same string appears 3+ times)
export function uniqueStrings() {
  const message1 = 'Hello';
  const message2 = 'World';
  return `${message1} ${message2}`;
}

// Test no-redundant-boolean
export function checkValue(value) {
  return Boolean(value); // instead of `return value === true;`
}

// Test no-identical-functions
export function uniqueFunction1(a, b) {
  return a + b;
}

export function uniqueFunction2(a, b, c) {
  return a + b + c;
}
