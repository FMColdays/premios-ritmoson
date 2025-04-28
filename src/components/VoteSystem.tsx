import { useState, useEffect } from 'react'
interface PageInfo {
  category: string
  nominees: Nominee[]
}

interface Nominee {
  name: string
  image: string
  link: string
}

const VoteSystem = () => {
  const [pageInfo, setPageInfo] = useState<PageInfo>()

  useEffect(() => {
    const fetchNominees = async () => {
      const response = await fetch(`/api/nominees.json?category=${3}`)
      const data = await response.json()
      setPageInfo(data)
    }

    fetchNominees()
  }, [])

  const { category, nominees } = pageInfo ?? {}

  return (
    <div>
      {nominees?.map(nominee => (
        <div key={nominee.name}>
          <h2>{nominee.name}</h2>
          <img src={nominee.image} alt={nominee.name} />
          <a href={nominee.link}>Link</a>
        </div>
      ))}
    </div>
  )
}

export default VoteSystem
