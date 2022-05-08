import React from 'react';
import { StyleSheet, Text, View, FlatList, Button,Image, SafeAreaView } from 'react-native';



const products =[
  {text: ' Limkokwing wings',src:require('./assets/chips.jpg'),id: 1, name: 'CHIPS', price: 17, quantity: 0},
  {text: 'Enjoy your meal of the lowest price',src:require('./assets/humbager.jpg'),id: 2, name: 'HUMBAGER', price: 35, quantity: 0},
  {text: 'We cater delicious food of your favourate ',src:require('./assets/lunchbar.jpg'),id: 3, name: 'LUNCHBAR', price: 13, quantity: 0},
];

class ListItem extends React.Component{
render(){ 
const {item} = this.props;

return(
  <View style={{flexDirection: 'row', backgroundColor: 'purple',paddingTop: 20, height: 200, width: '95%',alignSelf: 'center',justifyContent: 'space-between', alignContent: 'center'}}>
<View style={{flexDirection: 'row', flex:1, alignContent: 'center'}}>
<Text style={{fontFamily: 'times-romen',fontSize: 40,color: 'green', fontWeight: 'bold',}}>{item.text}</Text>
</View>
<View style={{flexDirection: 'row', flex:1, alignContent: 'center'}}>
<Image source={item.src} style={{
      width:150,
      height:150,
      borderRadius: 10,
    }}></Image>
</View>
    <View style={{flexDirection: 'row', flex:1,  alignContent: 'center'}}>
    <Text style={{fontFamily: 'times-romen',fontSize: 20, fontWeight: 'bold',}}>{item.name} - R</Text>
    <Text style={{fontFamily: 'times-romen',fontSize: 20, fontWeight: 'bold',}}>{item.price}</Text>
    </View>
    <View style={{flexDirection: 'row', flex:1,height: 30, width: 60, alignContent: 'center'}}>
      <Button title='Subtrct' onPress={this.props.onSubtract} />
      <Text>{item.quantity}</Text>
      <Button title='Add' onPress={this.props.onAdd}/>
    </View>
  </View>

)
}
}

class App extends React.Component{
state ={
  products,
};
onSubtract = (item, index) => {
  const products = [...this.state.products];
  products[index].quantity -= 1;
  this.setState({products});
}
onAdd = (item, index) => {
  const products = [...this.state.products];
  products[index].quantity += 1;
  this.setState({products});
}
  render(){
    const{products} = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })
    return(
      <SafeAreaView style={{ flex:1,paddingBottom: 20,backgroundColor: 'purple', height: 200, width: '95%',alignSelf: 'center',}}>
        <FlatList
         data ={this.state.products}
        renderItem={({ item, index} ) => (
          <ListItem
           item = {item}
           onSubtract={() => this.onSubtract(item, index)}
           onAdd={() => this.onAdd(item, index)}
           />)}
          keyExtractor = {item => item._id}
          />
          <Text style={{fontFamily: 'times-romen',fontSize: 20, fontWeight: 'bold',}}>Total Guantity: {totalQuantity}</Text>
          <Text style={{fontFamily: 'times-romen',fontSize: 20, fontWeight: 'bold',}}>Total Price: {totalPrice}</Text>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
