import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {useTheme, Button, Text} from 'react-native-paper';
import {fonts} from '../theme';
import LinearGradient from 'react-native-linear-gradient';

interface StartToDoProps {
  authenticate: () => Promise<void>;
}

const photoLogo = require('../images/logo-compressed.png');
const textLogo = require('../images/get-on-it-type.png');

const StartToDo = ({authenticate}: StartToDoProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <LinearGradient
          colors={['white', '#f7f1f7', '#e9dfee']}
          style={styles.startBox}>
          <View style={styles.logoContainer}>
            <Image
              source={textLogo}
              style={styles.textLogo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.photoLogoContainer}>
            <Image
              source={photoLogo}
              style={styles.photoLogo}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text
              style={[fonts.medium, {color: theme.colors.tertiary}]}
              variant="titleMedium">
              The most wonderful to do list in the world
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              textColor="white"
              onPress={authenticate}
              style={styles.buttonStyle}>
              <Text variant="titleLarge">Get Started</Text>
            </Button>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startBox: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 24,
    paddingTop: 24,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  logoContainer: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '25%',
  },
  textLogo: {
    flex: 1,
    height: 350,
    width: 350,
  },
  photoLogoContainer: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  photoLogo: {
    flex: 1,
    height: 300,
    width: 300,
  },
  buttonContainer: {
    width: '80%',
    paddingTop: '10%',
  },
  buttonStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default StartToDo;
