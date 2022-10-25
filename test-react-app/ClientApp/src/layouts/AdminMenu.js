import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import AlluserList from "../components/others/AlluserList";
import {
  ProjectEdit,
  AllProjectList,
  ProjectCreate,
} from "../components/others/AllProjectList";
import {
  BlogEdit,
  AllBlogsList,
  BlogCreate,
} from "../components/others/AllBlogsList";
import {
  AllImagesList,
  ImageCreate,
  ImageEdit,
} from "../components/others/AllImagesList";
import inMemoryJWT from "../components/others/inMemoryJWT";
import myDataProvider from "../components/others/UploadFilesProvider";

import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";

const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request(
      "https://api.elitestroyservice.ru/api/application/login",
      {
        method: "POST",
        body: JSON.stringify({ email: username, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    );
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
  <Admin
    basename="/admin"
    dataProvider={myDataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource
      options={{ label: "Проекты" }}
      name="allProjects"
      list={AllProjectList}
      edit={ProjectEdit}
      create={ProjectCreate}
    ></Resource>
    <Resource
      options={{ label: "Блоги" }}
      name="allBlogs"
      list={AllBlogsList}
      edit={BlogEdit}
      create={BlogCreate}
    ></Resource>
    <Resource
      options={{ label: "Галлерея" }}
      name="allImages"
      list={AllImagesList}
      edit={ImageEdit}
      create={ImageCreate}
    ></Resource>
  </Admin>
);
export default AdminMenu;
