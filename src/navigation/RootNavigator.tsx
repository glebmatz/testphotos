import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PhotosScreen, PhotosDetail} from '@screens/Photos';

const PhotosStack = createStackNavigator();

export const RootNavigator = () => (
  <PhotosStack.Navigator screenOptions={{headerShown: false}}>
    <PhotosStack.Screen name="photosList" component={PhotosScreen} />
    <PhotosStack.Screen name="photosDetail" component={PhotosDetail} />
  </PhotosStack.Navigator>
);
