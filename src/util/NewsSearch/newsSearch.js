import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [news, setNews] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setNews([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: "http://hn.algolia.com/api/v1/search",
      params: { query: query, page: pageNumber, tags: "stories" },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setNews(prevNews => {
        return [...new Set([...prevNews, ...res.data.hits.map(b => b.title)])]
      })
      setHasMore(res.data.hits.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
      console.log(e)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, news, hasMore }
}