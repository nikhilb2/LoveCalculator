import React, { Component } from 'react';
import { WebView, StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Progressbar from '../components/progressbar'
import theme from "../src/theme";

class PrivacyPolicy extends Component {

  state = {
    webLoading: false
  }

  toggleWebloading() {
    const { webLoading } = this.state
    if (webLoading) {
      this.setState({webLoading: false})
    } else {
      this.setState({webLoading: true})
    }

  }

  render() {
    const { webLoading } = this.state
    console.log(webLoading);
    return (

        <WebView
          source={{uri: 'https://www.freeprivacypolicy.com/privacy/view/e0678797906f057956ec411a32422fd7'}}
          onNavigationStateChange={()=> this.toggleWebloading()}
          startInLoadingState={true}
        />
    );
  }
}

const styles = StyleSheet.create({
  progress: {
    margin: theme.spacing.unit * 2,
    alignItems: 'center'
  }
})


export default PrivacyPolicy
