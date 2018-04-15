// RootNavigator connected to redux

import RootNavigator from './RootNavigator'
import React from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import { addListener } from '../store/configureStore';



class AppNavigator extends React.Component {
    render() {
        return (
            <RootNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.navigationState,
                    addListener
                })}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        navigationState: state.persistedState.navigationState
    };
};


export default connect(mapStateToProps)(AppNavigator)