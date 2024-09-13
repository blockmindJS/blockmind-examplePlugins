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
            this.isSpawned = true;
        });
    }
}

module.exports = CustomPlugin;