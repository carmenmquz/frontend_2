// in src/components/react-admin/migrations.js
import { useMediaQuery } from '@mui/material';

import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput
} from 'react-admin';

import { useRecordContext} from 'react-admin';

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const MigrationList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={postFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.id}
          secondaryText={(record) => record.migration}
          tertiaryText={(record) => record.batch}
        >

          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="migration" />
          <TextField source="batch" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

const MigrationTitle = () => {
const record = useRecordContext();
return <span>Migration {record ? `"${record.migration}"` : ''}</span>;
};

export const MigrationEdit = () => (
  <Edit title={<MigrationTitle />}>
  <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="migration" />
      <TextInput source="batch" />
  </SimpleForm>
  </Edit>
);

export const MigrationCreate = () => (
  <Create>
      <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="migration" />
      <TextInput source="batch" />
      </SimpleForm>
  </Create>
  );
