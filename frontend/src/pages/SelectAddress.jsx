import { useEffect, useState } from "react";

const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/addresses/${userId}`)
      .then((res) => res.json())
      .then((data) => setAddresses(data.addresses));
  }, []);

  return (
    <div>
      <h2>Select Delivery Address</h2>
      {addresses.map((addr, index) => (
        <div key={index} onClick={() => setSelectedAddress(addr)}>
          <p>{addr.city}, {addr.zipcode}</p>
        </div>
      ))}
      <button onClick={() => console.log(selectedAddress)}>Confirm Address</button>
    </div>
  );
};

export default SelectAddress;