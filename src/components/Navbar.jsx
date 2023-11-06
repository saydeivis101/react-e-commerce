import { useContext } from "react";
import { FilterContext } from "../context/FilterProvider";

export const Navbar = () => {

    const {filters, setFilters} = useContext(FilterContext)

    const onMinPriceChange = (event)=>{
        setFilters((prevState)=>({
            ...prevState,
            minPrice: event.target.value++
        }))
    }

    const onCategoryChange = (event)=>{
        setFilters((prevState)=>({
            ...prevState,
            category: event.target.value
        }))
    }

  return (
    <div className="hero">
      <input type="range" 
      name="" 
      id="" 
      min="0" 
      max="1000"
      onChange={onMinPriceChange} />
      <label htmlFor="">
        {filters.minPrice}
      </label>

      <select 
      name="" 
      id=""
      onChange={onCategoryChange}>
        <option value="all">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="groceries">Groceries</option>
        <option value="laptops">Laptops</option>
      </select>
    </div>
  );
};
