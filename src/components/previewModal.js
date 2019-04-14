import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux'

import Swiper from 'react-native-swiper';

class PreviewModal extends Component {
    constructor() {
        super();
        this.state = {
            description: null,
            title: null
        }

    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalState}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.container}>
                        <Swiper showsButtons={false} 
                                showsPagination={false} 
                                index={this.props.data[Number(this.props.pressedImage)].id}
                                // onIndexChanged={ (index) => alert(index)}
                                >
                            {this.props.data.map((data, index) => {
                                return (
                                    <View style={styles.wrapper}>
                                        <Image
                                            style={{ width: '100%', height: 300 }}
                                            source={{ uri: this.props.data[index].src }}
                                        />
                                    </View>
                                )
                            })}
                        </Swiper>
                        <TouchableHighlight
                            onPress={this.props.hideModal}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
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
        height: 300,
        width: '100%'
    },
    wrapper: {
        width: '100%',
        height: 300
    }
})

const mapStateToProps = (state) => {
    return {
        modalState: state.modalVisible,
        pressedImage: state.pressedImage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch({ type: 'HIDE_MODAL' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewModal)

