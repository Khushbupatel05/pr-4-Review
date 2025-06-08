import { useState } from "react";

const Reviewbox = () => {
  const [input, setInput] = useState({
    name: "",
    date: "",
    message: "",
    rate: "",
  });

  const [errors, setErrors] = useState({});
  const [allData, setAllData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let showError = {};

    if (input.name.trim() === "") {
      showError.name = "Enter Your Name";
    }
    if (input.message.trim() === "") {
      showError.message = "Enter Valid Review!";
    }
    if (input.date.trim() === "") {
      showError.date = "Select Valid Date!";
    }
    if (input.rate.trim() === "") {
      showError.rate = "Select Rating!";
    }

    setErrors(showError);

    if (Object.keys(showError).length === 0) {
      if (isUpdate) {
        const updatedArr = [...allData];
        updatedArr[editIndex] = input;
        setAllData(updatedArr);
        setIsUpdate(false);
      } else {
        setAllData([...allData, input]);
      }
      setInput({
        name: "",
        message: "",
        date: "",
        rate: "",
      });
    }
  };

  const handleUpdate = (index) => {
    setInput(allData[index]);
    setEditIndex(index);
    setIsUpdate(true);
  };

  const handleDelete = (index) => {
    const filtered = allData.filter((_, i) => i !== index);
    setAllData(filtered);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 space-y-5 bg-white p-6 rounded-xl shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" value={input.name} onChange={handleChange} className="mt-1 w-full p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" value={input.date} onChange={handleChange} className="mt-1 w-full p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea id="message" value={input.message} onChange={handleChange} rows="4" className="mt-1 w-full p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Leave a review..." />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rating</label>
            <select id="rate" value={input.rate} onChange={handleChange} className="mt-1 w-full p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select</option>
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
            {errors.rate && <p className="text-red-600 text-sm mt-1">{errors.rate}</p>}
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Submit</button>
        </form>

        
        <div className="max-w-2xl mx-auto mt-10">
          <div className="h-[425px] overflow-y-auto space-y-4">
            {allData.map((review, index) => (
              <div key={index} className={`p-5 rounded-xl shadow-md ${index % 2 === 0 ? "bg-blue-50" : "bg-pink-50"}`}>
                <h2 className="text-xl font-semibold">{review.name}</h2>
                <p className="mt-2 text-gray-800">{review.message}</p>
                <div className="text-sm text-gray-500 mt-1">{review.date}</div>
                <div className="text-yellow-500 mt-1 text-lg">{"⭐".repeat(Number(review.rate))}</div>
                <div className="flex justify-end gap-4 mt-3">
                  <button onClick={() => handleUpdate(index)} className="text-blue-600  text-lg">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className="text-red-600 hover: text-lg">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviewbox;
