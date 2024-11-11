import logo from "../../assets/Shopify.png";
import shoppingCart from "../../assets/shopping-cart.png";
import whishlist from "../../assets/wishlist.png";
import profile from "../../assets/profile.jpeg";
function Navbar() {
  return (
    <div className="flex justify-between px-10 py-5 border-b-2 pb-2 pl-16">
      <div>
        <img className="w-24 cursor-pointer" src={logo} alt="" />
      </div>
      <div>
        <input
          className="border-black border-2 w-96 h-12 rounded-2xl pl-4 font-semibold tracking-wider"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex w-44 justify-between items-center gap-6">
        <img className="w-8 h-10 cursor-pointer" src={shoppingCart} />
        <img
          className="w-12 h-12 cursor-pointer "
          src={whishlist}
          alt="wishlist"
        />
        <img
          className="w-12 h-12 border-black border-2 p-0.5 rounded-full cursor-pointer "
          src={profile}
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
