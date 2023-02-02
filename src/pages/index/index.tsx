import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { Button, Circle, Navbar, Tabbar  } from "@taroify/core"
import { ChatOutlined, FriendsOutlined, HomeOutlined, Search, SettingOutlined } from "@taroify/icons"

import './index.scss'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  render () {
const { counterStore: { counter } } = this.props.store

    return (
      <View className='index'>
        <Button className='class-button' onClick={this.increment}>+</Button>
        <Button className='class-button' onClick={this.decrement}>-</Button>
        <Button loading color="primary" onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <ChatOutlined />
        {/* <Circle percent={70} color="#ee0a24" layerColor="#ebedf0">
          颜色定制
        </Circle> */}
        <Navbar title="标题">
          <Navbar.NavLeft>返回</Navbar.NavLeft>
          <Navbar.NavRight>按钮</Navbar.NavRight>
        </Navbar>
        <Tabbar>
          <Tabbar.TabItem icon={<HomeOutlined />}>标签</Tabbar.TabItem>
          <Tabbar.TabItem icon={<Search />}>标签</Tabbar.TabItem>
          <Tabbar.TabItem icon={<FriendsOutlined />}>标签</Tabbar.TabItem>
          <Tabbar.TabItem icon={<SettingOutlined />}>标签</Tabbar.TabItem>
        </Tabbar>
      </View>
    )
  }
}

export default Index
