// in src/components/react-admin/contratacions.js
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

// const contratacionFilters = [
//   <TextInput source="q" label="Search" alwaysOn />,
//   <ReferenceInput source="user_id" label="User" reference="users" />
// ];

export const ContratacionList = () => {
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
        <ReferenceField source="cuidador_id" reference="cuidadores">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="menor_id" reference="menores" link={false}>
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
      </Datagrid>
    )}
  </List>
);
}

const ContratacionTitle = () => {
const record = useRecordContext();
return <span>Contratacion {record ? `"${record.first_name} ${record.last_name}"` : ''}</span>;
};

export const ContratacionEdit = () => (
  <Edit title={<ContratacionTitle />}>
  <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceField source="cuidador_id" reference="cuidadores" link={false}>
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="menor_id" reference="menores" link={false}>
        <TextField source="name" />
      </ReferenceField>
  </SimpleForm>
  </Edit>
);

export const ContratacionCreate = () => (
  <Create>
      <SimpleForm>
      <ReferenceField source="cuidador_id" reference="cuidadores" link={false}>
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="menor_id" reference="menores" link={false}>
        <TextField source="name" />
      </ReferenceField>
      </SimpleForm>
  </Create>
  );