# MagicToastHiteshFolio

**MagicToastHiteshFolio** is a lightweight, animated toast notification library for React using Tailwind CSS.

## Installation

```bash
npm install magic-toast-hiteshfolio
```

## Usage

1. **Wrap your application with the `ToastProvider`:**

   Start by wrapping your application with the `ToastProvider` component. This makes the toast context available to all child components.

   ```javascript
   import React from "react";
   import ReactDOM from "react-dom";
   import { ToastProvider } from "animate-toast-hiteshfolio";
   import App from "./App";

   ReactDOM.render(
     <ToastProvider>
       <App />
     </ToastProvider>,
     document.getElementById("root")
   );
   ```


   ## Toast Component

The toast component is styled based on the message type. You can customize these styles in your CSS files.

```css
.magicHiteshfolio-toast {
  /* Common styles for all toasts */
}

.magicHiteshfolio-toast-success {
  background-color: green;
}

.magicHiteshfolio-toast-error {
  background-color: red;
}

.magicHiteshfolio-toast-info {
  background-color: blue;
}

.magicHiteshfolio-toast-warning {
  background-color: orange;
}
```

## Props

### ToastProvider
- **children**: The child components of the provider.

### Toast
- **message** *(string, required)*: The message to display in the toast.
- **type** *(string, optional)*: The type of the toast (success, error, info, warning).

## Contributing

Feel free to submit issues and pull requests to improve this library. Contributions are welcome!

## License
This project is licensed under the MIT License.



## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes. Ensure to follow the coding standards and include relevant tests for new features.

## Author
Hitesh Saini  🧩💻
[GitHub](https://github.com/hitesh09saini) | [LinkedIn](https://www.linkedin.com/in/hitesh-saini09/) | [Portfolio](https://hitesh-folio.vercel.app/) 
