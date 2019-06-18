import React from 'react';
import axios from 'axios';


// const Com = () => (
//   <mark>tab1</mark>
// )
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  changeValue (e) {
    if (e.target.name === 'username') {
        this.setState({
          username: e.target.value
        })
    } else {
      this.setState({
        password: e.target.value
      })
    }
  }

  Send () {
    axios.get(`find?username=` + this.state.username)
    .then(res => {
      console.log(res.data)
    })
  }

  render () {
    return (
      <div>
        
          <input onChange = { this.changeValue.bind(this) }  type = "text" name = "username" value = { this.state.username }/><br/>
          <input onChange = { this.changeValue.bind(this) }  type = "password" name = "password"  value = { this.state.password }/><br/>
          <button onClick = { this.Send.bind(this) }>提交</button>
      </div>
    )
  }
}
export default Com;