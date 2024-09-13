
# 📦 Plugin Development for BlockMind

## Introduction

BlockMind allows the integration of plugins that extend its functionality. This guide will help you create your own custom plugins and integrate them into your bot.

## 🔧 Creating a Plugin

Each plugin must be exported as a function that takes a `bot` object and parameters. Plugins enable you to add custom features or logic to the bot.

## 📂 Example Plugin Structure

Your plugin should be located in a directory structure like this:

```
plugins/
│
├── CustomPlugin/
│   ├── src/
│   │   └── CustomPlugin.js
│   └── index.js
```

### 📜 `index.js`

The `index.js` file is responsible for loading and initializing the plugin.

```javascript
const CustomPlugin = require('./src/CustomPlugin');

// Function for loading the plugin
module.exports = (bot, options) => {
    const plugin = new CustomPlugin(bot, options);

    // Saving a reference to the plugin for future use
    bot.customPlugins[options.name] = plugin;

    plugin.start();
};
```

### 📜 `src/CustomPlugin.js`

This is the main file where all the logic for your plugin is located. The `start` method is called to initialize your plugin's functionality.

```javascript
class CustomPlugin {
    constructor(bot, options = {}) {
        this.bot = bot;
        this.options = options;
        this.isSpawned = false;
    }

    start() {
        console.log('Custom Plugin started');

        this.bot.on('spawn', () => {
            console.log('Bot has spawned in the game');
            this.isSpawned = true; // Update when the bot spawns
        });
    }
}

module.exports = CustomPlugin;
```

## 🧑‍💻 Accessing the Plugin

Once the plugin is loaded and attached to `bot.customPlugins`, you can access its methods and properties in other parts of your bot:

```javascript
const ExamplePlugin = bot.customPlugins['ExamplePlugin'];
console.log(ExamplePlugin.isSpawned); // Check if the bot has spawned
```

This allows you to interact with the plugin's state and functionality dynamically.

## 🗂 Repository Links

- **[BlockMind - Main Repository](https://github.com/blockmindJS/blockmind)**: The core framework
- **[BlockMind Example Repository](https://github.com/blockmindJS/blockmind-example)**: A repository with working examples and templates to help you get started with your plugins.

## 📖 Documentation

For more information, refer to the documentation in the main repository:
- [![EN](https://img.shields.io/badge/lang-English-blue)](https://github.com/blockmindJS/blockmind/blob/main/README.md)
- [![RU](https://img.shields.io/badge/lang-Russian-red)](https://github.com/blockmindJS/blockmind/blob/main/README.ru.md)


