import { Modal, Form, Input, Button} from "antd"
import React, { useEffect } from "react"
import { apiClient } from "@/entities/user";
import type { User } from "@/entities/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

type CreateUserDto = Omit<User, 'id' | 'createdAt'>;

export const CreateUserModal = ({ open, onClose, onSuccess }: Props) => {
    const [form] = Form.useForm<CreateUserDto>();
    const queryClient = useQueryClient();

    const createMutation = useMutation({
        mutationFn: (data: CreateUserDto) => apiClient.createUser(data),
        onSuccess: async () =>{
            await queryClient.invalidateQueries({queryKey: ['users']});
            form.resetFields();
            onClose();
            onSuccess();
        }
    })
    
    const isSubmitting = createMutation.isLoading;

    const handeClose = () => {
        if(isSubmitting) return;
        onClose();
    }

    return (
        <Modal
        open={open}
        title="Создание пользователя"
        okText="Создать"
        cancelText="Отмена"
        onOk={() => form.submit()}
        onCancel={handeClose}
        confirmLoading={isSubmitting}
        okButtonProps={{ disabled: isSubmitting }}
        cancelButtonProps={{ disabled: isSubmitting }}
        maskClosable={!isSubmitting}
        keyboard={!isSubmitting}
        closable={!isSubmitting}
        destroyOnClose={false}
        footer={[
            <div  style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <Button onClick={() => form.submit()} disabled={isSubmitting} type="primary">
                Сохранить
            </Button>
            <Button type="primary" onClick={handeClose} disabled={isSubmitting}>
                Отмена
            </Button>
            </div>
        ]}
        >
            <Form<CreateUserDto>
                form={form}
                onFinish={(values) => {createMutation.mutate(values)}}
                layout="vertical"
                >
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
                    rules={[{required:true, message: "Введите URL аватара"}, {type: 'url', message: "Введите корректный URL"}]}
                    >
                        <Input disabled={isSubmitting}/>
                    </Form.Item>
            </Form>
        </Modal>
    )
}