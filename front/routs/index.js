const express = require("express")
const router = express.Router()
const axios = require("axios")
const request = axios.create({
    baseURL: "http://127.0.0.1:3000",
    withCredentials: true,
})

const HOST = `https://kauth.kakao.com`
const REST_API_KEY = `6f3af7393558bd75aa668cd31cc22396` //  어플리캐이션의 식별자
const REDIRECT_URI = `http://127.0.0.1:3000/oauth/kakao`

router.get("/", (req, res, next) => {
    console.log(req.cookies)
    if (req.user === undefined) return res.render("index.html")
    const { userid, username } = req.user
    res.render("index.html", {
        userid,
        username,
    })
})
router.get("/about", (req, res, next) => {
    res.render("user/about2.html")
})
router.get("/signup", (req, res, next) => {
    res.render("user/join.html")
})
router.get("/signin", (req, res, next) => {
    res.render("user/login.html")
})
router.post("/users", async (req, res, next) => {
    console.log(req.body)
    const response = await request.post("/users", {
        ...req.body,
    })
    const { userid, username, userpw } = response.data
    res.redirect(
        `/welcome?userid=${userid}&username=${username}&userpw=${userpw}`
    )
})
router.get("/welcome", (req, res, next) => {
    res.render("user/welcome.html")
})

router.get("/oauth/kakao", (req, res, next) => {
    const redirectURL = `${HOST}/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    res.redirect(redirectURL)
})

module.exports = router
