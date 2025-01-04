import Button from "./Button";
import { useState } from "react";
export default function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payer, setPayer] = useState("user");

  const friendExpense = bill ? bill - yourExpense : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !yourExpense) return;
    handleSplitBill(payer === "user" ? friendExpense : -yourExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value.replace(/[^0-9]/g, "")))}
      />

      <label>🕴️Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > bill
              ? yourExpense
              : Number(e.target.value.replace(/[^0-9]/g, ""))
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill</label>
      <select
        name=""
        id=""
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
