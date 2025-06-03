import { useState } from "react"

const Reviewbox = () => {
    const [input ,setInput] = useState({
        name:'' , email:'' , date:'', message:'', rate:'' ,
    })

    const handleChange = (e)=>{
       console.log(e.target.value)
       setInput({...input ,[e.target.id] : e.target.value})
    }
    const handleSubmit = (e)=>{
       e.preventDefault();

       let showError = {};

       if(input.name.trim()== ""){
        showError.name = "Enter Your Name"
       }
       
    }
  return (
    <>
        <div className='container mx-auto'>
            <form onClick={handleSubmit} className="max-w-sm mt-5 mx-auto">
            <div className="">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                <input type="email" id="name" onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com"/>
            </div>
            <div className="mt-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>
            <div className='mt-5'>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date:</label>
                <input type="date" id='date' onChange={handleChange}  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
            </div>
            
            <div className="max-w-sm mx-auto">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" onChange={handleChange} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..." defaultValue={""} />
            </div>
            
            <div className="max-w-sm mx-auto">
                <label htmlFor="rate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select id="rate" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value={""}>Select </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </select>
            </div>

            <div className="flex items-start mb-5 mt-5">
               
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            </form>
        </div>
    </>
  )
}

export default Reviewbox