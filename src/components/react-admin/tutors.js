// in src/components/react-admin/tutors.js
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

const tutorFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user_id" label="User" reference="users" />
];

export const TutorList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={tutorFilters} >
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
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <ReferenceField source="user_id" reference="users" />
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

const TutorTitle = () => {
  const record = useRecordContext();
  return <span>Tutor {record ? `"${record.first_name} ${record.last_name}"` : ''}</span>;
};

export const TutorEdit = () => (
    <Edit title={<TutorTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="user_id" reference="users" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="job_title" />
        <TextInput source="city" />
        <TextInput source="country" />
    </SimpleForm>
    </Edit>
);

export const TutorCreate = () => (
    <Create>
        <SimpleForm>
          <ReferenceInput source="user_id" reference="users" />
          <TextInput source="first_name" />
          <TextInput source="last_name" />
          <TextInput source="job_title" />
          <TextInput source="city" />
          <TextInput source="country" />
        </SimpleForm>
    </Create>
    );