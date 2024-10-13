import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
} from 'lucide-react'


export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashbord",
        href: "/"
    },

    {
        icon: Building2,
        label: "Companies",
        href: "/Companies"
    },

    {
        icon: Calendar,
        label: "Calendar",
        href: "/task"
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