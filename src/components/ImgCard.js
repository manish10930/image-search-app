import React, { useState } from 'react';

const ImgCard = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col-reverse pt-10 items-center">
        <h1 className="text-4xl">Loading.....</h1>
      </div>
    );
  }

  return (
    <div className="mt-[120px] px-4 ">
      <h2 className="lg:text-4xl text-center py-2 font-bold text-red-600">Recent Photos</h2>
      <div className="img-container flex flex-wrap justify-around">
        {data.map((photo) => (
          <div key={photo.id} className="img-card relative" onClick={() => openModal(photo)}>
            <img
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt={photo.title}
              className="lg:w-[400px] sm:h-[300px] object-cover rounded"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 text-center truncate">{photo.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-[300px] flex justify-center items-center bg-opacity-70" onClick={closeModal}>
          <div className="modal bg-white p-4 rounded items-center">
               <div className='flex justify-end '>
             <span className='cursor-pointer' >X</span>

               </div>
               <img
              src={`https://farm${selectedImage.farm}.staticflickr.com/${selectedImage.server}/${selectedImage.id}_${selectedImage.secret}.jpg`}
              alt={selectedImage.title}
              className="max-w-full h-[300px] rounded"
            />
            <p className="mt-4 w-[150px]">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgCard;