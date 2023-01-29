import React from 'react'

const Pagination = ({ page, pagesLength, setPage }) => {

  const pagesPerBlock = 8
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const blockLength = Math.ceil(pagesLength / pagesPerBlock)

  const arrPages = []
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1
  const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock

  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i)
  }

  const handlePrev = () => {
    setPage(page - 1)
  }
  const handleNext = () => {
    setPage(page + 1)
  }
  const handlePage = currentPage => {
    setPage(currentPage)
  }

  return (
    <div>
      <div>&#60;&#60;</div>
      {
        page > 1 &&
        <div onClick={handlePrev} >&#60;</div>
      }
      <ul>
        {
          arrPages.map(e => (
            <li key={e} onClick={() => handlePage(e)} className={`pagination__page ${page === e && 'pagination__active'}`}>{e}</li>
          ))
        }
      </ul>
      {
        page !== pagesLength &&
        <div onClick={handleNext} >&#62;</div>
      }
      <div>&#62;&#62;</div>
    </div>
  )
}

export default Pagination