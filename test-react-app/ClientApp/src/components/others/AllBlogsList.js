import { TopToolbar, CreateButton, Datagrid, NumberField, List, TextField,
    Edit, Create, SimpleForm, TextInput, DateInput, ReferenceManyField, DateField, EditButton, required, NumberInput,
    ImageInput, ImageField, FunctionField, BulkDeleteButton,  } from 'react-admin';
import { Fragment } from 'react';

import { RichTextInput } from 'ra-input-rich-text';

const PostBulkActionButtons = () => (
    <Fragment>
        <BulkDeleteButton />
    </Fragment>
);

export function AllBlogsList()
{
    return (
        <List>
        <Datagrid rowClick="edit" bulkActionButtons={<PostBulkActionButtons />}>
            <TextField source="id" label="Id" />
            <TextField source="name" label="Имя" />
            <ImageField source="mainImageUrl" title="Главное изоображение" label="Главное изоображение" />
        </Datagrid>
    </List>
    )
}

export function BlogEdit() {
    return(
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <ImageInput source="pictures" label="Главное изоображение" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="name" label="Название"/>
            <RichTextInput source="text" multiline label="Текст"/>
        </SimpleForm>
    </Edit>
    );
}

export function BlogCreate() {
    return(
    <Create>
        <SimpleForm>
                <ImageInput source="pictures" label="Главное изоображение" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput source="name" label="Название" />
                <RichTextInput source="text" multiline label="Текст" />
        </SimpleForm>
    </Create>
    );
}