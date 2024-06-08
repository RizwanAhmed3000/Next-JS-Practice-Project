import Image from "next/image";

const ContactPage = () => {
    return (
        <div className="flex items-center gap-[100px] px-[100px] py-[10px]">
            <div className="flex-1 h-[500px] relative">
                <Image src="/contact.png" alt="" fill className="object-contain" />
            </div>
            <div className="flex-1">
                {/* <HydrationTestNoSSR/> */}
                {/* <div suppressHydrationWarning>{a}</div> */}
                <form action="" className="flex flex-col gap-[20px]">
                    <input type="text" placeholder="Name and Surname" className="p-[20px] rounded bg-[#2d2b42] text-white" />
                    <input type="text" placeholder="Email Address" className="p-[20px] rounded bg-[#2d2b42] text-white" />
                    <input type="text" placeholder="Phone Number (Optional)" className="p-[20px] rounded bg-[#2d2b42] text-white" />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        className="p-[20px] rounded bg-[#2d2b42] text-white"
                    ></textarea>
                    <button className="text-white bg-[#3673fd] p-[20px] font-bold cursor-pointer rounded">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage