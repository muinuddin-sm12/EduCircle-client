
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
// import ThemeControlerBtn from "./ThemeControlerBtn";


const DropDownProfile = () => {
    const {user, logOut} = useContext(AuthContext)
    // console.log(user)
    const notify = () => toast.warning("Successfully LogOut!");
    const handleLogOut = async () => {
        await logOut();
        notify();
      };
    return (
        <div className="flex flex-col dropDownProfile z-[99]">
            <ul className="flex items-start flex-col gap-1">
                {/* <li className="md:hidden"><ThemeControlerBtn/></li> */}
                <li className="font-medium min-w-[100px] text-white">{user?.displayName}</li>
                <li><button className="btn btn-sm border-none bg-[#1979C1] text-white">My Attempted Assignments</button></li>
                <li><button onClick={handleLogOut} className="btn btn-sm border-none bg-[#1979C1] text-white">Logout</button></li>
            </ul>
        </div>
    );
};

export default DropDownProfile;