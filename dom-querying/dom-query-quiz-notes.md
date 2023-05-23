# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to write code to inconspicuously inform the developers what the code is doing
- What is a "model"?
  Models are data structures that we use to define the shape of our data
- Which "document" is being referred to in the phrase Document Object Model?
  HTML and XML documents
- What is the word "object" referring to in the phrase Document Object Model?

- What is a DOM Tree?
  Visual that we can see.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  queryselector/getElementById
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  getElementsByClassName
- Why might you want to assign the return value of a DOM query to a variable?
  to keep referring from the variable
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  because the HTML page isn't rendered only after the DOM is ready:
- What does `document.querySelector()` take as its argument and what does it return?
  returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  return a node list

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
