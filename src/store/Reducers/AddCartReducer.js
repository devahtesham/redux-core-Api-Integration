import ACTION_TYPES from "../ReduxConstants/Constants";
import {
  addDoc,
  dbCollection,
  doc,
  getDoc,
  db,
  getDocs,
} from "../../firebase/firebase";

const INITIAL_STATE = {
  cartItems: [],
  totalCart: 0,
};
let allProducts = [];
const AddCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      const allItems = [...state.cartItems];
      // logic of prevent of adding product twice
      const itemsId = allItems.map((item) => item.prodId);
      if (!itemsId.includes(action.payload.prodId)) {
        // yahan wohi products aengi jin mn duplication nh hogi
        allItems.push(action.payload);
        const addProducts = async (prodItem) => {
          try {
            const myobj = {
              ...prodItem,
            };
            const docRef = await addDoc(dbCollection, myobj);
            // console.log("product added Successfully !", docRef.id);
            allProducts.push({
              localId: prodItem.prodId,
              dbId: docRef.id,
            });
            // console.log("product added Successfully !");
            // console.log("allProducts", allProducts);
            localStorage.setItem(
              "allProducts",
              JSON.stringify([...allProducts])
            );
          } catch (error) {
            console.log(error);
          }
        };

        addProducts(action.payload);

        // send products data to firestore data base
      }

      return {
        cartItems: [...allItems],
      };

    default:
      return {
        ...state,
      };
  }
};
export default AddCartReducer;
