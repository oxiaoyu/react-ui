import React, { Component } from 'react'
import Prolist from '@/components/common/Prolist'
import Banner from '@/components/common/Banner'
class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist:[],
      bannerlist:['1', '2', '3']
    }
  }
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/banner')
    .then(res => res.json())
    .then(data => {
      this.setState({
        bannerlist: data
      })
      console.log(this.state.bannerlist)
    })
    fetch('http://www.daxunxun.com/douban')
    .then(res => res.json())
    .then(data => {
      this.setState({
        prolist: data
      })
    })
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">
        </header>
        <div className = "content">
          <Banner bannerlist = { this.state.bannerlist }/>
          <Prolist prolist = { this.state.prolist } { ...this.props }/>
        </div>
      </div>
    )
  }
}

export default Home;