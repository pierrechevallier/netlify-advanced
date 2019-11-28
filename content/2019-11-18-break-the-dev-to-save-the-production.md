---
layout: blog
title: Break the dev to save the production
date: 2019-11-18T11:00:00.998Z
cover: /images/uploads/wp1964993.jpg
category: "programming"
author: "Pierre"
rating: 5
tags:
    - programming
    - webpack
    - debugging
    - react
---


<body>
  <div id="content">
    <canvas width="800" height="400"></canvas>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js"></script>

  <script>
var geojson = {}

var context = d3.select('#content canvas')
  .node()
  .getContext('2d');

var projection = d3.geoOrthographic()
  .scale(300);

var geoGenerator = d3.geoPath()
  .projection(projection)
  .pointRadius(4)
  .context(context);

var yaw = 300;

function update() {
  projection.rotate([yaw, -45])

  context.clearRect(0, 0, 800, 600);

  context.lineWidth = 0.5;
  context.strokeStyle = '#333';

  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: geojson.features})
  context.stroke();

  // Graticule
  var graticule = d3.geoGraticule();
  context.beginPath();
  context.strokeStyle = '#ccc';
  geoGenerator(graticule());
  context.stroke();

  yaw -= 0.2
}



// REQUEST DATA
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json', function(err, json) {
  geojson = json;
  window.setInterval(update, 100);
})

  </script>
</body>


# On breaking stuff

When I tried skateboarding one of the very first time, I heard this: when you fall, you have to to get back on the board as quickly as possible even for a few seconds. Then you can rush to the hospital. Else you will never get back on a board ever again.

Truth or not, to me this is very similar in software development.

## "It works on my machine"

A classic developer quote, the code works on your machine but not in production or elsewhere. Recently, one of my builds failed while the day before it was running seamlessly.

I am using React JS, and all of a sudden the production was not working.

After updating some dependencies to new ones, i.e. Material UI from 3 to 4. This resulted in me trying things with WebPack, managing some little improvements and finally making a working development environment, BUT the production was never working and the console was displaying a:

`Uncaught TypeError: Cannot read property 'call' of undefined at __webpack_require__`

Something was just not working anymore, what it was, I had no idea.

I looked at documentation and StackOverflow questions, GitHub bug issues and couldn’t find the problem. Growing more anxious by the day, the development environment was working fine, sure, but the production was never working. And even [some potential fix were not working](https://github.com/webpack/webpack/issues/8996#issuecomment-479777461). How on Earth was I going to solve that situation.  I had some docker containers backed up to keep an old production working but couldn't use any newer front end builds.

## Break the dev

Until came the idea of instead of **fixing the prod**, to just **break the dev**. Okay maybe it is something that many people found beforehand, but to me _this_ sounded like a strange revolution and I didn’t know how to do it properly.

In programming, debugging is a bit like a detective work, to try to find the culprit of “who killed the program”. And just as detective work, you have proofs, but sometime they aren’t like a smoking gun and you just can try catch what is wrong.

And to break the development environment, you have to find all the switches that work in production and all the little things that make it behave the same way. Trying to find what is hijacking your production.

## webpack optimisation

[webpack](https://webpack.js.org/) is a formidable tool when you work in web development to be honest, I see all sort of bashing of it around the web, but god, when you get it, it is good and a bliss.

To put it simple, with **webpack** you can **use the latest shiny tools** of JavaScript and other languages and for the web and **translate that to "older" JavaScript and to make it run on older and different browsers** than the one you tested all on it.

Anyway, **wepback has a bunch of settings that are set by default differently between production and development, and one of them is** [**the optimisation part**](https://webpack.js.org/configuration/optimization/#root)**. Even when left out blank, some elements are going to be different between development and production**.

In your module.exports, the list of the following parameters are different between prod and dev, this is the production parameters values:

```
optimization: {
    minimize: true,
    namedModules: true,
    namedChunks: true,
    removeAvailableModules: true,
    flagIncludedChunks: true,
    occurrenceOrder: false,
    usedExports: true,
    concatenateModules: true,
    sideEffects: true
}
```

And their equivalent in development:

```
optimization: {
    minimize: false,
    namedModules: false,
    namedChunks: false,
    removeAvailableModules: false,
    flagIncludedChunks: false,
    occurrenceOrder: true,
    usedExports: false,
    concatenateModules: false,
    sideEffects: false
}
```

So the there are 2 solutions possible here for solving the issue:

1. Put everything like the development and make the production work (it works yes)
2. Try out each elements to break the development

The first option is fine, but will result in huge builds, and is really not a good solution for a long term use.

The second solution is the best way to try things out and solve the issue at hand. What I did was taking all the development variable and progressively switch them to their opposite value until, well, the development would break.

It did, `sideEffects: true` was in fact causing an issue and using `sideEffects: false` was a solution. I wrote a [quick StackOverflow answer](https://stackoverflow.com/a/58628185/5711024) on that issue, and I might expand on some more webpack specifities in the future.

After breaking the development I only had to switch back everything to their normal values except the `sideEffects` and let the optimisation do its work.

## Conclusion

Breaking the development and getting it back on its feet made it much easier to handle future production break which I had subsequently. To solve problems, sometime it is better not to give up, to break, and try to get back on track after it broke. 

That is not to mean that breaking your environment with webpack is equivalent to breaking your wrist while attempting a kickflip, but more that breaking the wrist made other fall more bearable once you rode your board, and breaking your setup will make you feel better about writing code again if you keep on trying.

PS: If you use containers, make a backup of previous versions so you can at least spin back an old build meanwhile, nothing is more sad than having no back up.
