import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors} from '../../helpers/colors';
import {CommomCard, CommonAppBar} from '../../helpers/globleFunction';
import SecondRoute from './classes';
import Passes from './passes';

import {styles} from './styles';

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: colors.primary}} />
);

const renderScene = SceneMap({
  first: SecondRoute,
  second: Passes,
});

export default function Tabscreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Classes'},
    {key: 'second', title: 'Passes'},
  ]);

  return (
    <>
      <CommonAppBar />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={{backgroundColor: colors.primary}}
            indicatorStyle={{backgroundColor: colors.green47D2A0}}
            // activeColor={{color: 'red'}}
            labelStyle={{color: colors.white}}
            // activeColor={{colors: 'yellow'}}
            renderLabel={({route, focused, color}) => (
              <Text style={{color, margin: 8}}>{route.title}</Text>
            )}
          />
        )}
      />
    </>
  );
}
