
import React from "react";
import {FlatList, ScrollView, Text, View} from 'react-native'

const arr = [{name: 'Khánh chó', age: 52}, {product: 'pant', price: 300},3,4,5,6,7,8,9,43,323,42,23,323,2]

const MyScrollView = () => {

    const myItem = item => {
        if(item.index === 0)
        return(
            <View style={{height: 100, backgroundColor: 'green', marginTop: 10}}>
                <Text>Tên người:</Text>
                <Text>{item.item.name}</Text>
            </View>
        )

        else if (item.index === 1)

        return(
            <View style={{height: 100, backgroundColor: 'green', marginTop: 10}}>
                <Text>Tên sản phẩm:</Text>
                <Text>{item.item.product}</Text>
            </View>
        )

        else 
        return (
            <View>
                <Text>{item.item}</Text>
            </View>
        )
    }



    return (
        // <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: 'white'}}>
        //     <View style={{height: 150, backgroundColor: 'red'}} />
        //     <View style={{height: 150, backgroundColor: 'white'}} />
        //     <View style={{height: 150, backgroundColor: 'yellow'}} />
        //     <View style={{height: 150, backgroundColor: 'pink'}} />
        //     <View style={{height: 150, backgroundColor: 'black'}} />
        //     <View style={{height: 150,backgroundColor: 'red'}} />
        //     <View style={{height: 150,backgroundColor: 'pink'}} />
        //     <View style={{height: 150,backgroundColor: 'yellow'}} />
        //     <View style={{height: 150,backgroundColor: 'pink'}} />
        //     <View style={{height: 150,backgroundColor: 'red'}} />
        //     <View style={{height: 150,backgroundColor: 'white'}} />
        //     <View style={{height: 150,backgroundColor: 'yellow'}} />
        //     <Text>dsadsa</Text>
        //     <Text>dsadsa</Text>
        //     <Text>dsadsa</Text>
        //     <Text>dsadsa</Text>
        //     <Text>dsadsa</Text>
        //     <Text>dsadsa</Text>
        //     <Text>dsadsa</Text>
        // </ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
            style={{backgroundColor: 'white'}}
            data={arr}
            renderItem={myItem}
        />
        </View> 
    )
}

export default MyScrollView;