import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css';


const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, quantity, img, shipping } = product;
    // console.log(product)
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;