import React from 'react'
import { View, ScrollView, Dimensions, Animated, Text } from 'react-native'
import LoginSlide from '../LoginSlide'
import Larivo_logo from '../../../assets/icons/login/icon-larivo_logo.svg'
// import Circle from '../../../assets/icons/login/circle.svg'
// import Circle_O from '../../../assets/icons/login/circle-o.svg'
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

const screenWidth = Dimensions.get('window').width

const styles = {
  slidesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: screenWidth,
  },
  scrollViewContainer: {
    width: screenWidth
  },
  circles_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 120,
    marginTop: 52
  }
}

const slides = [
  {
    logo: Larivo_logo,
    headline: 'Larivo',
    body: 'A safe platform to share curated mental health stories and find mental health resources.'
  },
  {
    logo: Larivo_logo,
    headline: 'Larivo',
    body: 'A safe platform to share curated mental health stories and find mental health resources.'
  },
  {
    logo: Larivo_logo,
    headline: 'Larivo',
    body: 'A safe platform to share curated mental health stories and find mental health resources.'
  }
]

let scrollX = new Animated.Value(0)

const LoginSlideContainer = () => {

  let position = Animated.divide(scrollX, screenWidth)

  return (
    <>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          centerContent={true}
          style={styles.scrollView}
          onScroll={Animated.event( 
            [{ nativeEvent: { contentOffset: { x: scrollX } } }]
            )} 
            scrollEventThrottle={16}
          >
          {slides.map((item, i) => {
            return(
            <LoginSlide item={item} key={i}/>
            )
          })}
          </ScrollView>
      </View>
      <View
          style={styles.circles_container} 
          >
          {slides.map((_, i) => { 
            let scale = position.interpolate({
              inputRange: [i - 1, i, i + 1], 
              outputRange: [1.2, 1.8, 1.2], 
              extrapolate: 'clamp' 
            });
            let borderWidth = position.interpolate({
              inputRange: [i - 1, i, i + 1], 
              outputRange: [1, 3, 1], 
              extrapolate: 'clamp' });
            return (
              <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                style={{ height: 10, width: 10, 
                  backgroundColor: 'none', margin: 12, borderRadius: 5,
                  borderWidth: borderWidth, borderColor: 'white', 
                  transform:[{scaleX: scale}, {scaleY: scale}]}} />
            );
          })}
        </View>
       


    </>
  )
}

export default LoginSlideContainer
