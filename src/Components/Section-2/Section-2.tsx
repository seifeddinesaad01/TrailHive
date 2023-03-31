import React from 'react'

const SectionTwo = () => {
    const features = [
        {
            image: "https://images.unsplash.com/photo-1534617580102-6342ca2bfd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbiUyMGxvb2tpbmd8ZW58MHx8MHx8&w=1000&q=80",
            title: "Access Nature",
            description: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews. "
        },
        {
            image: 'https://images.unsplash.com/photo-1599044368810-238581bb322b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGFuZCUyMG5hdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80',
            title: "search in real time",
            description: "Our real-time trail updates, weather forecasts, and safety alerts will ensure that you have a safe and enjoyable experience every time."
        },
        {
            image: 'https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYmFja3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'make connections',
            description: "But TrailHive is more than just a trail-finding app - it's a social networking platform for outdoor enthusiasts. ",
        }

    ]
    return (
        <div className="section__two">
            <div className="section__two-left">
                <p>Features</p>
                <h2>Stay Active Healthy</h2>
                <button>Learn More</button>
            </div>
            <div className="section__two-right">
                {features.map((feature, index) => {
                    return (
                        <div key={index} className="feature__card" >
                            <img src={feature.image} alt={feature.title} />
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SectionTwo;