# Get On It

![get-on-it-type](https://github.com/nami/getToIt/assets/39056749/2a5ad720-0fb9-41d0-b152-23d70157611b)

This project was part of a technical coding challenge for a front end/design position. The challenge was to implement a secured To Do list application with a bare React Native project and Expo local-authentication module. The application must ask for authentication before the user can add, update and delete items on the list.

## Project Structure

```
getToIt/
┣ .bundle/
┣ .expo/
┣ __tests__/
┃ ┣ __snapshots__/
┃ ┣ App-test.tsx
┃ ┣ ListItemSnapshot-test.tsx
┃ ┣ MainList-test.tsx
┃ ┗ SubListSnapshot-test.tsx
┣ android/
┣ auth/
┃ ┗ NoAuthScreen.tsx
┣ images/
┃ ┣ get-on-it-type.png
┃ ┗ logo-compressed.png
┣ ios/
┣ todo/
┃ ┣ ListItem.tsx
┃ ┣ Loading.tsx
┃ ┣ MainList.tsx
┃ ┣ NewToDoInput.tsx
┃ ┣ StartToDo.tsx
┃ ┗ SubList.tsx
┣ .eslintrc.js
┣ .gitignore
┣ .node-version
┣ .prettierrc.js
┣ .watchmanconfig
┣ App.tsx
┣ Gemfile
┣ Gemfile.lock
┣ README.md
┣ app.json
┣ babel.config.js
┣ index.js
┣ metro.config.js
┣ package-lock.json
┣ package.json
┣ theme.ts
┣ tsconfig.json
┗ yarn.lock
```

## Video Demo

### iOS

https://github.com/nami/getToIt/assets/39056749/5b6cec97-ba29-4f99-8ab5-a5c8dc0c4c8a

### Android

https://github.com/nami/getToIt/assets/39056749/02e826ae-47be-4ecc-ac39-a76cbfc848d7

## No Local Auth Screen

If the user does not have any local auth, they are ask to set it by being redirected to their phone's settings, before being sent back to the app to recheck auth. 

iOS                                                                                                |  Android
:-------------------------------------------------------------------------------------------------:|:-------------------------:
<img src="https://github.com/nami/getToIt/assets/39056749/608c6932-b76d-4314-9658-ecc434059e03" width=100%> | <img src="https://github.com/nami/getToIt/assets/39056749/6e7685af-1c7f-45a1-b909-e810ff407a55" width=78%>

## Intro Screen

The intro screen ensures users must authenticate before being able to access the main app

iOS                                                                                                |  Android
:-------------------------------------------------------------------------------------------------:|:-------------------------:
<img src="https://github.com/nami/getToIt/assets/39056749/5d7c2ca7-8768-4557-9e74-73be2c6c2d11" width=100%> | <img src="https://github.com/nami/getToIt/assets/39056749/bba5f9e2-5d37-45f3-af81-72a35f6c2830" width=78%>
                                                 
## Main List Screen
        
This screen allows users to add, edit and delete a to-do. They can also filter to-do's by status.
                                                 
iOS                                                                                                |  Android
:-------------------------------------------------------------------------------------------------:|:-------------------------:
<img src="https://github.com/nami/getToIt/assets/39056749/18f15bf9-76ee-4d39-a1a5-f6f0def5c4bc" width=100%> | <img src="https://github.com/nami/getToIt/assets/39056749/e053e312-e720-4b81-848b-8f69acf6e9fd" width=78%>

### Create an item

iOS                                                                                                |  Android
:-------------------------------------------------------------------------------------------------:|:-------------------------:
<img src="https://github.com/nami/getToIt/assets/39056749/e84c9dff-a01e-4819-841c-9ce64fbeb6fc" width=100%> | <img src="https://github.com/nami/getToIt/assets/39056749/cedd22b8-22cd-49c8-aeb3-11a131e5299d" width=78%>

### Edit an item

iOS                                                                                                |  Android
:-------------------------------------------------------------------------------------------------:|:-------------------------:
<img src="https://github.com/nami/getToIt/assets/39056749/8667dc49-9e10-4771-8004-fd9d208f653e" width=100%> | <img src="https://github.com/nami/getToIt/assets/39056749/b279c6a7-9485-4e7e-9a52-4243d17d948c" width=78%>

## Completed Status Screen

iOS                                                                                                |  Android
:-------------------------------------------------------------------------------------------------:|:-------------------------:
<img src="https://github.com/nami/getToIt/assets/39056749/2b89424b-44f8-40c2-9855-90eb78edf17a" width=100%> | <img src="https://github.com/nami/getToIt/assets/39056749/6ce0b575-1dbb-47fb-a279-7e1ed0157577" width=78%>

## To do Status Screen

iOS                                                                                                |  Android
:-------------------------------------------------------------------------------------------------:|:-------------------------:
<img src="https://github.com/nami/getToIt/assets/39056749/2b89424b-44f8-40c2-9855-90eb78edf17a" width=100%> | <img src="https://github.com/nami/getToIt/assets/39056749/6ce0b575-1dbb-47fb-a279-7e1ed0157577" width=78%>
                                             
## Testing

- `Jest` snapshot tests to check if screens are rendering correctly
   - <b>Snapshots</b>: `ListItemSnapshot-test.tsx.snap` & `SubListSnapshot-test.tsx.snap`
- `React Native Testing Library` integration tests to check if CRUD functionality is working on app
   - <b>Main List</b>: `MainList-test.tsx`

## Tech

- [React Native](https://reactnative.dev/docs/environment-setup)
- [React Native Paper](https://callstack.github.io/react-native-paper/) for UI components
- [React Native Linear Gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [Expo Local Authentication](https://www.npmjs.com/package/expo-local-authentication)
- [Jest Expo](https://docs.expo.dev/develop/unit-testing/?redirected)
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library)

## Setup

1. Clone the repo 
(Ensure you have the React-Native, Android Studio & XCode set up)
2. ```npx react-native start```
3. For iOS: ```npx react-native run-ios```
4. For Android: ```npx react-native run-android```
5. Ta-da!                                           

## Points to improve on

- There were many features and interactions I wanted to add  that could improve the UX but didn't have time to. E.g. swipe interactions, descriptions, deadlines linking to calendars etc. 
- Testing, as I have not much professional experience with it working mostly in start-ups. I couldn't figure out how to test the local auth module. 
