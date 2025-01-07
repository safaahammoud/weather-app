## Project Framework

The Angular framework, version 12.2.0, was used to create this project.

## Project Structure

The project main directories are: modules and shared,and store.

- Modules directory contains all the lazy loaded modules. Each module has its own components,store, and shared directory.
  
  The following folders are found in each module:
  
  - Components: contains sections to be added to the module pages.
  - Shared: contains the shared constants, interfaces, services, etc. only used by multiple pages of the modules when needed, the reason I added them in the shared folder is to keep the code as clean as possible by applying the DRY principle.
  - Store: contains all the module logic of state, including state, actions, effects, reducers, selectors, etc.


### Extra Features Development

- All ts files are linterned using a predetermined setup based on best practices.
- Netlify was used to deploy the application. This link will take you to the weather application. [link](https://safaa-weather-app.netlify.app/).
- Committed changes to a remote Bitbucket repository. Can be accessed via this [link](https://bitbucket.org/safaahammoud/weather-app/src/master/).

### Practical Extra Features

- Error Handling on a Global Scale: Send a toast message to the user in the event of an API Error.
- A horizontal loader shows at the bottom of the application's main toolbar if there is a pending request.
