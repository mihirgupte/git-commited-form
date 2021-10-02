import './index.css';
export default function InputField({type, placeholder, value, onChange}){
    return(
        <>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange}></input>
        </>
    )
}