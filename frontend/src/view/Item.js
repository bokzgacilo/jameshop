import { useParams } from "react-router-dom";


function Item() {
  const {id} = useParams();

  return (
    <>
      {id}
      <h2>Item</h2>
    </>
  );
}

export default Item;
