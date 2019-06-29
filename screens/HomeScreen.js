import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import InputField from "../components/inputfield";
import theme from "../src/theme";
import Button from "../components/button";
import LoveCalc from "../components/loveCalculation";

class HomeScreen extends Component {
  state = {
    girlName: null,
    boyName: null,
    love: null,
    girlNameEntered: false
  };

  calcLove() {
    const { girlName, boyName, girlNameEntered, love } = this.state;
    let nameDiff = girlName.length - boyName.length;
    if (nameDiff < 0) {
      nameDiff = nameDiff * -1;
    }
    const lovePercent = 100 - nameDiff * 10;
    this.setState({ love: lovePercent });
  }

  reset() {
    this.setState({
      girlName: null,
      boyName: null,
      love: null,
      girlNameEntered: null
    });
  }

  render() {
    const { girlName, boyName, girlNameEntered, love } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/heart.png")}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {girlNameEntered ? (
            <View>
              <InputField
                value={boyName}
                onChange={text => this.setState({ boyName: text })}
                label="Boy Name"
                placeholder="Enter Boy Name"
                style={styles.inputField}
                autoCapitalize="none"
              />
              <Button
                onClick={() => {
                  if (boyName) {
                    this.calcLove();
                  } else {
                    Alert.alert("Enter Boy name");
                  }
                }}
                caption="Continue"
              />
            </View>
          ) : (
            <View>
              <InputField
                value={girlName}
                onChange={text => this.setState({ girlName: text })}
                label="Girl Name"
                placeholder="Enter Girl Name"
                style={styles.inputField}
                autoCapitalize="none"
              />
              {girlName ? (
                <Button
                  onClick={() => {
                    this.setState({ girlNameEntered: true });
                  }}
                  caption="Continue"
                />
              ) : (
                <Button caption="Enter Girl name to continue" />
              )}
            </View>
          )}
          <View>
            <LoveCalc {...this.state} />
            {love ? (
              <Button onClick={() => this.reset()} caption="reset" />
            ) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: theme.spacing.unit * 3
  },

  contentContainer: {
    paddingTop: 30
  },
  image: {
    width: 120,
    height: 90,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: theme.spacing.unit * 10
  }
});

export default HomeScreen;
