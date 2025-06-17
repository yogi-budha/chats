
import OtherUser from "./otherUser";

function Friends( { data, error, isLoading } ) {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-3">
      {data?.map(({ _id, fullname, profilePic, username }) => (
    <OtherUser key={_id} _id={_id} fullname={fullname} profilePic={profilePic} username={username}/>
      ))}
    </div>
  );
}

export default Friends;
