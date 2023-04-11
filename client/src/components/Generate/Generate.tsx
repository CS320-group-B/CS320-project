//import "./Generate.css"; // to be redone with tailwind at some point
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

    interface Option {
      label: string;
      value: string; // to be changed to course
    }

    interface SelectType {
      name: string;
      isMulti: boolean;
      options: Option[]
    }

    function LabelSelect(props:SelectType) {
        return (
            <div className="labelSelect">
                <label>{props.name}</label>
                <Select isMulti={props.isMulti} options={props.options} />
            </div>
        );
    };

    return (
        <div id="generate-container">


            <LabelSelect name="Semester" options={options} isMulti={false}></LabelSelect>
            <LabelSelect name="Major" options={options} isMulti={false}></LabelSelect>
            <LabelSelect name="Additional Major(s)" options={options} isMulti={true}></LabelSelect>
            <LabelSelect name="Track" options={options} isMulti={false}></LabelSelect>
            <LabelSelect name="Classes Taken" options={options} isMulti={true}></LabelSelect>

            <button id="create-generation-button">Generate Schedules</button>

        </div>
    );
}

export default Generate