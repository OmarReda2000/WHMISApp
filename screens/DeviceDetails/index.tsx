import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View,Button,Image } from 'react-native';
import deviceIcon from '../../assets/favicon.png'

export default function DeviceDetails() {
  return (
    <View style={styles.mainLayout}>
      <StatusBar backgroundColor='darkgreen'/>
      <SafeAreaView style={styles.titles}>
        <Image
            style={{height:100,width:100}}
            source={deviceIcon}
        />
        <Text style={{fontWeight:'700',color:'darkgreen'}}>Bedroom device</Text>
      </SafeAreaView>
      <View style={styles.devicesView}>
        <ScrollView style={styles.scrollView}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'700'}}>Name:</Text>
                <Text> Bedroom device</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'700'}}>State:</Text>
                <Text> Connected</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'700'}}>ID:</Text>
                <Text> eij839dkkm20</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'700'}}>Storage:</Text>
                <Text> 0.3 Gb</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'700'}}>Connection status:</Text>
                <Text> Excellent</Text>
            </View>
            
        </ScrollView>
        <View style={styles.button}>
          <Button
          onPress={()=>console.log('Pressed')} 
          color="darkgreen"
          title="FORGET DEVICE"
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
    marginVertical:15,
  },
  device:{
    borderColor:'blue',
    borderRadius: 5,
    borderWidth: 0.4,
    padding:7,
    marginVertical:5,
    flexDirection: "row"
  },
  titles: {
    marginTop: 30,
    alignItems: 'center',
    color:'darkblue',
  },
  
  mainLayout: {
    height:"100%",
  },
});
