import Item from "../Components/Item/Item.jsx";
import men_1 from "../assets/men-1.jpg";
import men_2 from "../assets/men-2.jpg";
import men_3 from "../assets/men-3.jpg";
import men_4 from "../assets/men-4.jpg";
import men_5 from "../assets/men-5.jpg";
import men_6 from "../assets/men-6.jpg";
function Men() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
      <Item itemName="T-shirt Maroon basis-1/4" price="123" imgsrc={men_1} />
      <Item itemName="T-shirt Maroon basis-1/4" price="123" imgsrc={men_2} />
      <Item itemName="T-shirt Maroon basis-1/4" price="123" imgsrc={men_3} />
      <Item itemName="T-shirt Maroon basis-1/4" price="123" imgsrc={men_4} />
      <Item itemName="T-shirt Maroon basis-1/4" price="123" imgsrc={men_5} />
      <Item itemName="T-shirt Maroon basis-1/4" price="123" imgsrc={men_6} />
    </div>
  );
}

export default Men;
