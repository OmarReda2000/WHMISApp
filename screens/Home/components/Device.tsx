
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import deviceIcon from '../../../assets/favicon.png'

type DeviceProps = {
  name:string
  connected:boolean
  navigation:any
}

const Device = ({name ,connected,navigation}:DeviceProps) => {
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
export default Device


const styles = StyleSheet.create({
  device:{
    borderColor:'green',
    borderRadius: 5,
    borderWidth: 0.4,
    padding:7,
    marginVertical:5,
    flexDirection: "row"
  },
});
  
  