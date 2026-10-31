
# React Native Mock Interview App


A streamlined mobile application template designed and reviewed during a senior software engineer mock interview session.

---

## Features

* **Cross-Platform Support**: Built with React Native to run seamlessly on both iOS and Android devices.


* **Live Code Preview**: Integrated with Expo for instant feedback and real-time component rendering.


* **Clean State Management**: Implements structured application states following best practices for mobile architecture.
* **Responsive Layout**: Designed with flexible Flexbox styles to adapt to various screen sizes and orientations.

---

## Prerequisites

Before getting started, make sure you have the following installed on your system:

* [Node.js](https://nodejs.org/) (LTS version recommended)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
* [Expo CLI](https://docs.expo.dev/get-started/installation/) (or the Expo Go app on your mobile device for testing)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
```bash
git clone https://github.com/username/react-native-mock-interview.git
cd react-native-mock-interview

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npx expo start

```



---

## Usage

Once the development server is running, you can launch the app using one of the following methods:

* **iOS Simulator:** Press `i` in your terminal (macOS required).
* **Android Emulator:** Press `a` in your terminal.
* **Physical Device:** Scan the QR code displayed in your terminal using the **Expo Go** app (iOS) or camera app (Android).

Example of modifying the main view in `App.js`:

```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to your React Native mock interview project!</Text>
    </View>
  );
}

```

---

## Contributing

We welcome contributions to improve this project! Please read our [CONTRIBUTING.md](https://www.google.com/search?q=./CONTRIBUTING.md) file for guidelines on how to submit pull requests, report issues, and suggest new features.

---

## License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=./LICENSE).