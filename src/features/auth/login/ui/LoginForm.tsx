import { Card, Form, Input, Button, Alert} from "antd";
import React from "react";
import { LoginValues } from "../model/types";

type Props = {
    onSubmit: (values: LoginValues) => void;
    isLoading: boolean;
    errorText?: string;
}

export const LoginForm = ({ onSubmit, isLoading, errorText }: Props) =>{
    return (
        <>
        {errorText &&(
            <Alert
                type="error"
                message={errorText}
                style={{ marginBottom: 16, marginTop: 12 }}
            />
        )}
        <Form<LoginValues> onFinish={onSubmit} layout="vertical">
            <Form.Item label="Login" name="login" rules={[{ required: true, message: 'Введите логин'}]}>
                <Input placeholder="Логин..." disabled={isLoading} />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Введите пароль'}]}>
                <Input.Password placeholder="Пароль..." disabled={isLoading} />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
                Войти
            </Button>
        </Form>
        </>
    );
};