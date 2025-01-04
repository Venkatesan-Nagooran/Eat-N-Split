import Button from "./Button";
import { useState } from "react";
export default function FormAddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = { id, name, image: `${image}?={id}`, balance: 0 };
    setName("");
    setImage("https://i.pravatar.cc/48");
    handleAddFriend(newFriend);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
