// in src/components/react-admin/cuidadors.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField,
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

const cuidadorFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user_id" label="User" reference="usuarios" />
];

export const CuidadorList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={cuidadorFilters} >
      {isSmall ? (
        <SimpleList
          primaryText="%{first_name} %{last_name}"
          secondaryText={(record) => record.email}
          tertiaryText="%{direction} - %{tlf}"
          linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="first_name" />
          <TextField source="last_name" />
          <EmailField source="email" />
          <TextField source="direction" />
          <TextField source="tlf" />
          <TextField source="tipo" />
          <TextField source="tarifa" />
          <TextField source="valoration" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const CuidadorTitle = () => {
  const record = useRecordContext();
  return <span>Cuidador {record ? `"${record.first_name} ${record.last_name}"` : ''}</span>;
};

export const CuidadorEdit = () => (
    <Edit title={<CuidadorTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <EmailField source="email" />
        <TextField source="direction" />
        <TextField source="tlf" />
        <TextField source="tipo" />
        <TextField source="tarifa" />
        <TextField source="valoration" />
    </SimpleForm>
    </Edit>
);

export const CuidadorCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="first_name" />
          <TextInput source="last_name" />
          <EmailField source="email" />
          <TextField source="direction" />
          <TextField source="tlf" />
          <TextField source="tipo" />
          <TextField source="tarifa" />
          <TextField source="valoration" />
        </SimpleForm>
    </Create>
    );