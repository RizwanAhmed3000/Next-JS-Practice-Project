import Image from "next/image";

const page = () => {
  return (
    <div className="flex gap-[100px] px-[100px]">
      <div className="flex flex-1 flex-col gap-[50px]">
        <h1 className="text-[50px] font-bold">Creative Thoughts Agency.</h1>
        <p className="text-[15px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-[10px]">
          <button className="p-[10px] min-w-[100px] cursor-pointer border-none rounded bg-[#3673fd] text-white">Learn More</button>
          <button className="p-[10px] min-w-[100px] cursor-pointer border-none rounded ">Contact</button>
        </div>
        <div className="w-[500px] h-[50px] relative grayscale">
          <Image src="/brands.png" alt="" fill className="" />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.gif" alt="" fill className="" />
      </div>
    </div>
  )
}

export default page