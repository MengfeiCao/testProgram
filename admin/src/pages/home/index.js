
import { connect } from "react-redux" ;
import UI from "./UI";
import action from "./action";

const mapStateToProps = state => ({
    homeNavListData : state.home.homeNavListData,
    homeProListData : state.home.homeProListData,
})

const mapDispacthToProps = dispatch => ({
    gethomeNavListData(){
        dispatch(action.gethomeNavListData());
    },
    gethomeProListData(){
        dispatch(action.gethomeProListData());
    },
})
const Com = connect( mapStateToProps , mapDispacthToProps )(UI);

export default Com ;