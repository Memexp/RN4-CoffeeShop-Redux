import React, { Component } from "react";
import { Icon, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
        name="shoppingcart"
        type="AntDesign"
      >
        <Text>{this.props.quantity}</Text>
      </Icon>
    );
  }
}

const mapStateToProps = state => ({
  quantity: state.cartReducer.quantity
});

export default connect(mapStateToProps)(withNavigation(CartButton));
