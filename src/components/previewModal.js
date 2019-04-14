import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

import Swiper from 'react-native-swiper';

class PreviewModal extends Component {
    constructor() {
        super();
    }

    updateData = (index) => {
        this.props.setMetadata(String(this.props.data[index].title), String(this.props.data[index].description))
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalState}
            >
                <View style={styles.modalBackground}>
                    <TouchableOpacity
                        onPress={this.props.hideModal}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={{ uri: 'http://eng-cs.syr.edu/wp-content/themes/syrecs/assets/images/CLOSEICON.png' }}
                        />

                    </TouchableOpacity>
                    <View style={styles.container}>
                        <Swiper showsButtons={false}
                            showsPagination={false}
                            index={this.props.data[Number(this.props.pressedImage)].id}
                            onIndexChanged={(index) => this.updateData(index)}
                        >
                            {this.props.data.map((data, index) => {
                                return (
                                    <View style={styles.wrapper} key={index}>
                                        <Image
                                            style={{ flex: 1, height: undefined, width: '100%' }}
                                            source={{ uri: this.props.data[index].src }}
                                            resizeMode={'contain'}
                                        />
                                    </View>
                                )
                            })}
                        </Swiper>
                        <View style={styles.metadataContainer}>
                            <Text style={styles.title}>{this.props.currentTitle}</Text>
                            <Text style={styles.description}>{this.props.currentDescription}</Text>
                        </View>
                    </View>
                </View>
            </Modal >
        )
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    container: {
        height: 500,
        width: '100%'
    },
    metadataContainer: {
        alignItems: 'center',
        padding: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    description: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#fff',
        textAlign: 'center'

    },
    wrapper: {
        width: '100%',
        height: 340
    }
})

const mapStateToProps = (state) => {
    return {
        modalState: state.modalVisible,
        pressedImage: state.pressedImage,
        currentTitle: state.currentTitle,
        currentDescription: state.currentDescription
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch({ type: 'HIDE_MODAL' }),
        setMetadata: (title, description) => dispatch({ type: 'UPDATE_METADATA', title, description })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewModal)

