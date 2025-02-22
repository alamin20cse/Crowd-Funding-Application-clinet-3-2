import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Loading from "../Shared/Loading";
import { AuthContex } from "../Shared/AuthProvider";

const AddNewCampaign = () => {
  const { user, loading } = useContext(AuthContex);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [minimumDonation, setMinimumDonation] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  if (loading) return <Loading />;

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!thumbnail) {
      Swal.fire("Error", "Please upload a thumbnail image.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("file", thumbnail);
      data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
      data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: data }
      );

      const uploadImageURL = await res.json();
      const photoURL = uploadImageURL?.secure_url; // Secure URL

      if (!photoURL) {
        throw new Error("Image upload failed.");
      }

      const campaignData = {
        title,
        thumbnail: photoURL,
        description,
        type,
        minimumDonation,
        deadline,
      
          name: user.displayName,
          email: user.email,
    
        date: new Date(),
        status: "draft",
      };
      console.log(campaignData);

      const response = await fetch("http://localhost:5000/campign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campaignData),
      });

      const result = await response.json();

      if (result?.insertedId) {
        Swal.fire("Success", "Campaign added successfully!", "success");
        e.target.reset();
        setThumbnail(null);
        setIsSubmitting(false);
        navigate("/");
      } else {
        throw new Error("Failed to submit the request.");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred during submission.", "error");
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add Campaign</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter Campaign Title"
                className="input input-bordered"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Type */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <select
                className="select input-bordered"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="Personal issue">Personal Issue</option>
                <option value="Start up">Start Up</option>
                <option value="Business">Business</option>
                <option value="Creative idea">Creative Idea</option>
              </select>
            </div>

            {/* Thumbnail */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail Image</span>
              </label>
              <input
                type="file"
                className="input input-bordered"
                required
                onChange={handleThumbnailChange}
              />
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Enter campaign description"
                className="textarea textarea-bordered"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Minimum Donation Amount */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Donation Amount</span>
              </label>
              <input
                type="number"
                placeholder="Enter minimum amount"
                className="input input-bordered"
                required
                value={minimumDonation}
                onChange={(e) => setMinimumDonation(e.target.value)}
              />
            </div>

            {/* Deadline */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            {/* User Email (Read-Only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                value={user.email}
                readOnly
              />
            </div>

            {/* User Name (Read-Only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={user.displayName}
                readOnly
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Uploading..." : "Create Campaign"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCampaign;
