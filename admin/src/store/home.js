const reducer = ( state = {           //参数state为初始化值
    homeNavListData : [],
    homeProListData : [],
} , action ) => {
    const { type , data } = action ;
    switch (type) {
        case "CHANGE_HOME_BANNER_LIST_DATA":  //注意:要加双引号
            const homeNavListData = { homeNavListData : data } ;
            return { ...state , ...homeNavListData } //用ES6的扩展运算符将把state和homeBannerListData数据合并得到最终的state值
            // break;   因为有了return 所以不用break了
        case "CHANGE_HOME_PRO_LIST_DATA" :
            const homeProListData = { homeProListData : data };
            return { ...state , ...homeProListData };
        default:       //默认值
        return state ;
    }
}

export default reducer ;