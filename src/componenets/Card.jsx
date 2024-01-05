import React, { useContext } from 'react'
import QuoteContext from '../context/QuoteContex'
import { getquote } from '../context/QuoteAction'

const Card = () => {



  const { quotes, dispatch } = useContext(QuoteContext)

  const Handlesubmit = async () => {
    const data = await getquote()
    dispatch({
      type: "get_data",

      payload: data
    })


  }
  return (
    <>
      <div className="container"></div>
      <div className="card my-5 rounded-0 bg-info">
   
        <h5 className="card-header">Get daily quote</h5>

        <div className="card-body shadow p-3 mb-5 bg-body rounded">
          {
            quotes === null ? (
              <>
                <h1> no qutoes here</h1>
              </>
            ) : (
              <>

                <h1 className="card fst-italic">{quotes.content}</h1>
                <h3 className="card-title text-secondary">{quotes.author}</h3>
                <h3 className="card-title ">{quotes.dateAdded}</h3>
                <span className="badge text-bg-muted">{quotes.tags[0]}</span> <br />
              </>
            )
          }

          <button className="btn btn-dark my-4  " onClick={Handlesubmit}>Get more</button>
        </div>
      </div>
    </>
  )
}

export default Card
