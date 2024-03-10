import React from 'react'
import LaBelle from '../assets/labelle website.png'
import Kart from '../assets/shopping kart website.png'
import Todo from '../assets/todo website.png'

const Works = () => {
  return (
    <div className="container-md  subContainer mt-5" id='works'>
        <div className="worksTitle subTitle">
            My Works
        </div>
        <div className="workTiles d-flex ">
            <div className="workContainer ">
              <img src={LaBelle} width='400px' className='p-3' alt="" />
              <div className="px-3">
                <h4 className=''><b>LaBelle '23 Website</b></h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium fugiat esse ratione qui totam consequatur voluptas, voluptatum eaque facilis soluta itaque ullam quae voluptatibus.</p>
                <a href='https://msahalkc.github.io/LaBelle/' className='btn getBtn viewSite'>View Website</a>
                <a href='https://github.com/msahalkc/LaBelle' className='btn getBtn githubBtn mx-3'><i className="fa-brands fa-github" style={{ color: '#eee5e0' }}></i></a>
              </div>
            </div>
            <div className="workContainer ">
            <img src={Todo} width='400px' className='p-3' alt="" />
              <div className="px-3">
                <h4 className=''><b>Todo Application using React</b></h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium fugiat esse ratione qui totam consequatur voluptas, voluptatum eaque facilis soluta itaque ullam quae voluptatibus.</p>
                <a href='https://todo-react-kc.netlify.app/' className='btn getBtn viewSite'>View Website</a>
                <a href='https://github.com/msahalkc/todo-react' className='btn getBtn githubBtn mx-3'><i className="fa-brands fa-github" style={{ color: '#eee5e0' }}></i></a>
              </div>
            </div>
            <div className="workContainer mx-0">
            <img src={Kart} width='400px' className='p-3' alt="" />
              <div className="px-3">
                <h4 className=''><b>E-Commerce Website</b></h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium fugiat esse ratione qui totam consequatur voluptas, voluptatum eaque facilis soluta itaque ullam quae voluptatibus.</p>
                <a href='' className='btn getBtn viewSite'>View Website</a>
                <a href='https://github.com/msahalkc/E-Commerce-website-using-express-and-node.js' className='btn getBtn githubBtn mx-3'><i className="fa-brands fa-github" style={{ color: '#eee5e0' }}></i></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Works