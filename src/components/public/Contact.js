import { useState } from "react";
export const Contact = () => {
  const [firstName, setFirstName]=useState("swathi")
  console.log("firstname",firstName)
  const [increment,setIncrement]=useState(0)
  console.log("increment",increment)
  const [decrement, setdecrement]=useState(10)
  console.log("decrement",decrement)
  const [user,setUser]=useState(
    {
      name:"swetha",
      age:16

    }
  )

  console.log("user age", user?.age)
const[product,setProduct]=useState(["laptop","earphone"])
console.log("products",product)
  const[formData,setFormData]=useState({
    firstName:" ",
    email:" ",
  });
  const handleChange=(e)=>
  {
    const{name,value}=e.target;
    setFormData({...formData,[name]:value});
  };
  const handleSubmit=()=>
  {
    alert("form submitted");
    console.log("formData",formData)
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>

      <p className="text-gray-700 mb-6">
        Feel free to reach out! I’m always open to new opportunities, collaborations, and freelance work.
      </p>

      <div className="space-y-4 text-gray-700">
        <p>
          <span className="font-semibold">Email:</span> swethapoongodi597@gmail.com
        </p>

        <p>
          <span className="font-semibold">Phone:</span> ——
        </p>

        <p>
          <span className="font-semibold">Location:</span> Tamil Nadu, India
        </p>
      </div>

      <button onClick={()=>setFirstName("swetha")}>Change Name</button>
      <div>
        {/* {
          firstName

        } */}
        <div>
        <button onClick={()=>setIncrement(increment+1)} >Increment button</button>
        </div>
        <div>
          <button onClick={()=>setdecrement(decrement-100)}>
            decrement button
          </button>
      
        </div>
             <button onClick={()=>setdecrement(pre=>pre-1)}>
           Pre decrement button
          </button>
      </div>
      <div>
        <button onClick={()=>setUser({...user, age : user?.age + 1})}> object</button>
      </div>
      <div>
        <button onClick={()=>setProduct([...product,"phone"])}>
          array
        </button>
      </div>
      <input type="text"
      name="Firstname"
      placeholder="name"
      value={formData.name}
      onChange={handleChange}
      >
      </input>
      <input type="email"
      name="email"
      placeholder="email"
      value={formData.email}
      onChange={handleChange}>
      </input>
      <button onClick={handleSubmit}>
      click here
      </button>
    
    </div>
  );
};
