import React from 'react'
import './myWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='portfolio' className='my-work'>
        <div className="mywork-plus">
            <div className='mywork-title'>
                <h1>My latest project</h1>
                <img src={theme_pattern} alt="" />
            </div>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => (
                <div key={index} className="work-item">
                    <img src={work.w_img} alt={`${work.w_name} project`} />
                    {work.anchorLink && 
                        <a href={work.anchorLink} target="_blank" rel="noopener noreferrer">
                            {work.w_name}
                        </a>
                    }
                </div>
            ))}
        </div>
        <div className='mywork-showmore-plus'>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MyWork