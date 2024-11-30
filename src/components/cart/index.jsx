import { useSelector } from 'react-redux'

// Styles
import * as Styles from "./styles";

import CartItem from '../cart-item/index'
import { selecProductsTotalPrice } from '../../redux/cart/cart.selector';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)

  const productsTotalPrice = useSelector(selecProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        
        {products.map(product => <CartItem product={product}></CartItem>)}

        <Styles.CartTotal>Total R$: {productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
