import {
    BarChart4,
    Users,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    MonitorPlay
} from 'lucide-react'


export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashbord",
        href: "/"
    },

    {
        icon: Users,
        label: "Personajes",
        href: "/personajes"
    },

    {
        icon: MonitorPlay,
        label: "Episodios",
        href: "/episodios"
    }
]

export const dataToolsSidebar = [
    {
        icon: CircleHelpIcon,
        label: "Faqs",
        href: "/faqs"
    },
    {
        icon: BarChart4,
        label: "Analytics",
        href: "/analitics"
    }
]

export const dataSupportSidebar = [
    {
        icon: Settings,
        label: "Setting",
        href: "/setting"
    },
    {
        icon: ShieldCheck,
        label: "Security",
        href: "/security"
    }
]