export const Pagination = ({total, limit, page, setPage}) => {
  const pagesArr = [];
  for (let i = 1; i <= Math.ceil(total/limit); i++) {
    pagesArr.push(i)
  }
  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle uk-margin">
      <li>
        {page > 1 &&
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(page - 1)
          }}
        ><span className="uk-icon uk-pagination-previous" uk-pagination-previous="true"></span></a>
        }
      </li>

      {pagesArr.map(el => {
        if(el === page) {
          return  <li key={el} className="uk-active"><span>{el}</span></li>
        }
        return <li key={el}>
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setPage(el)
              }}
            >{el}</a>
          </li>
        })}
      <li>
        {page < pagesArr.length &&
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1)
          }}
        ><span className="uk-icon uk-pagination-next" uk-pagination-next="true"></span></a>
        }
      </li>
    </ul>
  )
} 