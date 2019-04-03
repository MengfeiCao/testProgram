import React , {Component} from "react";
import {Link} from "react-router-dom";
export default class extends Component {
    render(){
        return (
            <div className="box">
                <header className="header">我的头部</header>
                <div className="content">
                    <Link to="/userapp/login">登录</Link> /
                    <Link to="/userapp/register">注册</Link>
                </div>
            </div>
        )
    }
}