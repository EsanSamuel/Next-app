import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useCurrentUser = () => {
    const { data, isLoading, error, mutate } = useSWR('api/current', fetcher)

    return {
        data,
        isLoading,
        error,
        mutate
    }
}

export default useCurrentUser
