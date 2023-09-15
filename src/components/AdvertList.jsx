import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../apiCalls/Api";
import AdvertItem from "./AdvertItem";
import "./AdvertList.css"

const AdvertList = () =>{

    const data = useLoaderData()

    return (
    <>
        <h1> Test aplikacija </h1>
        <ul className="list-wrapper">
            {data.map((item)=> <AdvertItem item={item} key={item.id}/>)}
        </ul>
    </>
        
    )
}

export default AdvertList;

export const ListLoader = async () => {
    const response = await axiosInstance.get("/oglasi")
    const data = await response.data;
    console.log(data)
    return data
}