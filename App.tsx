/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  // Text,
  useColorScheme,
  // View,
} from 'react-native';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainList from './todo/MainList';
import * as LocalAuthentication from 'expo-local-authentication';
import {Linking} from 'react-native';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const [hasAuth, setHasAuth] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  // check is local auth (i.e passcode, biotmetric) is enabled on the device
  const hasLocalAuth = async () => {
    const securityLevel = await LocalAuthentication.getEnrolledLevelAsync();
    // 0 means no auth, 1 is for non-bio (e.g. pin), 2 is for bio
    setHasAuth(!!securityLevel);
  };

  // check is local auth exists on app load or if user has lost auth
  useEffect(() => {
    hasLocalAuth();
  }, [isAuth]);

  // authenticate
  const authenticate = async () => {
    const result = await LocalAuthentication.authenticateAsync();
    setIsAuth(result.success);
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // if no local auth, send user to setup one in phone settings
  if (!hasAuth) {
    return (
      <SafeAreaView>
        <Text>Please set up local authentication in your phone settings</Text>
        <TouchableOpacity
          onPress={() =>
            Platform.OS === 'ios'
              ? Linking.openURL('App-Prefs:Settings')
              : Linking.sendIntent('android.settings.SETTINGS')
          }>
          <Text>Go to Settings</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
      {isAuth ? (
        <MainList />
      ) : (
        <TouchableOpacity onPress={authenticate}>
          <Text>Start To-Do-ing</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
