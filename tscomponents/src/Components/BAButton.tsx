type buttonProps = {
  buttonClick: any,
  buttonVal: string,
}

export default function BAButton(props:buttonProps){
  const {buttonClick, buttonVal} = props;
  return(
    <div>
      <button className="button" onClick={buttonClick}>{buttonVal}</button>
    </div>
  )
}