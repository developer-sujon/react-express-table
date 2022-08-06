//External Import
const productListRoutes = require("express").Router();

//Internal Import
const selectProductList = require("../controller/productListControllers");

//Register User
productListRoutes.get(
  "/productList/:pageNumber/:perPage/:searchKey",
  selectProductList,
);

module.exports = productListRoutes;
