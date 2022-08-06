//external lib import
import axios from "axios";
import SessionHelper from "../helper/SessionHelper";
import ToastMessage from "../helper/ToastMessage";
import { setProductList, setTotal } from "../redux/features/productListSlice";
import { setLoading, removeLoading } from "../redux/features/settingSlice";
import store from "../redux/store/store";

axios.defaults.baseURL = "http://localhost:8080/api/v1";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + SessionHelper.getToken();

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

class ApiRequest {
  static selectProductList(pageNumber, perPage, searchKey) {
    store.dispatch(setLoading());
    return axios
      .get(`/product/productList/${pageNumber}/${perPage}/${searchKey}`)
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          store.dispatch(setProductList(response.data[0].data));
          store.dispatch(setTotal(response.data[0].total[0].count));
        }
      })
      .catch((err) => {
        store.dispatch(removeLoading());
        ToastMessage.errorMessage(err.response.data.message);
      });
  }
}

export default ApiRequest;
