import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import TabBar1 from '@/components/tabBar/TabBar1'
import TabBar2 from '@/components/tabBar/TabBar2'
import TabBar3 from '@/components/tabBar/TabBar3'
import TabBar4 from '@/components/tabBar/TabBar4'
import TabBar5 from '@/components/tabBar/TabBar5'


class Kind extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tabActive: 0,
    }
  }

    clicktab (tabs,index) {
      this.setState({
        tabActive: index
      })
  }
  TabBarClick (index) {
  }

  render () {
   const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' }
    ]
    let tabCom = ''
    switch (this.state.tabActive) {
      case 0: tabCom = <TabBar1 />;break;
      case 1: tabCom = <TabBar2 />;break;
      case 2: tabCom = <TabBar3 />;break;
      case 3: tabCom = <TabBar4 />;break;
      case 4: tabCom = <TabBar5 />;break;
      default: tabCom = <TabBar1 />
    }
    return (
      <div className = "box">
        <header className = "header">分页头部
        </header>
        <div className = "content">
        <Tabs tabBarBackgroundColor={ "#ccc" } tabBarUnderlineStyle = {{background:'#000'}} onChange = { this.clicktab.bind(this) }  tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
          {tabCom}
        </Tabs>
        </div>
      </div>
    )
  }
}

export default Kind;