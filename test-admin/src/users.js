// Let's create a new UserList, using <EmailField> to map the email field:
//
// You'll notice that this overrides the default title. To include the new
// users resource in the admin app, add it to src/App.js

// in src/users.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const UserList = (props) => (
  <List title='All Users' {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='username' />
      <EmailField source='email' />
    </Datagrid>
  </List>
);