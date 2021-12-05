import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons';

const IndexScreen = ({navigation,route}) => {
    const {state}= useContext(Context);
    const id = route.params.id
    const blogPost = state.find((blogPost => blogPost.id=== id))
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("EditScreen", {id})}>
            <EvilIcons name="pencil" size={35} size={24} color="black"  />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>{blogPost.title}</Text>
          <View style = {styles.containerPost}>
            <Text style = {styles.post}>{blogPost.content}</Text>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex : 1,
    backgroundColor: '#FFFFFF'
  } ,
  containerPost: {
    alignItems: 'center',
    flex: 1,
    width: '90%',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginTop: 15,
  } ,
  title: {
      fontSize: 40
    },
    post: {
      marginTop: 10,
       fontSize: 16,
      color: 'gray'
    },

});

export default IndexScreen