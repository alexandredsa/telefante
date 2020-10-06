const StartCommand = require('./StartCommand');

const commands = [StartCommand];

const getCommand = (content) => {
    return commands.find(c => c.evaluate(content));
};

module.exports = { getCommand };