import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function ProductIno () {

    const [ price, setPrice ] = useState( 25.1 );
    const [ count, setCount ] = useState( 1 );



    const increment = () => {
        setPrice( price + 25.1 );
        setCount( count + 1 );
    }
    const decrement = () => {


        if ( price <= 0 ) {
            setPrice( 0 );
            setCount( 0 );
            return 0;
        } else {
            setPrice( price - 25.1 );
            setCount( count - 1 );
        }

    }

    return (
        <View style={ styles.wrapBox }>


            <View style={ styles.itemBox }>
                <Text style={ styles.itemBoxText }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo repellendus deserunt placeat soluta et ipsum sequi non, rem harum aliquid minus in at cum suscipit, ea vel, provident consequatur.</Text>
            </View>
            <View style={ styles.itemBox }>
                <View style={ styles.innerBox }>
                    <Text style={ { marginRight: 10, fontWeight: "bold", fontSize: 20 } }>Name:</Text>
                    <Text style={ { fontSize: 20, fontStyle: "italic", color: 'grey' } }>Jordan</Text>

                </View>
                <View style={ styles.innerBox }>
                    <Text style={ { marginRight: 10, fontWeight: "bold", fontSize: 20 } }>Year:</Text>
                    <Text style={ { fontSize: 20, fontStyle: "italic", color: 'grey' } }>2020</Text>


                </View>
                <View style={ styles.innerBox }>
                    <Text style={ { marginRight: 10, fontWeight: "bold", fontSize: 20 } }>Color:</Text>
                    <Text style={ { fontSize: 20, fontStyle: "italic", color: 'grey' } }> Red + Blue</Text>

                </View>
                <View style={ styles.innerBox }>
                    <Text style={ { marginRight: 10, fontWeight: "bold", fontSize: 20 } }>Age:</Text>
                    <Text style={ { fontSize: 20, fontStyle: "italic", color: 'grey' } }> 18-24</Text>

                </View>

                <View style={ styles.priceBox }>
                    <Text style={ { color: "green", fontWeight: "bold", fontStyle: "italic", fontSize: 70 } }> { price.toFixed( 2 ) } $ </Text>
                </View>

                <View style={ styles.priceBoxTwo }>
                    <Pressable style={ styles.priceBoxInnerBtn } onPress={ () => increment() }>
                        <Text style={ { fontSize: 25, color: "red" } }>+</Text>
                    </Pressable>

                    <Text style={ { color: 'green', fontWeight: "bold", fontSize: 30 } } > { count } </Text>
                    <Pressable style={ styles.priceBoxInnerBtn } onPress={ () => decrement() }>
                        <Text style={ { fontSize: 25, color: "red" } }>-</Text>
                    </Pressable>
                </View>

                <View style={ styles.buyBox }>
                    <Pressable style={ styles.buyBtn } onPress={ () => console.log( "hello" ) }>
                        <Text style={ { textAlign: "center", fontWeight: 'bold', color: 'white', fontSize: 20 } }>BUY</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create( {

    buyBtn: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f4511e"
    },
    buyBox: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },

    priceBox: {
        display: 'flex',
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 10
    },


    wrapBox: {
        // backgroundColor: "red",
        flex: 1,
        marginVertical: 20
    },


    innerBox: {
        display: 'flex',
        flexDirection: "row",

        // justifyContent: "space-between",
        marginBottom: 5
    },

    itemBox: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
        paddingVertical: 10
    },
    itemBoxText: {
        fontSize: 20
    },

    priceBoxTwo: {

        // backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        display: 'flex',
        marginVertical: 20,



    },
    priceBoxInnerBtn: {
        display: 'flex',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 50,
        marginHorizontal: 20,



    }


} )
