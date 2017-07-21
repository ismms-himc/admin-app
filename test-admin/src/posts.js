// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'admin-on-rest';

export const PostList = (props) => (

    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);