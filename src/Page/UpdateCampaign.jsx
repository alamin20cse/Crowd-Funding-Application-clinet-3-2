import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useForm } from 'react-hook-form';
import { AuthContex } from '../Shared/AuthProvider';
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContex); // Access the user context
  const navigate=useNavigate();

  const { 
    register, 
    handleSubmit, 
    setValue, 
    formState: { errors } 
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/allcampign/${id}`)
      .then(res => res.json())
      .then(data => {
        setCampaign(data);
        setLoading(false);

        // Set default values once data is loaded
        setValue("title", data.title);
        setValue("type", data.type);
        setValue("description", data.description);
        setValue("minimumDonation", data.minimumDonation);
        setValue("date", data.date);
      });
  }, [id, setValue]);

  if (loading) {
    return <Loading />;
  }

  const onSubmit = async (formData) => {
    console.log("Updated data:", formData);

    // If user uploaded a new file, upload to Cloudinary
    if (formData.thumbnail[0]) {
      const imageData = new FormData();
      imageData.append("file", formData.thumbnail[0]);
      imageData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // .env variables
      imageData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: imageData }
        );
        const uploadImageURL = await res.json();
        const photoURL = uploadImageURL?.secure_url;

        if (!photoURL) {
          throw new Error("Image upload failed.");
        }

        formData.thumbnail = photoURL; // Store image URL
      } catch (error) {
        console.error("Image upload error:", error);
        return;
      }
    } else {
      formData.thumbnail = campaign.thumbnail; // Keep existing image
    }

    // Include user information in the updated form data
    formData.userEmail = user.email;
    formData.userName = user.displayName;
    formData.status = campaign.status

    // Send updated data to backend
    try {
      const response = await fetch(`http://localhost:5000/updateCampaign/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Updated successfully:", result);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Succesfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/dashboard/mycampaign')

    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Campaign</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            
            {/* Title */}
            <div className="form-control">
              <label className="label"><span className="label-text">Campaign Title</span></label>
              <input {...register("title")} className="input input-bordered" required />
            </div>

            {/* Type */}
            <div className="form-control">
              <label className="label"><span className="label-text">Type</span></label>
              <select {...register("type")} className="select input-bordered" required>
                <option value="Personal issue">Personal Issue</option>
                <option value="Start up">Start Up</option>
                <option value="Business">Business</option>
                <option value="Creative idea">Creative Idea</option>
              </select>
            </div>

            {/* Thumbnail */}
           {/* Display existing thumbnail */}
{campaign.thumbnail && (
  <div className="mb-4">
    <p className="label-text">Current Thumbnail:</p>
    <img src={campaign.thumbnail} alt="Current Thumbnail" className="w-32 h-32 object-cover rounded-md border" />
  </div>
)}

{/* File input to upload new thumbnail */}
<div className="form-control">
  <label className="label"><span className="label-text">Upload New Thumbnail</span></label>
  <input type="file" {...register("thumbnail")} className="input input-bordered" />
</div>


            {/* Description */}
            <div className="form-control">
              <label className="label"><span className="label-text">Description</span></label>
              <textarea {...register("description")} className="textarea textarea-bordered" required />
            </div>

            {/* Minimum Donation */}
            <div className="form-control">
              <label className="label"><span className="label-text">Minimum Donation Amount</span></label>
              <input type="number" {...register("minimumDonation")} className="input input-bordered" required />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="text" value={user.email} readOnly className="input input-bordered" required />
            </div>

            {/* Name */}
            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" value={user.displayName} readOnly className="input input-bordered" required />
            </div>

            {/* Deadline */}
            <div className="form-control">
              <label className="label"><span className="label-text">Deadline</span></label>
              <input type="date" {...register("date")} className="input input-bordered" required />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Campaign</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCampaign;
