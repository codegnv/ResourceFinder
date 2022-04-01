import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProviderCard from '../../components/ProviderCard'
import { IProvider } from '../../components/ProviderList/types'

export default function Provider() {
  const router = useRouter()
  const { id } = router.query

  const [data, setData] = useState<IProvider | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/providers/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        setLoading(false)
      })
  }, [id])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <ProviderCard provider={data} />
    </div>
  )
}
