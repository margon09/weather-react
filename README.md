# To run this Project you will need to have Node.js v14.15.1 or later installed
https://nodejs.org/en/

In the project directory, you will need to run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.
For the frontend to work correctly you need to have the Node backend running.
Github link to Node backend:
https://github.com/margon09/weather-node
Also deployed on Heroku Cloud:
Open [https://tv-weather-react.herokuapp.com/](https://tv-weather-react.herokuapp.com/) to view it in the browser.
Bear in mind that the Heroku deployment goes into sleep-mode when no requests are sent as I'm using the free dynos.
It takes roughly 20 seconds to load on the browser, after which it works normally and goes back to sleep after 30 minutes of inactivity.

You can send GET requests direcly if on localhost e.g.

http://localhost:3000/?city=Frederiksberg

http://localhost:3000/?city=Valby

Or if you want to use the heroku deployment:

https://tv-weather-react.herokuapp.com/?city=Frederiksberg

https://tv-weather-react.herokuapp.com/?city=Valby

If Javascript is disabled you will be redirected to the Node backend app automatically.

It can be used as a widget with iframe. Just add the iframe tag to your html eg.

<iframe src="https://tv-weather-react.herokuapp.com/?city=Copenhagen" width="450" height="450"></iframe>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Other Available Scripts

In the project directory, you can run:

### `npm test`

Launches the Cypress test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

