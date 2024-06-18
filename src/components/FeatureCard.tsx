import { ReactNode } from "react"

interface propsType {
    icon: ReactNode;
    title: string;
    desc: string
}
export const FeatureCard = ({icon, title, desc}: propsType) => {
    return (
        <div className="flex gap-2 px-4 py-6 bg-gray-100">
            {icon}
            <div>
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-zinc-500">{desc}</p>
            </div>
        </div>

    )
}