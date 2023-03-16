import { React } from "react";

export default function ProductsList(props) {
  const displayProduct = (props) => {
    const { products } = props;
    return products.map((product, index) => {
      <div className="col-lg-4 col-md-4 col-sm-6 mb-2 size" key={product._id}>
        <div className="card h-100">
          <a href="#">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/700x400"
              alt=""
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{product.fulhausProductName}</a>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit,
              repellat sequi itaque deserunt, dolores in, nesciunt, illum
              tempora ex quae? Nihil, dolorem!
            </p>
          </div>
        </div>
      </div>;
    });
  };
  return (
    <>
        {displayProduct(props)}
    </>
  )
}
