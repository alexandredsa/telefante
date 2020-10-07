const Game = require('../domains/Game');
const { VALID_SCOPES } = require('../commons/constants');
const DiscordMessageHandler = require('../helpers/DiscordMessageHandler');

class StartCommand {
    evaluate(content) {
        return content.startsWith('iniciar');
    }

    run({ msg }) {
        const members = DiscordMessageHandler.getChannelMembersIdsFromMessage(msg);
        return new Game({ members });
    }

    worksOn() {
        return [VALID_SCOPES.CHANNEL];
    }
}

module.exports = new StartCommand();