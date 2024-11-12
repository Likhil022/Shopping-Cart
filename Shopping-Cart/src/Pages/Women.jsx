import Item from "../Components/Item/Item.jsx";
import Women_1 from "../assets/women-1.jpg";
import Women_2 from "../assets/women-2.jpg";
import Women_3 from "../assets/women-3.jpg";
import Women_4 from "../assets/women-4.jpg";
import Women_5 from "../assets/women-5.jpg";
import Women_6 from "../assets/women-6.jpg";
function Women() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
      <Item itemName="T-shirt Maroon " price="123" imgsrc={Women_1} />
      <Item itemName="T-shirt Maroon " price="123" imgsrc={Women_2} />
      <Item itemName="T-shirt Maroon " price="123" imgsrc={Women_3} />
      <Item itemName="T-shirt Maroon " price="123" imgsrc={Women_4} />
      <Item itemName="T-shirt Maroon " price="123" imgsrc={Women_5} />
      <Item itemName="T-shirt Maroon " price="123" imgsrc={Women_6} />
    </div>
  );
}

export default Women;
