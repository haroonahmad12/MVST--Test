# A Simple Web App to search for Github User Profiles or Repositories

Demo https://test-github-api.netlify.app/

### Coding Time

- This was a tech-challenge required of me. It was completed in a 2 days. 

### Tech Used

- React Redux for Front End
- Sass as CSS Preprocessor
- Redux Logger
- Github API
- Axios for http requests

## First Steps

If you are running in Dev environment, make sure you get an Auth Token from you github Repository and create a .env file with the Variable "REACT_APP_GITHUB_AUTH_TOKEN".
The app should work fine without it but it doesnt let you make as many requests to Github API, so just to be safe use the Auth Token.

### `npm install or npm i`

Once its done installing you can execture the run script.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Deployed Version

The Project was depolyed using Netlify.
On the main screens you have to select if you want to search for a Repository or a User. 

You have a search bar in both options to make the query. 
In User Profile you can search for the user Repositories. 

Althought it requires some obvious fixes, it is still somewhat reponsive, it works well on mobile or tablets. The Final version was compiled without any errors or warnings.

### Screenshots

Chrome Browser imitating iPhone 12 Pro  Resolution

<img src="https://user-images.githubusercontent.com/85195876/155901790-2867d26a-65c8-4081-8e3e-12fec30c8e16.png" width="200" height="450" /> <img src="https://user-images.githubusercontent.com/85195876/155901844-21de1d83-46bc-4c96-869c-dca37af432ff.png" width="200" height="450" /> <img src="https://user-images.githubusercontent.com/85195876/155901911-7e4437cc-6ee0-46c8-9ae5-c49e1c1b3a5f.png" width="200" height="450" /> <img src="https://user-images.githubusercontent.com/85195876/155901928-e1ef4d18-5848-4b39-9c31-c75304e971e2.png" width="200" height="450" />

Browser Version

<img src="https://user-images.githubusercontent.com/85195876/155902011-a10925a0-afc0-46db-9fec-d55ca69a23a4.png" width="400" height="200" /> <img src="https://user-images.githubusercontent.com/85195876/155902036-0b865f82-a8d4-41e7-b34d-c0b8c9a30510.png" width="400" height="200" /> <img src="https://user-images.githubusercontent.com/85195876/155902043-0ab5649a-71ad-4a54-baed-5eef1a9c3789.png" width="400" height="200" /> <img src="https://user-images.githubusercontent.com/85195876/155902053-6f9cc933-f210-4b34-ba1b-89080b76489b.png" width="400" height="200" /> 

### Improvements Needed

- Proper Styling and Improving the mobile version
- Light Mode
- Separate Reducer for Global Repo Search
- Loader is created but it is yet to be implemented.
- Refactoring
- Migrate to Typescript :)
- Improve Pagination by using HTTP requests.
- Since github api's response is limited, Make better use of the resources and manage the requests in a better way

### For any suggestions or comments you can contact me via Email or Linked In

<a href="https://www.linkedin.com/in/haroon-ahmad-426b3b213/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> <a href="mailto:haroon334@gmail.com"><img src="https://img.icons8.com/color/48/000000/gmail-new.png" width= "40px" height="30px"/></a>

