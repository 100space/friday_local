class CheckRepository {
  constructor({ Users }) {
    this.Users = Users;
  }

  async findLoginUser({ userid, userpw }) {
    try {
      const user = await this.Users.findOne({
        raw: true,
        attributes: { exclude: ["userpw"] },
        where: {
          userid,
          userpw,
        },
      });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = CheckRepository;
