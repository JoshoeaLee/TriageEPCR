import { StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import DropDown from '../utility/DropDown';

export default function Assessment({saveData}) {
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [plan, setPlan] = useState('');

  return (
    <View style={styles.layout}>
      <View style={styles.firstColumn}>
        <TextInput
          value={subjective}
          onChangeText={subjective=>setSubjective(subjective)}
          placeholder={'Subjective'}
          placeholderTextColor = '#b3b3b3'
          style={styles.largeInput} />
        <TextInput
          value={objective}
          onChangeText={objective=>setObjective(objective)}
          placeholder={'Objective'}
          placeholderTextColor = '#b3b3b3'
          style={styles.largeInput} />
        <TextInput
           value={assessment}
           onChangeText={assessment=>setAssessment(assessment)}
           placeholder={'Assessment'}
           placeholderTextColor = '#b3b3b3'
           style={styles.largeInput} />
           
        <TextInput
          value={plan}
          onChangeText={plan=>setPlan(plan)}
          placeholder={'Plan'}
          placeholderTextColor = '#b3b3b3'
          style={styles.largeInput} />
        

      </View>

      <View style={styles.secondColumn}>
        <View style={styles.vehicleDropdown}>
          <DropDown
            items={[
              {label: 'Vehicle', value: 'Vehicle'},
            {label: 'AIR1CHC', value: 'AIR1CHC'},
            {label: 'AIR2CHC', value: 'AIR2CHC'},
            {label: 'AIR3CHC', value: 'AIR3CHC'},
            {label: 'AIR1NEL', value: 'AIR1NEL'},
            {label: 'AIR1DUD', value: 'AIR1DUD' },
            {label: 'AIR2DUD', value: 'AIR2DUD' },
            {label: 'AIR3DUD', value: 'AIR3DUD' },
            ]}
            placeholder='Vehicle'/>
        </View>

        <View style={styles.transportDropdown}>
          <DropDown
            items={[
              {label: 'Transport Status', value: 'Transport Status'},
            {label: 'In Transit', value: 'In Transit'},
            {label: 'At Destination', value: 'At Destination'},
            {label: 'Non Transport', value: 'Non Transport'},
            ]}
            placeholder='Transport Status'/>
        </View>

        <View style={styles.destinationDropdown}>
          <DropDown
            items={[
              {label: 'Destination', value: 'Destination'},
            {label: 'Christchurch Hospital', value: 'Christchurch Hospital'},
            {label: 'Nelson Hospital', value: 'Nelson Hospital'},
            { label: 'Timaru Hospital', value: 'Timaru Hospital' },
            { label: 'Ashburton Hospital', value: 'Ashburton Hospital' },
            { label: 'Dunedin Hospital', value: 'Dunedin Hospital' },
            {label: 'Queenstown Hospital', value: 'Queenstown Hospital'},
            ]}
            placeholder='Destination'/>
        </View>

        <TextInput
          value={arrivalTime}
          onChangeText={arrivalTime=>setArrivalTime(arrivalTime)}
          placeholder={'Estimated Arrival Time'}
          placeholderTextColor = '#b3b3b3'
          style={styles.smallInput} />
        
        <View style={styles.takePhotoButton}>
          <TouchableOpacity>
            <Text>Take Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveButton}>
          <TouchableOpacity>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
}

const buttonStyle = {
  borderColor: '#3b3b3b',
  borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
  width: '60%',
  height: '10%',
}

const dropdownStyle = {
  width: '60%',
  height: '10%',
  marginTop: 20,
}

const inputStyle = {
  borderColor: '#3b3b3b',
  backgroundColor: 'white',
}

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '58%',
    width: '100%',
    backgroundColor: '#9dc8e2', 
  },  
  largeInput: {
    ...inputStyle,
    marginLeft: 20,
    marginTop: 20,
    height: '15%',
    paddingLeft: 10,
  },
  firstColumn: {
    width: '60%',
    flexDirection: 'column',
  },
  secondColumn: {
    width: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  vehicleDropdown: {
    ...dropdownStyle,
    zIndex: 3,
  },
  transportDropdown: {
    ...dropdownStyle,
    zIndex: 2,
  },
  destinationDropdown: {
    ...dropdownStyle,
    zIndex: 1,
  },
  takePhotoButton: {
    ...buttonStyle,
    marginTop: 20,
    backgroundColor: 'white'
  },
  saveButton: {
    ...buttonStyle,
    marginTop: 20,
    backgroundColor: '#93ff33'
  },
  smallInput: {
    ...inputStyle,
    marginTop: 20,
    width: '60%',
    height: '10%',
  }
});
