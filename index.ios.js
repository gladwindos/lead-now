import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import QuestionSection from './src/components/QuestionSection';
import AnswerSection from './src/components/AnswerSection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 };

    this.backButton = this.backButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
  }

  backButton() {
    if (this.state.index > 0) {
      this.setState({ index: (this.state.index - 1) });
    }
  }

  nextButton() {
    if (this.state.index < 7) {
      this.setState({ index: (this.state.index + 1) });
    }
  }

  render() {
    return (
      <View style={styles.appStyle}>
        <Header
          index={this.state.index}
          backButton={this.backButton}
          nextButton={this.nextButton}
        />
        <QuestionSection index={this.state.index} style={{ flex: 1 }} />
        <AnswerSection />
      </View>
    );
  }
}

const styles = {
  appStyle: {
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 25,
    paddingBottom: 200
  }
};

AppRegistry.registerComponent('LeadNow', () => App);
