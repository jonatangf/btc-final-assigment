import {Route, Routes} from "react-router-dom";
import Top10 from "./Top10";
import SearchByTitle from "./SearchByTitle";
import SearchByOriginalTitle from "./SearchByOriginalTitle";
import SearchByOverview from "./SearchByOverview";

const Body = () => {
    return (
        <div className="body">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Top10/>}/>
                    <Route path="/search-by-title" element={<SearchByTitle/>}/>
                    <Route path="/search-by-original-title" element={<SearchByOriginalTitle/>}/>
                    <Route path="/search-by-overview" element={<SearchByOverview/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Body;
