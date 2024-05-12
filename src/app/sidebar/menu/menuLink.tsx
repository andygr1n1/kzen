'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { APP_ROUTES_ENUM } from '@/interfaces/enums'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/cn'
export const MenuLink: React.FC<{
    title?: string
    icon?: ReactNode
    disabled?: boolean
    to: APP_ROUTES_ENUM
    children?: ReactNode
    className?: string
}> = ({ title, icon, disabled = false, to, children, className }) => {
    const pathname = usePathname()
    const linkPath = `/${to}`
    return (
        <Link
            href={`/${to}`}
            className={cn(
                buttonVariants({ variant: null }),
                'flex gap-2 items-center !justify-start !w-full text-slate-400',
                pathname === linkPath && 'text-primary font-bold'
            )}
        >
            {icon}
            <span>{title}</span>
        </Link>
        // <Link
        //     href={linkPath}
        //     className={clsx(
        //         `flex w-full items-center  opacity-70 ${
        //             pathname === linkPath ? '!text-blue-700 !opacity-100' : '!text-cText'
        //         }`,
        //         className
        //     )}
        // >
        //     {title ? (
        //         <>
        //             <button
        //                 className="!p-0 flex gap-2 justify-center items-center font-bold !text-inherit duration-300 hover:!text-blue-600"
        //                 disabled={disabled}
        //             >

        //             </button>
        //         </>
        //     ) : (
        //         <>{children}</>
        //     )}
        // </Link>
    )
}
