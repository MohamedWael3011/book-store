import useUserDetails from "../../hooks/useUserDetails"
import {LogOut} from 'lucide-react'
import { Link } from "react-router-dom"
export default function LoginLogoutComp() {

  const [user] = useUserDetails()
  return (
    <div className="bg-[#efe3e1] p-4 rounded-xl whitespace-nowrap font-semibold text-xl flex justify-between items-center gap-2 relative" style={{ width: '15vw', height: '8vh', fontFamily: 'Inria Serif' }}>
        <p>{`Welcome, ${user.username} RAAA`}</p>
        <div style={{fontSize:'0'}}>
          <Link to='/login'>
            <LogOut style={{ width: '1.5vw', height:'3vh', marginBottom:'50'}}/>
          </Link>
        </div>
    </div>
  )
}
