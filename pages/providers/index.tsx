import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ProviderList from '../../components/ProviderList'
import { IProvider } from '../../components/ProviderList/types'

export default function Providers() {
  const [data, setData] = useState<IProvider[] | null>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/providers')
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <>
      <Flex pt={'50px'} direction={'row'} align='top' justify='center'>
        <ProviderList providers={data} />
      </Flex>
    </>
  )
}
