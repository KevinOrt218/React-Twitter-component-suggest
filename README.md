# React Twitter Component Suggest

A personal practice project built with React, recreating a Twitter-style "who to follow" suggestion component. This was one of my first hands-on projects with React after learning HTML, CSS and JavaScript.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The project

Build an interactive suggestion component where:

- The UI reacts to user interaction (e.g. following/unfollowing, showing/hiding elements)
- CSS classes are applied or removed dynamically depending on the component's state

### Screenshot

![Imgur](https://i.imgur.com/8nHgDFt.jpeg)

### Links

- Repository: [https://github.com/KevinOrt218/React-Twitter-component-suggest](https://github.com/KevinOrt218/React-Twitter-component-suggest)
- Live Site URL: [https://your-live-site-url.com](https://your-live-site-url.com)

## My process

### Built with

- React
- `useState` hook
- Dynamic CSS class handling
- CSS

### What I learned

This project was my introduction to managing state in React with the `useState` hook, and to how to toggle CSS classes dynamically based on that state instead of hardcoding styles.

```jsx
const [isActive, setIsActive] = useState(false);

<button
  className={isActive ? "btn btn--active" : "btn"}
  onClick={() => setIsActive(!isActive)}
>
  Follow
</button>
```

I learned that instead of manipulating the DOM directly (like I would with vanilla JS and `classList`), in React you let the state decide which class applies, and React takes care of re-rendering the element.

### Continued development

I'd like to keep practicing `useState` with more complex state (objects/arrays instead of booleans), and start learning `useEffect` to react to state changes with side effects.

### Useful resources

- [React docs - State: A Component's Memory](https://react.dev/learn/state-a-components-memory) - Helped me understand how `useState` works and why React re-renders when state changes.

## Author

- GitHub - [@KevinOrt218](https://github.com/KevinOrt218)
