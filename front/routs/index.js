const express = require("express")
const router = express.Router()
const axios = require("axios")
const request = axios.create({
    baseURL : 'http://127.0.0.1:3000',
    withCredentials: true,
})

const HOST = `https://kauth.kakao.com`
const REST_API_KEY = `6f3af7393558bd75aa668cd31cc22396`  //  어플리캐이션의 식별자
const REDIRECT_URI = `http://127.0.0.1:3000/oauth/kakao`


router.get("/", (req, res, next)=>{
    res.render("index.html")
})
router.get("/about", (req, res, next)=>{
    res.render("user/about.html")
})
router.get("/signup", (req, res, next)=>{
    res.render("user/join.html")
})
router.get("/signin", (req, res, next)=>{
    res.render("user/login.html")
})

//포스트에서 받으면
//
router.get("/oauth/kakao", (req, res)=>{
    //kauth.kakao.com
    //  /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
    const redirectURL = `${HOST}/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    res.redirect(redirectURL)
})

module.exports = router
