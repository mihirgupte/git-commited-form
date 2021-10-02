import "./index.css";

export default function Button({children}){
    return(
        <div className = "button-container">
        <div className = "button">
            {children}
        </div>
        </div>
    )
}
