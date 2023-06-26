import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const [email,setEmail] = useState(0); //輸入的email
    const [password,setPassword] = useState(0); //輸入的密碼
    const submitForm = (e) => {
        e.preventDefault();
        const user = {email:`${email}`,password:`${password}`};

        fetch('https://todoo.5xcamp.us/users/sign_in', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        user: user,
        }),
    })
        .then((res) => {
        console.log(res);
        if (res.status === 401) {
            throw new Error('使用者登入失敗，請重新登入！'); //拋出一個錯誤.將在 try-catch 區塊中捕獲並處理拋出的錯誤。
        }
        console.log(res.headers.get('authorization'));
        return res.json();
        })
        .then((res) => {
            return Swal.fire({
                icon: 'success',
                title: '登入成功',
            }).then(() => {
                    // navigate('/login');
            });
        })
        .catch((err) => {
            return Swal.fire({
                icon: 'error',
                title: '登入失敗',
                text: err.message,
            });
        });
    }

    return(
            <form className="d-flex flex-direction-column" onSubmit={submitForm}>
                <h2 className="formTitle">最實用的線上代辦事項服務</h2>
                <div className="form-group d-flex flex-direction-column">
                    <label className="formLabel" htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" className="formInput" placeholder="請輸入Email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group d-flex flex-direction-column">
                    <label className="formLabel" htmlFor="password">密碼</label>
                    <input type="text" id="password" name="password" className="formInput" placeholder="請輸入密碼" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <input type="submit" value="登入" className="formBtn"></input>
                <Link className="formLink" to="/register">註冊帳號</Link>
            </form>
    )
}

export default Login;