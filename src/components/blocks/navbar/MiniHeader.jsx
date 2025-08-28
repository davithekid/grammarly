import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react"
import { NavigationMenuDemoSec } from "./NavigationSec";

export default function MiniHeader() {
    return (
        <>
              <div className="mx-auto px-10 flex items-center py-5 border-t border-gray-300 bg-gray-200">
                <ul className="flex gap-17 dark:text-black items-center">
                    <li className="font-bold text-xl">Bussines</li>
                  <li className=""><NavigationMenuDemoSec/></li>
                </ul>
            </div>
        </>
    );
}