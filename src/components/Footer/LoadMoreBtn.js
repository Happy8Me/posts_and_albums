export const LoadMoreBtn = ({isLoading, setIsLoading, limit, currentNum, setCurrentNum}) => {
    return (
        <div className="uk-margin">
          <button
            className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
            onClick={() => {
              setIsLoading(true);
              setCurrentNum(Number(currentNum) + Number(limit))
            }}
          >Load more
            <div
              className="uk-margin-small-left"
              uk-spinner="ratio: 0.6"
              style={{visibility: isLoading ? '' : 'hidden'}}
            ></div>
          </button>
        </div>
      )
}  