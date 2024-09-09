import React , {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    
   const {user} = useContext(UserContext);

   if (!user) return <div className='bg-gray-500 flex justify-center items-center w-auto m-auto'>Please Login</div>

   return <div className='flext justify-center items-center bg-yellow-200 flex-wrap  text-center flex-col'>Welcome {user.username}</div>
}

export default Profile