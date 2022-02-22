import React from 'react'
import Header from '../../components/Header'
import AddStudent from '../addStudent/AddStudent'
import Display from '../displaystudent/Display'
function Index() {
  return (
       <div className="container-fluid">
              <Header />
          <div className="row">
            <div className="col">
              <AddStudent />
              <Display />
            </div>
          </div>
        </div>  )
}

export default Index