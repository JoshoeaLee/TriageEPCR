import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import { useState } from 'react';
import DropDown from '../utility/DropDown';
import React from 'react';
import CheckBox from '../utility/Checkbox';
import { IvPage } from './IvPage';
import TextBox from '../utility/TextBox';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Intervention({interventions, setInterventions, allIv, setAllIv, setPublicOpaSize, setPublicEttSize, setPublicLmaSize, setPublicCatheter}) { 

  //CheckBox Data holders
  const [opa, setOpa] = useState(interventions.opa || false);
  const [lma, setLma] = useState(interventions.lma || false);
  const [ett, setEtt] = useState(interventions.ett || false);
  const [peep, setPeep] = useState(interventions.peep || false);
  const [suction, setSuction] = useState(interventions.suction || false);
  const [bvm, setBvm] = useState(interventions.bvm || false);

//this is used for the state of the keypad
const [peepText, setPeepText] = useState(interventions.peepText || '');

//Dropdown Box data holders

  //Need this for the Suction
  const [catheter, setCatheter] = useState(interventions.catheter || null);

 
  //Darina made this. Needs to be linked to backend
  const [openSizeOPA, setOpenSizeOPA] = useState(false);
  const[valueSizeOPA, setValueSizeOPA] = useState(interventions.valueSizeOPA || null);

  const [openSizeLMA, setOpenSizeLMA] = useState(false);
  const[valueSizeLMA, setValueSizeLMA] = useState(interventions.valueSizeLMA || null);

  const [openSizeETT, setOpenSizeETT] = useState(false);
  const[valueSizeETT, setValueSizeETT] = useState(interventions.valueSizeETT || null);
  

 return (
<View style={styles.layout}>
  
  <View style={styles.component}>  

    <View style={[styles.container, { zIndex: 4}]}>
    <View style={styles.secRow}>
      <View style={styles.checkboxGroup}>
        <CheckBox
            isChecked={opa}
            setChecked={opa=>{
            setOpa(opa);
            setInterventions(prevInterventions=>({...prevInterventions, opa: opa}))}
            
            }/>
        <Text>OPA</Text>
        </View>

        <View style={styles.smallDropdown}>
                    <DropDownPicker 
                    open={openSizeOPA}
                    value={valueSizeOPA}
                    setOpen={setOpenSizeOPA}
                    setValue={valueSizeOPA=>{
                      setValueSizeOPA(valueSizeOPA);
                      setPublicOpaSize(valueSizeOPA);
                      setInterventions(prevInterventions=>({...prevInterventions, valueSizeOPA: valueSizeOPA}))}}           
                    placeholder = 'Size'
                    items = {[
                      {label: '00', value: '00'},
                      {label: '0', value: '0'},
                      {label: '1', value: '1'},
                      {label: '2', value: '2'},
                      {label: '3', value: '3'},
                      {label: '4', value: '4'},
                      {label: '5', value: '5'},
                       
                        ]}
                    />
        </View>
      </View>          
    </View>


    <View style={[styles.container, { zIndex: 3}]}>
    <View style={styles.secRow}>
      <View style={styles.checkboxGroup}>
        <CheckBox
              isChecked={lma}
              setChecked={lma=>{
              setLma(lma);
              setInterventions(prevInterventions=>({...prevInterventions, lma: lma}))}}/>
        <Text>LMA</Text>
        </View>
      <View style={styles.smallDropdown}>

                <DropDownPicker 
                    open={openSizeLMA}
                    value={valueSizeLMA}
                    setOpen={setOpenSizeLMA}
                    setValue={valueSizeLMA=>{
                      setValueSizeLMA(valueSizeLMA);
                      setPublicLmaSize(valueSizeLMA);
                      setInterventions(prevInterventions=>({...prevInterventions, valueSizeLMA: valueSizeLMA}))}}           
                    placeholder = 'Size'
                    items = {[
              {label: '1', value: '1'},
              {label: '2', value: '2'},
              {label: '3', value: '3'},
              {label: '4', value: '4'},
              {label: '5', value: '5'},
              
            ]}
                    /> 
       
          </View>

      </View>
    
    </View>


    <View style={[styles.container, { zIndex: 2}]}>
    <View style={styles.secRow}>
    <View style={styles.checkboxGroup}>
        <CheckBox
              isChecked={ett}
              setChecked={ett=>{
              setEtt(ett);
              setInterventions(prevInterventions=>({...prevInterventions, ett: ett}))}}/>
        <Text>ETT</Text>
        </View>
      <View style={styles.smallDropdown}>
        
      <DropDownPicker 
                    open={openSizeETT}
                    value={valueSizeETT}
                    setOpen={setOpenSizeETT}
                    setValue={valueSizeETT=>{
                      setValueSizeETT(valueSizeETT);
                      setPublicEttSize(valueSizeETT);
                      setInterventions(prevInterventions=>({...prevInterventions, valueSizeETT: valueSizeETT}))
                    }}
          
                    placeholder = 'Size'
                    items = {[
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
        </View>
    </View>


    <View style={[styles.container, { zIndex: 1}]}>
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
                    setPublicCatheter(catheter)
                    setInterventions(prevInterventions=>({...prevInterventions, catheter: catheter}))}}
              placeholder = 'Suction Catheter'
              items = {[
              {label: '10G', value: '10G'},
              {label: '12G', value: '12G'},
              {label: '14G', value: '14G'},
              {label: '16G', value: '1G'},
              ]}
            />
      </View>
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
            value={peepText}
            onChangeText={peepText=>{
                setPeepText(peepText)
                setInterventions(prevInterventions=>({...prevInterventions, peepText: peepText}))} 
            }
            placeholder="Bring up a keypad"
          />
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
      height: Dimensions.get('window').height * 0.58,
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
      margin:6,
      marginLeft:'5%'
    
    },


    smallDropdown: {
      width: '50%',
      height:50,
      marginLeft: 20
      
  
    },
  
    largeDropdown: {
      width: '50%',
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
    marginLeft:25,
    flexDirection: "row",
    width:'100%'
  },


    });