import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import DropDown from '../utility/DropDown';
import React from 'react';
import CheckBox from '../utility/Checkbox';
import IvPage from './IvPage';


export default function Intervention({interventions, setInterventions, allIv, setAllIv}) { 

  //CheckBox Data holders
  const [opa, setOpa] = useState(interventions.opa || false);
  const [lma, setLma] = useState(interventions.lma || false);
  const [npa, setNpa] = useState(interventions.npa || false);
  const [ett, setEtt] = useState(interventions.ett || false);
  const [peep, setPeep] = useState(interventions.peep || false);
  const [suction, setSuction] = useState(interventions.suction || false);
  const [bvm, setBvm] = useState(interventions.bvm || false);

//this is used for the state of the keypad
const [text, setText] = useState(interventions.text || '');

//Dropdown Box data holders
  const [airwaySize, setAirwaySize] = useState(interventions.airwaySize || null);
  const [airwayLocation, setAirwayLocation] = useState(interventions.airwayLocation || null);
  const [catheter, setCatheter] = useState(interventions.catheter || null);

 return (
<View style={styles.layout}>
  
  <View style={styles.component}>  
    <View style={styles.container}>

        <View style={styles.checkboxGroup}>
        <CheckBox
            isChecked={opa}
            setChecked={opa=>{
            setOpa(opa);
            setInterventions(prevInterventions=>({...prevInterventions, opa: opa}))}}/>
        <Text>OPA</Text>
        </View>
        
        <View style={styles.checkboxGroup}>
        <CheckBox
              isChecked={lma}
              setChecked={lma=>{
              setLma(lma);
              setInterventions(prevInterventions=>({...prevInterventions, lma: lma}))}}/>
        <Text>LMA</Text>
        </View>

        <View style={styles.checkboxGroup}>
        <CheckBox
              isChecked={npa}
              setChecked={npa=>{
              setNpa(npa);
              setInterventions(prevInterventions=>({...prevInterventions, npa: npa}))}}/>
        <Text>NPA</Text>
        </View>

        <View style={styles.checkboxGroup}>
        <CheckBox
              isChecked={ett}
              setChecked={ett=>{
              setEtt(ett);
              setInterventions(prevInterventions=>({...prevInterventions, ett: ett}))}}/>
        <Text>ETT</Text>
        </View>

    </View>


    <View style={[styles.container, { zIndex: 4}]}>
      <View style={styles.smallDropdown}> 
           <DropDown
                value={airwaySize}
                setValue={airwaySize=>{
                    setAirwaySize(airwaySize);
                    setInterventions(prevInterventions=>({...prevInterventions, airwaySize: airwaySize}))}}
            placeholder = 'Size'
            items = {[
              {label: '0', value: '0'},
              {label: '00', value: '00'},
              {label: '000', value: '000'},
              {label: '1', value: '1'},
              {label: '2', value: '2'},
              {label: '3', value: '3'},
              {label: '4', value: '4'},
              {label: '5', value: '5'},
              {label: '6', value: '6'},
              {label: '7', value: '7'},
              {label: '8', value: '8'},
              {label: '9', value: '9'}
            ]}
            />
      </View>


      <View style={styles.largeDropdown}> 
          <DropDown
                value={airwayLocation}
                setValue={airwayLocation=>{
                    setAirwayLocation(airwayLocation);
                    setInterventions(prevInterventions=>({...prevInterventions, airwayLocation: airwayLocation}))}}
            placeholder = 'Location'
            items = {[
              {label: 'Nasal', value: 'Nasal'},
              {label: 'Oral', value: 'Oral'},
              
            ]}
           />
      </View>
    
    </View>


    <View style={styles.container}>
      <View style={styles.secRow}>

          <View style={styles.checkboxGroup}>
          <CheckBox
              isChecked={peep}
              setChecked={peep=>{
              setPeep(peep);
              setInterventions(prevInterventions=>({...prevInterventions, peep: peep}))}}/>
          <Text>PEEP</Text>
          </View>

          <TextInput
            style={styles.input}
            value={text}
            onChangeText={text=>{
                setText(text)
                setInterventions(prevInterventions=>({...prevInterventions, text: text}))}}
            placeholder="Bring up a keypad"
          />
      </View>
    </View>


    <View style={styles.container}>
    <View style={styles.secRow}>

        <View style={styles.checkboxGroup}>
          <CheckBox
              isChecked={suction}
              setChecked={suction=>{
              setSuction(suction);
              setInterventions(prevInterventions=>({...prevInterventions, suction: suction}))}}/>
          <Text>Suction</Text>
          </View>

      <View style={styles.largeDropdown}> 
          <DropDown
                value={catheter}
                setValue={catheter=>{
                    setCatheter(catheter);
                    setInterventions(prevInterventions=>({...prevInterventions, catheter: catheter}))}}
              placeholder = 'Suction Catheter'
              items = {[
              {label: 'Opt 1', value: 'Opt 1'},
              {label: 'Opt 2', value: 'Opt 2'},
              ]}
            />
      </View>
    </View>
    </View>


    <View style={styles.container}>   
    <View style={styles.secRow}>
      <View style={styles.checkboxGroup}>
          <CheckBox
              isChecked={bvm}
              setChecked={bvm=>{
              setBvm(bvm);
              setInterventions(prevInterventions=>({...prevInterventions, bvm: bvm}))}}/>
          <Text>BVM</Text>
      </View>
    </View>
    </View>


  </View>



<View style={styles.component}>
    <IvPage
       interventions={interventions}
       setInterventions={setInterventions}
       allIv={allIv}
       setAllIv={setAllIv}/>
    <View style={styles.bottomRow}>
            <TouchableOpacity style = {styles.saveButton}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
</View>


</View>

    );
    
  }

  const commonStyle = {
    borderColor: '#3b3b3b',
    borderWidth: 1,
    width: '30%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'white'
}

  const styles = StyleSheet.create({
    layout: {
      
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      height: '58%',
      width: '100%',
      backgroundColor: "#4A96C9",
    },

    component: {
      backgroundColor: '#4A96C9',  
      flex:1,
      flexDirection: "column",
      height: '90%',
      width: '90%',
      
    
    },    
    bottomRow:{
      ...commonStyle,
      flexDirection: 'row',
      width: '80%',
      height: '15%',
      marginTop: 'auto',
      backgroundColor: '#93ff33',
      marginLeft: 'auto'  
  },
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      margin:4
    
    },


    smallDropdown: {
      width: '40%',
      height:50,
      
  
    },
  
    largeDropdown: {
      width: '50%',
      zIndex: 1000,
      elevation:1000,
      height:50,
    },

   

    input: {
      height: 50,
      width:'50%',
      borderWidth: 1,
      backgroundColor: "white",
      margin: 12,
      padding: 10,
      
    },

    checkboxGroup:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginRight: '4%'
  },

  secRow:{
    marginLeft:80,
    marginTop: '3%',
    flexDirection: "row",
    width:'100%'
  },


    });

