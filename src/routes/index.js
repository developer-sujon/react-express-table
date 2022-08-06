//External import
const routes = require("express").Router();

//Internal Import
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const productListRoutes = require("./productListRoutes");

//auth Routes
routes.use("/auth", authRoutes);

//user Routes
routes.use("/user", userRoutes);

//Product Routes
routes.use("/product", productListRoutes);

module.exports = routes;
