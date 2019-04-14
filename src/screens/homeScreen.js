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
                id: 0,
                title: 'In porta consequat nisi, ut',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis nunc ac libero vestibulum, sed aliquet quam suscipit. Quisque aliquam.',
                src: 'https://66.media.tumblr.com/c79dc032ecd96a76a7bf1731849ae064/tumblr_o1y46jzM0T1s3zokdo1_500.jpg',
            }, {
                id: 1,
                title: 'Nulla ac tellus.',
                description: 'Duis nec nulla erat. Mauris quis gravida ligula, vel scelerisque ex. Morbi ligula est, scelerisque sed porttitor at, malesuada id.',
                src: 'https://66.media.tumblr.com/7680bc5476cb030d0de1553a6d54ad9f/tumblr_pg4ysfZe3v1wznak4o1_400.jpg',
            },
            {   
                id: 2,
                title: 'Sed efficitur ipsum vel.',
                description: 'Aliquam erat volutpat. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque.c',
                src: 'http://25.media.tumblr.com/cd0e607982c8ad665da53e5c99fe7106/tumblr_mzmql89R8o1tqskffo1_500.jpg',
            },
            {   
                id: 3,
                title: 'Pellentesque a velit ac',
                description: 'Donec quis efficitur sem, at laoreet erat. Quisque nec pretium velit, nec accumsan lorem. Morbi venenatis rhoncus bibendum. Mauris tempus.',
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
