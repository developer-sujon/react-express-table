//External Import
const ProductsModel = require("../model/ProductModel");
const { createError } = require("../helper/errorHandler");

/**
 * @desc Select Product List
 * @access public
 * @route /api/v1/product/productList
 * @methud GET
 */

const selectProductList = async (req, res) => {
  const pageNumber = Number(req.params.pageNumber);
  const perPage = Number(req.params.perPage);
  const searchKey = req.params.searchKey;
  const skipRow = (pageNumber - 1) * perPage;
  let data;

  try {
    if (searchKey !== "0") {
      const searchRegex = { $regex: searchKey, $options: "i" };
      const searchQuery = { $or: [{ title: searchRegex }] };
      data = await ProductsModel.aggregate([
        {
          $facet: {
            total: [{ $match: searchQuery }, { $count: "count" }],
            data: [
              { $match: searchQuery },
              { $skip: skipRow },
              { $limit: perPage },
            ],
          },
        },
      ]);
      res.json(data);
    } else {
      data = await ProductsModel.aggregate([
        {
          $facet: {
            total: [{ $count: "count" }],
            data: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);

      res.json(data);
    }
  } catch (e) {
    createError(e.message, e.status);
  }
};

module.exports = selectProductList;
