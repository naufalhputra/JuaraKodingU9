import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, TextInput, Alert,  } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'

export default class App extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [],
            getBio:""
        };

    }

    componentDidMount(){
      this.getData();
    }
    
    componentDidUpdate(){
      this.getData();
    }

    getData =()=>{
        //Make a request for a user with a given ID
        axios.get(`http://192.168.1.7:8080/bio/${this.state.getBio}`)
        .then( (response) => {
          // console.log(response.data")
          let data=response.data;   
          this.setState({data:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

    deleteData(id){
      console.log(id);
      axios.delete(`http://192.168.1.7:8080/bio/deletebio/${id}`)
      .then( (response) => {
        // console.log(response.data")
          alert(response.data)
      })
      .catch(function (error) {
      // handle error
       console.log(error);
      })
    }

    //  Item = ({ title }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.title}>{title}</Text>
    //     </View>
    //   );
      
    renderItem = ({ item }) => (
        <View style = {{borderWidth:3, borderColor:"black"}}>
            <Text style={styles.title}>Name : {item.name }</Text>
            <Text style={styles.title}>Email : {item.email }</Text>
            <Text style={styles.title}>Phone : {item.phone }</Text>
            <Text style={styles.title}>Address : {item.address  }</Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("UpdateDataBio",item)}} style={styles.button}><Text style={styles.title}>Update</Text></TouchableOpacity>
            <TouchableOpacity  onPress={()=>{Alert.alert('Anda yakin?',
              'Saya sih tidak...',[
                {text: 'TIDAK', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
                {text: 'YA', onPress: () => this.deleteData(item.id)},
              ])}} 
              style={styles.button}>
                <Text style={styles.title}>Delete</Text>
            </TouchableOpacity>
              
        </View>
    )

    

    render() {
        return (
            <SafeAreaView style={styles.container}>

              <RNPickerSelect pickerProps={{style: {height: 40, overflow: 'hidden'}}} onValueChange={(value) => console.log(value)}
            items={[
                { label: 'name', value: 'name' },
                { label: 'email', value: 'email' },
                { label: 'phone', value: 'phone' },
                { label: 'address', value: 'address' },


            ]}
        />
              <TextInput TextInput placeholder="Cari" onChangeText={(data)=>{this.setState({getBio:data})}}/>
              <TouchableOpacity onPress={this.getData.bind(this)} style={styles.button}><Text style={styles.title}>Cari</Text></TouchableOpacity>
              
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
              <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>List </Text></TouchableOpacity> 
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("AddDataBio")}} style={styles.button}><Text style={styles.title}>Tambahkan</Text></TouchableOpacity>
            </SafeAreaView>
          );
    }
}
const selectedItem = {
  name: 'name',
  email: 'email',
  phone: 'phone',
  address: 'address',

};

const styles = StyleSheet.create({

  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
    button: {
      margin:10,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });