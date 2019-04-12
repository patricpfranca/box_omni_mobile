import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/main/index';
import Box from './pages/box/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Box
  })
);

export default Routes;

