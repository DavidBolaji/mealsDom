import { useState, useContext } from 'react';
import Header from './components/Layout/Header';
import CartContext from './store/cart-context';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {
  const ctx = useContext(CartContext)
  const [showCart, setShowCart] = useState(false)
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [exists, setExists] = useState({})
  const [cart, setCart] = useState(0)

  
  // toggle Cart
  const setCartHandler = () => {
    setShowCart(prev => {
      return !prev
    })
  }


//  add item to cart
  const addItemHandler = (item) => {

    // check if item aready exist in cart
    const ans = items.some(el => {
      return el.name === item.name;
    })

    // if false
    if(!ans) {
      //  add item to cart for the first time
      setExists(prev => {
        return{
          [item.name]: Number(item.amount),
          ...prev
          }

      })

      //  calculate total price which is the previous price plus new price multiplied by amount of items
      ctx.totalAmount = ctx.totalAmount + Number(item.price.replace('$','')) * Number(item.amount);

      //  set the total price
      setTotal(ctx.totalAmount);

      //  inssert item into items array
      setItems(prev => {
        return [
           item,
           ...prev
        ]
      })


    } else { // if true
      
      // increment value of item in cart
      setExists(prev => {
        return {
          ...prev,
          [item.name]: exists[item.name] + Number(item.amount),
          
        }
         
      })

      // calculate new price by adding previous price to current price multiplied by amount
      ctx.totalAmount = ctx.totalAmount + Number(item.price.replace('$','')) * Number(item.amount);

      // set the new total
      setTotal(ctx.totalAmount);
      
      // set item
      setItems(prev => {
      // filter the items array and return the values where item is not equal to current item
      const newArr  = prev.filter(e => e.name !== item.name )

        return [
            // create new object in order to modify amount
         
          // return newarray
           {
            key: item.key,
            id: item.id,
            description: item.description,
            price: item.price,
            name: item.name,
            // amount is previous value in exist plus the current 
            amount : exists[item.name] + Number(item.amount)
          },
           ...newArr
        
        ]

      })

    }

    //  increment cart value
    setCart(prev => {
      return prev + Number(item.amount);
    })
    
  }

// console.log(items);

  const removeItemHandler = (item) => {

   
    if(exists[item.name]  <= 1 ) {

      ctx.totalAmount = ctx.totalAmount - Number(item.price.replace('$',''));

       // set the new total
       setTotal(Math.abs(ctx.totalAmount));

       setItems(prev => {
              // filter the items array and return the values where item is not equal to current item
          const newArr  = prev.filter(e => e.name !== item.name )

          return [
            // return newarray
            ...newArr,
          ]

      })

      setCart(prev => {
        return prev - 1;
      })


      
    } else {

       ctx.totalAmount = ctx.totalAmount - Number(item.price.replace('$',''));

       // set the new total
       setTotal(Math.abs(ctx.totalAmount));

        setItems(prev => {
              // filter the items array and return the values where item is not equal to current item
          const newArr  = prev.filter(e => e.name !== item.name )

          return [
              // create new object in order to modify amount
          
            // return newarray
            ...newArr,
            {
              key: item.key,
              id: item.id,
              description: item.description,
              price: item.price,
              name: item.name,
              // amount is previous value in exist plus the current 
              amount : exists[item.name] - 1
            }
          
          ]

      })

      setCart(prev => {
        return prev - Number(item.amount);
      })

        setExists(prev => {
        return{
          ...prev,
          [item.name]: exists[item.name] - 1
          
          }

      })
    }

  }



  return (
    <CartContext.Provider value={{
      item: items,
      inCart: cart,
      totalAmount: total,
      addItem: addItemHandler,
      removeItem: removeItemHandler
    }}>
      {showCart && <Cart onHideCartHandler={setCartHandler}/>}
      <Header onClickHandlerSec={setCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartContext.Provider>
  );
}

export default App;
