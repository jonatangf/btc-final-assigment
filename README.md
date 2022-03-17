# GeeksHubs ReactJS Bootcamp`s final assigment

This repository is for the final assigment of the GeeksHubs ReactJS Bootcamp. Enter by your own risk

![](https://www.pngitem.com/pimgs/m/153-1534882_fitness-boot-camp-hd-png-download.png)

## Summary

The idea here is to create an interface for the API exposed by the platform The Movie DB. The API is used to retrieve 
top-rated movies, top-rated series, and search movies and series.

I have used Redux for the state management, and I have used React Router for the routing. 

In order to implement the status management, I have included the <Provider> tag to the file index.js and after that I 
have created a folder called store, in which I have created three files. The actions file contains the actions that are 
dispatched to the store, and the reducers file contains the reducers that are used to update the state. Last but not 
least, I have created a file called store.js, which contains the code to initialize the store.

In order to implement the routing, I have included the <BrowserRouter> tag to the file index.js and after that I have 
added the tag <Routes> to the component Body. And I have also added the tags <Route> in the Body component for all the
routes needed. The other important part is to place ```component={Link} to="/"``` in the buttons, so once they are 
clicked, the user will be redirected to the desired page.

I would also like to mention that I have used loading components to show the user that the data is being retrieved, and 
variables to show or hide them is stored in the state too.

Regarding the UI, I have used the Bootstrap framework to create the interface together with the library 
[ReactUI](https://mui.com/getting-started/installation/) from which I used the Grid component for the main layout.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
