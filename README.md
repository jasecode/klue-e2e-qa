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

## High Level Thought Processes - 
Why do we need this test?
- For this I'm assuming that this is a super critical-path, 99% of our leads from Klue's win analysis go through this path.

Who are the end users using this platform?
Customers - what type of customers? Age group? Demographic?
Are we on mobile? or Desktop?

What are the 'invisible' things we need to consider?
State? Cookies? Analytics?

Before Creating the test:
1. Go through the flow manually.

* Note down all 'interactable points'.
* What are all the potential integration points between systems?
* What are the third party integrations?

* What are components of the site under test?
* What is the Application Business Logic most users of our site use
* Running this on all environments? What is the frequency of changes to this codebase?

## Future optimization
* Assuming the criticality of this test - Add [qa-selectors] into the interactive elements
* Eliminate the need for this specific test - use other tools that cost less - Screener? Alert-Monitoring application - Datadog etc.

What if a test Breaks
* Test Error - Test is out of date. 
* Environemnt Changes - Depedency, third party

* Test Caught a bug 
- Crtical, Blocker, medium, low


* How long does it take for us to identify root cause
