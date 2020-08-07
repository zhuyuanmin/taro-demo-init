import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { AtButton, AtFab } from "taro-ui";

import "./index.scss";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

@inject("store")
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counter } = this.props.store;
    counter.increment();
  };

  decrement = () => {
    const { counter } = this.props.store;
    counter.decrement();
  };

  incrementAsync = () => {
    
    const { counter } = this.props.store;
    counter.incrementAsync();
  };

  onButtonClick = () => {
    alert("1111");
  };

  render() {
    const { counter: {counter} } = this.props.store;
    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <AtButton type="primary" onClick={this.incrementAsync}>Add Async</AtButton>
        <Text>{counter}</Text>
        <AtFab onClick={this.onButtonClick.bind(this)}>
          <Text className="at-fab__icon at-icon at-icon-menu"></Text>
        </AtFab>
      </View>
    );
  }
}

export default Index;
