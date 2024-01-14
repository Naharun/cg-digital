import img1 from "../../../assets/download (3).png";
import img2 from "../../../assets/download (4).png";
import img3 from "../../../assets/cg.png";
import img4 from "../../../assets/download (5).png";
import img5 from "../../../assets/download (6).png";
import img6 from "../../../assets/download (7).png";
import img7 from "../../../assets/download (8).png";
import img8 from "../../../assets/sensei.png";
import img9 from "../../../assets/2023-08-21.jpg";

const Section3 = () => {
    return (
        <div className="container w-full mx-auto bg-base-200 space-y-8">
            <div className="flex px-20 pt-11 gap-3">
               <h1 className="text-xl font-bold">Explore Popular Brands</h1>
               <p className="text-slate-300">|</p>
               <p className="text-sm underline">View All</p>
            </div>
            <div className="flex items-center gap-8 px-20 w-full mx-auto">
                <img className="rounded-full w-28 h-28" src={img1} alt="" />
                <img className="rounded-full w-28 h-28" src={img2} alt="" />
                <img className="rounded-full w-28 h-28" src={img3} alt="" />
                <img className="rounded-full w-28 h-28" src={img4} alt="" />
                <img className="rounded-full w-28 h-28" src={img5} alt="" />
                <img className="rounded-full w-28 h-28" src={img6} alt="" />
                <img className="rounded-full w-28 h-28" src={img7} alt="" />
                <img className="rounded-full w-28 h-28" src={img8} alt="" />
            </div>
            <div className="px-20">
                <img className="w-full h-96" src={img9} alt="" />
            </div>
        </div>
    );
};

export default Section3;