# EA Website

This is the React project for Efektywny Altruizm website. The key areas of development are:

- General foundation information
- Contact forms using SendGrid (through Azure Functions)
- Mailchimp integration - user can subscribe to the newsletter without leaving the site
- Google Analytics integration
- Blog page taking advantage of Headless Wordpress (in progress)
- Payment module using Stripe API (in progress)

# Development guides

## Running locally

To run the app locally first you have to install all of the needed packages:

`yarn install`

then you can run the app with:

`yarn start`

The app will be launched in [http://localhost:3000](http://localhost:3000).

## Useful scripts

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### `yarn format`

This command will run a Prettier formatter on the whole project. Prettier configuration can be found in .prettierrc file.

### `yarn lint`

This command will run eslint and display all of the warnings and errors in the console. Configuration can be found in .eslintrc file. You can also use `yarn lint:fix` to let lint fix some of the issues automatically.
