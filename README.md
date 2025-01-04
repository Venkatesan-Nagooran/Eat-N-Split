# Eat-N-Split

Eat-N-Split is a React application that helps users split bills with their friends. The application allows users to add friends, select a friend, and split a bill by specifying the expenses. The app keeps track of the balance between the user and their friends.

Application URL: https://venkatesan-nagooran.github.io/Eat-N-Split/

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new friends with a name and image URL.
- Select a friend to split a bill with.
- Enter the bill amount and specify your expense.
- Automatically calculate the friend's expense.
- Keep track of the balance between you and your friends.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/eat-n-split.git
   cd eat-n-split
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Add a new friend by clicking the "Add Friend" button and filling out the form.
2. Select a friend from the list to split a bill with.
3. Enter the bill amount and your expense in the form.
4. Choose who is paying the bill and click "Split bill".
5. The balance between you and your friend will be updated accordingly.

## Components

- **App.jsx**: The main component that holds the state and renders the sidebar and form components.
- **Button.jsx**: A reusable button component.
- **FormAddFriend.jsx**: A form component for adding new friends.
- **FormSplitBill.jsx**: A form component for splitting a bill with a selected friend.
- **Friend.jsx**: A component that displays a friend's information and balance.
- **ListFriends.jsx**: A component that renders a list of friends.
- **main.jsx**: The entry point of the application.
- **index.css**: The main stylesheet for the application.
- **App.css**: Additional styles for the application.

## Styling

The application uses CSS for styling. The main styles are defined in `src/index.css` and additional styles are in `src/App.css`. The button styles are defined in `src/index.css` under the `.button` class.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
