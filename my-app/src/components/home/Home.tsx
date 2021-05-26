import React from "react";
import "../../App.css";
import { Product } from "./Product";
import Checkbox from "@material-ui/core/Checkbox";

export const Home = (): any => {
  const categories = [
    "People",
    "Premium",
    "Pets",
    "Food",
    "Landmarks",
    "Cities",
    "Nature",
  ];

  const priceRange = [
    "Lower than $20",
    "$20 - $100",
    "$100 - $200",
    "More than $200",
  ];

  const Data = [
    {
      id: 111111,
      category: "Pets",
      name: "lifestyle",
      price: 100,
      featured: true,
      bestseller: true,
      image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
      id: 111111,
      category: "Pets",
      name: "ocean",
      price: 250,
      bestseller: false,

      featured: false,
      image:
        "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
      id: 111111,
      category: "Pets",
      name: "life",
      price: 150,
      bestseller: true,

      featured: false,
      image:
        "https://images.pexels.com/photos/6624196/pexels-photo-6624196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
      id: 111111,
      category: "Pets",
      name: "nature",
      price: 500,
      bestseller: false,

      featured: false,
      image:
        "https://images.pexels.com/photos/5490379/pexels-photo-5490379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
      id: 111111,
      category: "Pets",
      name: "atomic",
      price: 1000,
      bestseller: false,

      featured: false,
      image:
        "https://images.pexels.com/photos/6624183/pexels-photo-6624183.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
      id: 111111,
      category: "Pets",
      name: "soft",
      price: 200,
      bestseller: false,

      featured: false,
      image:
        "https://images.pexels.com/photos/6647510/pexels-photo-6647510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  return (
    <div>
      <div className='featured'>
        <nav className='navbar'>
          <span>
            {Data.map((data, index) => {
              if (data.featured) {
                return (
                  <span key={index}>
                    <h1>{data.name}</h1>
                    <br />
                  </span>
                );
              }
            })}
          </span>
          <span className='btnBlack'>ADD TO CART</span>
        </nav>
        <div>
          {Data.map((data, index) => {
            if (data.featured) {
              return (
                <span key={index}>
                  <img className='BigImage' src={data.image} alt='' />
                  <br />
                </span>
              );
            }
          })}
          <div
            className='featured'
            style={{
              position: "absolute",
              marginTop: "-420px",
              textAlign: "center",
              color: "white",
              backgroundColor: "black",
              width: "100px",
            }}
          >
            <h3>Featured</h3>
          </div>
        </div>
      </div>
      <br />
      <span className='grid-4'>
        <span className='about' style={{ textAlign: "justify" }}>
          <p>
            <h2>About the Samurai King Resting</h2>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            verobeatae commodi facere culpa nesciunt corporis, quae tenetur vel
            atque enim aliquid, adipisci, praesentium provident debitis suscipit
            a officia molestiae. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vitae verobeatae commodi facere culpa nesciunt
            corporis, quae tenetur vel atque enim aliquid, adipisci, praesentium
            provident debitis suscipit a officia molestiae.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            verobeatae commodi facere culpa nesciunt corporis, quae tenetur vel
            atque enim aliquid, adipisci, praesentium provident debitis suscipit
            a officia molestiae.
          </p>
        </span>
        <span className='peoplealsobuy' style={{ textAlign: "right" }}>
          <p>
            <h2>People also buy</h2>
          </p>
          <br />
          <div>
            {" "}
            <span>
              <img
                style={{ width: "70px", height: "70px" }}
                src='https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt=''
              />
            </span>{" "}
            <span style={{ marginLeft: "20px" }}>
              <img
                style={{ width: "70px", height: "70px" }}
                src='https://images.pexels.com/photos/415188/pexels-photo-415188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt=''
              />
            </span>{" "}
            <span style={{ marginLeft: "20px" }}>
              <img
                style={{ width: "70px", height: "70px" }}
                src='https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt=''
              />
            </span>
          </div>
          <br />
          <p>
            <h2>Details</h2>
          </p>
          <p>size: 1020 * 1213 px</p>
          <p>size: 888mb</p>
        </span>
      </span>
      <br />
      <br />
      <br />
      <br />

      <hr />

      <br />
      <span className='type'>
        <span>
          <h1>Photography / Premium Photos</h1>
        </span>
        <span>
          <h3>Sort By: Price</h3>
        </span>
      </span>
      <span className='category, grid-4'>
        <span>
          <h3>Category</h3>
          <br />
          <ul>
            {categories.map((category, index) => {
              return (
                <span key={index}>
                  <Checkbox
                    // onChange={handleChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  {category}
                  <br />
                </span>
              );
            })}
          </ul>
          <br />
          <hr />
          <br />

          <h3>Price Range</h3>
          <br />
          <span>
            {" "}
            <ul>
              {priceRange.map((range, index) => {
                return (
                  <span key={index}>
                    <Checkbox
                      // onChange={handleChange}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                    {range}
                    <br />
                  </span>
                );
              })}
            </ul>
          </span>
        </span>
        <span className='products'>
          {Data.map((data, index) => {
            return (
              <span key={index}>
                <Product
                  id={data.id}
                  category={data.category}
                  name={data.name}
                  price={data.price}
                  featured={data.featured}
                  image={data.image}
                />
                <br />
              </span>
            );
          })}
        </span>
      </span>
    </div>
  );
};
