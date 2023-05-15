const { Graph, alg } = require('graphlib');
const { Course } = require('../models/course.js');
const { Section } = require('../models/section.js');
const { Professor } = require('../models/professor.js');

const rankCourses = async (coursesTaken, preferences, season) => {
  try {
    const courses = await Course.find();
    const professors = await Professor.findOne({"key": 'karkar-ravi'});
    // Initialize an empty array to store the scores for each course
    const scores = [];

    // Loop through each course
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];

      // Check if the course has already been taken
      if (coursesTaken.includes(course.key)) {
        scores.push(-320);
        continue;
      }

      // Check season of the course
      const sections = [{season: 'Fall'}, {season: 'Spring'}, {season: 'Summer'}];
      const hasSatisfiedSeason = sections.some((section) => {
        return section.season == season;
      });

      if (!hasSatisfiedSeason) {
        scores.push(-9999);
        continue;
      }

      // Check if the course has any prerequisites that have not been taken
      const hasSatisfiedPrerequisites = course.prerequisites.some((prerequisite) => {
        return prerequisite.options.every((option) => coursesTaken.includes(option));
      }) || course.prerequisites.length == 0;

      if (!hasSatisfiedPrerequisites) {
        scores.push(-9000);
        continue;
      }

      // Calculate the score for the course based on major requirements and student preferences
      let score = 0;

      // Check if the course satisfies any major requirements
      score += scoreCSRequirements(coursesTaken.concat(course.key)) - scoreCSRequirements(coursesTaken);

      // Check if the course satisfies any student preferences
      let professors = course.professors;
      let total = 0;
      for (let j = 0; j < professors.length; j++) {
        let professorKey = professors[j];
        let prof = await Professor.findOne({"key": professorKey});
        if (prof) {
          if (prof.rating) {
            rating = prof.rating;
          } else {
            rating = 2.5;
          }
          total += (prof.rating * preferences.professorRatingWeight - prof.difficulty * preferences.professorDifficultyWeight)/5;
        }
      }
      score += total/professors.length;

      // if (course.days.includes(1) || course.days.includes(3) || course.days.includes(5)) {
      //   score += 1;
      // }
      // Add the final score for the course to the scores array
      scores.push(score);
    }
    const ranked = scores.map((score, index) => { return { score, course: courses[index].key } }).sort((a, b) => b.score - a.score);
    return { courses: ranked };
  } catch (error) {
    throw new Error(error.message);
  }
};
  
const preferences = {
  professorRatingWeight: 2,
  professorDifficultyWeight: 1,
  courseTimeWeight: 3,
  startTime: "09:00",
  endTime: "17:00",
  courseDays: [1, 3, 5]
};

// rankCourses(["COMPSCI 121", "COMPSCI 187"], preferences)
// console.log(rankCourses(["COMPSCI 121", "COMPSCI 187"], preferences));

const findProfessorByKey = async (key) => {
  const professor = await Professor.findOne({ "key": key });
  return { prof: professor };
};

function createGraph(courses) {
  // Create an empty directed graph
  const graph = new Graph({ directed: true });
  
  // Add nodes to the graph for each course
  for (const course of courses) {
    graph.setNode(course.key, course);
  }

  // Add edges to the graph for each prerequisite relationship
  for (const course of courses) {
    const { key, prerequisites } = course;
    if (prerequisites.length == 0) continue;
    for (let i = 0; i < prerequisites.length; i++) {
      for (const prerequisite of prerequisites[i].options) {
        //if (!courseKeys.includes(prerequisite)) console.log(prerequisite);
        graph.setEdge(prerequisite, key);
      }
    }
  }

  // Add nodes that are not in data.js but are prerequisites
  for (const node of graph.nodes()) {
    if (graph.node(node) == undefined) {
      graph.setNode(node, { key: node, credits: 4})
    }
  }

  return graph;
}

// const graph = createGraph(courses);

// make graph all ancestors and descendants of a node
function makeSubGraph(graph, key) {
  if (!graph.hasNode(key)) { console.log(`Graph does not contain node: ${key}`); return; }
  // Get the set of nodes that should be included in the graph
  const nodes = new Set([key]);
  // add ancestors
  for (const node of graph.predecessors(key)) {
    nodes.add(node);
    for (const ancestor of graph.predecessors(node)) {
      nodes.add(ancestor);
      for (const ancestor2 of graph.predecessors(ancestor)) {
        nodes.add(ancestor2);
      }
    }
  }
  // add descendants
  for (const node of graph.successors(key)) {
    nodes.add(node);
    for (const descendant of graph.successors(node)) {
      nodes.add(descendant);
      for (const descendant2 of graph.successors(descendant)) {
        nodes.add(descendant2);
      }
    }
  }

  // Create a new graph that only includes the desired nodes
  const subgraph = new Graph({ directed: true });
  for (const node of nodes) {
    subgraph.setNode(node, graph.node(node));
  }
  for (const edge of graph.edges()) {
    if (nodes.has(edge.v) && nodes.has(edge.w)) {
      subgraph.setEdge(edge.v, edge.w);
    }
  }
  // return the subgraph
  return subgraph;
  // console.log(subgraph.edges());
}

// print the graph in dot format
function printGraph(graph) {
  for (const edge of graph.edges()) {
    const v = edge.v.split(" ")[0] + "_" + edge.v.split(" ")[1];
    const w = edge.w.split(" ")[0] + "_" + edge.w.split(" ")[1];
    console.log( v + " -> " + w + ";");
  }
}

// checks if a coure satisfies the CS BS requirements
function satisfiesCSRequirements(coursesTaken) {
  // Define the required courses
  const coreCourses = [
    'COMPSCI 220',
    'COMPSCI 230',
    'COMPSCI 240',
    'COMPSCI 250'
  ];
  const mathCourses = [
    'MATH 131',
    'MATH 132',
    'MATH 235'
  ];

  const scienceCourses = [
    ['CHEM 111', 'CHEM 121'],
    ['CHEM 112', 'CHEM 122'],
    ['GEOL 101'], // i have to include GEOL 103 and GEOL 131 or GEOL 105 and GEOL 131
    ['PHYSICS 151', 'PHYSICS 181'],
    ['PHYSICS 152', 'PHYSICS 182'] 
  ];

  const outsideElectives = [
    'ECE 353',
    'ECE 547',
    'ECE 668',
    'LINGUIST 401',
    'MATH 411',
    'MATH 545',
    'MATH 551',
    'MATH 552'
  ];

  // Count the number of required courses that have been taken
  let num300PlusTaken = 0;
  let num400PlusTaken = 0;

  for (const course of coursesTaken) {
    let courseSubject = course.split(" ")[0];
    let courseNum = course.split(" ")[1];
    if (courseSubject !== 'COMPSCI') continue;
    if (courseNum.startsWith('3')) {
      num300PlusTaken++;
    } else if (courseNum.startsWith('4')) {
      num400PlusTaken++;
    }
  }

  let numScienceTaken = 0;

  for (let i = 0; i < scienceCourses.length; i++) {
    const scienceCourse = scienceCourses[i];
    const hasScienceCourse = scienceCourse.some((course) => coursesTaken.includes(course));

    if (hasScienceCourse) {
      numScienceTaken++;
    }
  }
  // Check if the major requirements are satisfied
  const hasTakenCoreCourses = !coreCourses.some((course) => coursesTaken.indexOf(course) == -1);
  const hasTakenMathCourses = !mathCourses.some((course) => coursesTaken.indexOf(course) == -1) && (coursesTaken.includes('MATH 233') || coursesTaken.includes('MATH 515'));
  const hasTakenIE = (coursesTaken.includes('COMPSCI 320') || coursesTaken.includes('COMPSCI 326'));
  const hasTakenUpperLevelCourses = (num300PlusTaken >= 4 || num300PlusTaken >= 3 && outsideElectives.some((course) => coursesTaken.includes(course))) && num400PlusTaken >= 3 && coursesTaken.includes('COMPSCI 311');
  const hasTakenScienceCourses = numScienceTaken >= 2;

  return [hasTakenCoreCourses, hasTakenMathCourses, hasTakenIE, hasTakenUpperLevelCourses, hasTakenScienceCourses];
}

// scores how well a list of courses satisifies the CS BS requirements
function scoreCSRequirements(coursesTaken) {
   // Define the required courses
   const coreCourses = [
    'COMPSCI 220',
    'COMPSCI 230',
    'COMPSCI 240',
    'COMPSCI 250',
    'COMPSCI 311'
  ];
  const mathCourses = [
    ['MATH 131'],
    ['MATH 132'],
    ['MATH 235'],
    ['MATH 233', 'MATH 515']
  ];

  const scienceCourses = [
    ['CHEM 111', 'CHEM 121'],
    ['CHEM 112', 'CHEM 122'],
    ['GEOL 101'], // i have to include GEOL 103 and GEOL 131 or GEOL 105 and GEOL 131
    ['PHYSICS 151', 'PHYSICS 181'],
    ['PHYSICS 152', 'PHYSICS 182'] 
  ];

  const outsideElectives = [
    'ECE 353',
    'ECE 547',
    'ECE 668',
    'LINGUIST 401',
    'MATH 411',
    'MATH 545',
    'MATH 551',
    'MATH 552'
  ];

  // Count the number of required courses that have been taken
  let num300PlusTaken = 0;
  let num400PlusTaken = 0;

  for (const course of coursesTaken) {
    let courseSubject = course.split(" ")[0];
    let courseNum = course.split(" ")[1];
    if (courseSubject !== 'COMPSCI') continue;
    if (courseNum.startsWith('3')) {
      num300PlusTaken++;
    } else if (courseNum.startsWith('4')) {
      num400PlusTaken++;
    }
  }

  let numScienceTaken = 0;

  for (let i = 0; i < scienceCourses.length; i++) {
    const scienceCourse = scienceCourses[i];
    const hasScienceCourse = scienceCourse.some((course) => coursesTaken.includes(course));

    if (hasScienceCourse) {
      numScienceTaken++;
    }
  }
  // Check if the major requirements are satisfied
  const numCoreCoursesTaken = coreCourses.reduce((total, course) => {
    if (coursesTaken.includes(course)) return total + 1;
    return total;
  }, 0);
  const numMathCoursesTaken = mathCourses.reduce((total, course) => {
    if (course.some((course) => coursesTaken.includes(course))) return total + 1;
    return total;
  }, 0);
  const hasTakenIE = (coursesTaken.includes('COMPSCI 320') || coursesTaken.includes('COMPSCI 326'));
  if (num300PlusTaken >= 4) {
    num300PlusTaken = 4;
  } else if (num300PlusTaken >= 3 && outsideElectives.some((course) => coursesTaken.includes(course))) {
    num300PlusTaken = 4;
  }
  if (num400PlusTaken >= 3) {
    num400PlusTaken = 3;
  }
  const numUpperLevelCoursesTaken = num300PlusTaken + num400PlusTaken;
  const numScienceCoursesTaken = numScienceTaken >= 2 ? 2 : numScienceTaken;

  return numCoreCoursesTaken + numMathCoursesTaken + hasTakenIE + numUpperLevelCoursesTaken + numScienceCoursesTaken;
}

let coursesTaken1 = ['COMPSCI 220', 'COMPSCI 230', 'COMPSCI 240', 'COMPSCI 250', 'COMPSCI 311', 'COMPSCI 320', 'COMPSCI 320', 'COMPSCI 320', 'COMPSCI 420', 'COMPSCI 420', 'COMPSCI 420'];
//console.log(satisfiesCSRequirements(coursesTaken1)); // [ true, false, true, true, false ]

function scoreSchedule(schedule, preferences) {
  let score = 0;
  
  // Score based on professor rating and difficulty
  schedule.forEach(section => {
    section.professor.forEach(prof => {
      const professor = findProfessorByKey(prof);
      if (professor) {
        score += professor.rating * preferences.professorRatingWeight;
        score -= professor.difficulty * preferences.professorDifficultyWeight;
      }
    });
  });
  
  // Score based on course time and days
  schedule.forEach(section => {
    if (section.start >= preferences.startTime && section.end <= preferences.endTime) {
      const daysMatch = section.days.some(day => preferences.courseDays.includes(day));
      if (daysMatch) {
        score += preferences.courseTimeWeight;
      }
    }
  });
  
  return score;
}

// Sample schedule
const schedule = [
  {
    start: "10:00",
    end: "11:30",
    year: 2023,
    key: 1,
    season: "Fall",
    courseKey: "COMP101",
    type: "Lecture",
    days: [1, 3],
    location: "Room 101",
    professor: ["p1"]
  },
  {
    start: "14:00",
    end: "15:30",
    year: 2023,
    key: 2,
    season: "Fall",
    courseKey: "COMP102",
    type: "Lecture",
    days: [2, 4],
    location: "Room 102",
    professor: ["p2"]
  }
];

const professors = [
  {
    name: "Professor A",
    key: "p1",
    rating: 4.5,
    difficulty: 3,
    reviews: 10
  },
  {
    name: "Professor B",
    key: "p2",
    rating: 3.5,
    difficulty: 4,
    reviews: 5
  }
];

const score = scoreSchedule(schedule, preferences);
//console.log(score); // outputs 12

// ranks courses based on major requirements and student preferences
function rankCourses2(coursesTaken, courses, preferences) {
  // Initialize an empty array to store the scores for each course
  const scores = [];

  // Loop through each course
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];

    // Check if the course has already been taken
    if (coursesTaken.includes(course.key)) {
      scores.push(-1);
      continue;
    }

    // Check if the course has any prerequisites that have not been taken
    const hasSatisfiedPrerequisites = course.prerequisites.some((prerequisite) => {
      return prerequisite.options.every((option) => coursesTaken.includes(option));
    }) || course.prerequisites.length == 0;

    if (!hasSatisfiedPrerequisites) {
      scores.push(-2);
      continue;
    }

    // Calculate the score for the course based on major requirements and student preferences
    let score = 0;

    // Check if the course satisfies any major requirements
    score += scoreCSRequirements(coursesTaken.concat(course.key)) - scoreCSRequirements(coursesTaken);

    // Check if the course satisfies any student preferences
    score += course.professors.reduce((total, professor) => {
      const prof = findProfessorByKey(professor);
      if (prof) {
        return total + (prof.rating * preferences.professorRatingWeight - prof.difficulty * preferences.professorDifficultyWeight)/5;
      }
      return total;
    }, 0);

    // if (course.days.includes(1) || course.days.includes(3) || course.days.includes(5)) {
    //   score += 1;
    // }

    // Add the final score for the course to the scores array
    scores.push(score);
  }
  // Uses the scores array to return sorted ranked courses along with its score in descending order
  return scores.map((score, index) => { return { score, course: courses[index].key } }).sort((a, b) => b.score - a.score);
}

//console.log(rankCourses(["COMPSCI 121", "COMPSCI 187"], courses, preferences));

function creditsTaken(coursesTaken) {
  let credits = 0;
  for (const courseKey of coursesTaken) {
    const course = courses.find(course => course.key === courseKey);
    credits += course.credits;
  }
  return credits;
}

module.exports = { rankCourses }