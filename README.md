# react-node-starter

## Technologies
- [SCSS/SASS](http://sass-lang.com/)
- [Semantic UI React](https://react.semantic-ui.com)
- [ReactJS](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Redux](https://redux.js.org/docs/basics/UsageWithReact.html)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](http://docs.sequelizejs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Directory Structure
### root
- .sequelizerc: specify the paths to files required by Sequelize
- package.json: used by Node/NPM to install the modules needed for the server
### bin 
- www: creates express app
### server
- config - db environment settings
- controllers -  creating, listing, updating and deleting from db
- migrations - representation of how we want our models to look like in the database
- models - application models
- routes - API route that maps to controller functionality
- seeders - holds seed data, initial data provided
### client
- dist: minified/concatenated version of the src file (only when you run `npm run build`)
- dist/assets: copied over from src/assests on `npm run build`
- dist/bundle.js: compiled JS & CSS from src folder
- dist/index.html: copied over from src/index.html on `npm run build`
- src: the files used for development and maintenance
- src/actions: all actions and actionTypes files for Redux
- src/api: mock data json files that are relevant for the site
- src/assets: image/font files used by the site
- src/components: ReactJS components used by views (includes .js & .scss file for each component) - 'dumb' components for Redux
- src/pages: the pages for the application that use components - 'smart' containers for Redux
- src/reducers: all reducer files for Redux - rootReducer combines all reducing functions into a single reducing functions
- src/reducers/initialState.js: initial values of application state
- src/store: configureStore file holds createStore function that connects store to rootReducer and utilized Thunk middleware
- src/styles: main.scss file imports all SCSS partial files
- src/App.js: main application runs from here
- src/index.html
- src/index.js: application entry file
- Webpack.config.js is for the Webpack compiler
- package.json: used by Node/NPM to install the modules needed for the client

## Development
- Node and NPM must be installed on the dev computer

1. `git clone` this repo
2. cd into root
3. run `npm install` (only needed the first time to download Node modules)
4. run `createdb db-dev` (only needed the first time to create postgres DB - postgres must be installed)
5. run `sequelize db:migrate` (only needed the first time to run migration files and create/seed database)
4. run `npm run start:dev` (start server)
4. cd into client
5. run `npm install` (only needed the first time to download Node modules)
6. run `npm run build` (to create dist folder with bundle.js, assets and index.html)
7. run `npm start` (start client)

## Data Files
- root -> src -> json (mock data for frontend)

## APIs / 3rd Parties