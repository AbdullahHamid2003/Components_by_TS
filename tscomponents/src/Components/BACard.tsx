type cardProps = {
    id: number,
    userName: string,
    age: number,
    institute: string,
    isActive: boolean,
    category: string,
  }
  
  export default function BACard(props:cardProps){
    const {id, userName, age, institute, isActive, category} = props;
    return(
      <div className="card">
        <div className="container">
            <p>ID : {id}</p>
            <p>UserName : {userName}</p>
            <p>Age : {age}</p>
            <p>Institute : {institute}</p>
            <p>IsActive : {isActive ? "Yes" : "No"}</p>
            <p>Category : {category}</p>
        </div>
      </div>
    )
  }