# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  allows you to print the message
- What is the purpose of events and event handling?
  event handler is a callback routine that operates asynchronously once an event takes place. It dictates the action that follows the event.
- Are all possible parameters required to use a JavaScript method or function?
  No, they're not required but helpful to use.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener() method
- What is a callback function?
  a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- What object is passed into an event listener callback when the event fires?
  EvenTarget.addEventListener
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

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
