import './submit-component.css'


const SubmitComponent = (props) => {


    return (
        <button
            className="btn btn-outline-danger"
            type={"submit"} onClick={() => props.submit()} >
            Submit
        </button>
    )




}

export default SubmitComponent;