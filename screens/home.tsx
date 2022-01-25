import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView,Image, StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
import deviceIcon from '../assets/favicon.png'

const Device = ({name,connected,navigation}:{name:string,connected:boolean,navigation:any}) =>{
  return(
    <TouchableOpacity style={styles.device} onPress={()=>navigation.navigate('Details')} >
        <Image
            style={{height:40,width:40}}
            source={deviceIcon}
        />
      <View>
        <Text style={{fontWeight:'700'}}>{name}</Text>
        <Text>{connected? 'Connected' : 'Not connected'}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default function Home({ navigation }) {
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
    marginVertical:5,
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
