import React from 'react';

const Summary = ({total}) => {
  return (
    <>
      <div className="box">
        <header>Order Summary</header>
        <div className="info">
          <div><span>Subtotal</span><span>${total}</span></div>
          <div><span>Shipping</span><span>Free</span></div>
          <div><button>Add coupon code<i className='bx bx-right-arrow-alt'></i></button></div>
        </div>
        <footer><span>Total</span><span>${total}</span></footer>
      </div>
      <button>Checkout</button>
    </>

  );
};

export default Summary;