import Card from "../UI/Card";
import "./AdvertItem.css"

const AdvertItem = (props) =>{
    console.log(props.item)

return(        
        <Card>
            <li className="title">{props.item.title}</li>
            <li className="description">{props.item.description}</li>
            <li className="date">{props.item.created_at}</li>
        </Card>    
    )
}

export default AdvertItem;