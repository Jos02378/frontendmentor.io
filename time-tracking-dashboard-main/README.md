# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [solution URL](https://your-solution-url.com)
- Live Site URL: [live site URL](https://time-tracking-dashboard-jos02378.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to utilize grid layout, how to fetch data from a json file, and render HTML elements using
JavaScript. I used the code below to fetch the JSON data and store it in a variable called newData.

```js
// Get Data
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    newData = data;
    loadCards();
  })
  .catch(function (err) {
    console.log(err);
  });
```

### Useful resources

- [Fetching JSON data from a local file](https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript) - This helped me for fetching JSON data from a local file.

## Author

- Jos02378 (https://github.com/Jos02378)
