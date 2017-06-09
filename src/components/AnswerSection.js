import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';

class AnswerSection extends Component {
  static defaultProps = {
    value: 5,
  };

  state = {
    value: this.props.value,
  };

  render() {
    const { containerStyle, circleStyle, circleTextStyle, sliderStyle } = styles;

    return (
      <View style={containerStyle}>
        <View style={circleStyle}>
          <Text style={circleTextStyle}>{this.state.value}</Text>
        </View>
        <View>
          <Slider
            style={sliderStyle}
            minimumValue={0}
            maximumValue={10}
            step={1}
          {...this.props}
          onValueChange={(value) => this.setState({value: value})}
        />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30
  },
  circleStyle: {
    width: 100,
    height: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 100 / 2,
    borderColor: '#0078ae',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleTextStyle: {
    fontSize: 25,
    color: '#0078ae'
  },
  sliderStyle: {
    paddingTop: 100,
    width: 300
  }
};

export default AnswerSection;
