class CheckController {
  constructor({ checkService }) {
    this.checkService = checkService;
  }

  async postLogin(req, res, next) {
    try {
      const { userid, userpw } = req.body;

      const result = await this.checkService.login({ userid, userpw });
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CheckController;
