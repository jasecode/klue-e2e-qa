<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
* Create a .env file with the following credentials
  ```sh
  ENVIRONMENT=production
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone git@github.com:jasecode/klue-e2e-qa.git
   ```
2. Install NPM packages
   ```sh
   npm install

   # You may need to install Cypress additionally, if step 3) fails
   npm install cypress
   ```
3. Run tests
   ```js
   npm run test:e2e
   ```

   Or open Cypress
   ```js
   npm run cy:local:open
   ```

### Design Consideration
* Chosen to use Cypress due to fast setup, and a faster feedback loop of debugging when tests go wrong.
* Cypress has easy configurability, commands.js for custom commands, and easy way to make requests/interceptions (if needed).
* Added a `.env` file configuration out of habit
