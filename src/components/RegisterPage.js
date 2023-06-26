import React,{useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const [email,setEmail] = useState(0); //email
    const [password,setPassword] = useState(0); //密碼
    const [nickname,setNickname] = useState(0); //暱稱
    const [Repassword,setRepassword] = useState(0); //密碼確認
    const navigate = useNavigate();

    const submitForm = (e) => {
        if(password === Repassword){
        e.preventDefault();
        const user = {email:`${email}`,nickname:`${nickname}`,password:`${password}`};

        fetch('https://todoo.5xcamp.us/users', {
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
        if (res.status === 422) {
            throw new Error('Email 已被註冊或密碼不足六碼！'); //拋出一個錯誤.將在 try-catch 區塊中捕獲並處理拋出的錯誤。
        }
        console.log(res.headers.get('authorization'));
        return res.json();
        })
        .then((res) => {
            return Swal.fire({
                icon: 'success',
                title: '註冊成功',
                text: '將返回登入頁！',
            }).then(() => {
                    navigate('/login');
            });
        })
        .catch((err) => {
            return Swal.fire({
                icon: 'error',
                title: '註冊失敗',
                text: err.message,
            });
        });
        }
        else{
            e.preventDefault();
            return Swal.fire({
                icon: 'error',
                title: '註冊失敗',
                text: '二次密碼輸入不相符，請重新確認！',
            });
        }
    };

    return(
            <form id="register_form" className="d-flex flex-direction-column" onSubmit={submitForm}>
                <h2 className="formTitle">註冊帳號</h2>
                <div className="form-group d-flex flex-direction-column">
                    <label className="formLabel" htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" className="formInput" placeholder="請輸入Email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group d-flex flex-direction-column">
                    <label className="formLabel" htmlFor="nickname">您的暱稱</label>
                    <input type="text" id="nickname" name="nickname" className="formInput" placeholder="請輸入您的暱稱" onChange={(e) => setNickname(e.target.value)}></input>
                </div>
                <div className="form-group d-flex flex-direction-column">
                    <label className="formLabel" htmlFor="password">密碼</label>
                    <input type="text" id="password" name="password" className="formInput" placeholder="請輸入密碼" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="form-group d-flex flex-direction-column">
                    <label className="formLabel" htmlFor="Repassword">再次輸入密碼</label>
                    <input type="text" id="Repassword" name="Repassword" className="formInput" placeholder="請再次輸入密碼" onChange={(e) => setRepassword(e.target.value)}></input>
                </div>
                <input type="submit" value="註冊帳號" className="formBtn"></input>
                <Link className="formLink" to="/login">返回</Link>
            </form>
    )
}

export default Register;