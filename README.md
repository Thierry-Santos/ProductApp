# Product List App

This is a React Native application that allows users to view and interact with a list of products. The app includes features such as filtering, sorting, and viewing detailed product information.

## Features

- **Product List:** The main page displays a list of products.
- **Filter by Category:** Users can filter products by different categories.
- **Sort by Price or Ratings:** Products can be sorted by price or user ratings.
- **Product Details:** By clicking on a product, users are redirected to a new screen that contains more detailed information about the product.

## Requirements

To run this project locally, you'll need to have the following tools installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

## Setup

1. Clone the repository to your local machine.
   
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. For iOS:
   - Navigate to the `/ios` directory:
   
     ```bash
     cd ios
     ```
   - Install CocoaPods dependencies:
   
     ```bash
     pod install
     ```
   - After that, return to the root project directory and run the app:

     ```bash
     cd ..
     npx react-native run-ios
     ```

4. For Android:

   Ensure you have an Android emulator running or a device connected, and then use the following command:

   ```bash
   npx react-native run-android
   ```

## License

This project is licensed under the MIT License.
