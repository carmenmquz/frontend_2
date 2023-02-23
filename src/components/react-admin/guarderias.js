// in src/components/react-admin/guarderias.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ImageField,
    EmailField,
    TextInput
  } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const guarderiaFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const GuarderiaList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={guarderiaFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => record.subject}
          tertiaryText={(record) => record.who}
          linkType={(record) => 'show'}
        >
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="direccion" />
          <TextField source="tlf" />
          <TextField source="rango_edad" />
          <ImageField source="imagen" />
        </Datagrid>
      )}
    </List>
  );
}