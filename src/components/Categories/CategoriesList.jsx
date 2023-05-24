const CategoriesList = ({categories = [], setCategories}) => {
  const deleteCategory = (categories) => {
    const newList = categories.filter((cat)=>cat !== category)
    setCategories(newList)
  }
  return(
    <ol>
      {
        categories.map((category) => (
          <li onClick={()=>deleteCategory(category)} key={category}>
            {category}
          </li>
        ))
      }
    </ol>
  )
}


export default CategoriesList