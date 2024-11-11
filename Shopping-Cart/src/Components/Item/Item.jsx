// eslint-disable-next-line react/prop-types
function Item({ itemName, price, imgsrc }) {
  return (
    <div className="w-60 h-90 shadow-2xl ">
      <div className="w-60 overflow-clip">
        <img className="h-40 w-fit" src={imgsrc} alt="men" />
      </div>
      <div className="flex flex-col justify-center items-center h-40 bg-gray-100 gap-3">
        <h1 className="text-xl font-medium capitalize">{itemName}</h1>
        <p>⭐⭐⭐⭐</p>
        <div>
          <p className=" text-xl font-bold ">${price}</p>
          <p className="text-2xl font-thin line-through">$321</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
