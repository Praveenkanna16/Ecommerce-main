import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const email = localStorage.getItem("userEmail") || "user@example.com"; // Get email dynamically
                console.log("Fetching profile for:", email);

                const { data } = await axios.get(`http://localhost:5000/api/user/profile/${email}`);
                console.log("Received Data:", data);

                setUser(data);
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>Error fetching profile. Try again later.</p>;

    return (
        <div>
            <h2>Profile</h2>
            {user.profilePhoto ? (
                <img src={user.profilePhoto} alt="Profile" width="100" />
            ) : (
                <p>No Profile Photo</p>
            )}
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>

            <h3>Addresses</h3>
            {user.addresses && user.addresses.length > 0 ? (
                <ul>
                    {user.addresses.map((address, index) => (
                        <li key={index}>
                            {address.address1}, {address.city}, {address.country}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No address found</p>
            )}

            <button>Add Address</button>
        </div>
    );
};

export default Profile;