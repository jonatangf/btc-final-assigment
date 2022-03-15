import {Route, Routes} from "react-router-dom";
import SearchBySpanishTitle from "./SearchBySpanishTitle";
import SearchByOriginalTitle from "./SearchByOriginalTitle";
import SearchByOverview from "./SearchByOverview";
import Top10 from "./top10/Top10";

const Body = () => {
    return (
        <div className="body">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Top10/>}/>
                    <Route path="/search-by-title" element={<SearchBySpanishTitle/>}/>
                    <Route path="/search-by-original-title" element={<SearchByOriginalTitle/>}/>
                    <Route path="/search-by-overview" element={<SearchByOverview/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Body;
