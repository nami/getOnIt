/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainList from './todo/MainList';
import * as LocalAuthentication from 'expo-local-authentication';
import {useTheme, withTheme} from 'react-native-paper';
import NoAuthScreen from './auth/NoAuthScreen';
import StartToDo from './todo/StartToDo';

function App(): JSX.Element {
  const theme = useTheme();
  const [hasAuth, setHasAuth] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  // check is local auth (i.e passcode, biotmetric) is enabled on the device
  const hasLocalAuth = async () => {
    const securityLevel = await LocalAuthentication.getEnrolledLevelAsync();
    // 0 means no auth, 1 is for non-bio (e.g. pin), 2 is for bio
    setHasAuth(!!securityLevel);
  };

  // check is local auth exists on app load or if user has disabled auth while using app
  useEffect(() => {
    hasLocalAuth();
  }, [isAuth]);

  // authenticate
  const authenticate = async () => {
    hasLocalAuth();
    const result = await LocalAuthentication.authenticateAsync();
    setIsAuth(result.success);
  };

  // if no local auth, send user to set up one in phone settings
  if (!hasAuth) {
    return (
      <NoAuthScreen
        authenticate={authenticate}
        hasLocalAuth={hasLocalAuth}
        hasAuth={hasAuth}
      />
    );
  }

  return (
    <>
      {/* styling status bar at the top of phone */}
      <SafeAreaView
        style={[styles.statusBar, {backgroundColor: theme.colors.background}]}
      />
      <SafeAreaView
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        {isAuth ? (
          <MainList />
        ) : //  need to recheck auth in case user decides to remove local auth while using app
        hasAuth ? (
          <StartToDo authenticate={authenticate} />
        ) : (
          <NoAuthScreen
            authenticate={authenticate}
            hasLocalAuth={hasLocalAuth}
            hasAuth={hasAuth}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 0,
  },
  container: {
    flex: 1,
  },
});

export default withTheme(App);
