import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import ReduxProvider from './redux/ReduxProvider';

export default function App() {
  return (
    <ReduxProvider/>
  );
}
