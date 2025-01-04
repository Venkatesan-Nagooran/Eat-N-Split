import Friend from "./Friend";

export default function ListFriends({
  friends,
  handleSelectFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          handleSelectFriend={handleSelectFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
