import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, } from 'react-native';
import {connect} from 'react-redux'


class PhotoGrid extends Component {
    constructor() {
        super()
        this.state = {
            modalVisible: false,
            currentImage: null
        }
    }

    showDetails = (index, title, description) => {
        alert(index)
    }

    setModalVisible = (visible, image) =>  {
        this.setState({modalVisible: visible,
                       currentImage: image});
      }
    
    render() {

        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.grid}>
                        {
                            this.props.images.map((image, index) => {
                                return (
                                    <TouchableWithoutFeedback onPress={this.props.showModal} key={index}>
                                        <Image
                                            style={styles.gridImage}
                                            source={{ uri: image.src }}
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
    },
  
})



function mapDispatchToProps(dispatch) {
    return {
       showModal: () => dispatch({type: 'SHOW_MODAL'})
    }
}
export default connect(null, mapDispatchToProps)(PhotoGrid)