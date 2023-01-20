class CheckService {
  constructor({ checkRepository, jwt, salt }) {
    this.checkRepository = checkRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
    this.salt = salt;
  }

  async login({ userid, userpw }) {
    try {
      if (!userid || !userpw) throw "아이디또는 비밀번호가 입력되지 않았습니다.";
      const hash = this.crypto.createHmac("sha256", this.salt).update(userpw).digest("hex");
      const user = await this.checkRepository.findLoginUser({ userid, userpw: hash });

      if (!user) return { message: "아이디와 패스워드가 일치하지 않습니다.", isWrong: true };
      const result = { token: this.jwt.sign(user) };
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = CheckService;
