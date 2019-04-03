import React from "react";        //用于解析jsx
import { HashRouter as Router , Switch , Route } from "react-router-dom";
import App from "@/layout/App";
import UserApp from "@/layout/UserApp";
import DetailApp from "@/layout/DetailApp";

// 创建一个函数组件：
const RouterCom = () => (
    <Router>
        <Switch>
            <Route path="/userapp" component={ UserApp }></Route>
            <Route path="/detailapp" component={ DetailApp }></Route>
            <Route path="/" component={ App }></Route>
        </Switch>
    </Router>
)

export default RouterCom ;

// 分析架构：
// 1.主页面架构；   主页  分类  购物车  我的  √
// 2.我的架构       登录、注册
// 3.详情架构       详情页

// 引入外部ui组件库    antd   ES6
// 移动版：https://mobile.ant.design/index-cn
// pc版： https://ant.design/index-cn