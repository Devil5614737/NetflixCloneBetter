import Button from "./Button";
import Input from "./Input";


const RegisterInput=()=>{
    return(
        <div className="intro-input-container">
        <Input placeholder='email address' type='email'/>
        <Button>Get Started <svg className='chevron' viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="white" fill-rule="evenodd"></path></svg></Button>
    </div>
    )
}

export default RegisterInput;