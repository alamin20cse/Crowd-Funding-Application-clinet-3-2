import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsCampaign = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/allcampign/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch campaign details");
        return res.json();
      })
      .then((data) => {
        setCampaign(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading campaign details...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </div>
    );

  if (!campaign) return null;

  const {
    title,
    thumbnail,
    description,
    type,
    minimumDonation,
    deadline,
    name,
    email,
    date,
    status,
    _id
  } = campaign;

  const handleDonate = () => {
    const currentDate = new Date();
    const campaignDeadline = new Date(deadline);

    // Check if the campaign has expired
    if (campaignDeadline < currentDate) {
      Swal.fire({
        title: "Campaign Expired",
        text: "You cannot donate to this campaign as the deadline has passed.",
        icon: "error",
      });
      return;
    }

    // Redirect to payment page
    navigate(`/payment/${_id}`);
  };

  return (
    <div className="max-w-md mx-auto pt-16 bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
      {/* Campaign Image */}
      <figure className="relative h-64">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
          {status}
        </div>
      </figure>

      {/* Campaign Details */}
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 font-medium">{type}</p>
        <p className="text-sm text-gray-500">{description}</p>

        <div className="space-y-2 text-gray-700">
          <p className="font-medium">👤 Organizer: {name}</p>
          <p className="text-sm">📧 Contact: {email}</p>
          <p className="font-semibold">
            💰 Minimum Donation:{" "}
            <span className="text-green-600">${minimumDonation}</span>
          </p>
          <p>
            📅 Deadline:{" "}
            <span className="font-semibold">
              {new Date(deadline).toLocaleDateString()}
            </span>
          </p>
          <p>🕒 Created: {new Date(date).toLocaleDateString()}</p>
        </div>

        {/* Donate Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleDonate}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            🎁 Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCampaign;
