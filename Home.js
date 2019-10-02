import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

class Home extends React.Component {
  onPressButton = () => {
    this.props.sendTheAlert();
    this.props.navigation.navigate('Profile');
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
    sendTheAlert: () => {
      dispatch({type: 'INCREMENT_ASYNC'});
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
