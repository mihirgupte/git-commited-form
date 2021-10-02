import "./index.css";
import InputField from '../textInput/';

export default function InputBox({children}){
    return(
        <div className="container">
            <div className="box">
                {children}
            </div>
        </div>
    )
}