## 📦 Plugin development

### Creating a plug-in

Plugins can be created and integrated into your bot. Each plugin must be exported as a function that accepts a bot object and parameters.

### Example plugin structure

Your plugin should be located in a directory structure such as:

```
plugins/
│
├── CustomPlugin/
│   ├── src/
│   │   └── CustomPlugin.js
│   └── index.js
```

### index.js

The `index.js` file is responsible for loading the plugin and initializing it.

```javascript
const CustomPlugin = require('./src/CustomPlugin');

// Function for loading the plugin
module.exports = (bot, options) => {
    const plugin = new CustomPlugin(bot, options);

    // Saving a link to the plugin for use later
    bot.customPlugins[options.name] = plugin;

    plugin.start();
};
```

### src/CustomPlugin.js

This is the main file of your plugin, where all the logic is located.

```javascript
class CustomPlugin {
    constructor(bot, options = {}) {
        this.bot = bot;
        this.options = options;
    }

    start() {
        console.log('Custom Plugin started');

        this.bot.on('spawn', () => {
            console.log('Bot has spawned in the game');
        });
    }
}

module.exports = CustomPlugin;
```
