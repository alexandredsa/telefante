const Game = require('../domains/Game');
const { VALID_SCOPES } = require('../commons/constants');
const DiscordMessageHandler = require('../helpers/DiscordMessageHandler');

class StartCommand {
    evaluate(content) {
        return content.startsWith('iniciar');
    }

    async run({ msg }) {
        const members = DiscordMessageHandler.getChannelMembersIdsFromMessage(msg);
        const game = new Game({ members });
        const requests = await game.start();
        return { requests, game };
    }

    worksOn() {
        return [VALID_SCOPES.CHANNEL];
    }
}

module.exports = new StartCommand();