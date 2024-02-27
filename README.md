# Memory Match Game

This Memory Match Game is a fun and interactive web application built with React. It's designed to test and improve your memory by matching pairs of cards. Each card features a unique image, and the goal is to find and remember the location of matching pairs. This game is perfect for all ages, offering a simple yet engaging way to exercise cognitive skills.

## Features

- **Dynamic Card Shuffle:** Utilizing a custom shuffle utility, the game ensures a fresh experience with each new game by randomly shuffling the cards.
- **Stateful Selection Logic:** Players can select two cards per turn to check for a match. The game logic handles selections, matches, and mismatches efficiently.
- **Match Detection:** When two cards are selected, the game checks for a match. If the images on the cards match, they remain face up; if not, they flip back after a short delay.
- **Win Detection:** The game tracks the number of matches and declares a win when all pairs have been found.
- **Responsive Design:** The card grid is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.

## How to Play

1. **Start the Game:** When the game loads, cards are randomly shuffled and presented face down.
2. **Select Two Cards:** Click on two cards to flip them over.
3. **Match Cards:** If the two cards match, they will stay flipped over. If they don't match, remember their positions as they flip back after a short delay.
4. **Win the Game:** Continue matching cards until all pairs have been found. The game will notify you of your win and the number of turns it took to match all pairs.

## Development

This project is built using React, showcasing the use of hooks such as `useState` and `useEffect` for managing state and side effects. The game logic is encapsulated within the React functional component, making use of custom utilities for shuffling cards and handling user interactions.

### Key React Concepts Used

- **useState:** To manage the game state, including the card array, selected cards, and win count.
- **useEffect:** For side effects, such as handling the delay between card flips and checking for game completion.
- **Custom Utilities:** A shuffle function to randomize the card order, ensuring a unique gameplay experience each time.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone [repository-url]
