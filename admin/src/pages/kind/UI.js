// UI组件只负责渲染页面
import React , {Component} from "react";

export default class extends Component {
    componentDidMount(){
        console.log(this.props)
        this.props.requireKindBannerListData();
        this.props.requireKindProListData();
    }
    render(){
        return (
            <div className="box">
                <header className="header">分类头部111</header>
                <div className="content">分类内容111
                    {/* {this.props.kindProListData.map((item,index)=>{
                        return (
                            <div key={index}>{item.title}</div>
                        )
                    })}   */}
                </div>
            </div>
        )
    }
}