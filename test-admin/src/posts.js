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
//
// Relationships
// In JSONPlaceholder, each post record includes a userId field, which points to
// a user. Admin-on-REST knows how to take advantage of these foreign keys to
// fetch references. For instance, to include the user name in the post list,
// use the <ReferenceField>:
//
// While displaying the posts list, the app now fetches user records, and
// displays their name as a <TextField>. Notice the label property: you can use
// it on any field component to customize the field label.
// Tip: Reference components always pass the data they fetch to a child
// component, which is responsible for displaying the data.
//
// Creation and Editing
// An admin interface is about displaying remote data, but also about editing
// and creating. Admin-on-REST provides <Create> and <Edit> components for that
// purpose. Add them to the posts script:
//
// Notice the additional <EditButton> field in the <PostList> children: that's
// what gives access to the post editing page. Also, the <Edit> component uses a
// custom <PostTitle> component as title, which shows they way to customize the
// for a given page.
//
// If you've understood the <List> component, the <Edit> and <Create> components
// will be no surprise. They are responsible for fetching the record, and
// displaying the page title. They pass the recrod down to the <SimpleForm>
// component, which is responsible for the form layout, default values, and
// validation. Just like <Datagrid>, <SimpleForm> uses its children to determine
// the form inputs to display. It expects input components as children.
// <DisabledInput>, <TextInput>, <LongTextInput>, and <ReferenceInput> are such
// inputs.
//
// As for the <ReferenceInput>, it takes the same props as the <ReferenceField>
// (used) earlier in the list page. <ReferenceInput> uses these props to fetch
// the API for possible references related to the current record (in this case,
// possible users for the current post). It then passes these possible
// references to the child component (<SelectInput>), which is responsible for
// displaying them (via their name in that case), and letting the user select
// one. <SelectInput> renders a <select> tag in HTML.
// Tip: The <Edit> and <Create> components use the same <ReferenceInput>
// configuration, except for the allowEmpty attribute, which is required in
// <Create>.
//
// Filters
// Let's get back to the post list for a minute. It offers sorting and
// pagination, but one feature is missing: the ability to search content.
//
// Admin-on-rest can use input components to create a multi-criteria search
// engine in the list view. First, create a <Filter> component just like you
// would write a <SimpleForm> component, using input components as children.
// Then, add it to the list using the filters prop:

// in src/posts.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, Filter } from 'admin-on-rest';


// make filter component and pass it to list later (do not export it to App.js)
const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput labels='Search' source='q' alwaysOn />
    <ReferenceInput label='User' source='userId' reference='users' allowEmpty >
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);

// export const PostList = (props) => (
export const PostList = function(props) {

  {/*console.log(props);*/}

  return (<List title='Post Board' filters={<PostFilter />} {...props} >
    <Datagrid>
      <TextField source='id' />
      {/* getting user's name from users using userId from posts */}
      <ReferenceField label='User!' source='userId' reference='users'>
        <TextField source='name' />
      </ReferenceField>
      <TextField source='title' />
      <TextField label='Post Text' source='body' />
      <EditButton />
    </Datagrid>
  </List>);
}
// );

export const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <ReferenceInput label='User' source='userId' reference='users'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <LongTextInput source='body' />
    </SimpleForm>
  </Edit>
)

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label='User' source='userId' reference='users' allowEmpty>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <LongTextInput source='body' />
    </SimpleForm>
  </Create>
);

