// in src/components/react-admin/customers.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput
  } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const customerFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />
];

export const CustomerList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={customerFilters} >
      {isSmall ? (
        <SimpleList
          primaryText="%{first_name} %{last_name}"
          secondaryText={(record) => record.job_title}
          tertiaryText="%{city} - %{country}"
          linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users" />
          <TextField source="first_name" />
          <TextField source="last_name" />
          <TextField source="job_title" />
          <TextField source="city" />
          <TextField source="country" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const CustomerTitle = () => {
  const record = useRecordContext();
  return <span>Customer {record ? `"${record.first_name} ${record.last_name}"` : ''}</span>;
};

export const CustomerEdit = () => (
    <Edit title={<CustomerTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="job_title" />
        <TextInput source="city" />
        <TextInput source="country" />
    </SimpleForm>
    </Edit>
);

export const CustomerCreate = () => (
    <Create>
        <SimpleForm>
          <ReferenceInput source="userId" reference="users" />
          <TextInput source="first_name" />
          <TextInput source="last_name" />
          <TextInput source="job_title" />
          <TextInput source="city" />
          <TextInput source="country" />
        </SimpleForm>
    </Create>
    );