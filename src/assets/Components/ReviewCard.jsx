const ReviewCard = ({ name, message, date, rate, index, handleEdit, handleDelete }) => {
  return (
    <div className="bg-white p-5 rounded-xl w-4/12 shadow-xl mb-3 text-center border">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Thank you, {name}!</h2>
      <p className="text-gray-600 text-sm mb-3">{message}</p>
      <div className="text-xs text-gray-400 mb-2">{date}</div>
      <div className="text-yellow-500 mt-1 text-lg">{"⭐".repeat(Number(rate))}</div>
      <div className="flex justify-center gap-2 mt-2">
        <button onClick={() => handleEdit(index)} className="text-white rounded bg-cyan-700 p-1 ps-2 pe-4 text-sm font-medium">Edit</button>
        <button onClick={() => handleDelete(index)} className="text-white rounded text-sm bg-cyan-700 p-1 ps-2 pe-4 font-medium">Delete</button>
      </div>
    </div>
  );
};

export default ReviewCard;
