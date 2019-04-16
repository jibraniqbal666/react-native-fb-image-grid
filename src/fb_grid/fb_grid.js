/**
 * Author:    Jibran
 * Created:   16.04.2019
 * 
 * (c) Copyright by Jibran.
 **/
import React, { Component } from "react"
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

const ImageItem = props => {
  return props.image ? (
    <TouchableOpacity style={__styles.image_view} onPress={() => props.onPress(props.image)}>
      <Image
        style={__styles.image}
        resizeMode="cover"
        source={{
          uri: props.image,
        }}
      />
    </TouchableOpacity>
  ) : (
    <View />
  )
}

const TwoImages = props => {
  return (
    <>
      <ImageItem image={props.images[0]} onPress={props.onPress} />
      <ImageItem image={props.images[1]} onPress={props.onPress} />
    </>
  )
}

const renderImages = (start, overflow, images, onPress) => {
  return (
    <>
      <ImageItem image={images[start]} onPress={onPress} />
      {images[start + 1] && (
        <View style={__styles.image_view}>
          <ImageItem image={images[start + 1]} onPress={onPress} />
          {overflow && (
            <TouchableOpacity
              onPress={event => onPress(event, images[start + 1])}
              style={__styles.item_view_overlay}
            >
              <Text style={__styles.text}>{`+${images.length - 5}`}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  )
}

export default class FbGrid extends Component {
  render() {
    const { images, style, onPress } = this.props
    return images.length > 0 ? (
      <View style={{ ...__styles.container_row, ...style }}>
        {images.length < 3 ? (
          <TwoImages images={images} onPress={onPress} />
        ) : (
          <ImageItem image={images[0]} onPress={onPress} />
        )}
        {images.length > 2 && (
          <View style={__styles.container}>{renderImages(1, false, images, onPress)}</View>
        )}
        {images.length > 3 && (
          <View style={__styles.container}>
            {renderImages(3, images.length > 5, images, onPress)}
          </View>
        )}
      </View>
    ) : null
  }
}

export const __styles = StyleSheet.create({
  container_row: {
    flexDirection: "row",
    padding: 4,
  },

  container: {
    flex: 1,
    padding: 4,
  },

  image_view: {
    flex: 1,
    margin: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    backgroundColor: "grey",
  },

  item_view: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  item_view_overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  text: {
    color: "white",
    fontSize: 18,
  },
})
