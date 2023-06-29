# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  special function that allows you to use state and other React features in function components
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Only call hooks at the top level of a function component. Don't call hooks inside loops, conditions, or nested functions.
  Only call hooks from React function components. Don't call hooks from regular JavaScript functions (unless you are creating a custom hook — more on this soon!) or class components.
- What is the purpose of state in React?
  to contain data or information about the component
- Why can't we just maintain state in a local variable?
  Storing it in state only makes your state bigger and more complex
- What two actions happen when you call a `state setter` function?

- When does the local `state variable` get updated with the new value?
  during next render cycle

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
