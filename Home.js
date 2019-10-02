import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

class Home extends React.Component {
  onPressButton = () => {
    this.props.goToProfile();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>We have {this.props.friends.possible.length} friends!</Text>
        <Button title="Add some friends" onPress={this.onPressButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    goToProfile: () => {
      dispatch({type: 'GO_TO_PROFILE'});
    },
  };
};

const mapStateToProps = state => {
  const {friends} = state;
  return {friends};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
