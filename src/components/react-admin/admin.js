import { Admin, Resource } from 'react-admin';
//Para php-crud-api: import jsonServerProvider from 'ra-data-json-server';
//Para Laravel Controllers:
import jsonapiClient from 'ra-jsonapi-client';

import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';

//TODO se pueden eliminar estas dos líneas porque por el momento no las vamos a necesitar. Serían para hacer un blog quizás
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import MigrationIcon from '@mui/icons-material/Storage';
import CustomerIcon from '@mui/icons-material/SupportAgent';

import { AdminLayout } from 'components/react-admin/adminLayout';

//Para php-crud-api: const dataProvider = jsonServerProvider('http://encuentro.test/api/records');
//Para Laravel Controllers:
const dataProvider = jsonapiClient('http://encuentro.test/api');

const RAdmin = () => (
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    layout={AdminLayout}
  >
    <Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />
    <Resource name="migrations"
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
)

export default RAdmin;
