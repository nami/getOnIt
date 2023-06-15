# Get To It

<img src="https://ibb.co/yFmhZTY>

Deployed on Vercel here: https://react-employee-spa.vercel.app/

This project was part of a technical coding challenge for a front end/design position. The challenge was to implement a secured To Do list application with a bare React Native project and Expo local-authentication module. The application must ask for authentication before the user can add, update and delete items on the list.

## Video Demo

## No Local Auth Screen

If the user does not have any local auth, they are ask to set it by being redirected to their phone's settings, before being sent back to the app to recheck auth. 

<img src="https://i.ibb.co/n88V0gP/bar-chart.png">

## Intro Screen

The intro screen ensures users must authenticate before being able to access the main app
                                                 
<img src="https://i.ibb.co/VJYf691/table.png">

## Main List Screen
        
This screen allows users to add, edit and delete a to-do. They can also filter to-do's by status.
                                                 
<img src="https://i.ibb.co/VJYf691/table.png">                                             
                                             
## Testing

- `Jest` unit tests for `utils.js` to check salary data calculation functions using dummy data
- `Cypress` e2e tests to check data and checkbox functionality for `Chart` and `SalaryTable`
   - <b>Table</b>: `SalaryTable.spec.js`
   - <b>Chart</b>: `Chart.spec.js`

## Tech

- [React Native](https://reactnative.dev/docs/environment-setup)
- [React Native Paper](https://callstack.github.io/react-native-paper/) for UI components
- [React Native Linear Gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [Jest Expo](https://docs.expo.dev/develop/unit-testing/?redirected)
- [Cypress](https://www.cypress.io/)

## Setup

1. Clone the repo 
(Ensure you have the React-Native, Android Studio & XCode set up)
2. ```npx react-native start```
3. For iOS: ```npx react-native run-ios```
4. For Android: ```npx react-native run-android```
5. Ta-da!                                           

## Points to improve on

- There were many features and interactions I wanted to add but didn't have time to such swipe interactions, descriptions, deadlines linking to calendarts etc. 
- Testing, as I have not much professional experience with it working mostly in start-ups
