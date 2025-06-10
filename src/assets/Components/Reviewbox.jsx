import { useState } from "react";
import ReviewCard from "./ReviewCard";

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


  console.log(allData.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#014872] to-[#D7EDE1] py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-center text-2xl font-semibold text-gray-800">Give Your Review</h2>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" value={input.name} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={input.date}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              value={input.message}
              onChange={handleChange}
              rows="3"
              placeholder="Leave a review..."
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              id="rate"
              value={input.rate}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            {errors.rate && <p className="text-red-600 text-sm mt-1">{errors.rate}</p>}
          </div>

          <button type="submit" className=" p-1 ps-3  pe-3  bg-cyan-700 ms-40 text-white font-semibold rounded  hover:bg-cyan-800 bg-cyan-700transition-all">
            Submit
          </button>
        </form>
      </div>
      <div className="w-6/12 ms-5 space-y-6 h-[425px] overflow-y-auto">
        <div className="row">
          {allData.map((review, idx) => {
            <div className="col-6">
              <ReviewCard name={review.name} message={review.message} date={review.date} rate={review.rate} index={idx} key={idx} />
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviewbox;
