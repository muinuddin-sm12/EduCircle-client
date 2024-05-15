
import { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import ThemeControlerBtn from "./ThemeControlerBtn";


const DropDownProfile = () => {
    const {user, logOut} = useContext(AuthContext)
    // console.log(user)
    const notify = () => toast.success("Successfully LogOut!");
    const handleLogOut = async () => {
        await logOut();
        notify();
      };
    return (
        <div className="flex flex-col dropDownProfile z-[99]">
            <ul className="flex items-start flex-col gap-1">
                {/* <li className="md:hidden"><ThemeControlerBtn/></li> */}
                <li className="font-medium min-w-[100px] text-white">{user?.displayName}</li>
                <li><Link to='/my-attempt' className="btn btn-sm border-none bg-[#1979C1] text-white">My Attempted Assignments</Link></li>
                <li><button onClick={handleLogOut} className="btn btn-sm border-none bg-[#1979C1] text-white">Logout</button></li>
            </ul>
        </div>
    );
};

export default DropDownProfile;