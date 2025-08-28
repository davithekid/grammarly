import MenuNav, { NavigationMenuDemo } from "@/components/blocks/navbar/NavigationPrinc";
import Navbar from "@/components/blocks/navbar/Navbar";
import Principal from "@/components/sections";
import MiniHeader from "@/components/blocks/navbar/MiniHeader";


export default function Home(){
  return (
    <>
    <Navbar/>
    <MiniHeader/>
    <Principal/>
    </>
  )
}