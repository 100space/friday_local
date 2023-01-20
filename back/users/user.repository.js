class UserRepository {
  constructor({ Users }) {
    this.Users = Users;
  }

  async addUser(payload) {
    try {
      const result = await this.Users.create(payload);
      const { userpw, ...rest } = result.dataValues;
      return rest;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UserRepository;
