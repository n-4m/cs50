# CS50's Course Search with Dark Mode

#### Video Demo: [URL HERE](https://www.youtube.com/watch?v=your-video-id)

#### Description:

**CS50's Course Search with Dark Mode** is a Chrome Extension designed to enhance the browsing experience for users of the CS50 course. It combines two key features:

1. **Dark Mode Toggle**: Allows users to enable or disable dark mode for the current website, reducing eye strain and improving readability in low-light environments.
2. **CS50's Course Search**: Enables users to quickly search for CS50 course materials directly from the browser's address bar or the extension's popup.

This project was developed as part of the **CS50** course, and it demonstrates the integration of HTML, CSS, JavaScript, and the Chrome Extensions API to create a functional and user-friendly tool.

---

## Files and Their Functions

### `manifest.json`

This file is the configuration file for the Chrome Extension. It defines the extension's metadata, permissions, and the scripts it uses. Key components include:

- **`manifest_version`**: Specifies the version of the Chrome Extensions API being used (version 3 in this case).
- **`name` and `description`**: Provide the name and a brief description of the extension.
- **`action`**: Defines the default popup (`popup.html`) and the icons for the extension.
- **`permissions`**: Lists the permissions required by the extension, such as `activeTab`, `scripting`, and `storage`.

### `popup.html`

This file contains the HTML structure for the extension's popup interface. It includes:

- A **header** with the title of the extension.
- **Styling for the body**, buttons, and input fields.
- **Dark mode styles** that are applied when dark mode is enabled.
- A **button** to toggle dark mode.
- An **input field** and **button** for searching CS50 course materials.

### `popup.js`

This file handles the logic for the popup interface. It includes:

- **Event listeners** for the dark mode toggle button and the search button.
- **Functions** to inject scripts into the current tab for toggling dark mode and to open a new tab with search results.

### `background.js`

This file handles background tasks for the extension. It includes:

- **Event listeners** for when the extension is installed.
- **Logic** to manage the extension's state and handle messages from other parts of the extension.

---

## Design Choices

### Dark Mode Implementation

I chose to implement dark mode by injecting a CSS style into the current webpage. This approach allows for a seamless transition between light and dark modes without requiring a page reload. The style is dynamically added or removed based on the user's preference.

### CS50 Search Functionality

For the CS50 search functionality, I decided to use the edX search URL. This approach provides a quick and easy way to search for CS50 course materials without needing to implement a custom search API. It leverages the existing infrastructure of the edX platform.

### User Interface

The user interface was designed to be simple and intuitive. The popup includes a single button for toggling dark mode and an input field for searching CS50 materials. This minimalistic design ensures that users can quickly access the features they need without unnecessary complexity.

---

## How to Use

1. **Download the source code**: Download the entire project folder to your computer.
2. **Install the extension**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** (top-right corner).
   - Click **Load unpacked** and select the project folder.
3. **Use the extension**:
   - **Dark Mode**: Click the extension icon and select **Toggle Dark Mode** to enable/disable dark mode.
   - **CS50 Search**: Enter a keyword in the search box in the popup and click **Search** to open the results on the CS50 website.

---

## Technologies Used

- **HTML, CSS, JavaScript**: For building the interface and handling logic.
- **Chrome Extensions API**: For interacting with the Chrome browser.

---

## Author

This project was developed by [**@n-4m**](https://github.com/n-4m) as part of the **CS50** course.

---

## License

This project is distributed under the [MIT License](https://opensource.org/licenses/MIT).

---

### Conclusion

**CS50 Helper with Dark Mode** is a handy tool that enhances the browsing experience and provides quick access to CS50 course materials. I hope you find it useful and enjoy using it as much as I enjoyed building it!

---
