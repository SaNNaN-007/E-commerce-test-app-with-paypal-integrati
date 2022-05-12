import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
// import data from './data';
import { useState, useEffect} from 'react';
import axios from 'axios';



function App() {


  const [datas, setProducts] = useState([]) 


  useEffect( () => {
      
      async function getData() {
          const res = await axios.get('http://localhost:3000/api/products.json');
          setProducts(res.data)
      }
     
  getData();
  },[]);

console.log(datas)


  // const { products } = data;

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(product)
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        
          <Main products={datas} onAdd={onAdd}></Main>
        
        
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
     
    </div>
      
    </div>
  );
}

export default App;
