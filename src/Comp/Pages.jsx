import { useLoaderData } from "react-router-dom";
import Page from "./Page";

const Pages = () => {
    const {data} = useLoaderData();
    
    return (
        <div>
             
             {
                data.map((data)=><Page key={data._id} data={data}></Page>)
             }
        </div>
    );
};

export default Pages;