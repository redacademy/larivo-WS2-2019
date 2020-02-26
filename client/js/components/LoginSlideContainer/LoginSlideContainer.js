import React from 'react'
import { View, ScrollView, Dimensions, Animated, Text } from 'react-native'
import LoginSlide from '../LoginSlide'
import Larivo from '../../../assets/icons/login/icon-larivo_logo.svg'
import ReadStories from '../../../assets/icons/login/icon-read_stories.svg'
import WriteStories from '../../../assets/icons/login/icon-write_stories.svg'
import GetResources from '../../../assets/icons/login/icon-get_resources.svg'


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
    logo: Larivo,
    headline: 'Larivo',
    body: 'A safe platform to share curated mental health stories and find mental health resources.'
  },
  {
    logo: ReadStories,
    headline: 'Read Stories',
    body: 'Come across life journeys and discover the paths others have pursued and experienced.'
  },
  {
    logo: WriteStories,
    headline: 'Write Stories',
    body: 'Find a safe platform to open up and contribute to the community, embracing mental wellness.'
  }
  ,
  {
    logo: GetResources,
    headline: 'Get Resources',
    body: 'Find local resources and curated information from Larivo and community partners.'
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
            return (
              <LoginSlide item={item} key={i} />
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
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
                key={i} 
                style={{
                height: 10, width: 10,
                backgroundColor: 'none', margin: 12, borderRadius: 5,
                borderWidth: borderWidth, borderColor: 'white',
                transform: [{ scaleX: scale }, { scaleY: scale }]
              }} />
          );
        })}
      </View>
    </>
  )
}

export default LoginSlideContainer
