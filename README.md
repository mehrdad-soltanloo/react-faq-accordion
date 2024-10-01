# React FAQ Accordion

## Overview

This project is a simple FAQ accordion built with React, allowing users to toggle the visibility of answers to frequently asked questions.

## Project Setup

### Step 1: Create a Vite Project

- Open your terminal and run:
  ```bash
  npm create vite@latest my-faq-app -- --template react
  ```

### Step 2: Install Dependencies

Install necessary dependencies (if any):
bash
npm install

### Step 3: Create Data File

1. Create a file named data.js in the src folder.
2. Define the questions array in data.js:

```javascript
const questions = [
  { id: 1, question: "What is React?", answer: "..." },
  // more questions
];
export default questions;
```

### Step 4: Create Components

- Create FAQItem Component:

1. Create a file named FAQItem.jsx in the components folder.
2. Import useState and icons.
3. Use state to track visibility of the answer.
4. Define a toggle function and render the question and answer.

- Create FAQContainer Component:

1. Create a file named FAQContainer.jsx.
2. Import the questions and FAQItem.
3. Map through questions to render FAQItem components.

## Integrate Components in App:

- Modify App.jsx to render FAQContainer
