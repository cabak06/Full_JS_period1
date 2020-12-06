import * as React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropsScreen from "./examples/props"
import InfoScreen from "./examples/info"
import StateScreen from "./examples/state"
import TextInputScreen from "./examples/textInput"
import ScrollViewScreen from "./examples/scrollView"
import HttpViewScreen from "./examples/http"
import FlexDirectionScreen from "./examples/layout-flexDirection"
import justifyContentScreen from "./examples/layout-justifyContent"
import alignItemsScreen from "./examples/layout-AllignItems"
import FlatListScreen from "./examples/flatList"
import SectionlistScreen from "./examples/SectionList"
import TouchableHighlightScreen from "./examples/touchableHighlight"
import TouchableOpacityScreen from "./examples/touchableOpacity"

function HomeScreen({ navigation }) {
  return (
    <View style={{
      padding: 5, flex: 1, flexDirection: "column",
      alignItems: 'center', justifyContent: 'flex-start', alignItems: "stretch"
    }}>
      <Text style={{ textAlign: "center", fontSize: 20, margin: 8, marginBottom: 15 }}>All Examples</Text>
      <ScrollView>
        <View style={{ margin: 1 }}>
          <Button
            title="What to do with this code "
            onPress={() => navigation.navigate('Info')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="Go to Props Demo "
            onPress={() => navigation.navigate('Props')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="Go to State Demo "
            onPress={() => navigation.navigate('StateDemo')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="Text Input Demo "
            onPress={() => navigation.navigate('TextInputDemo')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="TouchableHighlight Demo"
            onPress={() => navigation.navigate('TouchableHighlightDemo')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="TouchableOpacity Demo"
            onPress={() => navigation.navigate('TouchableOpacityDemo')}
          />
        </View>

        <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 3, }} />
        <View style={{ margin: 1 }}>
          <Button
            title="Flex Direction Demo "
            onPress={() => navigation.navigate('FlexDirectionDemo')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="Justify Content Demo "
            onPress={() => navigation.navigate('justifyContentDemo')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="Align Items Demo "
            onPress={() => navigation.navigate('AlignItemsDemo')}
          />
        </View>
        <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 3, }} />
        <View style={{ margin: 1 }}>
          <Button
            title="Go to Scroll Demo "
            onPress={() => navigation.navigate('ScrollDemo')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="Go to Flatlist Demo "
            onPress={() => navigation.navigate('FlatlistDemo')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="Go to SectionList Demo "
            onPress={() => navigation.navigate('SectionListDemo')}
          />
        </View>
        <View style={{ margin: 1 }}>
          <Button
            title="Go to Fetch Demo "
            onPress={() => navigation.navigate('FetchDemo')}
          />
        </View>

      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "All Examples" }} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Props" component={PropsScreen} />
        <Stack.Screen name="StateDemo" component={StateScreen} />
        <Stack.Screen name="TextInputDemo" component={TextInputScreen} />
        <Stack.Screen name="TouchableHighlightDemo" component={TouchableHighlightScreen} />
        <Stack.Screen name="TouchableOpacityDemo" component={TouchableOpacityScreen} />
        <Stack.Screen name="FlexDirectionDemo" component={FlexDirectionScreen} />
        <Stack.Screen name="justifyContentDemo" component={justifyContentScreen} />
        <Stack.Screen name="AlignItemsDemo" component={alignItemsScreen} />
        <Stack.Screen name="ScrollDemo" component={ScrollViewScreen} />
        <Stack.Screen name="FlatlistDemo" component={FlatListScreen} />
        <Stack.Screen name="SectionListDemo" component={SectionlistScreen} />
        <Stack.Screen name="FetchDemo" component={HttpViewScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;