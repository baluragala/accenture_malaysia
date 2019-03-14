import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import FlexBox1 from "./FlexBox1";
import Item from "./Item";
import { Provider } from "react-redux";
import store from "./store";
import List from "./List";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Detail from "./components/Detail";
import Store from "./components/Store";

import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import AddProduct from "./components/AddProduct";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.conatiner}>
          <List {...this.props} />
        </View>
      </Provider>
    );
  }
}

const HomeStackNavigator = createStackNavigator(
  {
    AppHome: {
      screen: App
    },
    Detail: {
      screen: Detail
    }
  },
  {
    defaultNavigationOptions: {
      title: "EStore"
    }
  }
);

const StoreStackNavigator = createStackNavigator(
  {
    StoreHome: {
      screen: Store
    }
  },
  {
    defaultNavigationOptions: {
      title: "Stores"
    }
  }
);

const AdminStackNavigator = createStackNavigator(
  {
    New: {
      screen: AddProduct
    }
  },
  {
    defaultNavigationOptions: {
      title: "New Product"
    }
  }
);

const RootNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Stores: StoreStackNavigator,
    New: AdminStackNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = AntDesign;
        let iconName;
        if (routeName === "Home") {
          iconName = focused ? "home" : "home-outline";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = focused ? MaterialIcons : MaterialCommunityIcons;
        } else if (routeName === "Stores") {
          iconName = focused ? "appstore1" : "appstore-o";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(RootNavigator);

const styles = StyleSheet.create({
  conatiner: {
    flex: 1
  }
});
