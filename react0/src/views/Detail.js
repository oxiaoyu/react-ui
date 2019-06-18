import React,{ Component } from 'react';

class Detail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      proData: ''
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    fetch('http://www.daxunxun.com/detail?id=' + id).then(res => res.json())
    .then(data => {
      this.setState({
        proData: data[0]
      })
    })
  }

  goBack () {
    this.props.history.push('/home');
  }
  goOrder () {
    this.props.history.push('/detail/order');
  }

  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header">
            <input onClick = { this.goBack.bind(this) } type = "button" value = "回到首页" />
            <input onClick = { this.goOrder.bind(this) } type = "button" value = "立即买票" />
          </header>
          <div className = "content">{this.state.proData.title}</div>
        </div>
        <footer className = "footer">详情底部</footer>
      </div>
    )
  }
}

export default Detail;

