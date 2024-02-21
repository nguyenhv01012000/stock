const express = require("express");
const router = express.Router();
const multer = require("multer")
var upload = multer({ dest: './public/images', limits: { fieldSize: 2 * 1024 * 1024 }})

var controller = require("../controllers/news.controller");

router.get("/", controller.index);
router.get("/category/:cate", controller.cate);
router.get("/:id", controller.news);
router.get("/name/:name", controller.newsByName);
router.post("/delete/:id", controller.deleteNews);
router.post("/update/:id", upload.array("newImg", 12), controller.updateNews); 
router.post("/",  upload.array("newImg", 12), controller.postNews);
router.post("/upload-image",  upload.array("newImg", 12), controller.uploadImg);
 
module.exports = router;