import React from 'react'
import AccpetTask from './AccpetTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
      <AccpetTask/>
      <NewTask/>
        <CompleteTask/>
      <FailedTask/>
       

         
       
    </div>
  )
}

export default TaskList