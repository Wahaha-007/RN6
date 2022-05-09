1. To use Navation need to install the (additional) following packages
# https://reactnavigation.org/docs/getting-started/
# Install React-Navigation into Expo Project

npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context    => Basic foundation
npm install @react-navigation/native-stack                          => Native-stack navigator

2. Nesting Navigator Chapter
# Install Drawer Navigator
expo install @react-navigation/drawer
expo install react-native-gesture-handler react-native-reanimated

# Work ! Method
3. Fix the installation dependency bug 
- Edit babel.config.js
    plugins: ['react-native-reanimated/plugin']

- use expo r -c instead  // Some kind of clear cache ?
- Close server and npm run start:wsl => OK