import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/entities/user";
import React from "react";
import { List, Avatar, Card, Button, Spin, Alert } from "antd";
import { User } from "@/entities/user";
import dayjs from "dayjs";
import { removeToken } from "@/shared";
import { useNavigate } from "react-router-dom";
import { CreateUserModal } from "@/features/user";
import { EditUserModal } from "@/features/user";

export const UsersPage = () => {
    const navigate = useNavigate();
    const {data, isLoading, isError} = useQuery({
        queryKey: ['users'],
        queryFn: () => apiClient.getAllUsers(),
    })
    const [isCreateOpen, setCreateOpen] = React.useState(false);
    const [editingUser, setEditingUser] = React.useState<User | null>(null);

    const openCreate = () => setCreateOpen(true);
    const closeCreate = () => setCreateOpen(false);

    const openEdit = (user: User) => setEditingUser(user);
    const closeEdit = () => setEditingUser(null);

    if(isLoading) {
        return <Spin size="large" style={{ display: 'block', margin: '100px auto' }} />
    }
    if(isError) {
        return <Alert
        description="error"
        type="error"
        showIcon
        />
    }
    const handleExit =() => {
        removeToken();
        navigate('/login', {replace: true});
    }
    return (
        <>
        <Card title="Пользователи" extra={<Button type="primary" onClick={handleExit}>Выход</Button>} style={{ width: '100%', padding: 10 }}>
            <List
            itemLayout="horizontal"
            dataSource={data || []}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} onClick={()=> openEdit(item)}/>}
                        title={<a onClick={()=> openEdit(item)}>{item.name}</a>}
                        description={`Зарегистрирован ${dayjs(item.createdAt).format('DD.MM.YYYY')}`}
                    />
                </List.Item>
            )}
            />
            <Button type="primary" style={{ marginTop: 16 }} onClick={openCreate}>
                Создать пользователя
            </Button>
        </Card>
        <CreateUserModal 
        open={isCreateOpen}
        onClose={closeCreate}
        onSuccess={closeCreate}
        />
        <EditUserModal
        open={!!editingUser}
        user={editingUser}
        onCancel={closeEdit}
        onClose={closeEdit}
        onEdited={closeEdit}
        />
        </>

    )
}