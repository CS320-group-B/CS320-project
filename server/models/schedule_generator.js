const { Graph, alg } = require('graphlib');
const { data } = require('./data');

const courses = data.data;
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

// Print the graph
// console.log(json.write(graph)); 
function printGraph(graph) {
  for (const edge of graph.edges()) {
    const v = edge.v.split(" ")[0] + "_" + edge.v.split(" ")[1];
    const w = edge.w.split(" ")[0] + "_" + edge.w.split(" ")[1];
    console.log( v + " -> " + w + ";");
  }
}
// printGraph(graph);

function printSubGraph(graph, key) {
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
  // Print the subgraph
  printGraph(subgraph);
  // console.log(subgraph.edges());
}

printSubGraph(graph, 'COMPSCI 320');

// console.log(alg.topsort(graph));
sortedCourses = alg.topsort(graph).map((courseKey) => graph.node(courseKey));