
export default function useUserDetails(){
    
    
    let user = localStorage.getItem("BookStoreUser")
    if (user !== null){
        user =  JSON.parse(user)
    }
    return [user];
}