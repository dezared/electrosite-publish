import { TopToolbar, CreateButton, Datagrid, NumberField, List, TextField,
    Edit, Create, SimpleForm, TextInput, DateInput, ReferenceManyField, DateField, EditButton, required, NumberInput,
    ImageInput, ImageField, FunctionField, BulkDeleteButton,  } from 'react-admin';
import { Fragment } from 'react';


const PostBulkActionButtons = () => (
    <Fragment>
        <BulkDeleteButton />
    </Fragment>
);

export function AllProjectList()
{
    return (
        <List>
        <Datagrid rowClick="edit" bulkActionButtons={<PostBulkActionButtons />}>
            <TextField source="id" label="Id" />
            <TextField source="name" label="Имя" />
            <TextField source="money" label="Стоимость" />
            <TextField source="meter" label="Количество метров" />
            <TextField source="year" label="Год строительства" />
            <TextField source="foundamentInfo" label="Информация по фундаменту" />
            <TextField source="wallsInfo" label="Информация по стенам" />
            <TextField source="perekritie" label="Информация по перекрытию" />
            <TextField source="roofInfo" label="Информация по стенам" />
            <TextField source="wareSaftyInfo" label="Информация по теплосохранению" />
            <TextField source="facadeInfo" label="Информация по фасаду" />
            <TextField source="peregorodgiInfo" label="Информация по перегородке" />
            <ImageField source="mainImageUrl" title="Главное изоображение" label="Главное изоображение" />
            <FunctionField label="Дополнительный контент" render={record => 
                record.projectMediasUrls.map(images => 
                    <div className='MuiBox-root css-cb34tx-RaImageField-root'>
                        <img className='RaImageField-image' key={images} src={images} />
                    </div>
                )
            }/>
        </Datagrid>
    </List>
    )
}

export function ProjectEdit() {
    return(
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <ImageInput source="pictures" label="Главное изоображение" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput source="picturesAdded" label="Дополнительные изоображения" accept="image/*" multiple={true}>
                <ImageField source="srcMultiple" title="title" />
            </ImageInput>
            <TextInput source="name" label="Название"/>
            <NumberInput source="money" label="Стоимость"/>
            <NumberInput source="meter" label="Количество метров"/>
            <NumberInput source="year" label="Год постройки"/>
            <TextInput source="foundamentInfo" multiline label="Информация по фундамету"/>
            <TextInput source="wallsInfo" multiline label="Информация по стенам"/>
            <TextInput source="perekritie" multiline label="Информация по перекрытию"/>
            <TextInput source="roofInfo" multiline label="Информация по крыше"/>
            <TextInput source="wareSaftyInfo" multiline label="Информация по теплосохранению"/>
            <TextInput source="facadeInfo" multiline label="Информация по фасаду"/>
            <TextInput source="peregorodgiInfo" multiline label="Информация по перегордке"/>
        </SimpleForm>
    </Edit>
    );
}

export function ProjectCreate() {
    return(
    <Create>
        <SimpleForm>
            <ImageInput source="pictures" label="Главное изоображение" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput source="picturesAdded" label="Дополнительные изоображения" accept="image/*" multiple={true}>
                <ImageField source="srcMultiple" title="title" />
            </ImageInput>
            <TextInput source="name" label="Название"/>
            <NumberInput source="money" label="Стоимость"/>
            <NumberInput source="meter" label="Количество метров"/>
            <NumberInput source="year" label="Год постройки"/>
            <TextInput source="foundamentInfo" multiline label="Информация по фундамету"/>
            <TextInput source="wallsInfo" multiline label="Информация по стенам"/>
            <TextInput source="perekritie" multiline label="Информация по перекрытию"/>
            <TextInput source="roofInfo" multiline label="Информация по крыше"/>
            <TextInput source="wareSaftyInfo" multiline label="Информация по теплосохранению"/>
            <TextInput source="facadeInfo" multiline label="Информация по фасаду"/>
            <TextInput source="peregorodgiInfo" multiline label="Информация по перегордке"/>
        </SimpleForm>
    </Create>
    );
}