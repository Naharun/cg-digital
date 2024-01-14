import { useEffect } from "react";
import { useState } from "react";
import Section4Child from "./Section4Child";
import img1 from "../../../assets/electric-water-heater-linear-icon-vector-28883512.webp"
import img2 from "../../../assets/digital.jpg"

const Section4 = () => {
    const [smartTv, setSmartTv] = useState([]);
    useEffect(()=>{
        fetch('api.json')
        .then(res => res.json())
        .then(data => setSmartTv(data))
    },[])
    return (
        <div className="container w-full mx-auto bg-base-200 space-y-8 pb-20">
            <div className="flex px-20 pt-11 gap-3">
               <h1 className="text-xl font-bold">Explore All TV Categories</h1>
               <p className="text-slate-300">|</p>
               <p className="text-sm underline">View All</p>
            </div>
            <div className="grid grid-cols-4 px-20 gap-2">
                {
                  smartTv.map(tv =><Section4Child key={tv.id} tv={tv}></Section4Child>)
                }
            </div>
            <div className="flex px-20 pt-11 gap-3">
               <h1 className="text-xl font-bold">Lets Get Warm This Winter</h1>
               <p className="text-slate-300">|</p>
               <p className="text-sm">Browse through the categories for winter products</p>
            </div>
            <div className="flex items-center gap-8 px-20 w-full mx-auto">
                <img className="mask mask-circle w-40 h-36" src={img1} alt="" />
                <img className="mask mask-circle w-40 h-36" src={img1} alt="" />
                <img className="mask mask-circle w-40 h-36" src={img1} alt="" />
                <img className="mask mask-circle w-40 h-36" src={img1} alt="" />
                <img className="mask mask-circle w-40 h-36" src={img1} alt="" />
                <img className="mask mask-circle w-40 h-36" src={img1} alt="" />
            </div>
            <div className="flex px-20 pt-11">
               <h1 className="text-xl font-bold">Highlights</h1>
            </div>
            <div className="grid grid-cols-3 justify-items-center w-full mx-auto px-20 gap-9">
                <img className="w-96 rounded-md" src={img2} alt="" />
                <img className="w-96 rounded-md" src={img2} alt="" />
                <img className="w-96 rounded-md" src={img2} alt="" />
                <img className="w-96 rounded-md" src={img2} alt="" />
                <img className="w-96 rounded-md" src={img2} alt="" />
                <img className="w-96 rounded-md" src={img2} alt="" />
            </div>
        </div>
    );
};

export default Section4;