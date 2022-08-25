import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { Icon } from 'native-base';
import Video from 'react-native-video';

export default class VideoPlayer extends Component {
  state = {
    rate: 1,
    volume: 10,
    muted: false,
    resizeMode: 'contain',
    // duration: 0,
    // currentTime: 0,
    paused: true,
    // fullScreen: false,
    // pickerValueHolder: '1.0',
    iconVideo: 'play-circle-outline',
    hideControls: false,
    bgImg: true,
  };

  // load video event
  // onLoad = data => {
  //   this.setState({ duration: data.duration });
  // };

  // video is playing
  // onProgress = data => {
  //   this.setState({ currentTime: data.currentTime });
  // };

  // video ends
  onEnd = () => {
    this.setState({ paused: true, iconVideo: 'play-circle-outline' });
    this.video.seek(0);
  };

  // onSeek = seek => {
  //   this.video.seek(seek);
  // };

  // onSeeking = currentTime => this.setState({ currentTime });

  // onChangeRate(itemValue) {
  //   const rate = parseFloat(itemValue);
  //   this.setState({ pickerValueHolder: itemValue, rate });
  // }

  // pressing on 'play' button
  onPressBtnPlay = () => {
    let iconVideo = '';
    const { paused } = this.state;
    if (!paused) {
      // this.setState({ hideControls: true });
      iconVideo = 'play-circle-outline';

      // always show controls
      if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
    } else {
      iconVideo = 'pause-circle-outline';
      // // hide controls after 5s
      this.timeoutHandle = setTimeout(() => {
        this.setState({ hideControls: true });
      }, 5000);
    }
    return this.setState(prevState => ({
      paused: !prevState.paused,
      iconVideo,
      bgImg: false,
    }));
  };

  // on press video event
  onPressVideo() {
    // showing controls if they don't show
    if (this.state.hideControls) {
      this.setState({ hideControls: false });
      this.timeoutHandle = setTimeout(() => {
        this.setState({ hideControls: true });
      }, 8000);
    }
  }

  // parse seconds to time (hour:minute:second)
  parseSecToTime(sec) {
    const secNum = parseInt(sec, 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    let minutes = Math.floor((secNum - hours * 3600) / 60);
    let seconds = secNum - hours * 3600 - minutes * 60;

    // if (hours < 10) {
    //   hours = `0${hours}`;
    // }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    // return `${hours}:${minutes}:${seconds}`;
    return `${minutes}:${seconds}`;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.fullScreen} onPress={() => this.onPressVideo()}>
          <Video
            ref={ref => {
              this.video = ref;
            }}
            source={{
              uri: this.props.videoUrl,
            }}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableWithoutFeedback>
        {!this.state.hideControls ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            {this.state.bgImg ? (
              <ImageBackground
                source={{ uri: this.props.thumbnail }}
                resizeMode="cover"
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  position: 'absolute',
                }}
              />
            ) : null}
            <Icon
              onPress={() => this.onPressBtnPlay()}
              type="MaterialIcons"
              name={this.state.iconVideo}
              style={{
                fontSize: 70,
                color: '#ffffff',
                marginTop: 20,
              }}
            />

            {/* <Text>{this.parseSecToTime(parseInt(this.state.currentTime, 10))}</Text>
            <Text>{this.parseSecToTime(parseInt(this.state.duration, 10))}</Text> */}
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
});

VideoPlayer.propTypes = {
  thumbnail: PropTypes.string,
  videoUrl: PropTypes.string,
};
