interface UserNameProp {
  name: string;
}

function UserName({name}: UserNameProp) {
  return (
      <h2 className="user_name">{name}</h2>
  )
}

export default UserName;