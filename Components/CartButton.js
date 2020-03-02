import React from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

const CartButton = ({ navigation }) => {
  return (
    <Button transparent>
      <Icon
        name="cart"
        style={{ color: "white" }}
        onPress={() => navigation.navigate("CoffeeCartScreen")}
      />
    </Button>
  );
};

export default withNavigation(CartButton);
