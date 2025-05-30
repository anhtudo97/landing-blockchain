import CutCornerButton from "../components/CutCornerButton";

const HeaderSection = () => {
    return (
        <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
            <div className="container">
                <div className="flex justify-between items-center h-24 md:h-28">
                    <div>
                        <img src="/assets/images/logo.svg" alt="Block logo" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <CutCornerButton className="hidden md:inline-flex">Get Started</CutCornerButton>
                        <div className="size-10 relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderSection;