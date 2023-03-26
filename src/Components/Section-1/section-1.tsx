import React from 'react'
import menInNature from "../../assets/OIP.jpeg"
const sectionOne = () => {
  return (
    <section className='section__one'>
        <div className="left">
            <h1>Your Ultimate <br /> Outdoor <br /> Companion</h1>
            <p>Are you tired of spending hours searching for the perfect hiking or biking trail? <br /> TrailHive - the ultimate outdoor adventure app that connects you with the best trails in your area.</p>
            <button className='download__btn'>Download The App</button>
        </div>
        <div className="right">
            <img src={menInNature} alt="menInNature" />
        </div>
    </section>
  )
}

export default sectionOne