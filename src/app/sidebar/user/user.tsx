'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUserNameAndAvatar } from './hooks/useUserNameAndAvatar'
import { capitalize } from 'lodash-es'
import { getInitials } from '@/lib/utils'
import Link from 'next/link'
import { APP_ROUTES_ENUM } from '@/interfaces/enums'

export const User: React.FC = () => {
    const { data, isPending, isFetching } = useUserNameAndAvatar()
    console.log('data', data)
    return (
        <Link href={`/${APP_ROUTES_ENUM.PROFILE}`} className={'w-full mt-[45px] flex items-center gap-2 pl-7'}>
            <Avatar className="animate-fadeInDeep ">
                <AvatarImage src={`${process.env.NEXT_PUBLIC_FIRE_BUNNY_STORAGE}/avatars/${data.avatar}`} />
                <AvatarFallback>{getInitials(data.name)}</AvatarFallback>
            </Avatar>
            <div className="text-white capitalize font-font-bold text-sm">{capitalize(data.name)}</div>
        </Link>
    )
}
