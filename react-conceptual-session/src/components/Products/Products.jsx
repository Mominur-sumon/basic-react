import Product from "../Product/Product";

export default function Products({info}) {
    // const {info} = props;
    // console.log(info);
  return (
    <div>
      <h1>I am from Products</h1>
      <Product info={info}></Product>
    </div>
  );
}