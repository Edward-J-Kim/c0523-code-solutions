# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the three states a Promise can be in?
  Pending, Fulfilled, and Rejected
- How do you handle the fulfillment of a Promise?
  A promise p is fulfilled if p. then(f, r) will immediately enqueue a Job to call the function f . A promise p is rejected if p. then(f, r) will immediately enqueue a Job to call the function r .
- How do you handle the rejection of a Promise?
  use the . catch() handler method or add a second function to the . then() handler method

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
