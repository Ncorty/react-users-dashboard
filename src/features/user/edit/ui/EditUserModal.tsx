import { apiClient, User } from "@/entities/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal, Form, Input, Button} from "antd"
import React, {useEffect} from "react"

type Props = {
    open: boolean;
    user: User;
    onCancel: () => void;
    onClose: () => void;
    onEdited: () => void;
}

type EditUserDto = Omit<User,'createdAt'>;

export const EditUserModal = ({ open, user, onCancel, onClose, onEdited }: Props) => {

    const [form] = Form.useForm<EditUserDto>();
    const queryClient = useQueryClient();

    const editMutation = useMutation({
        mutationFn: (data: EditUserDto) => apiClient.editUser({ name: data.name, avatar: data.avatar }, user.id),
        onSuccess: async () =>{
            await queryClient.invalidateQueries({queryKey: ['users']});
            form.resetFields();
            onClose();
            onEdited();
        }
    })
    const deleteMutation = useMutation({
        mutationFn: (id: string) => apiClient.deleteUser(id),
        onSuccess: async () =>{
            await queryClient.invalidateQueries({queryKey: ['users']});
            form.resetFields();
            onClose();
            onEdited();
        }
    })

        useEffect(() => {
        if (open && user) {
            form.setFieldsValue({
                id: user.id,
                name: user.name,
                avatar: user.avatar,
            });
        }
    }, [open, user, form]);
    
    const isSubmitting = editMutation.isPending || deleteMutation.isPending;

    const handeClose = () => {
        if (isSubmitting) return;
        onClose();
    };
    const handleDelete = () => {
        if(isSubmitting) return;
        deleteMutation.mutate(user.id);
        onClose();
    }

    return (
        <Modal
        open={open}
        title="Редактирование пользователя"
        maskClosable={!isSubmitting}
        keyboard={!isSubmitting}
        closable={!isSubmitting}
        onCancel={onClose}
        destroyOnClose={false}
        footer={[
            <div  style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Button onClick={handleDelete} type="primary" disabled={isSubmitting}>
                Удалить
            </Button>
            <div style={{ flex: 1 }}></div>

            <Button onClick={() => form.submit()} disabled={isSubmitting} type="primary">
                Сохранить
            </Button>
            <Button type="primary" onClick={handeClose} disabled={isSubmitting}>
                Отмена
            </Button>
            </div>
        ]}
        >
            <Form<EditUserDto>
                form={form}
                onFinish={(values) => {editMutation.mutate(values)}}
                layout="vertical"
                >
                    <Form.Item
                    label="ID"
                    name="id"
                    rules={[{required:false, message: "ID"}]}
                    >
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item
                    label="Имя"
                    name="name"
                    rules={[{required:true, message: "Введите имя"}]}
                    >
                        <Input disabled={isSubmitting}/>
                    </Form.Item>
                    <Form.Item
                    label="Ссылка на аватар"
                    name="avatar"
                    rules={[{required:true, message: "Введите ссылку на аватар"},{type: 'url', message: "Введите корректный URL"}]}
                    >
                        <Input disabled={isSubmitting}/>
                    </Form.Item>
            </Form>
        </Modal>
    )
}