type selectProps = {
    label: string,
    options: any[],
}

export default function BASelect(props:selectProps){
    const {label, options} = props
    return (
        <div>
            <h4>{label}</h4>
            <select className="select" onChange={(e)=>{e.target.value}}>
                {
                    options && Array.isArray(options) && 
                    options.map((x,i)=>(
                        <option value={x.value}>{x.displayName}</option>
                    ))  
                }
            </select>
        </div>
    )
}