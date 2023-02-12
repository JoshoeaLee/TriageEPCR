import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

export default function HomepageHeader({ changeView }) {
  return (
    <View style={styles.layout}>
      <TouchableOpacity onPress={()=>changeView('buttonpage')} style={styles.button}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  layout:{
      height: '24%',
      width: '100%',
      backgroundColor: 'dodgerblue'
  },
  button:{
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      margin:10,
      height: '24%',
      width: '10%'
  }
})