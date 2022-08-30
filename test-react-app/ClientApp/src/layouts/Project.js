import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";

import axios from "axios"

function Project() {
    const { id } = useParams();

    const [project, setProject] = useState({});

    useEffect(() => {
    axios({
        method: 'get',
        url: '/api/application/admin/allProjects/' + id
    })
        .then(function (response) {
            setProject(response.data)
            console.log(project)
            return Promise.resolve();
        });
    }, []);

    return (
        <div>{project ? (<p>{project.name}</p>) : null}</div>
    )
}

export default Project;