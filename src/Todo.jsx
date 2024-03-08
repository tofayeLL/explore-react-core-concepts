
/* export default function Todo({task, isDone}){
   
    return (
        <li>Task: {task}</li>
        
    )
} */


//  conditional Rendering option 1:
/* export default function Todo({task, isDone}){
   
    if(isDone === true){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>Work On: {task}</li>
    }
} */


// ----------------------------------------------------------//


// conditional rendering option 2:
/* export default function Todo({task, isDone}){
   
   if(isDone){
    return <li>Finish: {task}</li>
   }
   return <li>Work On: {task}</li>
} */

//--------------------------------------------------------------//


// conditional Rendering option 3: (using Ternary operator)
/* export default function Todo({task, isDone}){
   
    return (
        <li> {isDone ? "Finished" : "Work On"}  : {task}</li>
        
    )
} */


// ------------------------------------------------------------//


// conditional rendering option 4: (using AND operator)
/* export default function Todo({task, isDone}){
   
    return (
        <li> {task} {isDone && ':Done' }  </li>
        
    )
} */

// -----------------------------------------------------------//


// conditional rendering option 5: (using OR operator)
/* export default function Todo({task, isDone}){
   
    return (
        <li>  {task} {isDone || ':Do It' }  </li>
        
    )
} */


// ------------------------------------------------------------//

// conditional rendering option 5: (using OR operator)
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
     listItem = <li>Finished: {task}</li>
    }
    else{
     listItem = <li>work on: {task}</li>
    }
 
    return listItem;
    
}

