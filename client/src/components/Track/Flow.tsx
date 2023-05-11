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
import { courses } from "../../constants/Course";

import { Professor, professors } from "../../constants/Professors";
import { track } from "../../constants/Track";
import { Course } from "../../types/course";





const offset = { x: 100, y: 100 };
const blockWidth = 200;
const blockSpace = 120;
const cardSpace = 100;
const cardHeight = 40;

const cardPadding = { x: 20, y: 50 };







const BasicFlow = () => {

    const [course, onCourseChange] = useState<Course | null>(null);
    const [professor, onProfessorChange] = useState<Professor | null>(null);

    const onClick: NodeMouseHandler = (e, node) => {
        onProfessorChange(null);
        onCourseChange(courses.find(c => c.key === node.id) || null);
    };
    const onProfessorClick = (professor: Professor) => {
        onProfessorChange(professor);
    };

    const getRatingColor = () => {
        const rating = professor?.rating;
        if (rating) {
            if (rating >= 4) return "text-green-500";
            if (rating >= 3.5) return "text-yellow-500";
            if (rating >= 3) return "text-orange-500";
            return "text-red-500";
        }
        return "black";
    }

    const getDifficultyColor = () => {
        const difficulty = professor?.difficulty;
        if (difficulty) {
            if (difficulty >= 4) return "text-red-500";
            if (difficulty >= 3.5) return "text-orange-500";
            if (difficulty >= 3) return "text-yellow-500";
            return "text-green-500";
        }
        return "black";
    }

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
                style: { backgroundColor: 'rgba(245, 245, 245, 1)', width: 200, height: s.classes.length * (cardSpace + cardHeight) - cardSpace, border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 8, fontWeight: 'bold' },

            }
        }),
        ...track.semesters.map((s, i) => {
            return s.classes.map((c, j) => {
                const selected = course?.key === c;

                return {
                    id: c,
                    parentId: `${s.season} ${s.year}`,
                    sourcePosition: Position.Right,
                    targetPosition: Position.Left,
                    data: { label: c },
                    zIndex: 10,
                    style: { width: 200 - 2 * cardPadding.x, borderRadius: 8, height: cardHeight, border: selected ? "1px solid rgb(65,105,225)" : "", zIndex: 1000 },

                    position: { x: (blockWidth + blockSpace) * i + offset.x + cardPadding.x, y: j * cardSpace + offset.y + cardPadding.y }
                };
            });
        }).reduce((acc, val) => acc.concat(val), [])

    ];

    const initialEdges: Edge[] = track.semesters.map((s, i) => {
        return s.classes.map((c, j) => {
            const futureClasses: string[] = track.semesters.slice(i + 1).map((s) => s.classes).reduce((acc, val) => acc.concat(val), []);


            const prereqClasses: Course[] = courses.filter(c => {

                return futureClasses.includes(c.key);
            }).filter(pc => {
                return pc.prerequisites.some(prereq => {
                    return prereq.options.some(option => {

                        return option === c;
                    });
                });
            });
            return prereqClasses.map((prereqClass: any) => {
                const selected = prereqClass.key === course?.key || c === course?.key;
                return {
                    id: `${c}-${prereqClass.key}`,
                    source: c,
                    style: { strokeWidth: selected ? 1.2 : 1, stroke: selected ? "rgb(65,105,225)" : "", zIndex: 1 },
                    selected,
                    target: prereqClass.key,
                    zIndex: 20,
                    animated: selected,

                };
            });

        }).reduce((acc, val) => acc.concat(val), []);
    }).reduce((acc, val) => acc.concat(val), []);


    return (
        <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            onNodeClick={onClick}
            defaultViewport={{ x: -20, y: 100, zoom: 0.8 }}
        >
            <div className="overflow-auto collapse md:visible  bg-white w-96 right-8 bottom-48  top-8 rounded-lg shadow-md border-gray border p-6 absolute z-50">
                {professor ? <div className="text-left">
                    <img src={professor.avatar ?? ""} className="rounded-lg h-36 w-36 mb-6 object-cover"></img>
                    <img src={"https://www.umass.edu/sites/default/files/2023-03/UMass_Seal_Medium_PMS_202_0.png"} className="rounded-lg h-56 w-56 mb-6 object-cover absolute -top-8 -right-8 opacity-5 saturate-0"></img>

                    <h1 className="text-xl font-bold">{`${professor?.name.first} ${professor?.name.last}`}</h1>

                    <p className="text-sm pt-2"><strong>Email:</strong> {professor.email}</p>
                    <p className="text-sm pt-2"><strong>Office: </strong>{professor.office}</p>

                    <p className="text-sm pt-2"><strong>Phone: </strong> {professor.phone}</p>
                    <p className="text-sm pt-2"><strong>Rating: <span className={getRatingColor() + " text-lg"}>{professor.rating}</span></strong></p>
                    <p className="text-sm pt-2"><strong>Difficulty: <span className={getDifficultyColor() + " text-lg"}>{professor.difficulty}</span></strong></p>

                    <p className="text-sm pt-2"><strong>Activities: </strong> {professor.activities}</p>
                    <p className="text-sm pt-2"><strong>Interests: </strong>{professor.interests}</p>

                    <p className="text-sm pt-2"><strong>Research:</strong> {professor.research}</p>





                </div> : <div></div>}
                {course && professor == null ? <div className="text-left">
                    <h1 className="text-lg font-bold ">{course.key}</h1>
                    <h2 className="text-md font-semibold">{course.name}</h2>
                    <p className="text-sm pt-2">{course.description}</p>
                    <p className="text-sm pt-2"><strong>Professors: </strong>{course.professors.map((p, i) => {
                        const pro: Professor | null = professors.find(j => p === j.key) || null;

                        if (pro) {
                            const name = `${pro?.name.first} ${pro?.name.last}`;

                            return <span className="text-blue-500 underline hover:cursor-pointer font-semibold" onClick={() => onProfessorClick(pro)}>{name + (i < course.professors.length - 1 ? ", " : "")}</span>

                        } else {
                            const name = p.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
                            return <span >{name + (i < course.professors.length - 1 ? ", " : "")}</span>

                        }

                    }).filter(e => e)}</p>
                    <p className="text-sm pt-2"><strong>Prerequisites:</strong> {course.prerequisites.map(p => p.options).flat().join(', ')}</p>


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
