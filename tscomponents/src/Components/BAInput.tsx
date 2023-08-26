type inputProps = {
    type: string,
    placeholder: string,
}


export default function BAInput(props:inputProps){
    const {type, placeholder} = props;
    return (
        <div>
            <input type={type} 
            onChange={(e)=>{
                e.target.value;
            }}
            placeholder={placeholder}
            />
            <button className="button2">GO</button>
        </div>
    )
}
