# Next.js 15: Runtime Error - Variable Not Defined

This repository demonstrates a common runtime error in Next.js 15 applications where a component tries to access a variable that is not defined within its scope.  The error occurs because the variable is not accessible within the `About` component's context.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.  You will see an error in your browser's console.

## Solution
The solution involves either passing the variable as a prop to the component or refactoring the code to correctly manage scope and variable access.
