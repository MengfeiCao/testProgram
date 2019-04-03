import React,{ Component } from "react" ;
import { Icon } from 'antd';

export default class extends Component {
    componentDidMount(){
        this.props.gethomeNavListData();
    }
    render(){
        return(
            <div className="home">
                <header>
                    <h5>饿了么？饿了！</h5>
                    <Icon type="user" />
                </header>
                <nav></nav>
                <div></div>
            </div>
        )
    }
}