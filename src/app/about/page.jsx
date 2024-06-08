import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="flex gap-[100px] px-[100px]">
            <div className="flex-1 flex flex-col gap-[50px]">
                <h2 className="text-[#3673fd]">About Agency</h2>
                <h1 className="text-[32px]">
                    We create digital ideas that are bigger, bolder, braver and better.
                </h1>
                <p className="text-[20px] font-bold">
                    We create digital ideas that are bigger, bolder, braver and better. We
                    believe in good ideas flexibility and precission We’re world’s Our
                    Special Team best consulting & finance solution provider. Wide range
                    of web and software development services.
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-3">
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 relative">
                <Image
                    src="/about.png"
                    alt="About Image"
                    fill
                    className=""
                />
            </div>
        </div>
    )
}

export default AboutPage