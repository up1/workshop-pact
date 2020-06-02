class UserRepository {

    constructor() {
        this.users = new Map([
            ["pact", "pact"]
        ]);
    }

    async getByName(name) {
        return this.users.get(name)
    }
}

module.exports = UserRepository