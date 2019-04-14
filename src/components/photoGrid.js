import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, } from 'react-native';
import {connect} from 'react-redux'
import PreviewModal from './previewModal'


class PhotoGrid extends Component {
    constructor() {
        super()
      
    }

    ComponentWillMount() {
        this.props.setImagesData(this.props.images)
    }

    setModalVisible = (visible, image) =>  {
        this.setState({modalVisible: visible,
                       currentImage: image});
      }
    
    updateData = (index) => {
        this.props.setMetadata( String(this.props.images[index].title), String(this.props.images[index].description))
        this.props.showModal(index)
    }
    render() {

        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.grid}>
                        {
                            this.props.images.map((image, index) => {
                                return (
                                    <TouchableWithoutFeedback onPress={() => this.updateData(index)} key={index}>
                                        <Image
                                            style={styles.gridImage}
                                            source={{ uri: image.src }}
                                        />
                                    </TouchableWithoutFeedback>

                                )
                            })
                        }
                       
                    </View>
                <PreviewModal data={this.props.images}/>

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
       showModal: (pressedImage) => dispatch({type: 'SHOW_MODAL', payload: pressedImage}),
       setMetadata: (title, description) => dispatch({ type: 'UPDATE_METADATA', title, description} )

    }
}
export default connect(null, mapDispatchToProps)(PhotoGrid)