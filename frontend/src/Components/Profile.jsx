import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // To avoid state updates on unmounted components

        const fetchProfile = async () => {
            try {
                const storedEmail = localStorage.getItem("userEmail");
                if (!storedEmail) {
                    throw new Error("No email found in localStorage");
                }

                const email = encodeURIComponent(storedEmail); // Ensure email is properly formatted for URL
                console.log("Fetching profile for:", email);

                const { data } = await axios.get(`http://localhost:5000/api/user/profile/${email}`);
                console.log("Received Data:", data);

                if (isMounted) setUser(data);
            } catch (err) {
                console.error("Error fetching profile:", err);
                if (isMounted) setError(err.message || "Failed to load profile");
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchProfile();

        return () => {
            isMounted = false; // Cleanup function
        };
    }, []); // Dependency array remains empty to fetch data only once on mount

    if (loading) return <p>Loading profile...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!user) return <p>No profile found.</p>;

    return (
        <div>
            <h2>Profile</h2>
            {user.profilePhoto ? (
                <img src={user.profilePhoto} alt="Profile" width="100" />
            ) : (
                <p>No Profile Photo</p>
            )}
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>

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

            <button onClick={() => alert("Add Address Clicked!")}>Add Address</button>
        </div>
    );
};

export default Profile;