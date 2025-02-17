#Project Name: Figure Collection Manager
- Program Exam for Ace Outsourcing

#Features
1. Listing of Figure Items with Name, Price ($) and Image (Image web address, for frontend test purpose)
2. Figure Item list are saved as Multi Array with UseContext function.
3. User can add, Update/Edit, and Delete Figure items.
4. Due to frontend testing limitation. On refresh, resets the list with the starting figure items.
5. User can filter the listing with the search bar.
6. Add and Edit forms as modal.

#Prerequisites
- Node JS installed - [Download Node.js](https://nodejs.org/) for npm packages installation.
- Expo CLI, enter "npm install -g expo-cli" in terminal/cmd to install it globally.
  
#Step by step installation
1. In terminal terminal and select your project location then enter "expo init FigureCollectionMngr"
2. Once completed, type "code ." in the terminal to open the project solution in the vscode
3. Open new terminal from the project solution in vs code and install additional npm/npx packages:
     -  "npx expo install react-dom react-native-web @expo/metro-runtime"
     -  "npx expo install react-native-gesture-handler"
     -  "npm install @react-navigation/stack"
     -  "npm install react-navigation"  
4. Download the project from master as zip, then extract the files to the project solution folder. Replace all files when prompted.
5. In the vs code terminal of the project solution, enter "npm run web". It will start the project to your default browser and it will open automatically.



Overview of my approach and decisions made:
1. Conceptualize the process flow and design.
2. Since it's my first time to develop in React Native, I looked for a sample project using ChatGPT with the necesarry controls and functions I used on other platform such as React JS that can be used in React Native. (Such as simple database for frontend and animation)
3. Construct the simple project with the help of sample project as a reference.
4. Test and review if the project run smoothly, then update or add the code with the next process until all of the requirements are met. 

THANK YOU!
