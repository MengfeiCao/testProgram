const reducer = ( state = {
    kindBannerListData : [1,2,3],
    kindProListData : [1,2,3],
} , action) => {
    const { type , data } = action ;
    switch (type) {
        case "CHANGE_KIND_BANNER_LIST_DATA":
            const kindBannerListData = { kindBannerListData : data };
            return { ...state , ...kindBannerListData };
        case "CHANGE_KIND_PRO_LIST_DATA" : 
            const kindProListData = { kindProListData : data };
            return { ...state , ...kindProListData };
        default:
            return state ;
    }
}

export default reducer;