const Header = (props) =>{
  return (
    <>
    <h1>
      {props.course.name}
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
  
  //  console.log(props)
  const listNames = props.p.var1.map((exer,i) => 
 
<li key={i}>{exer.name} contains {exer.exercises} exercises</li>
// console.log(exer.name)

   )
  //  console.log(listNames)
    return (
      <ul>{listNames}</ul>
     
   
     
    )
  }
  

// console.log(listNames)
 

const Total = (props) => {
// console.log(props)
let t = 0
props.tot.map((exer) => {
  t = t + exer.exercises}
)
  return (
  <>
  <p>Total exercises is {t}</p>
  </>
 
     
  )
    

}


const App = () =>{
  const course = {
    name: 'Half Stack application development',
    parts :  [
    {
    name: 'Fundamental of React',
    exercises: 10
  },

  {
    name:'Using props to pass data',
    exercises: 7

  },
  {
    name:'State of a component',
    exercises: 14

  }
]
 
  }
  

  return (
    <div>
      <Header course = {course}/>
      
    <Content var1 = {course.parts}/>
       
      <Total tot = {course.parts}/>
    </div>
  )
}
export default App
