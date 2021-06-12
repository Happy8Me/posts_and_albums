export const ToggleView = ({ viewGrid, viewList, setViewGrid, setViewList }) => {
   
        const grid = viewGrid ? 'uk-active' : '';
        const list = viewList ? 'uk-active' : '';
        
        return (
          <div className="uk-button-group uk-margin-left">
            <button
              className={"uk-button uk-button-default" + grid}
              onClick={() => {
                setViewGrid(true); 
                setViewList(false)
              }}
            >
              <span uk-icon="icon:  grid"></span>
            </button>
            <button
              className={"uk-button uk-button-default" + list}
              onClick={() => {setViewGrid(false); setViewList(true)
              }}
            >
              <span uk-icon="icon:  list"></span>
            </button>
          </div>
        )
      }