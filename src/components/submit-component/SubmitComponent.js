import './submit-component.css'


const SubmitComponent = (props) => {


    return (
        <button
            className="button"
            type={"submit"} onClick={() => props.submit()} >
            Submit
        </button>
    )




}

export default SubmitComponent;