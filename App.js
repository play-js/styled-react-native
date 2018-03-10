import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
  background: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

const RotateBox = styled.View`
  transform: rotate(90deg);
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledView style={styles.container}>
        <RotateBox>
          <StyledText>Hello World</StyledText>
        </RotateBox>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
