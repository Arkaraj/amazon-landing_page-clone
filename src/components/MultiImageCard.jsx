import React from "react";
// import ExpImage from "../Images/image";

const MultiImageCard = ({ data, title }) => {
  return (
    <>
      {data ? (
        <div className="home__category">
          <div className="home__cateName">
            <h2>{title ? title : data.title}</h2>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          </div>
          <div className="image__container">
            {data.items.map((item, indx) => (
              <div key={indx + 1}>
                <img
                  className="image__content"
                  src={`Images/${item.imgPath}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <small>See more</small>
        </div>
      ) : null}
    </>
  );
};

export default MultiImageCard;
