import { Admin, Resource } from 'react-admin';
import { useState } from 'react';

//Para php-crud-api:
//import jsonServerProvider from 'ra-data-json-server';
//Para Laravel Controllers:
import jsonapiClient from 'ra-jsonapi-client';
import { default as AuthProvider } from 'components/react-admin/authProvider';
import { default as Login } from 'pages/login';

import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';
//aquí importa el Artworklist

//TODO se pueden eliminar estas dos líneas porque por el momento no las vamos a necesitar. 
//Serían para hacer un blog quizás
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';

//aquí importa el customer icon
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import MigrationIcon from '@mui/icons-material/Storage';
import CustomerIcon from '@mui/icons-material/SupportAgent';

import { AdminLayout } from 'components/react-admin/adminLayout';

//Para php-crud-api:
//const dataProvider = jsonServerProvider('http://encuentro.test/api/records');
//Para Laravel Controllers:
const dataProvider = jsonapiClient('http://encuentro.test/api');

const RAdmin = () => {
  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider)
  }

  let token = localStorage.getItem('auth')
  let settings = null
  if (token) {
    token = JSON.parse(localStorage.getItem('auth'))
      settings = {
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    }

  const myLogin = <Login handleDataProvider={handleDataProvider} />

  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
  const [dataProvider, setDataProvider] = useState(null)

  if (!dataProvider) {
    handleDataProvider(jsonapiClient(API_URL))
  }

  return (
    <Admin
      basename="/dashboard"
      dataProvider={dataProvider}
      authProvider={AuthProvider}
      loginPage={myLogin}
    >
      <Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />
      <Resource name="migrations"
        list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
    </Admin>
  )
}

export default RAdmin;
