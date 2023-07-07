# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async and await keywords are used in asynchronous programming to simplify and manage asynchronous code execution
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  differ in their syntax and how they manage asynchronous code.
- When do you use `async`?
  The async keyword is used when defining a function that needs to perform asynchronous operations.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use the await keyword within an async function to pause the execution of that function until a Promise is fulfilled or resolved. Here are some guidelines on when to use await
- How do you handle errors with `await`?
  When using await within an async function, you can handle errors using try/catch blocks.
- What do `try`, `catch` and `throw` do? When do you use them?
  The keywords try, catch, and throw are used in exception handling to manage and respond to errors or exceptional situations that occur during the execution of a program.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you forget to use await on a Promise within an async function, the Promise will not be awaited, and the execution will continue to the next line immediately. This means that the function will not wait for the Promise to resolve or reject before moving on.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Promise.then / seems more simple to write

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
