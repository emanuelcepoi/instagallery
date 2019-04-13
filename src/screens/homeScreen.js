import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/header';
import PhotoGrid from '../components/photoGrid';


class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            images: ['https://66.media.tumblr.com/c79dc032ecd96a76a7bf1731849ae064/tumblr_o1y46jzM0T1s3zokdo1_500.jpg',
            'https://66.media.tumblr.com/7680bc5476cb030d0de1553a6d54ad9f/tumblr_pg4ysfZe3v1wznak4o1_400.jpg',
            'http://25.media.tumblr.com/cd0e607982c8ad665da53e5c99fe7106/tumblr_mzmql89R8o1tqskffo1_500.jpg',
            'https://data.whicdn.com/images/59064151/large.jpg',
            'https://i.pinimg.com/originals/d4/35/44/d4354418235acc8b2f11c87f0e25466d.jpg',
            'https://d2h1pu99sxkfvn.cloudfront.net/b0/9942959/409379970_IZUA8Jft2o/P6.jpg',
            'https://i.pinimg.com/originals/9d/fc/7e/9dfc7e8ec5753da3fff7c52af56c66d1.jpg',
            'https://data.whicdn.com/images/259461738/original.jpg',
            'https://i.pinimg.com/originals/f4/50/e8/f450e8634546a8592fab4e76b7d398c4.jpg',
            'https://i.pinimg.com/originals/f4/50/e8/f450e8634546a8592fab4e76b7d398c4.jpg',
            'https://i.pinimg.com/originals/26/2a/88/262a889eeb41b91e178210cf773a7bce.png',
            'https://clicmagik.com/wp-content/uploads/2018/10/amazing-haircuts-for-long-hair-tumblr-design-ideas-modern-classy-simple-in-home-ideas.jpg',
            'https://pinimg.icu/ipi/0x0/4c155/chorar-e-nada-mais-reserva-garota-tumblr-photography-artistic-photography-Ec5f654d0d6cb231e19f412f718cddc70.jpg',
            'https://i.pinimg.com/originals/3e/f2/78/3ef278a96d0b811fc1f42bbcc1d8a55b.jpg',
            'https://elkotto.com/wp-content/uploads/2018/10/simple-curly-hairstyles-for-prom-tumblr-home-design-great-fantastical-to-interior-designs.jpg',
            'https://cubeleaks.com/wp-content/uploads/2018/10/top-black-hairstyles-tumblr-interior-decorating-ideas-best-beautiful-at-interior-designs.png','https://66.media.tumblr.com/c79dc032ecd96a76a7bf1731849ae064/tumblr_o1y46jzM0T1s3zokdo1_500.jpg',
            'https://66.media.tumblr.com/7680bc5476cb030d0de1553a6d54ad9f/tumblr_pg4ysfZe3v1wznak4o1_400.jpg',
            'http://25.media.tumblr.com/cd0e607982c8ad665da53e5c99fe7106/tumblr_mzmql89R8o1tqskffo1_500.jpg',
            'https://data.whicdn.com/images/59064151/large.jpg',
            'https://i.pinimg.com/originals/d4/35/44/d4354418235acc8b2f11c87f0e25466d.jpg',
            'https://d2h1pu99sxkfvn.cloudfront.net/b0/9942959/409379970_IZUA8Jft2o/P6.jpg',
            'https://i.pinimg.com/originals/9d/fc/7e/9dfc7e8ec5753da3fff7c52af56c66d1.jpg',
            'https://data.whicdn.com/images/259461738/original.jpg',
            'https://i.pinimg.com/originals/f4/50/e8/f450e8634546a8592fab4e76b7d398c4.jpg',
            'https://i.pinimg.com/originals/f4/50/e8/f450e8634546a8592fab4e76b7d398c4.jpg',
            'https://i.pinimg.com/originals/26/2a/88/262a889eeb41b91e178210cf773a7bce.png',
            'https://clicmagik.com/wp-content/uploads/2018/10/amazing-haircuts-for-long-hair-tumblr-design-ideas-modern-classy-simple-in-home-ideas.jpg',
            'https://pinimg.icu/ipi/0x0/4c155/chorar-e-nada-mais-reserva-garota-tumblr-photography-artistic-photography-Ec5f654d0d6cb231e19f412f718cddc70.jpg',
            'https://i.pinimg.com/originals/3e/f2/78/3ef278a96d0b811fc1f42bbcc1d8a55b.jpg',
            'https://elkotto.com/wp-content/uploads/2018/10/simple-curly-hairstyles-for-prom-tumblr-home-design-great-fantastical-to-interior-designs.jpg',
            'https://cubeleaks.com/wp-content/uploads/2018/10/top-black-hairstyles-tumblr-interior-decorating-ideas-best-beautiful-at-interior-designs.png',

            ]
        }
    }
    render() {
      return (
        <View style={styles.container}>
         <Header headerTitle={'instagram'} />
         <PhotoGrid images={this.state.images}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
   
  });

  export default HomeScreen
  