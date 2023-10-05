const FilterNames = (props) => {
    return(
      <div className="filter">
      filter shown with:
      <input value={props.value}
      onChange={props.onChange} />
    </div>
    )
  }

export default FilterNames