// eslint-disable-next-line react/prop-types
function Item({ itemName, price, imgsrc }) {
  return (
    <div className="w-60 min-h-90  shadow-2xl ">
      <div className="w-60 overflow-clip">
        <img className="h-40 w-fit" src={imgsrc} alt="men" />
      </div>
      <div className="flex flex-col justify-center items-center h-48 bg-gray-100 gap-3">
        <h1 className="text-xl font-medium capitalize">{itemName}</h1>
        <p>⭐⭐⭐⭐</p>
        <div>
          <p className=" text-xl font-bold ">${price}</p>
          <p className="text-2xl font-thin line-through">$321</p>
          <button className="border-2 rounded-xl p-2 bg-blue-500 text-white -mx-6">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
