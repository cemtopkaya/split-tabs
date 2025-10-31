# Split Tabs: Dynamic Editor Layout

> **Effortlessly split your editor into N vertical groups — with a single command.**

This extension allows you to dynamically create a multi-column editor layout in Visual Studio Code. Whether you're comparing files, working on a multi-file module, or just love organized screen space, **Split Tabs** helps you set up your ideal workspace in seconds.

![Demo](https://github.com/cemtopkaya/split-tabs/raw/master/demo.gif)  
_(Replace with actual demo later)_

## ✨ Features

- Prompt for the number of editor groups (2 to 100).
- Automatically splits the editor to the right and moves tabs into new groups.
- Returns focus to the first editor group when done.
- Works globally — no project configuration needed.
- Lightweight and zero dependencies beyond VS Code API.

## 🚀 Usage

1. Open any file in VS Code.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the **Command Palette**.
3. Type **"Split Tabs: Create Dynamic Editor Layout"** and select it.
4. Enter the desired number of editor groups (e.g., `4`).
5. Watch your layout transform instantly!

> 💡 **Tip**: Make sure you have at least one file open before running the command.

## 🔧 How It Works

For a requested number `N`:

- The extension performs `N-1` iterations of:
  - `Split Editor Right`
  - `Next Editor`
  - `Move Editor to Next Group`
- Finally, it focuses the **first editor group** so you can start navigating immediately.

This mimics the manual process but automates it for any number of columns.

## ⚠️ Limitations

- VS Code supports up to ~10–15 visible editor groups comfortably on most screens. While the extension allows up to **100**, very high numbers may cause UI lag or visual clutter.
- All groups will be **vertical (side-by-side)**. Horizontal splitting is not supported in this version.

## 📦 Installation

1. Clone or download this repository.
2. Run:
   ```bash
   npm install
   npm run compile
   ```
