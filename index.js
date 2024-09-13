const CustomPlugin = require('./src/CustomPlugin');

// Function for loading the plugin
module.exports = (bot, options) => {
    const plugin = new CustomPlugin(bot, options);

    // Saving a link to the plugin for use later
    bot.customPlugins[options.name] = plugin;

    plugin.start();
};