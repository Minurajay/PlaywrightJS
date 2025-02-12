# Playwright with JavaScript
## Project Overview
This project demonstrates various **Playwright** automation techniques using **JavaScript**. It covers essential automation concepts including element locators, UI interactions, API testing, accessibility testing, and assertions. Each topic is implemented in a separate script, showcasing Playwright's powerful features and built-in test runner.

### The scripts are designed to showcase:
- **Modern Locators:** Using Playwright's powerful locators (getByRole, getByText, getByLabel, getByAltText).
- **Browser & Context:** Managing multiple browser contexts and tabs.
- **Auto-waiting:** Demonstrating Playwright's built-in auto-wait mechanisms.
- **API Testing:** Performing API tests using Playwright's request context.
- **Accessibility Testing:** Implementing accessibility checks using @axe-core/playwright.
- **UI Interactions:** Handling clicks, inputs, dialogs, and complex UI patterns.
- **Assertions:** Showcasing various assertion types available in Playwright.

Each script focuses on specific Playwright functionality and demonstrates automation across different web applications.

## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/playwright-js-project.git
cd playwright-js-project
```

2. Install dependencies:
```bash
npm init playwright@latest
```

3. Install additional packages:
```bash
npm install @axe-core/playwright
npm install -D @playwright/test
```

## Running Tests
Run all tests:
```bash
npx playwright test
```

Run specific test file:
```bash
npx playwright test tests/accessibility.spec.js
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

## Best Practices
1. Use built-in auto-waiting mechanisms
2. Prefer role-based selectors
3. Implement proper test isolation
4. Use test fixtures for setup/teardown
5. Implement proper error handling
6. Use trace viewer for debugging

## Debugging
- Use UI mode: `npx playwright test --ui`
- Use Trace Viewer: `npx playwright show-trace trace.zip`
- Use Debug mode: `PWDEBUG=1 npx playwright test`
