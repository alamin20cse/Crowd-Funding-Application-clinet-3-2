import React from "react";
import useUsers from "../Hooks/useUsers";
import Loading from "../Shared/Loading";

const Profile = () => {
    const [users, loading] = useUsers();

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {users.map((user) => (
                <div
                    key={user._id}
                    className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
                >
                    <img
                        src={user.photo}
                        alt="User Profile"
                        className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
                    />
                    <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                        Upzila :{user.upazilaName} (  {user.upazilaNameBan})
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                        District :{user.districtName} ({user.districtNameBan})
                    </p>

                   
                    <span
                        className={`px-4 py-1 mt-3 rounded-full text-sm font-medium ${user.role === "admin"
                                ? "bg-blue-500 text-white"
                                : "bg-green-500 text-white"
                            }`}
                    >
                        {user.role.toUpperCase()}
                    </span>
                    <span
                        className={`mt-2 text-xs px-3 py-1 rounded-full ${user.status === "active"
                                ? "bg-green-200 text-green-800"
                                : "bg-red-200 text-red-800"
                            }`}
                    >
                        {user.status}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Profile;
