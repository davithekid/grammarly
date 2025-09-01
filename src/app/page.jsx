import MenuNav, { NavigationMenuDemo } from "@/components/blocks/navbar/NavigationPrinc";
import Navbar from "@/components/blocks/navbar/Navbar";
import Principal from "@/components/sections";
import MiniHeader from "@/components/blocks/navbar/MiniHeader";
import Planos from "@/components/sections/planos";
import CardPlano from "@/components/card/card";


export default function Home() {
  return (
    <>
      <Navbar />
      <MiniHeader />
      <Principal />
      <CardPlano />
    </>
  )
}