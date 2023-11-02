"use client"
import { AuthContext } from "@/components/authcontext";
import { useRouter } from "next/navigation";
import { ReactElement, useContext, useEffect } from "react";


const Layout = ({ children }: { children: ReactElement }) => {
  const { userState} = useContext(AuthContext);
  const router = useRouter();
  useEffect( () =>{
		if(!userState?.token) {
			router.push("/login")
			/* router.push("/login") */
		}
	},[])
	return (
		<>
			<div className="bg-[#E3F3F0] min-h-[80vh] text-black">{children}</div>
		</>
	);
};
export default Layout;
