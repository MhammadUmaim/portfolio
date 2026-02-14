import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} target='_blank' className="work__button">
            Live link  <i class="hgi hgi-stroke hgi-link-square-02"></i>
        </a>
    </div>
  )
}

export default WorksItems