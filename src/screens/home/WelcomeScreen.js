import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { COLORS } from '../../constants/themes/colors';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../../assets/images/undraw_Add_to_cart_re_wrdo.png'),
    title: 'Los mejores y mas variados productos',
    subtitle: 'Aprovecha descuentos y promociones en compras combinadas.',
  },
  {
    id: '2',
    image: require('../../../assets/images/undraw_Personal_text_re_vqj3.png'),
    title: 'No pierdas el tiempo',
    subtitle: 'Lo que queres está a tan solo un Click de distancia',
  },
  {
    id: '3',
    image: require('../../../assets/images/undraw_Profile_data_re_v81r.png'),
    title: 'Bienvenido a LOGO',
    subtitle: 'Registrate ya y recibe un cupon de 10% en tu primera compra.',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('AuthNavigator')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.gameOnPrimary}}>
      <StatusBar backgroundColor={COLORS.gameOnPrimary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WelcomeScreen;


// import React from 'react';
// import { SafeAreaView, StyleSheet, Dimensions, StatusBar, FlatList, View, Image} from 'react-native';
// import { COLORS } from '../../constants/themes/colors';


// const {width, height} = Dimensions.get('window');

// const slides= [
//     {
//         id: '1',
//         image: require('../../../assets/images/undraw_Add_to_cart_re_wrdo.png'),
//         title: 'Bienvenido',
//         subtitle: 'Antes de empezar debes saber...'
//     },
//     {
//         id: '2',
//         image: require('../../../assets/images/undraw_Personal_text_re_vqj3.png'),
//         title: 'Registro',
//         subtitle: 'Inicia sesion para una mejor experiencia'
//     },
//     {
//         id: '3',
//         image: require('../../../assets/images/undraw_Profile_data_re_v81r.png'),
//         title: 'Por ultimo..',
//         subtitle: 'Lorem ipsun'
//     },
// ];

// const Slide = ({ item }) => {
// return (
//     <View style={{alignItems: 'center' }}>
//         <Image source={item?.image} style={{height: '75%', width, resizeMode: 'contain'}} />
//         <Text style={styles.title} >{item?.title}</Text>
//         <Text style={styles.subtitle} >{item?.subtitle}</Text>
//     </View>
// )
// }

// const WelcomeScreen = ({navigation}) => {

//     const Footer=() => {
//         return (
//         <View 
//         style={{
//             height:height * 0.25,
//             justifyContent: 'space-between',
//             paddingHorizontal: 20,
//         }}>
//             <View 
//             style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}
//             >

//             </View>
//         </View>)
//     };

//     return (
//         <SafeAreaView style={{flex: 1, backgroundColor:COLORS.gameOnPrimary}}>
//             <StatusBar backgroundColor={COLORS.gameOnPrimary}/>
//             <FlatList
//             paddingEnabled
//             data={slides}
//             contentContainerStyle={{height: height * 0.75}} 
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             renderItem={({}) => <Slide item={item} /> }
//             keyExtractor={(item,index) => index.toString()}
//             />
//         </SafeAreaView>
//     );
// };



// const styles = StyleSheet.create({
//     title: {
//         color:COLORS.white,
//         fontSize:22,
//         fontWeight: 'bold',
//         marginTop: 20,
//         textAlign: 'center',
//     },
//     subtitle: {
//         color:COLORS.white,
//         fontSize: 13,
//         marginTop: 10,
//         maxWidth: '70%',
//         textAlign: 'center',
//         lineHeight: 23,
//     },
// });

// export default WelcomeScreen;