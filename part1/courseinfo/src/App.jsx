const Header = (props) =>{
  return (
    <>
    <h1>
      {props.course}
    </h1>
    </>
  )
}



const Content = (props) =>{
// console.log(props)

  return (
      <>
     <Part p = {props} />
     
      
      </>

  )
}

const Part = (props) =>{
  // console.log(props)
    
  return (
    <>
   {props.p.var1.map((item,index)=>(
    <div key={index}>
    
      <p>{item.names}  contains {item.exercises} exercises</p>
    </div>
   ))}
   
    </>

  )
}

const Total = (props) => {
  return (

    <p> The Total Exercises are {props.tot}</p>
  )
}



const App = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamental of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
    {names: part1, exercises:exercises1},
    {names: part2, exercises:exercises2},
    {names: part3, exercises:exercises3},
  ]

  return (
    <div>
      <Header course = {course}/>
      {/* <Content partlist = [{part1},{part2},{part3}]/> */}
    <Content var1 = {parts}/>
       
      <Total tot = {exercises1 + exercises2+ exercises3}/>
    </div>
  )
}
export default App
