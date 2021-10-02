import "./index.css";

export default function InputBox({children}){
    return(
        <div className="container">
            <div className="box">
                {children}
            </div>
        </div>
    )
}