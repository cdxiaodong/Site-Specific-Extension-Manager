# Site-Specific Extension Manager

**Site-Specific Extension Manager** is an Edge extension that disables all other extensions (except itself) when you visit specified websites. This can help improve browsing performance and security on sensitive sites.

## Features

- Disable all other extensions on specified websites.
- Easy to add and manage websites.
- Automatically re-enables extensions when leaving the specified sites.

## Installation

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/CDxiaodong/site-specific-extension-manager.git
   ```
   Alternatively, you can download the ZIP file from the repository and extract it.

2. **Open the Extensions Page in Edge**
   - Go to `edge://extensions/` in your Edge browser.

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner of the extensions page.

4. **Load Unpacked Extension**
   - Click the "Load unpacked" button and select the directory where you cloned or extracted the repository.

## Usage

1. **Open the Extension Popup**
   - Click the extension icon in the toolbar to open the popup.

2. **Add Current Site to Block List**
   - In the popup, click the "Add Current Site to Block List" button to add the current website to the list of sites where other extensions will be disabled.

3. **Manage Blocked Sites**
   - The popup will show a list of blocked sites. You can see which sites are currently in the list.

## Files

- **manifest.json**: Extension configuration and permissions.
- **background.js**: Background script that handles extension enabling/disabling.
- **popup.html**: HTML file for the popup interface.
- **popup.js**: JavaScript file for the popup interface.
- **images/**: Directory containing icon files.

## Directory Structure

```
site-specific-extension-manager/
├── manifest.json
├── background.js
├── popup.html
├── popup.js
└── images/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Development

If you want to contribute to the development of this extension, follow these steps:

1. **Fork the Repository**
   - Click the "Fork" button at the top-right corner of the repository page on GitHub.

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/CDxiaodong/site-specific-extension-manager.git
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature-branch
   ```

4. **Make Your Changes**

5. **Commit Your Changes**
   ```bash
   git commit -m "Describe your changes"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature-branch
   ```

7. **Create a Pull Request**
   - Go to the original repository on GitHub and click the "New Pull Request" button.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README should provide clear instructions and an overview of your extension, making it easy for users to understand and use it effectively.
