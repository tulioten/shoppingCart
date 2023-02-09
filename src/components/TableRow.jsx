import React from 'react';


const TableRow = ({data, handleRemoveProduct, handleUpdateProduct}) => {

  return (
    <tr>
      <td>
        <div className="product">
          <img src="https://picsum.photos/95/130" alt=""/>
          <div className="info">
            <div className="productName">{data.name}</div>
            <div className="category">{data.category}</div>
          </div>
        </div>
      </td>
      <td>${data.price}</td>
      <td>
        <div className="qty">
          <button onClick={() => {handleUpdateProduct(data, 'decrease')}} ><i className='bx bx-minus' ></i></button>
          <span>{data.quantity}</span>
          <button onClick={() => {handleUpdateProduct(data,'increase')}} ><i className='bx bx-plus' ></i></button>
        </div>
      </td>
      <td>${data.price * data.quantity}</td>
      <td>
        <button onClick={() => {
          handleRemoveProduct(data)
          }}
          className="remove"
        >
          <i className='bx bx-x'></i></button>
      </td>
    </tr>
  );
}

export default TableRow;
