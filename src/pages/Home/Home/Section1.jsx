import img1 from "../../../assets/awesome-rewards_4x.png"
import img2 from "../../../assets/download.jpg"
const Section1 = () => {
    return (
        <div className="container w-full mx-auto">
            <div className="bg-base-200 flex items-center px-10">
            <img className="w-[540px] h-72 rounded-xl " src={img1} alt="" />
            <img className="w-[630px] rounded-3xl h-52" src={img2} alt="" />
        </div>
        </div>
    );
};

export default Section1;