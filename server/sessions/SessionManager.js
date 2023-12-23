const crypto = require('crypto');

const { Session } = require('./Session');

class SessionManager {
  constructor() {
    this.sessions = new Map();
  }

  generateSession(origin) {
    var sessionId;
    do {
      sessionId = this.generateRandomString(32);
    } while (this.sessions.has(sessionId));

    let session = new Session(sessionId, origin);
    this.sessions.set(sessionId, session);
  
    return session;
  }

  getSession(id, origin) {
    var session = this.sessions.get(id);
    if (!session)
      return this.generateSession(origin);
    
    return session  
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

  getRequestSession(req, res) {
    const sessionId = req.cookies.sessionId;
    var session = null;
    if (!sessionId) {
        console.log("Cookie session was not set");
        session = this.generateSession("this_origin");
    } else {
        console.log("Cookie session was set to " + sessionId);
        session = this.getSession(sessionId, "this_other_origin");
    }
    res.cookie("sessionId", session.getId());

    console.log(session);
    return session;
  }
}

exports.sessionManager = new SessionManager();