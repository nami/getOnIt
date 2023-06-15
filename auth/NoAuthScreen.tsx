import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Platform,
  Linking,
  StyleSheet,
} from 'react-native';
import {useTheme, Button, Text} from 'react-native-paper';
import {fonts} from '../theme';

interface NoAuthScreenProps {
  authenticate: () => Promise<void>;
  hasLocalAuth: () => Promise<void>;
  hasAuth: boolean;
}

const textLogo = require('../images/get-on-it-type.png');

const NoAuthScreen = ({
  authenticate,
  hasLocalAuth,
  hasAuth,
}: NoAuthScreenProps) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.noAuthBox}>
        <View style={styles.logoContainer}>
          <Image
            source={textLogo}
            style={styles.textLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.noAuthMessageContainer}>
          <View style={styles.textContainer}>
            <Text variant="bodyLarge" style={fonts.regular}>
              To use Get On It, please set up local authentication in your phone
              settings.
            </Text>
          </View>
          <Button
            icon="cog-outline"
            mode="outlined"
            style={[styles.buttonStyles, {borderColor: theme.colors.primary}]}
            onPress={() =>
              Platform.OS === 'ios'
                ? Linking.openURL('App-Prefs:Settings')
                : Linking.sendIntent('android.settings.SECURITY_SETTINGS')
            }>
            <Text>Go to Settings</Text>
          </Button>
          {/* Need this to recheck if user has changed settings while on app */}
          <Button
            icon="check-decagram"
            mode="outlined"
            style={[styles.buttonStyles, {borderColor: theme.colors.primary}]}
            onPress={() => {
              hasLocalAuth();
              hasAuth ? authenticate() : <></>;
            }}>
            <Text>Recheck Auth</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '35%',
  },
  textLogo: {
    flex: 1,
    height: 280,
    width: 280,
  },
  noAuthBox: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  noAuthMessageContainer: {
    height: '30%',
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  textContainer: {
    paddingBottom: 16,
  },
  buttonStyles: {
    width: 250,
    marginTop: '3%',
  },
});

export default NoAuthScreen;
