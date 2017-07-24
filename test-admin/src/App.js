// The App component now renders an <Admin> component, which is the main
// component of the admin-on-rest. This component expects a REST client as a
// parameter - a function capable of translating REST commands into HTTP
// requests. Since REST isn't a standard, you will probably have to procide a
// custom client to connect to your own APIs. For now, let's take advantage of
// the jsonServerRestClient, which speaks the same REST dialect as
// JSONPlaceholder.
//
// The <Admin> component can contain one or more <Resource> components, each
// resource being mapped to an endpoint in the API. To beginwith, we'll display
// the list of posts. Here is what the <PostList> component looks like:

// The sidebar now gives access to the second resource, Users. The user list
// shows the email as a <a href='mailto:'> tag.
//
// In admin-on-rest, fields are simple React components. At runtime, they rceive
// the record fetched from the API, and the source field they should display
// (e.g. email).
//
// how to comment in jsx:
//    {/*<Resource name='posts' list={PostList} />*/}
//
// To use the new <PostEdit> and <PostCreate> components in the posts resource,
// just add them as edit and create attributes in the <Resource> component.
//
// Admin-on-rest automatically adds a 'create' button to the top of the posts
// list to give access to the <PostCreate> component. And the <EditButton>
// renders in each line of the list to give access to the <PostEdit> component.
//
// The form rendered in the create and edit pages is already functional. It
// issues POST and PUT requests to the REST API upon submission.
//
// Note: JSONPlaceholder is a read-only API; although it seems to accept POST
// and PUT requests, it does not take into account the creations and edits -
// that's why, in this particular case, you will see errors after creation, and
// you won't see your edits after you save them. It's just an artifact of
// JSONPlaceholder.
//
// Deletion
// There is not much to configure in a deletion view. To add remove abilities to
// a Resource, simply use the bundled <Delete> component from admin-on-rest, and
// register it using the remove prop ('delete' is a reserved word in JavaScript):
// You can also use the <DeleteButton> as a filed in the list.
//
// Adding a Login Page
// Most admin apps require authentication. Admin-on-rest can check user
// credentials before displaying a page, and redirect to a login form where the
// REST API returns a 403 error code.
//
// What those credentials are, and how to get them, are questions that you must
// answer. Admin-on-rest makes no assumptions about your authentication strategy
// (basic auth, OAuh, custom route, etc.), but gives you the hooks to plug your
// logic at the right place - by calling an authClient function.
//
// For this tutorial, since there is no public authentication API we can use,
// let's use a fake authentication provider that accepts every login request,
// and stores the username in localStorage. Each page change will require that
// localStorage conains a username item. The authCilient is a simple function,
// which must return a Promise:
// Tip: As the restClient response is asynchronous, you can easily fetch an
// aythentication server in there.
//
// To enable this authentication strategy, pass the client as the authClient
// prop in the <Admin> component. Once the app reloads, it is now behind a login
// form that accepts everyone.
//
// Custom Homepage
// By default, admin-on-rest displays the list page of the first resource as the
// homepage. If you want to display a custom component instead, pass it the
// dashboard prop of the <Admin> component.


// in src/App.js
import React from 'react';
// import React components from admin-on-rest
import Dashboard from './Dashboard';
import authClient from './authClient';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

// use custom API client
import myApiRestClient from './restClient';

// these are functions
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

// const App = () => (
const App = function(){


  return (

    <Admin title='HIMC-Database'  dashboard={Dashboard} authClient={authClient} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>

      <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}/>
      <Resource name='users' list={UserList} />

    </Admin>

  )

}
// );

export default App;