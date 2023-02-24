// in src/components/react-admin/tutors.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField,
    ImageField,
    ReferenceField,
    EditButton,
    SelectInput,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput
  } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

// const tutorFilters = [
//     <TextInput source="q" label="Search" alwaysOn />,
//     <ReferenceInput source="user_id" label="User" reference="users" />
// ];

export const TutorList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText="%{name}"
          secondaryText={(record) => record.email}
          tertiaryText="%{direction} - %{telefono}"
          linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="pais" />
          <TextField source="ciudad" />
          <TextField source="sexo" />
          <TextField source="telefono" />
          <ImageField source="imagen" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const TutorTitle = () => {
  const record = useRecordContext();
  return <span>Tutor: {record ? `"${record.name}` : ''} Email: {record ? `"${record.email}` : ''}</span>;
};

export const TutorEdit = () => (
    <Edit title={<TutorTitle/>}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="pais" />
      <TextInput source="ciudad" />
      <TextInput source="sexo" />
      <TextInput source="telefono" />
      <ImageField source="imagen" />
    </SimpleForm>
    </Edit>
);

export const TutorCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="email" />
          <TextInput source="pais" />
          <TextInput source="ciudad" />
          <TextInput source="sexo" />
          <TextInput source="telefono" />
          <TextInput source="imagen" />
        </SimpleForm>
    </Create>
    );