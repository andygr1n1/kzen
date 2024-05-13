import ky from 'ky'
import { useSuspenseQuery } from '@tanstack/react-query'

const fetchUserNameAndAvatar = async () => {
    const userId = process.env.NEXT_PUBLIC_OWNER_ID

    const response: { data: { heroes_by_pk: { avatar: string; name: string } } } = await ky(
        `${process.env.NEXT_PUBLIC_CLIENT_ENDPOINT}`,
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': `${process.env.NEXT_PUBLIC_X_HASURA_ADMIN_SECRET}`,
            },
            body: JSON.stringify({
                query: `
                   query MyQuery {
                        heroes_by_pk(id: "${userId}") {
                            avatar
                            name
                        }
                    }
                    `,
            }),
        }
    ).json()
    return response.data.heroes_by_pk
}

const useUserNameAndAvatar = () => {
    return useSuspenseQuery({
        queryKey: ['fetchUserNameAndAvatar'],
        queryFn: () => fetchUserNameAndAvatar(),
    })
}

export { useUserNameAndAvatar, fetchUserNameAndAvatar }
