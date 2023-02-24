// in src/components/react-admin/tutors.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField,
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
          <TextField source="valoration" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

export const TutorEdit = () => (
    <Edit title="Edición">
    <SimpleForm>
          <ReferenceInput source="user_id" reference="usuarios">
            <SelectInput optionText="name"/>
          </ReferenceInput>
          <ReferenceInput source="name" reference="usuarios">
            <TextInput source="first_name" />
          </ReferenceInput>
          <TextInput source="last_name" />
          <ReferenceInput source="email" reference="usuarios">
            <TextInput source="email" />
          </ReferenceInput>
          <TextInput source="direction" />
          <TextInput source="tlf" />
    </SimpleForm>
    </Edit>
);

export const TutorCreate = () => (
    <Create>
        <SimpleForm>
          <ReferenceInput source="user_id" reference="usuarios">
            <SelectInput optionText="name"/>
          </ReferenceInput>
          <TextInput source="first_name" />
          <TextInput source="last_name" />
          <TextInput source="email" />
          <TextInput source="direction" />
          <TextInput source="tlf" />
        </SimpleForm>
    </Create>
    );