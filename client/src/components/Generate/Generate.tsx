import "./Generate.css"; // to be redone with tailwind at some point
import Select from 'react-select'


function Generate() {
  // creates 'generate' page component

  // sample data
  const options: Option[] = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
  //array that represents the semesters for a drop down 
  const semesters: Option[] = [
  ]
  //populate semesters with classes from current year
  const currYear = new Date().getFullYear();

  const seasons = ["Fall", "Winter", "Spring", "Summer"];
  for (let i = 0; i < 4; i++) {
    for (let season = 0; season < 4; season++) {
      semesters.push({
        label: seasons[season]+ " " +(currYear - i),
        value: "test", //ngl dont know what this does prob for later when we actually need to add this to a student's profile
      });
    }
  }
  const majors: Option[] = [
    {
      label: "Computer Science",
      value: "placeholder",
    },
  ]


  interface Option {
    label: string;
    value: string; // to be changed to course
  }

  interface SelectType {
    name: string;
    isMulti: boolean;
    options: Option[]
  }

  function LabelSelect(props: SelectType) {
    return (
      <div className="labelSelect">
        <label>{props.name}</label>
        <Select isMulti={props.isMulti} options={props.options} />
      </div>
    );
  };

  return (
    <div id="generate-container">


      <LabelSelect name="Semester" options={semesters} isMulti={false}></LabelSelect>
      <LabelSelect name="Major" options={majors} isMulti={false}></LabelSelect>
      <LabelSelect name="Additional Major(s)" options={options} isMulti={true}></LabelSelect>
      <LabelSelect name="Track" options={options} isMulti={false}></LabelSelect>
      <LabelSelect name="Classes Taken" options={options} isMulti={true}></LabelSelect>

      <button className="button" id="create-generation-button">Generate Schedules</button>

    </div>
  );
}

export default Generate