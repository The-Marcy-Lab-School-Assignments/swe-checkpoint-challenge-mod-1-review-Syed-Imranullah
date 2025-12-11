# Short Responses

For this assessment, aim to write a response with the following qualities:
- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
}

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The bug occurs because of block scoping in JavaScript. Inside each `if` and `else` `if` block, the code uses `let letter = ...`, which declares a new variable letter that exists only within that block. This means the outer letter variable declared at the start of the function is never updated. As a result, when the function tries to return `"Your grade is: " + letter`, it uses the outer variable, which is still `undefined`.

**Part B:**

To fix the bug, you need to remove the let keyword inside the `if` and `else` blocks so that the assignments update the outer function-scoped letter variable instead of creating new block-scoped variables. This makes sure the outer letter variable holds the correct value when the function returns it. The corrected code looks like this:

```javaScript
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    letter = "A";
  } else if (score >= 80) {
    letter = "B";
  } else if (score >= 70) {
    letter = "C";
  } else {
    letter = "F";
  }

  return "Your grade is: " + letter;
}
```
---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

This will log 75. This happens because in JavaScript, objects are assigned and passed by reference, not by value. When you write `const newSettings = originalSettings`, both `newSettings` and `originalSettings` refer to the same object in memory. Therefore, modifying a property through `newSettings` `(newSettings.volume = 75)` also changes `originalSettings.volume` because they point to the same object.

**Part B:**

To prevent changes to `newSettings` from affecting `originalSettings`, you need to create a copy of the original object instead of assigning the reference. One simple way to do this is using the spread operator `(...)`:

**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings }; 
newSettings.volume = 75;
console.log(originalSettings.volume); 
console.log(newSettings.volume);      

```

---

## Prompt 3

Given this array of products and the code using `filter`:
```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock
});
```

Walk through what happens in the first iteration of filter:
- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

In the first iteration of the filter method, the parameter product holds the first element of the products array, which is the object `{ name: "Laptop", price: 1000, inStock: true }`. The callback function review `product.inStock` and returns `true` because the property is truthy. The filter method uses this returned `boolean` to decide whether to include the element in the new array, so the Laptop object is added to `itemsInStock`.