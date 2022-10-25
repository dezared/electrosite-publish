import {
  TopToolbar,
  CreateButton,
  Datagrid,
  NumberField,
  List,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  DateField,
  EditButton,
  required,
  NumberInput,
  ImageInput,
  ImageField,
  FunctionField,
  BulkDeleteButton,
} from "react-admin";
import { Fragment } from "react";

const PostBulkActionButtons = () => (
  <Fragment>
    <BulkDeleteButton />
  </Fragment>
);

export function AllImagesList() {
  return (
    <List>
      <Datagrid rowClick="edit" bulkActionButtons={<PostBulkActionButtons />}>
        <TextField source="id" label="Id" />
        <ImageField
          source="imageUrl"
          title="Главное изоображение"
          label="Главное изоображение"
        />
      </Datagrid>
    </List>
  );
}

export function ImageEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <p>Прежнее изоображение:</p>
        <ImageField source="imageUrl"></ImageField>
        <ImageInput
          source="pictures"
          label="Главное изоображение"
          accept="image/*"
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <br />
        <br />
        <br />
        <br />
      </SimpleForm>
    </Edit>
  );
}

export function ImageCreate() {
  return (
    <Create>
      <SimpleForm>
        <ImageInput
          source="pictures"
          label="Главное изоображение"
          accept="image/*"
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <br />
        <br />
        <br />
        <br />
      </SimpleForm>
    </Create>
  );
}
