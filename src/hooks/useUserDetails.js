
export default function useUserDetails(){

    const user = JSON.parse(localStorage.getItem("BookStoreUser"))
    
    return [user];
}