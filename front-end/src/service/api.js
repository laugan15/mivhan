const END_POINT = "http://localhost:4000/photoInteraction/addPhoto";
const END_POINT2 = "http://localhost:4000/photoInteraction/getAllPhoto";

  
export const addPhoto = async (photoUrl) => {
    try {
      const res = await fetch(`${END_POINT}`, {
        method: 'POST',
        body: {
            photoUrl : photoUrl
        }
    });
      const  message  = await res.json();
      return message.message;
     
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
};

export const getAllPhoto = async () => {
    try {
      const res = await fetch(`${END_POINT2}`, {
        method: 'GET',
    });
      const  images  = await res.json();
      const returnedImg = images.photos.photoUrl
      return returnedImg
     
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
};