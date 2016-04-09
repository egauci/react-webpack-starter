My React/React Router/Redux/Immutablejs/Webpack Starter
===========================================

This is a simple starter app. There are better and more complete
examples, but this one hits my own sweet spot at this time.

Most of the Webpack config is from Juho Vepsäläinen (@bebraw)'s
book [Survivejs Webpack](https://github.com/survivejs/webpack). You should consider buying it.

Other inspiration comes from Stephen Grider (@StephenGrider)'s
Reactjs courses on [Udemy](https://www.udemy.com/). You should check
them out.

I take full credit for any bugs that I introduced. :flushed:

Why this particular stack?
--------------------------

- React - The easiest view library I know of
- React Router - Good fit with React
- Redux - Makes it dead simple to keep track of app state
- Immutable - Eliminates difficult to find bugs caused by unwitting mutations.
- Webpack - I'm not 100% sold on Webpack. Browserify is easier and you can accomplish a lot with it. I want to learn Webpack, so here it is.

About
-----

Many things I work on need viewport information, so that's included.

For a simple async example, I included a random number fact component that uses this API: https://market.mashape.com/divad12/numbers-1#get-random-fact

If you want to build and run this, you will need an API key (free) which you can get from mashape.com. Set it in *src/config/apikeys.js* like this:

    export const numbersApiKey = 'the key';

You may notice eslint related items in the project. These are only
for my text editor (Atom) at this time.

Building and Running
--------------------

1. Clone the repo
1. Obtain and install an API key (see above)
1. cd to the directory you cloned into and "npm install"
1. "npm start" to start the dev server on port 8080

For a production build, "npm run build" will create all the files in the build subfolder.

The app will figure out if it's running at the web root or one level down (http://www.example.com/myapp/).
It isn't smart enough for anything else at this time. Look at *config/index.js* if you want to
implement a different setup.

Look at https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md for hints on how
to configure web servers to support browser history. This repo has a sample Apache .htaccess files
configured to run the app under */nav*.

TODOs:
-----

- Redux dev tools
- react-router-redux
- tests
