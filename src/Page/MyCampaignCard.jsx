import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaignCard = ({campaign,refetch}) => {
    const {date,deadline,description,email,minimumDonation,name,status,thumbnail,title,type,_id}=campaign;





 // delete

  const handleDelet = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {




        // delet form the database
        fetch(`http://localhost:5000/campaign/${id}`,
          {
            method: 'DELETE',

          }
        )
          .then(res => res.json())
          .then(data => {
            console.log('delete is done ', data)

            if (data.deletedCount) {

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();


            }
          })
      }
    });


    

  }







    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className='h-[200px] '>
          <img className='w-full h-full'
            src={thumbnail}
            alt="Shoes" />
        </figure>
        <div className="card w-full  p-4">
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className={`badge ${status === "active" ? "badge-success" : "badge-secondary"}`}>
                        {status}
                    </div>
                </h2>
                <p className="text-gray-700">{description}</p>
                <h1 className="text-lg font-semibold">Organizer: {name}</h1>
                <h1 className="text-xl">Email: {email}</h1>
                <p className="text-sm text-gray-500">Posted on: {new Date(date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(deadline).toLocaleDateString()}</p>
                <h3 className="text-md font-bold">Minimum Donation: ${minimumDonation}</h3>
                
                {/* Tags */}
                <div className="card-actions justify-end mt-3">
                    <div className="badge badge-outline">Type: {type || "General"}</div>
                  
                </div>
              
                <Link to={`/dashboard/updatecampaigns/${_id}`}>
                      <button className="btn btn-primary mr-2">Update</button>

                    </Link>
                <button onClick={() => handleDelet(_id)} className="btn btn-secondary">Delete</button>
            </div>
        </div>
      </div>
    );
};

export default MyCampaignCard;