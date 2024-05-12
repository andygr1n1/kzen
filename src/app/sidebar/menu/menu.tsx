import { APP_ROUTES_ENUM } from '@/interfaces/enums'
import { MenuLink } from './menuLink'
import { IconBook, IconGoal, IconProfile } from '@/assets/icons'
import { MenuLinkDashboard } from './menuLinkDashboard'

export const Menu: React.FC = () => {
    return (
        <>
            <div className="mx-auto items-center justify-center h-full flex w-[180px] flex-auto flex-col gap-5 overflow-auto ">
                <MenuLink
                    to={APP_ROUTES_ENUM.PROFILE}
                    title="Profile"
                    icon={<IconProfile width={26} height={26} className="ml-[-3px]" />}
                />

                <MenuLink to={APP_ROUTES_ENUM.NOTES} title="Notes" icon={<IconBook width={24} height={24} />} />
                <MenuLink to={APP_ROUTES_ENUM.GOALS} title="Goals" icon={<IconGoal width={24} height={24} />} />
            </div>
            <MenuLinkDashboard />
        </>
    )
}
