import React from 'react';
import {Text, TouchableOpacity, FlatList, View, Button} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../styles/Home.scss';

class Home extends React.Component {
  onPressButton = () => {
    this.props.goToProfile();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text>We have {this.props.friends.possible.length} friends!</Text>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={this.props.friends.possible}
            renderItem={({item}) => (
              <TouchableOpacity style={{fontSize: 20}}>{item}</TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={{flex: 1}}>
          <Button title="Add some friends" onPress={this.onPressButton} />
        </View>
      </View>
    );
  }
}

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
