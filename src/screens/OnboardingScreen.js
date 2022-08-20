import { useState, useRef } from 'react';
import {
  View,
  FlatList,
  StatusBar,
  Image,
  Dimensions,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { COLORS, FONTS, SIZES, slides } from '../constants';

const { width, height } = Dimensions.get('window');

const Slide = ({ item }) => {
  return (
    <View style={onBoardingStyle.slide}>
      <Image
        source={item.image}
        style={onBoardingStyle.image}
        resizeMode="contain"
      />

      <Text style={onBoardingStyle.title}>{item.title}</Text>
      <Text style={onBoardingStyle.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);

  const Indicator = () => {
    return (
      <View style={onBoardingStyle.indicators}>
        <View style={onBoardingStyle.innerIndicator}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                onBoardingStyle.indicator,
                currentSlide === index && {
                  backgroundColor: COLORS.white,
                  width: SIZES.extraLarge,
                },
              ]}
            />
          ))}
        </View>

        <View style={{ marginBottom: SIZES.extraLarge }}>
          {currentSlide == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={[onBoardingStyle.btn]}
                onPress={() => navigation.replace('Home')}
              >
                <Text style={{ fontWeight: 'bold', fontSize: SIZES.large }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => skipSlides()}
                style={[
                  onBoardingStyle.btn,
                  {
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: COLORS.white,
                  },
                ]}
              >
                <Text
                  style={[onBoardingStyle.message, { color: COLORS.white }]}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 20 }}></View>
              <TouchableOpacity
                style={onBoardingStyle.btn}
                onPress={() => goToNextSlide()}
              >
                <Text style={onBoardingStyle.message}>NEXT</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlide + 1;
    const offset = nextSlideIndex * width;

    if (nextSlideIndex != slides.length) {
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlide(nextSlideIndex);
    }
  };

  const skipSlides = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;

    ref?.current?.scrollToOffset({ offset });
    setCurrentSlide(lastSlideIndex);
  };

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);

    setCurrentSlide(currentIndex);
  };

  return (
    <SafeAreaView style={onBoardingStyle.wrapper}>
      <StatusBar backgroundColor={COLORS.primary} />

      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        contentContainerStyle={{ height: height * 0.7 }}
      />
      <Indicator />
    </SafeAreaView>
  );
};

const onBoardingStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  slide: {
    alignItems: 'center',
  },
  image: {
    height: '75%',
    width: width,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.large,
    fontWeight: 'bold',
    marginTop: SIZES.large,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.white,
    fontSize: SIZES.font,
    marginTop: SIZES.base,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: SIZES.large,
  },
  indicators: {
    height: height * 0.25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  innerIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: SIZES.base / 2,
    width: SIZES.small - 2,
    backgroundColor: COLORS.gray,
    marginHorizontal: 3,
    borderRadius: 3,
  },
  btn: {
    flex: 1,
    borderRadius: 5,
    height: 50,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
