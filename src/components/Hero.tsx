export const Hero = () => {
    return (
        <div className="bg-[#e3edf6]">
            <div className="container grid py-8 md:grid-cols-2">
                <div className="flex items-center justify-between w-full">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondart">
                            Starting At <span className="font-bold">$999.00</span>
                        </p>
                        <h2 className="text-4xl font-bold text-topHeadingPrimary md:text-5xl">
                            The best notebook Collection 2023
                        </h2>
                        <h3 className="text-2xl font-bold">
                            Exclusive offer -10% off this week
                        </h3>
                        <a href="#" className="inline-block px-6 py-3 bg-white rounded-md hover:bg-accent hover:text-white"> Shop Now 2</a>
                    </div>
                </div>
                <div>
                    <img className="ml-auto" src="https://thebravecoders-ecommerce-electronic.netlify.app/hero.png" alt="Hero Image" />
                </div>
            </div>
        </div>
    )
}