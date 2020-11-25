import '../App.css'
function ArrayData(){
    
    const students = ["Vian", "Ilyas", "Seiga", "Satrian"];
    return(
        <div className="App-content">
            {students.map((student, index) => (<p key={index}>{student}</p>))}
        </div>
    )
}


export default ArrayData