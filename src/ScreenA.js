import React from "react"
import {Image, Text, TextInput, View} from 'react-native'

const ScreenA = () => {

    return (
        <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>


            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{ width: '60%'}} 
                resizeMode="center" 
                source={require('./images/google.jpg')} />
               
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 8, padding: 6}}>
                <Image style={{width: 20, height: 20, marginLeft: 5}} source={require('./images/search.png')} />
                <TextInput style={{flex: 1, padding: 0}} />
            </View>
            

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                <Text style={{color: 'black'}}>Google có các thứ tiếng:</Text>
                <Text style={{color: 'blue'}}>English</Text>
                <Text style={{color: 'blue'}}>Francai</Text>
                <Text style={{color: 'blue'}}>Chinese</Text>
            </View>
        </View>
    )
}

export default ScreenA;