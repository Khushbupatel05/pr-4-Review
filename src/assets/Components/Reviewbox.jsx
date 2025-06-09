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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 py-10 px-4">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-200" >
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700"  > Your Name   </label>
            <input type="text" id="name" value={input.name} onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-bold text-gray-700" >  Date  </label>
            <input type="date" id="date" value={input.date} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            {errors.date && (
              <p className="text-red-600 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <label  htmlFor="message"  className="block text-sm font-bold text-gray-700" >  Your Message
            </label>
            <textarea id="message" value={input.message} onChange={handleChange}  rows="4" className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Leave a review..." />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="rate" className="block text-sm font-bold text-gray-700"> Rating  </label>
            <select id="rate" value={input.rate} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"  >
              <option value="">Select</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            {errors.rate && (
              <p className="text-red-600 text-sm mt-1">{errors.rate}</p>
            )}
          </div>

          <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all" >
            Submit
          </button>
        </form>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="h-[425px] overflow-y-auto ">
            {allData.map((review, index) => (
              <div
                key={index}
                className="bg-[fff] p-5 rounded-3xl shadow-xl text-center border " >

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Thank you, {review.name}!
                </h2>
                <p className="text-gray-600 text-sm mb-3">{review.message}</p>
                <div className="text-xs text-gray-400 mb-2">{review.date}</div>
                <div className="text-yellow-500 mt-1 text-lg text-center">{"⭐".repeat(Number(review.rate))}</div>
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => handleUpdate(index)}className="text-blue-500 font-medium  text-sm  hover:underline">Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}className="text-red-500 font-medium text-sm hover:underline"  > Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reviewbox;
