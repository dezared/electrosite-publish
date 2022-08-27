import { TopToolbar, CreateButton, Datagrid, EmailField, List, TextField } from 'react-admin';

export default function AlluserList()
{
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="userName" />
                <EmailField source="email" />
            </Datagrid>
        </List>
    )
}