import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    country: "",
    city: "",
    address1: "",
    address2: "",
    zip: "",
    addressType: "Home",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted: ", address);
    navigate("/profile"); 
  };

  return (
    
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Enter Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={address.country}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="address1"
          placeholder="Address Line 1"
          value={address.address1}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="address2"
          placeholder="Address Line 2 (Optional)"
          value={address.address2}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          value={address.zip}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="addressType"
          value={address.addressType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;