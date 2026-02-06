export const Auth =(login:string, password:string): Promise<string> =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (login === 'admin' && password ==='admin'){
                resolve('token');
            }
            else {
                reject(new Error('Неправильный логин или пароль'))
            }
        }, 2000)
    })
}