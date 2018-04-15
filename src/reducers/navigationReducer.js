import RootNavigator from '../navigators/RootNavigator';
import {
  NavigationActions
} from "react-navigation";


const initialState = RootNavigator.router.getStateForAction(
  NavigationActions.init()
  //RootNavigator.router.getActionForPathAndParams("SignedOut")
);
console.log(initialState)
const navigationReducer = (state = initialState, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;