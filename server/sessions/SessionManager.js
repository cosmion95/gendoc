const crypto = require('crypto');

const { Session } = require('./Session');

class SessionManager {
  constructor() {
    this.sessions = new Map();
  }

  generateSession(origin) {
    let sessionId;
    do {
      sessionId = this.generateRandomString(32);
    } while (this.sessions.has(sessionId));

    let session = new Session(sessionId, origin);
    this.sessions.set(sessionId, session);
  
    return session;
  }

  getSession(id, origin) {
    let session = this.sessions.get(id);
    if (!session)
      return this.generateSession(origin);
  }

  generateRandomString() {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 32; i++) {
      const randomIndex = crypto.randomInt(charset.length);
      result += charset[randomIndex];
    }
    return result;
  }
}

module.exports = SessionManager;