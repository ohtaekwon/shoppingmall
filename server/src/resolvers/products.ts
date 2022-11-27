import { Resolver } from "./type";
import { DBField, writeDB } from "../dbController";
import { Events } from "./type";
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  DocumentData,
  doc,
  orderBy,
  addDoc,
  serverTimestamp,
  where,
  query,
  limit,
} from "firebase/firestore";

// 기본 형식
// (parent, args, context, info)=>{}

const setJSON = (data: Events) => writeDB(DBField.EVENT, data);
const PAGE_SIZE = 15;

const productResolver: Resolver = {
  Query: {
    products: async (parent, arg) => {
      const products = collection(db, "products");
      const querySnapshot = await getDocs(products);
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        const d = doc.data();
        data.push({
          id: doc.id,
          ...d,
        });
      });
      return data;
    },
    product: async (parent, { id }) => {
      const querySnapshot = await getDoc(doc(db, "products", id));
      return {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };
    },
    selectedProducts: async (parent, { category_lg }) => {
      const products = collection(db, "products");
      const queryOptions = [orderBy("createdAt", "desc")];
      if (category_lg === "men") {
        queryOptions.unshift(where("category.category_lg", "==", "men"));
      }
      if (category_lg === "women") {
        queryOptions.unshift(where("category.category_lg", "==", "women"));
      }
      const q = query(products, ...queryOptions, limit(PAGE_SIZE));
      const querySnapshot = await getDocs(q);
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        const d = doc.data();
        data.push({
          id: doc.id,
          ...d,
        });
      });
      console.log("data", data);
      return data;
    },
  },
};
export default productResolver;
