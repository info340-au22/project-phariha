import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import '../index.css';


    const introText = "Our website assists undeclared and future UW students in finding their major and discovering the steps they need to take to apply to the major. Using current information from department websites, our site allows users to navigate prerequisite and application requirements by searching by major. Students may also read peer reviews of courses and review courses themselves when determining what classes they want to take.";

    const myStyle = {
        backgroundImage: "url('img/suzz.jpg')",
        height: '40vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const WIT_cards = [
        { pic: 'img/BWIT.PNG', title: "Tiffany Snyder PH.D Alum", text: "UW graduate 2015 - 'This website helped me figure out which prerequisite classes I needed to take for the major I was applying to! I originally didn't know that the Informatics major only had 4 prerequisite courses and this website helped me navigate through the application process smoothly.'" },
        { pic: 'img/CCL_woman.jpg', title: 'Asha Dugal MLIS', text: "UW graduate 2017 - 'This site was easy to navigate and has all the resources you need! Features include the ability to search and filter through the University of Washington\'s majors based on areas of interest or classes of interest. Students are able to view reviews other students have posted about classes and create review posts themselves!'" },
        { pic: 'img/tanya_menendez.jpg', title: "Tanya Menendez MSIM", text: "UW graduate 2019 - 'Coming into freshman year, I didn’t know what classes to take when applying to my major. All the information on applying to my major was on various sites and sometimes hard to find. I appreciate this site for storing all the information I needed when applying to my major in one place. It made my application process a lot smoother.'" }
    ];

export function HomePage(props) {

    const imageCards = WIT_cards.map((wImageCard, index) => {
        return <div key={index} className='home card'>
            <img className="card-img-top" src={wImageCard.pic} alt={wImageCard.title} />
            <div className="card-body">
                <h3 className="card-title">{wImageCard.title}</h3>
                <p className="card-text">{wImageCard.text}</p>
            </div>
        </div>
    });

    return (
        <div>
            {/* <NavBar /> */}

            <div style={myStyle} className='home'>
                <h1>Confused About Major Prerequisites?</h1>
            </div>
            <div className='home-description col-12'>
                <div className='about-section'>
                    <h2>We're Here to Help</h2>
                    <p className='about'>{introText}
                    </p>
                </div>
                <div className='card-deck' >
                    {imageCards}
                </div>

            </div>

            {/* <Footer /> */}
        </div>
    )

}




