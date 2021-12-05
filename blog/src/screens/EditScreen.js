import React, { useContext} from 'react';
import {  StyleSheet, View } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation , route }) => {
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id ===route.params.id);

  return (
    <View style = {styles.container}>
    <BlogPostForm
    initialValues = {{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(route.params.id, title, content, () => navigation.pop());
      }}
    />
    </View>
  );
};


BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex:1
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default EditScreen;
