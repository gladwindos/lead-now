import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

class Header extends Component {
  state = {
    index: this.props.index,
  };

  render() {
    const { containerStyle, buttonStyle, textStyle } = styles;

    const index = this.state.index;

    return (
      <View style={containerStyle}>
        <Button
          onPress={this.props.backButton}
           color={buttonStyle.color} title="Back" />
          <Text style={textStyle}> {this.props.index + 1} of 11</Text>
        <Button
          onPress={this.props.nextButton}
          color={buttonStyle.color} title="Next" />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonStyle: {
    color: '#0078ae',
  },
  textStyle: {
    fontSize: 20,
    color: '#0078ae',
    textAlign: 'center'
  }
};

export default Header;
