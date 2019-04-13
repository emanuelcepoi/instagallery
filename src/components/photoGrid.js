import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';

class PhotoGrid extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.grid}>
                    {
                        this.props.images.map((src, index) => {
                            return (
                                <TouchableWithoutFeedback key={index}>
                                    <Image
                                        style={ styles.gridImage }
                                        source={{ uri: src }}
                                    />
                                </TouchableWithoutFeedback>

                            )
                        })
                    }
                    </View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridImage: {
        width: '33.33%',
        height: 110,
        borderWidth: 1,
        borderColor: '#fff',
    }
})


export default PhotoGrid