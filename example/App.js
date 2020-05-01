/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import FbGrid from "react-native-fb-image-grid";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <FbGrid
            images={[
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
            ]}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  inner_container: {
    width: "100%",
    height: "20%",
  },
});

export default App;
