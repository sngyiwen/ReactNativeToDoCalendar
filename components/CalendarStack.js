
import React, { Component } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { darkStyles, lightStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";
import { WebView } from 'react-native-webview';




const InnerStack = createStackNavigator();


export default function CalendarStack() {
    const isDark = useSelector((state) => state.accountPrefs.isDark);
    const styles = isDark ? darkStyles : lightStyles;

        return (
          <WebView
          useWebKit={true}
          startInLoadingState={true}
            source={{
              uri: 'https://sngyiwen.github.io/'
            }}
            // style={{ marginTop: 20 }}
          />
        );
      





}