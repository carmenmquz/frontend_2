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

// const cuidadorFilters = [
//     <TextInput source="q" label="Search" alwaysOn />,
//     <ReferenceInput source="user_id" label="User" reference="usuarios" />
// ];

export const CuidadorList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText="%{name}"
          secondaryText={(record) => record.email}
          tertiaryText="%{direccion} - %{telefono}"
          linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="direccion" />
          <TextField source="edad" />
          <TextField source="telefono" />
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
        <TextInput source="name" />
        <TextInput source="direccion" />
        <TextInput source="edad" />
        <TextInput source="telefono" />
    </SimpleForm>
    </Edit>
);

export const CuidadorCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="direccion" />
          <TextInput source="edad" />
          <TextInput source="telefono" />
        </SimpleForm>
    </Create>
    );