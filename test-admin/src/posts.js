// The <Admin> component can contain one or more <Resource> components,
// each resource being mapped to an endpoint in the API. To begin with, we'll
// display the list of posts. Here is what the <PostList> component looks like:
//
// The main component of the post list is a <List> component, responsible for
// grabbing the information from the API, displayng the page title, and
// handling pagination. The list then delegates the display of the actual list
// of posts to a <Datagrid>, responsible for displaying a table with one row
// for each post. The datagrid uses its child components (here, a list of
// <TextField>) to determine the columns to render. Each Field component maps
// a different field in the API response, specified by the source prop.
//
// That's enough to display the post list:
//
// You've just met the <TextField> component, but admin-on-rest provides many
// Field components to map various content types. For instance, the /users
// endpoint is JSONPlaceholder contains emails.

// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

// export const PostList = (props) => (
export const PostList = function(props) {

  console.log(props);

  return (<List title='All Users' {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='body' />
    </Datagrid>
  </List>);
}
// );