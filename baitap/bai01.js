import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Bai1 = () => {
  const [value, setValue] = useState(arr);
  const xoaAnh = () => {
    let newArray = value.filter((value, index) => index != 0);
    setValue(newArray);
  };
  const myItem = item => {
    return (
      <View
        style={{
          flex: 1,
          height: 50,
          backgroundColor: 'yellow',
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20 }}>{item.index + 1}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <FlatList data={value} renderItem={myItem}></FlatList>
      <TouchableOpacity
        onPress={() => xoaAnh()}
        style={{backgroundColor: 'white', margin: 10, alignItems: 'center', padding: 20}}>
        <Text style={{color: 'black'}}>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bai1;
