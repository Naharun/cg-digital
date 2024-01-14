import img1 from "../../../assets/secured.png";
import img2 from "../../../assets/delivery.png";
import img3 from "../../../assets/excelent.png";
import img4 from "../../../assets/pay.png";
import { MdOutlineVerified } from "react-icons/md";

const Section5 = () => {
    return (
       <div className="container w-full mx-auto py-6">
           <div className="flex justify-center items-center gap-10">
              <div className="flex items-center gap-2">
                <img className="w-12" src={img1} alt="" />
                <h1 className="font-bold">Secured <br/>Payment</h1>
              </div>
              <p>|</p>
              <div className="flex items-center gap-2">
                <img className="w-12" src={img2} alt="" />
                <h1 className="font-bold">On Time<br/>Delivery</h1>
              </div>
              <p>|</p>
              <div className="flex items-center gap-2">
                <img className="w-12" src={img3} alt="" />
                <h1 className="font-bold">Excellent Customer<br/>Service</h1>
              </div>
              <p>|</p>
              <div className="flex items-center gap-2">
                <img className="w-12" src={img4} alt="" />
                <h1 className="font-bold">Excellent CG Pay<br/>Service</h1>
              </div>
              <p>|</p>
              <div className="flex items-center gap-2">
                <span className="text-4xl"><MdOutlineVerified /></span>
                <h1 className="font-bold">Verified Seller</h1>
              </div>
            </div>
       </div>
    );
};

export default Section5;