const Game = require('../domains/Game');
const { VALID_SCOPES } = require('./constants');

class StartCommand {
    evaluate(content) {
        return content.startsWith('iniciar');
    }

    run(msg, game) {
        const { } = msg;
        return new Game({});
    }

    worksOn() {
        return [VALID_SCOPES.CHANNEL];
    }
}

module.exports = new StartCommand();