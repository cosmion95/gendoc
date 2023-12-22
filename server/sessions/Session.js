class Session {
    constructor(id, origin) {
        this.id = id;
        this.theme = true;
        //this.lastAccessDate = sysdate;
        this.origin = origin;
    }

    getId() {
        return this.id;
    }

    getTheme() {
        return this.theme;
    }

    toggleTheme() {
        this.theme = !this.theme;
    }
}

module.exports = {Session};