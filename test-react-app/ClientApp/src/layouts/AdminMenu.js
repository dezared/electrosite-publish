import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import AlluserList from '../components/others/AlluserList';
import { ProjectEdit, AllProjectList, ProjectCreate } from '../components/others/AllProjectList';
import inMemoryJWT from '../components/others/inMemoryJWT';
import myDataProvider from '../components/others/UploadFilesProvider'

const authProvider = {
    login: ({ username, password }) => {
        const request = new Request('https://localhost:7229/api/application/login', {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => inMemoryJWT.setToken(token));
    },
    checkAuth: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        inMemoryJWT.ereaseToken();
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            inMemoryJWT.ereaseToken();
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    },
};

const AdminMenu = () => (
    <Admin basename="/admin" dataProvider={myDataProvider} authProvider={authProvider}>
        <Resource name="allUsers" list={AlluserList} />
        <Resource name="allProjects" list={AllProjectList} edit={ProjectEdit} create={ProjectCreate}></Resource>
    </Admin>
);
export default AdminMenu;