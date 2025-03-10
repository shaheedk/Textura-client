import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const GenerateButton = () => {
  return (
    
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6">
        See the magic.Try now
      </h1>
      <Link to='/result' className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500">
        Generate Images
  
      <img src={assets.star_group} alt="" className="h-6" />
      
      </Link>
    </div>
  );
};

export default GenerateButton;
