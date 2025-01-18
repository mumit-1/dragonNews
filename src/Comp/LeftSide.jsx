import { useEffect, useState } from "react";


const LeftSide = () => {
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>setCategory(data.data.news_category))
    },[]);
    return (
        <div>
            <h1 className="font-bold">All Categories ({category.length}) </h1>
            <div className="p-2">
                {
                    category.map(data=><button key={data.category_id} className="block btn w-full text-left bg-base-300 rounded-none text-opacity-60">{data.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftSide;