import React from "react";

export const Checkout = () => {
  return (
    <div>
      <div>
        <div
          className='grid-3'
          style={{
            width: "400px",
            height: "80px",
          }}
        >
          <div className='info'>
            <span>
              <h2>Samurai King Resting</h2>
            </span>
            <span>
              <h2>$100,000</h2>
            </span>
          </div>
          <div
            className='pic'
            style={{
              height: "50px",
              width: "50px",
            }}
          >
            <img
              src='https://images.pexels.com/photos/1098366/pexels-photo-1098366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
            />
          </div>
        </div>
        <br />
        <hr />
        <br />
      </div>
      <div className='clear'>
        <h2>CLEAR</h2>
      </div>
    </div>
  );
};
