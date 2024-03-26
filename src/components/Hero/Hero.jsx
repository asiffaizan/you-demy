import { useQuery } from '@tanstack/react-query'
import React from 'react'
import {getData} from '../fetchData/getData'

export default function Hero() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['hero'],
    queryFn: getData
  })

  return (
    <section>
      <div>
        <h1>Learn to new skill by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <hr/>

      <br/>

      {/* Data Fetching */}
      <div>
        <button>Try it free 7 days</button>
        <p>Then $20/mo. thereafter</p>
      </div>

      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>Error in fetching data</h1>
        ) : (
          <div>
            {data &&
              data.map((item) => (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                </div>
              ))
            }
          </div>
        )}
      </div>
      
    </section>
  )
}
