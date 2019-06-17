import React,{ Component } from 'react';

class Order extends Component {

  goBack () {
    console.log(this.props.history);
    this.props.history.go(-1);
  }

  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header">
            <input onClick = { this.goBack.bind(this) } type = "button" value = "返回" />
          </header>
          <div className = "content">订单内容</div>
        </div>
        <footer className = "footer">订单底部</footer>
      </div>
    )
  }
}

export default Order;