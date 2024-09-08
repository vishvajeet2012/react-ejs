const router =require("express").Router()

const userC= require("../controller/use")


router.get('/', userC.Homepagecontroler)

router.get("/file", userC.filepagecontroler)

router.post("/from",userC.fromControler)

module.exports =router


