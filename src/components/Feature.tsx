import { FeatureData } from "../data/Feature";
import { FeatureCard } from "./FeatureCard";

export const Feature = () => {
    return (
        <div className="container grid gap-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 ">
            {
                FeatureData.map((item) => (
                    <FeatureCard title={item.title} icon={item.icon} desc={item.desc} />
                ))
            }
        </div>
    )
}