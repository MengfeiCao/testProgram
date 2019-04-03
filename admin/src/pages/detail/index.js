import React , {Component} from "react" ;
import Back from "@/components/common/back";

export default class extends Component {
    render(){
        return (
            <div className="box">
            <header className="header">详情页头部</header>
            <div className="content">
                详情页内容
                {/* 单纯的使用Back组件无法生效，因为单独的一个文件和路由无关，没有props.histort */}
                <Back index="-2" url="/home" type="push" { ...this.props }/>
            </div>
        </div>
        )
    }
}