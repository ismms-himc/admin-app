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

// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './posts';

const App = () => (

  <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
    <Resource name='posts' list={PostList} />
  </Admin>

);

export default App;