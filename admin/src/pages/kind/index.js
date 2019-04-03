import { connect } from "react-redux" ;
import UI from "./UI";
import action from "./action"

const mapStateToProps = (state) => {
    return {
        kindBannerListData : state.kind.kindBannerListData ,
        kindProListData : state.kind.kindProListData 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requireKindBannerListData(){
            dispatch(action.requireKindBannerListData());
        },
        requireKindProListData(){
            dispatch(action.requireKindProListData());
        }
    }
};


const Com = connect( mapStateToProps , mapDispatchToProps)(UI);

export default Com ;