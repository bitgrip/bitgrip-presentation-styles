# Bitgrip presentation styles

This chrome browser extension applies a custom style of the Bitgrip corporate identity to browser based presentations like Atlassian Confluence Moderation.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" in the top left corner
4. Select the folder containing this extension
5. The extension should now be installed and active for Bitgrip Confluence pages

## Next steps

- Add styles for light mode with a switch in the extension popup
- Add styles for other presentation tools like Miro?
- Publish the extension to the Chrome Web Store in private mode

---

## Project Setup for AI Coding Agents

This section provides guidance for AI coding agents (or developers using AI tools) to set up and work with the Bitgrip presentation styles extension project.

### Repository Structure

- `manifest.json`: Chrome extension manifest file.
- `styles.css`: Main stylesheet for applying Bitgrip corporate identity.
- `res/`: Resource directory for assets (images, icons, etc.).
- `README.md`: Project documentation.

### Getting Started

1. **Clone the repository**
   ```bash
   git clone &lt;REPO_URL&gt;
   cd &lt;REPO_FOLDER&gt;
   ```

2. **Review the codebase**
   - Inspect `manifest.json` for extension configuration.
   - Update or extend `styles.css` to modify the appearance.
   - Add or update assets in the `res/` directory as needed.

3. **Testing changes**
   - After making changes, reload the extension in Chrome via `chrome://extensions/` > "Reload" button.

4. **Dependencies**
   - This project does not use build tools or external dependencies by default. All source files are static and directly loaded by Chrome.
   - If automation or additional tooling is required, instructions should be added to this section.

### Notes for AI Agents

- When adding new features or modifying files, maintain the existing coding style and structure.
- Ensure that all changes are compatible with Chrome extension requirements.
- Update this README with any new setup or build steps if the project evolves.