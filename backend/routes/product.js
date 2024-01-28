const express = require("express");
const multer = require("multer")
const router = express.Router();

var controller = require("../controllers/product.controller");

var upload = multer({ dest: './public/images'})

router.get("/", controller.index);
router.get("/:id", controller.product);
router.get("/name/:name", controller.productByName);
router.post("/", upload.fields([{name: 'productImg', maxCount: 1}, {name: 'teacherImg', maxCount: 1}]) ,controller.postProduct);
router.post("/delete/:id", controller.deleteProduct);
router.post("/update/:id", upload.fields([{name: 'productImg', maxCount: 1}, {name: 'teacherImg', maxCount: 1}]), controller.updateProduct);
router.post("/review/:id", controller.reviewProduct);

module.exports = router;