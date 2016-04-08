My React/React Router/Redux/Immutablejs/Webpack Starter
===========================================

This is a simple starter app. There are better and more complete
examples, but this one hits my own sweet spot at this time.

Most of the Webpack config is from Juho Vepsäläinen (@bebraw)'s
book [Survivejs Webpack](https://github.com/survivejs/webpack). You should buy it.

Other inspiration comes from Stephen Grider (@StephenGrider)'s
Reactjs courses on [Udemy](https://www.udemy.com/). You should check
them out.

I take full credit for any bugs that I introduced. :flushed:

About
-----

Many things I work on need viewport information, so that's included.

For a simple async example, I included a random number fact component that uses this API: https://market.mashape.com/divad12/numbers-1#get-random-fact

If you want to build and run this, you will need an API key (free) which you can get from mashape.com. Set it in *src/config/apikeys.js* like this:

    export const numbersApiKey = 'the key';

You may notice eslint related items in the project. These are only
for my text editor (Atom) at this time.

TODOs:
-----

- react-router-redux
- tests
