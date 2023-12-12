import useUserDetails from "../../hooks/useUserDetails"
import {LogOut} from 'lucide-react'
export default function LoginLogoutComp() {

  const [user] = useUserDetails()
  return (
    <div className="bg-[#efe3e1] p-4 rounded-xl whitespace-nowrap font-semibold text-xl flex justify-start  items-center gap-2 relative">
        <LogOut  size={16} className="hover:bg-green-500" />
    </div>
  )
}
