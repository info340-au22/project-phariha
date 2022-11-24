import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import '../index.css';

export function HomePage(props) {

    const myStyle = {
        backgroundImage: "url('img/suzz.jpg')",
        height: '40vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const WIT_cards = [
    {pic:'img/BWIT.PNG', title: "Tiffany Snyder PH.D Alum", text:"It helped me figure out which prerequisite classes I needed to take for the major I was applying to!"}, 
    {pic:'img/CCL_woman.jpg', title:'Asha Dugal MLIS \'17', text: 'It is super easy to navigate and has all the resources you need! Features include the ability to search and filter through the University of Washington\'s majors based on areas of interest or classes of interest. Students are able to view reviews other students have posted about classes and create review posts themselves!'}, 
    {pic:'img/tanya_menendez.jpg', title:"Tanya Menendez MSIM \'19", text:"By entering the classes I have already taken, I was able to see which majors I can to apply for."}
    ];

    
    const imageCards = WIT_cards.map((wImageCard) => {
        return <div className='home card'> 
                   <img className="card-img-top" key={wImageCard.pic} src={wImageCard.pic} alt={wImageCard.title} />
                   <div className="card-body">
                        <h3 className="card-title">{wImageCard.title}</h3>
                        <p className="card-text">{wImageCard.text}</p>
                   </div>     
               </div>             
    })

    return (
        <div>
            <NavBar/>
            
                <div style={myStyle} className='home'>
                    <h1>Confused About Major Prerequisites?</h1>
                </div>
                <div className='home-description col-12'> 
                    <div className='about-section'> 
                        <h2>We're Here to Help</h2>
                        <p className='about'>Our website assists undeclared students in determining the necessary steps to apply to a major. Using current information from department websites, our site allows users to navigate prerequisite and application requirements by filtering by major, minor, or class. Students may also read peer reviews of courses, and review courses themselves.
                        </p>
                    </div>
                    <div className='d-flex'>
                        {imageCards}
                    </div>
                       
                </div>
            
            <Footer/>
        </div>     
    )        

}




