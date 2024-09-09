import React , {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
  
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username , password})
    }

    return (
    <div className='flex justify-center items-center flex-col'>
        <h2 className='flex bg-red-400 justify-center text-center text-3xl text-slate-700 p-3.5 items-center'>Login</h2>
        <input className= "bg-red-200 outline-none px-4 py-1 rounded-md m-5" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username'  />
        <input className= "bg-red-200 outline-none px-4 py-1 rounded-md m-5" type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='border rounded-md outline-none px-4 py-1 m-5' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login