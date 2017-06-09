import React, { Component } from 'react';
import { View, Text } from 'react-native';

class QuestionSection extends Component {
  state = {
    index: this.props.index,
  };

  render() {
  const { containerStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{questions[this.props.index]}</Text>
    </View>
  );
}
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#0078ae',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  }
};

const questions =
  [
    'How confident do you feel in yourself?',
    'How resilient are you to set backs?',
    'How capable do you feel at managing stress levels?',
    'How likely are you to achieve your academic potential?',
    'How confident do you feel about your ability to be successful at interviews and assessment centres?',
    'How ready are you to get the graduate job you want?',
    'How satisfied are you with the LeadNow! event?',
    'How likely are you to recommend this programme to your friends?',

  ];


export default QuestionSection;
