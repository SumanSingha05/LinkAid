import {
  collection,
  query,
  where,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../config/firebase";

class Service {
  constructor() {
    this.userCollectionRef = collection(db, "userDetails");
    this.ngoCollectionRef = collection(db, "ngoDetails");
  }

  async addUser(userObj, userId) {
    const {
      name,
      accountType,
      address,
      phoneNumber,
      district,
      specialization,
    } = userObj;
    try {
      const dataUpdateRes = await addDoc(this.userCollectionRef, {
        uid: userId,
        name,
        accountType,
        address,
        phoneNumber,
        district,
        specialization,
      }); // closing data update...

      return dataUpdateRes.id;
    } catch (error) {
      // closing try
      console.log(error);
      return null;
    } //closing catch
  } //closing addAdmin

  //GETTING DETAILS

  async getUserByUID(userId) {
    const q = query(this.userCollectionRef, where("uid", "==", userId));
    const qs = await getDocs(q); //query snapshot

    const res = [];
    qs.forEach((doc) => {
      res.push({ id: doc.id, data: doc.data() });
    });
    return res[0]; //first object
  }

  //DELETING DETAILS
  async deleteUser(docId, userId) {
    const reqd_doc = doc(db, "user", docId);

    try {
      await deleteDoc(reqd_doc);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
} // closing service

export default Service;
