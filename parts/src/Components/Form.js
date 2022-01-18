import React from 'react'

function Form(props) {
    return (
        <>
            <form onSubmit={props.addHandler} >
        <div>
          name: <input value={props.newName} onChange={props.onChangeHandler} />
          <br />
          number: <input type="text" value={props.phoneNumber} onChange={props.onChangeNumberH} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </>
    )
}

export default Form
