import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios';
import uuid from 'react-native-uuid';
import RetrievalFooter from './RetrievalFooter';

export default function EPCRRetrievalPage({ changeView, setView, setIncidentDetails, setPatientInfo, setVitalSigns, setAllIv, setInterventions, setProcedures, setAllMedication, setAssTransInfo, setIncID }) {
    
    const [searchInput, setSearchInput] = useState('');
           
    async function searchFromDatabase(searchInput){
            console.log('Searching...');
            axios.get(`http://192.168.1.134:3000/epcrs/${searchInput}`)
                .then(function (response) {
                    if (response.data.length === 0) {
                        alert('No records found');
                    } else {
                        console.log(response.data);
                        setAllEPCRRecords(response.data);
                    }
              })  
          };

    const [allEPCRRecords, setAllEPCRRecords] = useState([]);


    function convertToJson(string){
        const object = JSON.parse(string);
        return object;
    }


    function setAllData(singleRecord){
        setView('incident');
        setIncID(singleRecord.incident_id.toString());
        setAllIv(convertToJson(singleRecord.interventions));
        setInterventions({opa: singleRecord.opa , lma: singleRecord.lma ,ett: singleRecord.ett , peep: singleRecord.peep ,suction: singleRecord.suction , bvm: singleRecord.bvm , peepText: singleRecord.peep_note  , catheter: singleRecord.suction_catheter , valueSizeLMA: singleRecord.lma_size , valueSizeOPA: singleRecord.opa_size  , valueSizeETT: singleRecord.ett_size})
        setIncidentDetails({type: singleRecord.incident_type , notes: singleRecord.incident_note , notifyT: singleRecord.notified_time , responseT: singleRecord.responded_time , locatedT: singleRecord.located_time ,departedT: singleRecord.departed_time ,destinationT: singleRecord.destination_time , location:singleRecord.incident_location });
        setPatientInfo({fName: singleRecord.first_name , mName: singleRecord.middle_name ,lName: singleRecord.last_name , address: singleRecord.address ,nhiNo: singleRecord.nhi_number ,dob: singleRecord.dob ,age: singleRecord.age ,gender: singleRecord.gender ,medications: singleRecord.patient_medication ,allergies: singleRecord.patient_allergy});
        setVitalSigns({BP: singleRecord.bp ,heartRate: singleRecord.heart_rate ,respRate: singleRecord.resp_rate ,temp: singleRecord.temp ,BSL: singleRecord.bsl ,SPo2: singleRecord.spo2 ,ETCo2: singleRecord.etco2, monitor: singleRecord.monitor , manual: singleRecord.manual , palpatation: singleRecord.palpatation , eyes: singleRecord.eye_response , voice: singleRecord.voice_response, motor: singleRecord.motor_response ,fourLead: singleRecord.four_lead_ecg ,twelveLead: singleRecord.twelve_lead_ecg});
        setProcedures({cardioversion: singleRecord.cardioversion, pacing: singleRecord.pacing, cardiacArrest: singleRecord.cardiac_arrest, rsi: singleRecord.rsi, mechVent: singleRecord.mechanical_ventilation, cpap: singleRecord.cpap, cric: singleRecord.surgical_cric, needleDecomp: singleRecord.needle_decompression, fingerThorac: singleRecord.finger_thoracostomy, fiBlock: singleRecord.fi_block});
        setAllMedication(convertToJson(singleRecord.incident_medication));
        setAssTransInfo({subjective: singleRecord.subjective_note, objective: singleRecord.objective_note, assessment: singleRecord.assessment_note, arrivalTime: singleRecord.estimate_arrival_time, plan: singleRecord.plan_note, vehicle: singleRecord.vehicle, transport: singleRecord.transport_status, destination: singleRecord.destination});
    }


    async function retrieveFromDatabase(){
        console.log('Retrieving...');
        axios.get('http://192.168.1.134:3000/epcrs/')
        .then( function(response){
          console.log(response.data);
          console.log(response.data[0].incident_id)
          setAllEPCRRecords(response.data);
        })
    }
    
    return (
        <>
      <View style={styles.layout}>
          <TouchableOpacity onPress={()=>{retrieveFromDatabase()}} style={styles.retrieveButton}>
                <Text style={styles.text}>Retrieve Data!</Text>
              </TouchableOpacity>
        <View style={styles.header}>
              
              <TextInput
                value={searchInput}
                onChangeText={setSearchInput}
                placeholder={'Search by ID'}
                placeholderTextColor = '#000'
                  style={styles.wideInput} /> 
              <TouchableOpacity onPress={() => { searchFromDatabase(searchInput) }} style={styles.searchButton}>
                <Text style={styles.text}>Search Data!</Text>
              </TouchableOpacity>             
        </View>

        <View style={styles.scrollcontent}>
            <ScrollView style = {styles.scrollbox} >
                {allEPCRRecords.length===0? <View><Text>No EPCR Records Avaialble</Text></View> : <></>}
                {allEPCRRecords.map(singleRecord=>{
                    return(
                    <TouchableOpacity onPress={()=>{setAllData(singleRecord)}} key={uuid.v4()} style={styles.medicationBox}>
                        <Text style={styles.text}>{singleRecord.first_name} {singleRecord.last_name}</Text>
                    </TouchableOpacity>
                    )
                })}
            </ScrollView>
    </View>
    </View>    
        <RetrievalFooter
              changeView={changeView} />
          <ExpoStatusBar style="auto" />

     </> 
  )
}

const commonStyle = {
        borderColor: '#3b3b3b',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    margin: 10,
        backgroundColor: '#fff',
}

const styles = StyleSheet.create({
    
    layout: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('screen').height*0.8,
        width: '100%',
        backgroundColor: '#4A96C9',  
        paddingTop: 20

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        backgroundColor: '#4A96C9',
        marginBottom: 10
    },
    scrollcontent:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        
    },
    scrollbox:{
        flex: 1
        
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '25%',
    },
    bottomRow:{
        flexDirection: 'row',
        width: '90%',
        height: '15%',
        marginTop: 'auto'  
    },
    text:{
        fontSize: 30,
    },
    deleteButton:{
        ...commonStyle,
        width: '5%',
        height: '60%',
        backgroundColor: '#FF5C5C'
    },
   
    medicationBox:{
        ...commonStyle,
        width: '90%'
    },
    retrieveButton:{
        ...commonStyle,
        width: '50%',
        height: '15%',
        backgroundColor: '#4DFF70'
    },
    searchButton:{
        ...commonStyle,
        width: '50%',
        backgroundColor: '#4DFF70'
    },
    input:{
        ...commonStyle,
        paddingLeft: 10,
        width: '15%',
        height: '60%',

    },
    wideInput:{
        ...commonStyle,
        width: '40%',
        height: '60%',
        paddingLeft: 10,
    },
    button:{
        ...commonStyle,
        width: '20%',
        height: '60%',
        backgroundColor: 'dodgerblue',
    },
    saveButton:{
        ...commonStyle,
        width: '20%',
        height: '60%',
        backgroundColor: '#93ff33',
        marginLeft: 'auto'
    }
})