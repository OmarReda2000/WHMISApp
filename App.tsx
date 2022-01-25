import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, StyleSheet, Text, View,Button } from 'react-native';
import Home from './screens/home';
import deviceDetails from './screens/deviceDetails';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Details"
          component={deviceDetails}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { 
    justifyContent: 'flex-end',
  },
  devicesView:{
    flex:1,
    marginVertical:30,
    marginHorizontal:15,
  },
  scrollView:{
    marginVertical:15,
  },
  device:{
    borderColor:'green',
    borderRadius: 5,
    borderWidth: 0.4,
    padding:7,
    marginVertical:5,
    flexDirection: "row"
  },
  titles: {
    marginTop: 30,
    alignItems: 'center',
    color:'darkgreen',
  },
 
  title: {
    color:'darkgreen',
    fontSize: 60,
    fontWeight: '500',
  },
  subtitle: {
    color:'darkgreen',
  },
  
  mainLayout: {
    height:"100%",
    // backgroundColor: 'lightgreen',
  },
  statusbar: {
    height:50,
    backgroundColor: 'darkgreen',
  },
});
