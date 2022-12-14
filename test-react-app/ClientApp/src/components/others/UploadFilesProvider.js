import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://api.elitestroyservice.ru/api/application/admin');

const myDataProvider = {
    ...dataProvider,
    create: (resource, params) => {
        if(resource == "allImages" && params.data.pictures)
        {
            const myFilesAdded = params.data.pictures;

            return Promise.resolve(convertFileToBase64([myFilesAdded]))
                .then(transformedMyFile => dataProvider.create(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        MyFiles: transformedMyFile
                    }
                }));
        }
        else if (resource == "allBlogs" && params.data.pictures) {
            const myFilesAdded = params.data.pictures;

            return Promise.resolve(convertFileToBase64([myFilesAdded]))
                .then(transformedMyFile => dataProvider.create(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        myFiles: transformedMyFile
                    }
                }));
        } else {
            if (resource !== 'allProjects' || !params.data.pictures) {
                // fallback to the default implementation
                return dataProvider.create(resource, params);
            }

            let myFile = params.data.picturesAdded;
            const myFilesAdded = params.data.pictures
            myFile.push(myFilesAdded)

            if (!myFile.rawFile instanceof File) {
                return Promise.reject('Error: Not a file...');
            }

            return Promise.resolve(convertFileToBase64(myFile))
                .then(transformedMyFile => dataProvider.create(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        myFiles: transformedMyFile
                    }
                }));
        }
    },
    update: (resource, params) => {
        if (resource == "allImages" && params.data.pictures) {
            console.log(params)
            const myFilesAdded = params.data.pictures;

            return Promise.resolve(convertFileToBase64([myFilesAdded]))
                .then(transformedMyFile => dataProvider.update(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        MyFiles: transformedMyFile
                    }
                }));
        }
        else if (resource == "allBlogs" && params.data.pictures) {
            console.log(params)
            const myFilesAdded = params.data.pictures;

            return Promise.resolve(convertFileToBase64([myFilesAdded]))
                .then(transformedMyFile => dataProvider.update(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        myFiles: transformedMyFile
                    }
                }));
        }
        else {
            if (resource !== 'allProjects' || !params.data.pictures) {
                // fallback to the default implementation
                return dataProvider.update(resource, params);
            }

            let myFile = params.data.picturesAdded;
            const myFilesAdded = params.data.pictures
            myFile.push(myFilesAdded)

            if (!myFile.rawFile instanceof File) {
                return Promise.reject('Error: Not a file...');
            }

            return Promise.resolve(convertFileToBase64(myFile))
                .then(transformedMyFile => dataProvider.update(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        myFiles: transformedMyFile
                    }
                }));
        }
    }
};


 const convertFileToBase64 = async (files) => {
    let filesPromise = Array.from(files).map(file => {
        let reader = new FileReader();
        return new Promise(resolve => {
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file.rawFile);
        });
    });

    return await Promise.all(filesPromise);
}

export default myDataProvider;