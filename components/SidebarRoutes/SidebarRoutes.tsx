import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from './SidebarRoutes.data'

import { SidebarItem } from '../SidebarItem'




export function SidebarRoutes() {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <div>
                    <div className='p-2 md:p-6'>
                        <p className='text-slate-500 mb-2'>General</p>
                        {dataGeneralSidebar.map((item, index) => (

                            // <p key={index}>{item.label}</p>
                            <SidebarItem item={item} key={index} />
                        ))}
                    </div>
                    <Separator />
                    <div className='p-2 md:p-6'>
                        <p className='text-slate-500 mb-2'>Herramientas</p>
                        {dataToolsSidebar.map((item, index) => (

                            // <p key={index}>{item.label}</p>
                            <SidebarItem item={item} key={index} />
                        ))}
                    </div>
                    <Separator />

                    <div className='p-2 md:p-6'>
                        <p className='text-slate-500 mb-2'>Soporte</p>
                        {dataSupportSidebar.map((item, index) => (

                            // <p key={index}>{item.label}</p>
                            <SidebarItem item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className='text-center p-6'>
                    <Button variant='outline' className='w-full border dark:border-blue-400/50'>
                        Conocer más
                    </Button>
                </div>
                <Separator />

                <footer className='mt-3 p-3 text-sm text-center'>
                    2024, Todos los derechos resevados
                </footer>

            </div>

        </div>
    )
}
