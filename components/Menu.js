import React, {useContext} from 'react';
import { Button, View } from 'react-native';
import { styles } from '../assets/styles';
import { AuthContext } from '../context/AuthContext';
import { useDispatch, useSelector} from 'react-redux';
import {removeNote} from '../store/boardSlice';

export default function menu({ navigation }) {

  const { signOut } = useContext(AuthContext);
  ////////////////////////////////////////////////////////////////
  const { notes } = useSelector((state)=>state.board)
  const dispatch_redux = useDispatch()
  ////////////////////////////////////////////////////////////////
  return (
    <View style={styles.menu}>
      <Button title='BOARD' />
      <Button title='FRIENDS' onPress={() => navigation.navigate('Friends')}/>
      <Button title='SETTINGS' />
      <Button onPress={()=>{
        signOut()
        console.log('xd');
        ///////////////////////////////////////////////////////////////
        notes.forEach(sticker => dispatch_redux(removeNote(sticker.id)))
        ///////////////////////////////////////////////////////////////
        }} title='LOGOUT' />
    </View>
  );
}
