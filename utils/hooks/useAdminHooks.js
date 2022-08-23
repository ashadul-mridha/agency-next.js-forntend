import { useContext } from "react"
import { AdminContext } from "../providers/AdminContextProvider"


const useAdminHooks = () => {
    const adminData = useContext(AdminContext);

    return adminData;
}

export default useAdminHooks;