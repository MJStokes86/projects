# Restaurant Group

---

## Problem

Lucille Lamplugh comes from a family that built a restaurant empire from nothing. Like a respectable version of Guy Fieri, her family owns several restaurants across the country, each serving a distinct type of cuisine.

Lucille is a shark when it comes to writing servers, every move she makes is RESTful. She wants to create a smooth, single-page app that represents her restaurants and the items that appear on their menus. She's written a RESTful server that needs a killer front end to 'consume' it.

You're a front-end specialist.

## Requirements

- Lucille wants to be able to create, read, update, and delete restaurants.
- Lucile wants to be able to create, read, update, and delete items.
- Lucille wants to be able to organize items by their restaurant (so an item should only belong to one menu).
- Lucille wants her app to "shine" visually.
- Lucille definitely wants the app to only have on view. No reloads!
- Finally, she wants a button to an `About` 'page' that has some information about you, since you are developing the application.

## Tips

- Visual organization is big for this app. Justin, a line cook, is all about <a href="http://semantic-ui.com/"> Semantic UI </a>. J.C., Sous Chef, is a fan of <a href="http://getskeleton.com/"> Skeleton CSS</a>, because it provides a smaller grid.

- Lucille wants some elements on the page to "pop", and catch the eye of the user. Joey, a dishwasher, used to rely heavily on jQuery animations, but now uses smaller, lighter CSS3 animations with a great library called <a href="http://daneden.github.io/animate.css/"> Animate CSS </a>


## Bonus Features

- Use the <a href="https://www.nutritionix.com/api">nutritionix </a> API to expand the functionality of your app.
  - Make nutrition information viewable for each item.
- Each item tracks price and the number of units sold. Build behavior that shows how profitable each item is.
- Use [Underscore.js](http://underscorejs.org) for complex iteration and enumeration.
- Use [Draggabilly](http://draggabilly.desandro.com) to drag and drop items into different restaurants. This should also update the database so they are now apart of the restaurant they have been dragged to.
- Use [Chart.js](http://www.chartjs.org/) to show a graph of your top 10 items and their sales numbers.
- Make the application responsive so that it is viewable on a mobile phone.
