import { getDocs, collection, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import style from "./style.module.css";

function Home() {
  const [Item, setItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getDocs(collection(db, "products")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItem(newData);
        console.log(Item, newData);
      }
    );
  };

  const openProduct = (product_id) => {
    navigate(`/item/${product_id}`);
  };

  return (
    <>
      <h4>Welcome to Mad Dog Collectibles</h4>

      <h5>What's New</h5>
      <div className={style.new_product_list}>
        {Item?.map((Item, i) => (
          <div
            onClick={() => openProduct(Item.id)}
            className={style.new_product}
            key={i}
          >
            <img className={style.product_image} src={Item.photo} />
            <div className={style.description}>
              <p>{Item.name}</p>
              <p>{Item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h5>All Products</h5>
      <div className={style.all_product_list}>
        {Item?.map((Item, i) => (
          <div
            onClick={() => openProduct(Item.id)}
            className={style.new_product}
            key={i}
          >
            <img className={style.product_image} src={Item.photo} />
            <div className={style.description}>
              <p>{Item.name}</p>
              <p>{Item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
