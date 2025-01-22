# Welcome to our Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started
Registration Module
This module is a React Native component built with TypeScript that provides a simple and functional registration form. The form is integrated into the HomeScreen component and allows users to input basic details for registration, including validation checks for common input errors.

Features :
1.Input Fields:

   a.Name
   b.Email
   c.Password
   d.Phone Number

2.Validation:

   a.Ensures all fields are required.
   b.Validates email format (e.g., example@domain.com).
   c.Enforces password length of at least 6 characters.
   d.Checks phone number for exactly 10 digits.
   
3.Dynamic View:

   a.Integrated with the HomeScreen component.
   b.Users can toggle between the default content and the registration form.
   
4.User Feedback:

   a.Displays error messages for invalid inputs.
   b.Shows a success message upon valid submission.

How It Works :
1.Home Screen:

   a.The app starts with the default HomeScreen content inside a ParallaxScrollView.
   b.A button allows users to navigate to the registration form.

2.Registration Form:

   a.Users can fill out their details in the form fields.
   b.Upon clicking the Register button:
     a.(i) If any input is invalid, an error message is displayed.
     b.(ii) If all inputs are valid, a success message is shown, welcoming the user by name.

Setup and Usage
1.Clone the Repository:

   git clone <https://github.com/kingsman00000/Registration-form-Mediversal-Healthcare.git>
   cd <repository-folder>

2.Install Dependencies: npm install

3.Run the App: npx expo start

4.Access the Registration Form:

  a.Start the app on an emulator, simulator, or physical device.
  b.From the home screen, click the "Go to Registration Form" button to navigate to the form.

File Structure:
1.HomeScreen.tsx:
  a.The main screen that integrates the registration form.

2.RegistrationForm.tsx:
  b.Contains the logic and UI for the registration form.

Technologies Used:
1.React Native: UI framework for cross-platform app development.
2.TypeScript: Strongly typed language for improved code reliability.
3.Expo: Framework for running and testing React Native apps.


Future Enhancements:
1.Backend Integration:
  a.Send form data to a backend API for user registration.
2.Persistent State:
  a.Save user details locally using AsyncStorage or integrate with a state management library like Redux.
3.Enhanced UI:
  a.Improve styles and animations for a better user experience.
