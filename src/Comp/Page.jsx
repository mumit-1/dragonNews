import { FaBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

const Page = ({data}) => {
    console.log(data);
    return (
        <div className=" mx-auto my-5 bg-white shadow-md rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-base-300">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold text-gray-800 text-sm">{data.author.name}</p>
                <p className="text-gray-500 text-xs">{data.author.published_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaBookmark className="text-gray-500 text-lg cursor-pointer" />
              <FaShareAlt className="text-gray-500 text-lg cursor-pointer" />
            </div>
          </div>
    
          {/* Thumbnail with Title Overlay */}
          
          <div className="px-4">
          <h2 className=" font-bold text-2xl my-2">{data.title}</h2>
            <img src={data.thumbnail_url} alt="Thumbnail" className="w-full h-[450px] rounded-lg object-cover" />
            
          </div>
    
          {/* Details */}
          <div className="p-4">
            <p className="text-sm text-gray-600">
              {data.details.slice(0, 150)}...
              <span className="text-blue-500 cursor-pointer"> Read More</span>
            </p>
          </div>
    
          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-2 border-t">
            <div className="flex items-center">
              <span className="flex items-center text-yellow-500 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="text-gray-600 text-sm ml-2">{data.rating.number}</span>
            </div>
            <span className="text-gray-500 text-sm">{data.total_view} views</span>
          </div>
        </div>
      );
};

export default Page;