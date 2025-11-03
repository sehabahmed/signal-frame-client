
import Image from "next/image";
import Link from "next/link";
import {FaArrowLeftLong} from "react-icons/fa6";

const NotFound = () => {

    return (
        <div className="boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl bg-[#00543A]">
            <Image src="https://i.ibb.co/LvLq6d3/Group-29.png" alt="illustration"
                 className="w-full lg:w-[400px]" width={400} height={400}/>
            <p className="text-white text-[1.2rem] w-full lg:w-[55%] text-center">Oops it seems you follow
                backlink</p>

            <Link href="/">
                <button
                className="py-3 px-6 sm:px-8 rounded-full bg-white text-black mt-4 flex items-center gap-2.5 cursor-pointer">
                <FaArrowLeftLong/> Back to home
            </button>
            </Link>
        </div>
    );
};

export default NotFound;
                    
