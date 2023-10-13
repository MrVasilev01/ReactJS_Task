function Animal(props){
    return (
      <div>
        <h1>
          {props.name} - {props.isMammal}
        </h1>
      </div>
    );
  }

export default Animal;