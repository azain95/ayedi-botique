import react from "react";
import styles from "../styles";

const Productitem = (props) => {
  const product = props.product;
  return (
    <div style={styles.product} key={product.id}>
      <img style={styles.productimage} alt={product.name} src={product.image} />

      <p style={styles.text}>{product.name}</p>
      <p style={styles.text}>{product.price}KD</p>
    </div>
  );
};
export default Productitem;
