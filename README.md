# Bidsketch App Directions (TMP)

After playing around with the current webpack setup, I was having some trouble setting up a react project where `react.html.erb` or `public/assets/` would be the entry point to the app. 

I decided to have the app entry point be `app/assets/apps/bidsketch/build`.  

In the future, once I learn the setup and rails/react way, I will write using `SASS/SCSS`, for now using `CSS`.

## Development - Frontend:

From `app/assets/apps/bidsketch/`,
run `yarn start`.

## Temp Production Build - Frontend:

From `app/assets/apps/bidsketch/`,
run `yarn build`.

## Start Rails

Run `rails s`, navigate to port `3000`.


# Bidsketch Coding Challenge

This basic application is your starting point for the Bidsketch Coding Challenge.

## Delivery

1. [Duplicate](https://help.github.com/articles/duplicating-a-repository/) this repository on your Github account (don't fork it)
2. Add [`genericsteele`](https://github.com/genericsteele) as a collaborator
3. Commit your work on a feature branch
4. Open a pull request that sticks to the following guidelines:
    - It's functional
    - It consists of minimal, logically organized commits
    - It provides a summary of your work
    - It demonstrates the features
    - It's as simple as possible
    - It stays inside the project scope
5. Assign `genericsteele` to review the pull request

## Tools & Tips

* This application uses our in-house Rails/Webpack setup.
* Use [Yarn](https://github.com/yarnpkg/yarn) to manage JS packages.
* Look through the [setup commits](https://github.com/Bidsketch/bidsketch_application/commits/master) to get a feel for the helpers and file locations
* Look at our [package.json](package.json) to see what packages we work with.
