# Couples Game in React

This is a card matching game developed with React, designed to test your memory and skills in finding matching pairs. The application uses the following technologies and features:

## Characteristics
- **Pairing logic:** Implementation of a system to verify correct and incorrect pairs.
- **Global State Management:** Using React Context to manage score and game progress.
- **Custom Hooks:** Organization of game logic in custom hooks for greater modularity and reuse.
- **Interactivity:** Visual effects on the cards when flipping them.
- **Game Restart:** Functionality to restart the game and start from scratch.

## Technologies used
- **React:** Main framework for building the interface.
- **CSS and Tailwind:** Custom stylization for the cards and the board.
- **React Context:** Management of global states such as score and game progress.
- **Custom Hooks:** To encapsulate complex logic such as checking pairs and determining the winner.

## How to play
1. Click on the cards to flip them.
2. Find the same pairs to earn points.
3. Avoid incorrect pairings to avoid losing points.
4. The game ends when you match all the cards correctly.

## Installation and execution
1. Clone the repository.
   ```bash
   git clone <REPOSITORY_URL>

2. Navigate to the project directory.
    ```bash
    cd memory-game

3. Install the dependencies.
    ```bash
    npm install

4. Run the project in development mode.
    ```bash
    npm run dev

If everything is configured correctly, the project should be running on http://localhost:5173, which is Vite's default port. If you use another port, the terminal will tell you.

you can see the project live at: https://luminous-valkyrie-e7fb3d.netlify.app/
