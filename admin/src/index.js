import React from 'react';        //
import ReactDOM from 'react-dom';
import RouterCom from '@/router';
import * as serviceWorker from './serviceWorker';
import "./main.scss";
import store from "@/store";  //在入口文件中引入store
import { Provider } from "react-redux";  //提供

// 全局状态包裹路由
ReactDOM.render(
    <Provider store = { store }>      
        <RouterCom />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();  //上线前change unregister() to register()
