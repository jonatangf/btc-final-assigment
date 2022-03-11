import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h2>The movie DB</h2>
            <div className="container">
                <Button component={Link} to="/" className="col-sm-3">Top 10</Button>
                <Button component={Link} to="/search-by-title" className="col-sm-3">Buscar por título</Button>
                <Button component={Link} to="/search-by-original-title" className="col-sm-3">Buscar por título
                    original</Button>
                <Button component={Link} to="/search-by-overview" className="col-sm-3">Buscar por overview</Button>
            </div>
        </div>
    );
}

export default Header;
