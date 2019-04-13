import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import PhotoGrid from '../components/photoGrid';
import PreviewModal from '../components/previewModal';


class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            images: [{
                title: 'Image 1',
                description: 'Image 1 desc',
                src: 'https://66.media.tumblr.com/c79dc032ecd96a76a7bf1731849ae064/tumblr_o1y46jzM0T1s3zokdo1_500.jpg',
            }, {
                title: 'Image 2',
                description: 'Image 2 desc',
                src: 'https://66.media.tumblr.com/7680bc5476cb030d0de1553a6d54ad9f/tumblr_pg4ysfZe3v1wznak4o1_400.jpg',
            },
            {
                title: 'Image 3',
                description: 'Image 3 desc',
                src: 'http://25.media.tumblr.com/cd0e607982c8ad665da53e5c99fe7106/tumblr_mzmql89R8o1tqskffo1_500.jpg',
            },
            {
                title: 'Image 4',
                description: 'Image 4 desc',
                src: 'https://data.whicdn.com/images/59064151/large.jpg',
            },
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header headerTitle={'instagram'} />
                <PhotoGrid images={this.state.images} />
                <PreviewModal />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default HomeScreen
