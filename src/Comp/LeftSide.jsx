import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSide = () => {
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>setCategory(data.data.news_category))
    },[]);
    return (
        <div className="sticky top-14">
            <h1 className="font-bold">All Categories ({category.length}) </h1>
            <div className="p-2">
                {
                    category.map(data=><NavLink to={`/category/${data.category_id}`} key={data.category_id} className="btn hover:bg-orange-400 w-full justify-start bg-base-300 rounded-none text-opacity-60">{data.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSide;