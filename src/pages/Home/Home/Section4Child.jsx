import { BsCart3 } from "react-icons/bs";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

const Section4Child = ({ tv }) => {
  const { img, name, rating, coin, percent, money, crossMoney } = tv;
  return (
    <div className="container w-full mx-auto bg-base-100 shadow-xl">
        <div className="flex justify-between pr-4 pt-4">
          <span className="indicator indicator-item bg-blue-800 text-white p-1 rounded-sm">new</span>
          <span className="text-2xl"><FaRegHeart /></span> 
        </div>
        <div>
          <img className="px-10 pt-10" src={img} alt="" /> 
        </div>
        <div className="border-2 m-2 p-2 space-y-2 shadow-md">
            <div>
              <h2 className="font-bold">{name}</h2>
            </div>
            <div className="flex">
              <p>{rating}</p>
              <p className="flex items-center gap-1"><span className="text-slate-400">|</span><span className="text-yellow-400"><TbCoinRupeeFilled /></span>{coin}</p>
            </div>
            <div className="divider divider-start"></div>
            <div className="flex gap-3">
              <p className="text-sky-800 font-bold bg-base-300">{percent}</p>
              <p className="font-bold">${money}</p>
              <p className="text-slate-500 line-through">${crossMoney}</p>
            </div>
            <div className="border-2 flex justify-center">
              <button className="text-cyan-800 font-bold flex items-center gap-3"><BsCart3 />Add to cart</button>
            </div>
        </div>
    </div>
  );
};

export default Section4Child;
