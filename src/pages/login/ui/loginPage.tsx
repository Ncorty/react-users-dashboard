import React from "react";
import { Card, Typography } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { getToken } from "@/shared/storage/token";
import { CentredPage } from "@/shared/ui/CentredPage"
import { LoginForm } from "@/features/auth/login";
import { useLogin } from "@/features/auth/login";


// interface LoginForm {
//     login: string;
//     password: string;
// }

// const Page = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 24px;
//     min-height: 100vh;
// `;

// const AuthCard = styled(Card)`
//   width: 100%;
//   max-width: 420px;
// `;

// const TokenKey = 'token';

// const Auth =(login:string, password:string): Promise<string> =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (login === 'admin' && password ==='admin'){
//                 resolve('token');
//             }
//             else {
//                 reject(new Error('Неправильный логин или пароль'))
//             }
//         }, 2000)
//     })
// }

// export const LoginPage = () => {
//     const navigate = useNavigate();
//     const token = localStorage.getItem(TokenKey);
//     if (token) {return <Navigate to="/users" replace />}
//     const loginMutation = useMutation({
//         mutationFn: (values: LoginForm) => Auth(values.login, values.password),
//         onSuccess(data) {
//             localStorage.setItem(TokenKey, data);
//             navigate('/users', {replace: true});
//         },
//     })
//     const onFinish = (values: LoginForm) => {
//         loginMutation.mutate(values);
//     }
//     return (
//     <Page>
//     {loginMutation.isError &&( 
//         <Alert
//             type="error"
//             message={(loginMutation.error as Error).message}
//         />
//     )}
//         <AuthCard>
//             <Form
//             name="loginForm"
//             onFinish={(values: LoginForm) => loginMutation.mutate(values)}
//             >
//                 <Form.Item<LoginForm>
//                 name="login"
//                 rules={[{ required: true, message: 'Please input your login' }]}
//                 >
//                     <Input placeholder="Логин" disabled={loginMutation.isPending} />
//                 </Form.Item>
//                 <Form.Item<LoginForm>
//                 name="password"
//                 rules={[{ required: true, message: 'Please input your password' }]}
//                 >
//                     <Input.Password placeholder="Пароль" disabled={loginMutation.isPending} />
//                 </Form.Item>
//                 <Button type="primary" htmlType="submit" loading={loginMutation.isPending} disabled={loginMutation.isPending}>Войти</Button>
//             </Form>

//         </AuthCard>
//     </Page>
// );
// }

export const LoginPage = () =>{
    const navigate = useNavigate();
    if (getToken()) { return <Navigate to="/users" replace /> }
    const loginMutation = useLogin(() => { navigate ('/users', {replace: true})});
    return (
        <CentredPage>
            <Card style={{ width: '100%', maxWidth: 420, padding: 24 }}>
                <Typography.Title level={4} style={{ marginTop: 0 }}>
                    Авторизация
                </Typography.Title>

                <LoginForm
                    onSubmit={(values) => loginMutation.mutate(values)}
                    isLoading={loginMutation.isLoading}
                    errorText={loginMutation.isError ? (loginMutation.error as Error).message : undefined}
                />
            </Card>
        </CentredPage>
    )
}