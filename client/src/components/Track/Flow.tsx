import { useCallback, useState } from "react";
import ReactFlow, {
    Node,
    addEdge,
    Background,
    Edge,
    Connection,
    useNodesState,
    useEdgesState,
    Position,
    MiniMap,
    NodeMouseHandler
} from "reactflow";


import "reactflow/dist/style.css";
import { Course, courses } from "../../constants/Course";

import { Professor, professors } from "../../constants/Professors";
interface Semester {
    season: string;
    year: number;
    classes: string[];

}

interface Track {
    semesters: Semester[];
}


const track: Track = {
    semesters: [
        {
            year: 2021,
            season: "Fall",
            classes: [
                "COMPSCI 220",

                "COMPSCI 240",
                "MATH 235",
                "KIN 110"
            ]
        },
        {
            year: 2022,
            season: "Spring",
            classes: ["COMPSCI 320",

                "COMPSCI 453",
                "MATH 411",
                "COMPSCI 311"
            ]

        },
        {
            year: 2023,
            season: "Fall",
            classes: ["COMPSCI 520",

                "COMPSCI 389",
                "COMPSCI 429",
                "ARCH 201"
            ]

        }
    ]
}




const offset = { x: 100, y: 100 };
const blockWidth = 200;
const blockSpace = 50;
const cardSpace = 100;
const cardHeight = 40;

const cardPadding = { x: 20, y: 50 };
const initialNodes: Node[] = [
    ...track.semesters.map((s, i) => {
        return {
            id: `${s.season} ${s.year}`,
            connectable: false,
            focusable: false,
            selectable: false,
            data: { label: `${s.season} ${s.year}` },
            position: { x: (blockWidth + blockSpace) * i + offset.x, y: offset.y },
            className: 'light',
            zIndex: 10,
            style: { backgroundColor: 'rgba(245, 245, 245, 1)', width: 200, height: s.classes.length * (cardSpace + cardHeight) - cardSpace, border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 8 },

        }
    }),
    ...track.semesters.map((s, i) => {
        return s.classes.map((c, j) => {
            return {
                id: c,
                parentId: `${s.season} ${s.year}`,
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
                data: { label: c },
                zIndex: 10,
                style: { width: 200 - 2 * cardPadding.x, borderRadius: 8, height: cardHeight },

                position: { x: (blockWidth + blockSpace) * i + offset.x + cardPadding.x, y: j * cardSpace + offset.y + cardPadding.y }
            };
        });
    }).reduce((acc, val) => acc.concat(val), [])

];
const initialEdges: Edge[] = track.semesters.map((s, i) => {
    return s.classes.map((c, j) => {
        const futureClasses: string[] = track.semesters.slice(i + 1).map((s) => s.classes).reduce((acc, val) => acc.concat(val), []);


        const prereqClasses: Course[] = courses.filter(c => {

            return futureClasses.includes(c.id);
        }).filter(pc => {
            return pc.prerequisites.some(prereq => {
                return prereq.options.some(option => {
                    return option === c;
                });
            });
        });
        return prereqClasses.map((prereqClass: any) => {
            return {
                id: `${c}-${prereqClass.id}`,
                source: c,
                target: prereqClass.id,
                zIndex: 20,
                animated: true,

            };
        });

    }).reduce((acc, val) => acc.concat(val), []);
}).reduce((acc, val) => acc.concat(val), []);





const BasicFlow = () => {

    const [course, onCourseChange] = useState<Course | null>(null);
    const [professor, onProfessorChange] = useState<Professor | null>(null);

    const onClick: NodeMouseHandler = (e, node) => {
        onProfessorChange(null);
        onCourseChange(courses.find(c => c.id === node.id) || null);
    };
    const onProfessorClick = (professor: Professor) => {
        onProfessorChange(professor);
    };
    return (
        <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            onNodeClick={onClick}


        >

            <div className="overflow-auto collapse md:visible  bg-white w-96 right-8 bottom-48  top-8 rounded-lg shadow-md border-gray border p-6 absolute z-50">
                {professor ? <div className="text-left">
                    <h1 className="text-lg font-bold">{`${professor?.name.first} ${professor?.name.last}`}</h1>
                    <p className="text-sm pt-2">Email: {professor.email}</p>
                    <p className="text-sm pt-2">Office: {professor.office}</p>

                    <p className="text-sm pt-2">Phone: {professor.phone}</p>
                    <p className="text-sm pt-2">Difficulty: {professor.difficulty}</p>
                    <p className="text-sm pt-2">Rating: {professor.rating}</p>


                </div> : <div></div>}
                {course && professor == null ? <div className="text-left">
                    <h1 className="text-lg font-bold ">{course.id}</h1>
                    <h2 className="text-md font-semibold">{course.name}</h2>
                    <p className="text-sm pt-2">{course.description}</p>
                    <p className="text-sm pt-2">{course.professors.map(p => {
                        const pro: Professor | null = professors.find(j => p === j.id) || null;

                        if (pro) {
                            const name = `${pro?.name.first} ${pro?.name.last}`;

                            return <div onClick={() => onProfessorClick(pro)}>{name}</div>

                        }
                        return null;
                    }).filter(e => e)}</p>

                </div> : <div></div>}
                {professor == null && course == null ? <div className="text-left">
                    <h1 className="text-lg font-bold">Select Course</h1>
                    <h1 className="text-md">Click on a course card to see it displayed here</h1>



                </div> : <div></div>}
            </div>

            <MiniMap />
            <Background style={{ zIndex: -1 }} />



        </ReactFlow >
    );
};

export default BasicFlow;
