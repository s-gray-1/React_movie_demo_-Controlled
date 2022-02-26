/* import React, { Component } from 'react'

export default class Tabbar extends Component {

  render() {
    return (
      <div>
        <ul >
          {
            this.props.list.map((item,index)=>
              <li key={item.id} className={this.props.current===index?'active':''} onClick={
                ()=>this.handelClick(index)
              }>{item.text}</li>
              )
          }
        </ul>
      </div>
    )
  }
  handelClick(index){
   
    // 通知一下 父组件 该修改父组件那个状态了
    this.props.myevent(index)
  }
} */
const Tabbar = (props)=>{
   function handelClick(index){
   
    // 通知一下 父组件 该修改父组件那个状态了
    props.myevent(index)
  }
  return <div>
    
        <ul >
          {
            props.list.map((item,index)=>
              <li key={item.id} className={props.current===index?'active':''} onClick={
                ()=>handelClick(index)
              }>{item.text}</li>
              )
          }
        </ul>
      </div>
  
  
}
export default Tabbar