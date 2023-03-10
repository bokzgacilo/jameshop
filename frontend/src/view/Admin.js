import { useState } from "react";
import { db, storage} from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Axios from 'axios';


function Admin() {

  const [ItemName, setItemName] = useState("");
  const [ItemPrice, setItemPrice] = useState("");
  const [ItemCategory, setItemCategory] = useState("Card");
  const [ItemPhoto, setItemPhoto] = useState("");

  const postProduct = () => {
    Axios.post("http://localhost:3300/api/insert", {
      name: ItemName,
      price: ItemPrice,
      category: ItemCategory,
      photo: ItemPhoto
    }).then((response) => {
      console.log(response)
    })
  }

  const handleAddProduct = () => {
    if (!ItemPhoto){
      alert('Please select file')
    }else {
      const storageRef = ref(storage, `/${ItemCategory}/${ItemPhoto.name}`);
      const uploadTask = uploadBytesResumable(storageRef, ItemPhoto);

      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        const docRef = addDoc(collection(db, "products"), {
          name: ItemName,
          price: ItemPrice,
          category: ItemCategory,
          photo: url
        });
  
        if(docRef && uploadTask){
          alert('Product Added Successfully')
        }

      })

      
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
        <button onClick={postProduct}>Add</button>
      </div>
    </>
  );
}

export default Admin;
