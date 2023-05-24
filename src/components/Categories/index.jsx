import { useState } from "react";
import CategoriesList from "./CategoriesList"
import GifsExpo from "../GifsExpo";

const Categories = ({categories = [], setCategories}) => {
    const [inputValue, setInputValue] =useState("")

    const handleInput = ({target}) => {
        setInputValue(target.value)
    }


    const handleAddCategoryButton = () => {
        if (!categories.includes(inputValue)){
            setCategories([inputValue, ...categories])
        setInputValue("")
        }
    }

    return (
        <>
        <input
      onChange={(e) => handleInput(e)} 
      placeholder="Write category name"
      type="text"
      value={inputValue} 
      />
      <button
      className="btn btn-primary btn-sm ms-2"
      onClick={handleAddCategoryButton}
      type="button"
      >
        Add
      </button>
      <br />
      <CategoriesList 
       categories={categories} 
       setCategories={setCategories}/>
       <hr />
       <GifsExpo categories={categories} />
      </>
    )
}

export default Categories