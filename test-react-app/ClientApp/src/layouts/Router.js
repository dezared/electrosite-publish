import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from '../layouts/Main'
import About from '../layouts/About'
import Contacts from "./Contacts";
import GalleryPage from "./Gallery";
import Project from "./Project";
import AdminMenu from './AdminMenu';
import Blog from './Blog';
import Calculator from './Calculator'
import ScrollButton from "../components/others/ScrollButton";

const RouterNavigator = (props) => (
    <BrowserRouter>
        {props.children}
        <ScrollButton />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/gallery" element={<GalleryPage/>} />
            <Route path="/admin/*" element={<AdminMenu />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/calc" element={<Calculator /> } />
        </Routes>
    </BrowserRouter>
)

export default RouterNavigator