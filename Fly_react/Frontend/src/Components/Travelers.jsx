import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    destinationImage: 'https://images.unsplash.com/photo-1634646494990-f8ddef0e2a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcmlzJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80',
    travelerImage: 'https://assets.teenvogue.com/photos/56017555a6fe631224538646/1:1/w_2574,h_2574,c_limit/bty-vlogger-00.jpg',
    travelerName: 'Michelle Phan',
    socailLink: '@michellePhan123'
  },
  {
    id: 2,
    destinationImage: 'https://i0.wp.com/urbanasian.com/wp-content/uploads/2019/06/image002-1.jpg?resize=469%2C352&ssl=1',
    travelerImage: 'https://m.media-amazon.com/images/M/MV5BMGI3OTI0NjctMjM2ZC00MjZiLWIxMjctODczN2M4MTFjZmY1XkEyXkFqcGdeQXJoYW5uYWg@._V1_QL75_UX500_CR0,0,500,281_.jpg',
    travelerName: 'Will Smith',
    socailLink: '@willsmith765'
  },
  {
    id: 3,
    destinationImage: 'https://media.gettyimages.com/id/1167037042/photo/young-happy-man-taking-selfie-and-showing-peace-gesture-at-times-square-new-york-city-usa.jpg?s=170667a&w=gi&k=20&c=jCRAo8t8JSbOMuHIsOhbM4_Dybz_-tsZ_CjhW5a6MZA=',
    travelerImage: 'https://media.gettyimages.com/id/951188924/photo/happy-smiling-man-in-sunglasses-sitting-on-the-beach-and-smiling.jpg?s=612x612&w=gi&k=20&c=_5iSORqwoDaErXfT7AAQYN8rShXWWdxXLqSTaI9zMDA=',
    travelerName: 'Alexander Spatari',
    socailLink: '@alexanderspatari041'
  },
  {
    id: 4,
    destinationImage: 'https://media.istockphoto.com/id/1362760973/photo/smiling-man-taking-selfie-portrait-during-travel-in-london-england-young-tourist-male-taking.jpg?s=612x612&w=0&k=20&c=jnCB6PzVzeKEU8IsVLMCIxUOyi9T02-qIVOvvE3K4Bg=',
    travelerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBo-MAoyzn6mP_cB7r_sd4bAPxaGnKJxZr5S_fsRBG2j9JDz49XUpxiI0vp0dk05tYbM&usqp=CAU',
    travelerName: 'Samwordley',
    socailLink: '@amwordley290'
  },
]
const Travelers = () => {
  // UseEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socailLink }) => {
              return (
                // {/* single passsanger card */}
                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                  <img className='destinationImage' src={destinationImage} alt="" />
                  <hr className='text-white' />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img className='travelerImage' src={travelerImage} alt="" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p> {socailLink}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }


        </div>
      </div>

    </div>
  )
}

export default Travelers