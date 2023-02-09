import { useEffect, useState } from 'react'
import PageHeader from './components/layout/PageHeader'
import PageTitle from './components/layout/PageTitle'
import TableRow from './components/TableRow'
import Summary from './components/Summary'
import {api} from './provider'
import './styles.scss'

function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const [cart, setCart] = useState([]);

  // const summaryObject = {
  //   subtotal: Number,
  //   shipping: Number,
  //   coupon: Number,
  //   Total: Number,

  // }

  const productObject = {
    name: 'product',
    category: 'type',
    price: randomNumber(100, 850),
    quantity: randomNumber(1,4),
  }

  const fetchData = () => {
    api.get('/cart').then((response) => setCart(response.data))
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleAddProduct = () => {


    api.post('/cart', productObject).then((response) => {
      fetchData();
    });
  };

  const handleRemoveProduct = (item) => {


    api.delete(`/cart/${item._id}`).then((resnponse) => {
      fetchData();
    });

  }

  const handleUpdateProduct = (item, action) => {

    let newQuantity = item.quantity

    if(action === 'decrease') {
      if(newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }

    if(action === 'increase') {
      newQuantity += 1;
   }

   const newData = {...item, quantity: newQuantity}
   delete newData._id;
   api.put(`/cart/${item._id}`, newData).then(() => {
    fetchData()
   })

  };

  const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
      sum += item.price * item.quantity;
    }

    return sum;
  };

  const cartTotal = getTotal()

  console.log(cartTotal)

  return (
    <>
      <PageHeader header={'Shopping Express'} />
      <main>
        <PageTitle title={'Your Cart'} />
        <div className="content">
          <section>
            <button
              onClick = {handleAddProduct}
              style={{padding: '5px 10px', marginBottom: 15}}
            >
              Add to cart
            </button>
            <table id="cart">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <TableRow
                    key={item._id}
                    data={item}
                    handleRemoveProduct={handleRemoveProduct}
                    handleUpdateProduct={handleUpdateProduct}
                  />
                ))}

                {cart.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{textAlign:'center'}}>
                      <b>Empty cart</b>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </section>
          <aside>
            <Summary total={cartTotal}/>
          </aside>
        </div>
      </main>
    </>
  )
}

export default App
