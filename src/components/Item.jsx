import {Card} from "@mui/material";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face/';

const Item = ({item}) => {
    return (
        <Card className="item">
            <div>
                <img src={BASE_IMAGE_URL + item.poster_path} alt={item.title}/>
            </div>
            <div>{item.title}{item.name}</div>
        </Card>
    );
}

export default Item;
