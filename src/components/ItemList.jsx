import Item from "./Item";
import {Grid} from "@mui/material";

const ItemList = ({movies: items}) => {
    return (
        <Grid container spacing={2} className="movie-list">
            {items === undefined || items.length === 0 ? (
                <div className="container">
                    <h4>No hay elementos en este listado</h4>
                </div>
            ) : (
                items.map(item => (
                    <Grid item key={item.id} xs={2.3}>
                        <Item movie={item}/>
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default ItemList;
