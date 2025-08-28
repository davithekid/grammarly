import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/theme/theme";
import { NavigationMenuDemo } from "./NavigationPrinc";

export default function Navbar() {
    return (
        <>  
            <nav>
                <div className="mx-auto flex px-10 py-5 bg-white justify-between items-center z-100">
                    <ul className="flex items-center gap-12 dark:text-black">
                        <li className="font-bold text-xl"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Grammarly_logo.svg/1200px-Grammarly_logo.svg.png" alt="" className="w-40" /></li>
                        <li className=" "><NavigationMenuDemo/></li>
                    </ul>

                    <div className="dark:text-black flex items-center">
                        <ModeToggle/>   
                        <Button className="cursor-pointer w-40 ml-5 mr-5 font-bold bg-white hover:bg-zinc-200 duration-200 text-black  ">My Grammarly</Button>
                        <Button className="cursor-pointer w-40 bg-emerald-700 font-bold hover:bg-green-800/70 text-white">Start a Free Trial</Button>
                    </div>
                </div>  
            </nav>
        </>
    )
}