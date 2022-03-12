import {Component} from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        top10Movies: state.top10Movies,
        top10MoviesLoading: state.top10MoviesLoading
    }
};

class Top10Movies extends Component {

    render() {
        return (
            <div>
                {this.props.top10MoviesLoading ? <div>Loading...</div> : <div>Top 10</div>}
            </div>
        );
    }

}

export default connect(mapStateToProps)(Top10Movies);
