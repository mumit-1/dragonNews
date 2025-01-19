import { useLoaderData } from "react-router-dom";

const Page = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div>
            {data.length} <p>news in that category</p>
        </div>
    );
};

export default Page;