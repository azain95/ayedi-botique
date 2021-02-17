import react from "react";
import products from "../products"
import styles from "../styles"

const productitem = (props) => {
    const product = props.product; 
    return (
        <div style = {styles.product} key={product.id}>
        <img
        Style={styles.productimage}
        alt={product.name}
        src = {product.image}
        />
        <p style={styles.text}>{product.name}</p>
        <p style={styles.text}>{product.price}KD</p>
        </div>
    )


};
export default productitem;