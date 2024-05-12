'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { APP_ROUTES_ENUM } from '@/interfaces/enums'
import { Button } from '@/components/ui/button'

export const MenuLinkDashboard = () => {
    const pathname = usePathname()
    const linkPath = `/${APP_ROUTES_ENUM.DASHBOARD}`
    const isDashboard = pathname === linkPath

    return (
        <div className="mx-6 flex flex-col gap-5">
            {/* <Link href={APP_ROUTES_ENUM.DASHBOARD} className={isDashboard ? '!opacity-100' : ''}>
                <KzButton rounded className="!w-full" size="extraLarge">
                    Dashboard
                </KzButton>
            </Link> */}
            <Button asChild variant={isDashboard ? 'default' : 'secondary'}>
                <Link className="!font-bold" href={APP_ROUTES_ENUM.DASHBOARD}>
                    Dashboard
                </Link>
            </Button>

            {/* <XMenuDivider /> */}
            <div className="flex h-[45px] w-full items-center justify-center gap-2">
                {/* {isUnderDevelopment() && (
                    <>
                        <GithubLink />
                        <FigmaLink />
                    </>
                )} */}
                {/* <ThemeSwitcher /> */}
                {/* <Logout /> */}
            </div>
        </div>
    )
}
