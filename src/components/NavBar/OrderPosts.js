export const OrderPosts = ( {setSortOrder} ) => {
  return (
      <select 
        className="uk-select uk-width-small uk-margin-auto-left"
        onChange={(e)=>{
          setSortOrder(e.target.value) 
        }}
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
    </select>
  )
} 