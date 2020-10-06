class DiscordMessageHandler {
    getChannelMembersIdsFromMessage(msg) {
        const { guild: { members: { client: { users: { cache } } } } } = msg;
        return this.removeBotsFromMembers(cache).map(member => {
            return member.id;
        });
    }

    removeBotsFromMembers(members) {
        return members.filter((v, k) => !v.bot);
    }
}

module.exports = new DiscordMessageHandler();