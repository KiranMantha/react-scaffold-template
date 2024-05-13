# React Scaffold Template

a CRA scaffolding template that lays the folder structure and required tools to maintain code quality & best practices.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This scaffold uses

- [Craco](https://www.npmjs.com/package/@craco/craco) instead of `react-scripts` as `react-scripts` don't support alias paths out-of-the-box. Craco helps to achieve this without ejecting the application which involves a lot of manual tweaks.
- [react-i18next](https://www.npmjs.com/package/react-i18next) for translations.
- [react-app-alias](https://www.npmjs.com/package/react-app-alias) in craco config to map alias paths mentioned in `tsconfig.aliases.json`
- `eslint` for linting.
- `jest` and `react-testing-library` for writing unit tests.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

This script use `.env.local` to read environment variables

### `yarn test`

Run unit tests in `jest`

### `yarn test:coverage`

Generate unit test report in `coverage` folder

### `yarn test:snapshot`

Generates snapshots from unit tests

### `yarn test:clear`

Clears jest unit test cache

### `yarn lint`

Runs linting on src folder using eslint.

### `yarn lint:ci`

Generate a json report of project lint status

### `yarn sortjson`

To sort `locale/json` file contents in alphabetical order

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn serve`

To run a static server on `build` folder. This script use `.env.prod` to read environment variables

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
