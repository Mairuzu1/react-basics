import SubjectList from "./SubjectList";
import Counter from "./Counter";
import WrongCounter from "./WrongCounter";
import TempConverter from "./TempConverter";


function App() {
  const CMSCSubjects = [
    { code: "CMSC100", description: "Web Programming", id: 1 },
    { code: "CMSC150", description: "Scientific Computation", id: 2 },
    { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
  ];
  
  const CHEMSubjects = [
    { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
    { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
    { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
  ];
  return (
    <div>
    <div>
      Hello World
      <TempConverter/>
      <SubjectList data={CMSCSubjects} title={'Computer Science Subjects'} />
      <SubjectList data={CHEMSubjects} title={'Chemistry'} />
      <WrongCounter/>
      <Counter val={10} />
    </div>
    <div>
      Hello again!
    </div>
    </div>
  );
}

export default App;
