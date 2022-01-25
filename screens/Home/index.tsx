import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Device from './components/Device'

type HomeProps = {
  navigation:any
}

export default function Home({ navigation }:HomeProps) {
  return (
    <View style={styles.mainLayout}>
      <StatusBar backgroundColor='darkgreen'/>
      
      <SafeAreaView style={styles.titles}>
        <Text style={styles.title}>WHOSS</Text>
        <Text style={styles.subtitle}>Wireless home occupancy and security system</Text>
      </SafeAreaView>

      <View style={styles.devicesView}>
        <Text style={{fontWeight:'600',color:'darkgreen'}}>Devices</Text>
        <ScrollView style={styles.scrollView}>
          <Device name="Bedroom device" connected={true} navigation={navigation}/>
          <Device name="Living room device" connected={false} navigation={navigation}/>
          <Device name="Hallway device" connected={false} navigation={navigation}/>
        </ScrollView>

        <View style={styles.button}>
          <Button
          onPress={()=>navigation.navigate('Details')} 
          color="darkgreen"
          title="ADD DEVICE"
          />
        </View>
        
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  button: { 
    justifyContent: 'flex-end',
  },
  devicesView:{
    flex:1,
    marginVertical:30,
    marginHorizontal:15,
  },
  scrollView:{
    marginVertical:5,
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
  },
});
