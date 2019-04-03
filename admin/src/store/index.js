// createStore:创建store；
// combineReducers ： 合并reducer
// applyMiddleware：处理异步的中间项
import { createStore , combineReducers , applyMiddleware} from "redux" ;
// redux-thunk :处理异步
import thunk from "redux-thunk";

// 如果有新的页面引入
import home from "./home";
import kind from "./kind";

// 如果有新的页面直接插入
const reducer = combineReducers({   //整合页面的reducer
    home ,
    kind ,
})

const store = createStore(reducer , applyMiddleware(thunk));  //创建仓库，项目使用异步操作

export default store ;