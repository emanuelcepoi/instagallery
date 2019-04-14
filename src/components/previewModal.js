import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux'
class PreviewModal extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalState}
               >
                <View style={styles.modalBackground}>
                    <View>
                        <Text>{this.props.data[Number(this.props.pressedImage)].title}</Text>

                        <TouchableHighlight
                            onPress={this.props.hideModal }>
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
        hideModal: () => dispatch({type: 'HIDE_MODAL'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewModal)

