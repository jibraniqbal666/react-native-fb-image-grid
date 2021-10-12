/**
 * Author:    Jibran
 * Created:   16.04.2019
 *
 * (c) Copyright by Jibran.
 **/
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ImageItem = (props) => {
  return props.image ? (
    <TouchableOpacity
      style={styles.image_view}
      onPress={(event) => props.onPress(props.image, props.index, event)}
      onLongPress={(event) =>
        props.onLongPress(props.image, props.index, event)
      }>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: props.image,
        }}
      />
    </TouchableOpacity>
  ) : (
    <View />
  );
};

const TwoImages = (props) => {
  return (
    <>
      <ImageItem
        image={props.images[0]}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        index={0}
      />
      <ImageItem
        image={props.images[1]}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        index={1}
      />
    </>
  );
};

const renderImages = (start, overflow, images, onPress, onLongPress) => {
  return (
    <>
      <ImageItem
        image={images[start]}
        onPress={onPress}
        onLongPress={onLongPress}
        index={start}
      />
      {images[start + 1] && (
        <View style={styles.image_view}>
          <ImageItem
            image={images[start + 1]}
            onPress={onPress}
            onLongPress={onLongPress}
            index={start + 1}
          />
          {overflow && (
            <TouchableOpacity
              onPress={(event) => onPress(images[start + 1], start + 1, event)}
              onLongPress={(event) =>
                onLongPress(images[start + 1], start + 1, event)
              }
              style={styles.item_view_overlay}>
              <Text style={styles.text}>{`+${images.length - 5}`}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  );
};

export default class FbGrid extends Component {
  render() {
    const {images, style, onPress, onLongPress} = this.props;
    return images.length > 0 ? (
      <View style={{...styles.container_row, ...style}}>
        {images.length < 3 ? (
          <TwoImages
            images={images}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        ) : (
          <ImageItem
            image={images[0]}
            onPress={onPress}
            onLongPress={onLongPress}
            index={0}
          />
        )}
        {images.length > 2 && (
          <View style={styles.container}>
            {renderImages(1, false, images, onPress, onLongPress)}
          </View>
        )}
        {images.length > 3 && (
          <View style={styles.container}>
            {renderImages(3, images.length > 5, images, onPress, onLongPress)}
          </View>
        )}
      </View>
    ) : null;
  }
}

export const styles = StyleSheet.create({
  container_row: {
    flexDirection: 'row',
    padding: 4,
  },

  container: {
    flex: 1,
    padding: 4,
  },

  image_view: {
    flex: 1,
    margin: 0,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: 'grey',
  },

  item_view: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },

  item_view_overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  text: {
    color: 'white',
    fontSize: 18,
  },
});
