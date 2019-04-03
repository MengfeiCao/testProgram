import React , { Component } from "react";

export default class extends Component {
    back(){
        let {index,type,url} = this.props ;
        index = index || -1 ;    //给index一个默认值-1
        type = type || "push" ;  //给跳转方式一个默认值 push
        if(url){
            this.props.history[type]( url );
        }else{
            this.props.history.go( index );
        }
    }
    render(){
        return (
            <button onClick={this.back.bind(this)}>返回</button>
        )
    }
}