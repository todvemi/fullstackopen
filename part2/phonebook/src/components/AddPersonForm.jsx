const AddPersonForm = (props) => {
    return(
    <form onSubmit={props.formSubmit}>
          <div className="form">
            name: 
            <input value={props.nameValue}
            onChange={props.nameChange} />
          </div>
          <div className="form">
            number: 
            <input value={props.numberValue }
            onChange={props.numberChange} />
          </div>
          <div className="form">
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

export default AddPersonForm