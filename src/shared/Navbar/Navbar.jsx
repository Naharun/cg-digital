import { RiSearchLine } from "react-icons/ri";
import { FaAppleAlt, FaHome, FaPhoneAlt, FaRegHeart, FaTrophy } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoCartOutline, IoNotificationsOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { FcShop } from "react-icons/fc";
import { BsWalletFill } from "react-icons/bs";
import { TbCoin } from "react-icons/tb";
import { PiChatsBold } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";



const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut =() =>{
    logOut()
    .then(result =>{})
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className="container w-full mx-auto shadow-md">
        <div className=" bg-black pr-20">
           <div className="flex justify-end  text-white gap-5">
             <h1 className="flex gap-2 items-center"> <FaPhoneAlt />Customer care</h1>
             <h1 className="flex gap-2 items-center"><GrUserManager />Track Your Order</h1>
             <h1 className="flex gap-2 items-center"><IoNotificationsOutline />Notification</h1>
           </div>
        </div>
      <div className="navbar w-full mx-auto bg-base-100 px-20">
        <div className="flex-1 gap-2">
          <h1 className="text-xl font-bold text-blue-950">
            CG <span className="text-sm text-blue-600">|DIGITAL</span>
          </h1>
          <input
            type="text"
            placeholder="Search for products"
            className="input input-bordered w-1/3 h-8"
          />
          <RiSearchLine className="search-icon" />
        </div>
        <div className=" gap-5">
          <span className=" grid justify-items-stretch">
            <a className="justify-self-center"><FaRegHeart /></a><a>Wishlist</a>
          </span>
          <span className=" grid justify-items-stretch">
          <a className="justify-self-center"><MdAccountCircle /></a><a> Account</a>
          </span>
          <span className=" grid justify-items-stretch">
          <a className="justify-self-center"><IoCartOutline /></a><a>Cart</a>
          </span>
        </div>
      </div>
      <div className="flex px-20 gap-2">
        <div className="flex w-full mx-auto bg-base-100 gap-6">
        <button className=" bg-blue-800 text-white mt-3 px-14">CATEGORIES</button>
        <h1 className="flex items-center gap-1 lg:gap-2"><span className="text-red-600"><FaHome /></span>HOME</h1>
        <h1 className="flex items-center gap-1 lg:gap-2"><FcShop />SHOP</h1>
        <h1 className="flex items-center gap-1 lg:gap-2"><span className="text-orange-600"><BsWalletFill /></span>WALLET</h1>
        <h1 className="flex items-center gap-1 lg:gap-2"><span className="text-yellow-400"><FaAppleAlt /></span>Hot DEALS!</h1>
        <h1 className="flex items-center gap-1 lg:gap-2"><span className="text-yellow-400"><FaTrophy /></span>TOP BRANDS</h1>
        <h1 className="flex items-center gap-1 lg:gap-2"><span className="text-yellow-400"><TbCoin /></span>EARNS COINS</h1>
        {user ? <button className='text-black fs-5'  onClick={handleLogOut}>Sign Out</button> : <Link className=' fs-5  rounded-3 p-2 text-black text-decoration-none mx-3' to='/registration'> Registration</Link>}

        </div>
        <div className="flex-none bg-base-200 mt-3 px-2">
          <ul className=" text-blue-900 menu menu-horizontal">
            <li>
              <details>
                <summary className="text-blue-900">
                  <PiChatsBold />CG|CHAT
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
