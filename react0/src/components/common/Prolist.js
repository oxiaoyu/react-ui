import React,{ Component } from 'react';

class Com extends Component {

  goDetail (id) {
    this.props.history.push(`/detail/`+id)
  }

  render () {
    return (
      <ul>
        {
          this.props.prolist.map(item => {
            return (
              <li key = { item.id } >
                <a onClick = { this.goDetail.bind(this,item.id) }>{ item.title }</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}


export default Com;
