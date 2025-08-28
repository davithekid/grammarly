import { Button } from "../ui/button";

export default function Principal() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="container mx-auto py-5 lg:py-0 lg:ml-30 content-center justify-items-center">
                    <div className="p-5">
                        <h1 className="text-4xl md:text-5x1 lg:text-5xl font-extrabold lg:w-130 text-center lg:text-left">Al Your Business Can Run With</h1>
                        <p className="text-lg md:text-xl mt-5 lg:mt-10 xl:text-xl lg:w-120 font-semibold">Grammarly Business combines advanced AI communication assistance with the collective knowledge and style of your organization to help teams communicate more effectively. It provides real-time writing suggestions </p>
                        <Button className="cursor-pointer mx-auto bg-green-800 hover:bg-green-800/80 dark:bg-zinc-200  mt-10  md:h-15 md:w-50 font-bold md:text-lg">Start a Free Trial</Button>
                    </div>
                </div>

                <div className="content-center">
                    <img src="./banner.svg" alt="" className="w-180" />
                </div>
            </div>
        </>
    )
}