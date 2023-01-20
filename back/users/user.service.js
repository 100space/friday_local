class UserService {
  constructor({ userRepository, jwt, salt }) {
    this.userRepository = userRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
    this.salt = salt;
  }

  async signup({ userid, userpw, username, nickname, birth, phonenum, ...rest }) {
    try {
      if (!userid || !userpw || !username || !nickname || !birth || !phonenum) throw "내용이 없음";
      const hash = this.crypto.createHmac("sha256", this.salt).update(userpw).digest("hex");
      const user = await this.userRepository.addUser({ userid, userpw: hash, username, nickname, birth, phonenum, ...rest });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UserService;
