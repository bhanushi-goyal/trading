import PlanCard from '@/components/planningCardLayout';
import planningCard from "@/components/data/planningcard.json";

const Pricing = () => {

    return (

        <section id="plans" className="relative overflow-hidden py-20 text-black">
            <div className="absolute inset-0 -z-20 bg-gradient-to-br from-purple-200 via-purple-300/20 to-black" />
            <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl -z-10" />
            <div className="absolute bottom-20 right-1/3 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl -z-10" />

            <div className="container-section relative mx-auto">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs uppercase tracking-widest text-purple-700">
                        Compare Plans
                    </span>
                    <h2 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                        Start Small, <br className="hidden sm:block" /> Scale Big
                    </h2>
                    <p className="mt-3 text-gray-800">Flexible Deposits for Every Trader</p>
                </div>

                {/* Cards with inline styled moving border */}
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {planningCard.map((p) => (
                        <div
                            key={p.name}
                            className="relative rounded-2xl p-[2px]"
                            style={{
                                background:
                                    "linear-gradient(120deg, rgba(168,85,247,0.9), rgba(236,72,153,0.9), rgba(168,85,247,0.9))",
                                backgroundSize: "300% 300%",
                                animation: "moveBorder 6s linear infinite",
                            }}
                        >
                            <div className="rounded-2xl bg-white text-black">
                                <PlanCard plan={p} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing;