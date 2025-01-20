import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
    return (
        <div className="sticky top-0 py-2 bg-white">
            <div className="flex gap-2 justify-center items-center bg-base-300 p-2">
                <p className="bg-red-700 text-white px-1.5">Latest</p>
                <Marquee speed={80} className="space-x-20">
                    <Link to="/news">Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet.</Link>
                    <Link to="/news">Lorem ipsum dolor sit amet consecteturipsum dolor sit amet.</Link>
                    <Link to="/news">Lorem ipsum dolor sit amet consecteturipsum dolor sit amet.</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default Latest;