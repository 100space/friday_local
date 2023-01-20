const express = require("express");
const router = express.Router();
const { checkController: controller } = require("./check.module");

router.post("/auth", (req, res, next) => controller.postLogin(req, res, next));

module.exports = router;
