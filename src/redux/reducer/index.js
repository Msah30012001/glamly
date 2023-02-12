import { combineReducers } from "redux";
import { cartReducer } from "./cart.reducer";
import { childCategoryReducer } from "./childcategory.reducer";
import { mainCategoryReducer } from "./maincategory.reducer";
import { orderReducer } from "./order.reducer";
import { paymentReducer } from "./payment.reducer";
import { productReducer } from "./product.reducer";
import { productTypeReducer } from "./producttype.reducer";
import { productSkuReducer } from "./productsku.reducer";
import { subCategoryReducer } from "./subcategory.reducer";
import { userReducer } from "./user.reducer";
import { adminReducer } from "./admin.reducer";
import { wishlistReducer } from "./wishlist.reducer";
import { feedbackReducer } from "./feedback.reducer";
import { categoryReducer } from "./category.reducer";
import { productListReducer } from "./productlist.reducer";
import { productDetailReducer } from "./productdetail.reducer";

const rootReducer = combineReducers({
  mainCategory: mainCategoryReducer,
  cart: cartReducer,
  childCategory: childCategoryReducer,
  order: orderReducer,
  payment: paymentReducer,
  product: productReducer,
  productType: productTypeReducer,
  productSku: productSkuReducer,
  subCategory: subCategoryReducer,
  user: userReducer,
  admin:adminReducer,
  wishlist: wishlistReducer,
  feedback: feedbackReducer,
  category: categoryReducer,
  productList: productListReducer,
  productDetail: productDetailReducer,
});

export default rootReducer;
