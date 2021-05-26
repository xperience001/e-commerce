import React from "react";
import { useStateValue } from "../StateProvider";
import Button from "@material-ui/core/Button";

export const Product = ({
  id,
  category,
  name,
  price,
  featured,
  image,
}: {
  id: number;
  category: string;
  name: string;
  price: number;
  featured: boolean;
  image: string;
}) => {
  const [{ basket }, dispatch]: any = useStateValue();

  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        category: category,
        name: name,
        price: price,
        featured: featured,
        image: image,
      },
    });
  };

  return (
    <div>
      {" "}
      <div className='item'>
        <img className='itemImage' src={image} alt='' />
        {/* <div className='add' onClick={addToBasket}>
          ADD TO CART
        </div> */}
        <span className='hide'>
          {" "}
          <Button
            className='add'
            variant='contained'
            color='secondary'
            onClick={addToBasket}
          >
            ADD TO CART
          </Button>
        </span>
      </div>
      <span className='label'>
        <span>
          <h3>{category}</h3>
        </span>
        <span>
          <h1>{name}</h1>
        </span>
        <span>
          <h2>{price}</h2>
        </span>
      </span>
    </div>
  );
};
