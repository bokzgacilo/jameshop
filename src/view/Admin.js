import { useState } from "react";
import { db, storage} from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

function Admin() {

  const [ItemName, setItemName] = useState("");
  const [ItemPrice, setItemPrice] = useState("");
  const [ItemCategory, setItemCategory] = useState("Card");
  const [ItemPhoto, setItemPhoto] = useState("");

  const handleAddProduct = async () => {
    if (!ItemPhoto){
      alert('Please select file')
    }else {
      const storageRef = ref(storage, `${ItemCategory}/${ItemPhoto.name}`);
      const uploadTask = uploadBytesResumable(storageRef, ItemPhoto);

      const docRef = await addDoc(collection(db, "products"), {
        name: ItemName,
        price: ItemPrice,
        category: ItemCategory,
        photo: ItemPhoto.name
      });

      if(docRef || uploadTask){
        alert('Product Added Successfully')
      }
    }
  }

  return (
    <>
      <h4>Add Product</h4>
      <div>
        <input type="text" placeholder="Name" onChange={e => setItemName(e.target.value)}></input>
        <input type="number" placeholder="Price" onChange={e => setItemPrice(e.target.value)}></input>
        <select onChange={e => setItemCategory(e.target.value)}>
          <option>Card</option>
          <option>Photocard</option>
          <option>Figure</option>
        </select>
        <input type="file" accept=".png, .jpg" onChange={e => setItemPhoto(e.target.files[0])}></input>
        <button onClick={handleAddProduct}>Add</button>
      </div>
    </>
  );
}

export default Admin;
