// Cube Section
const cube_positions = new Float32Array([
  -1, -1, -1,  // 0
   1, -1, -1,  // 1
   1,  1, -1,  // 2
  -1,  1, -1,  // 3
  -1, -1,  1,  // 4
   1, -1,  1,  // 5
   1,  1,  1,  // 6
  -1,  1,  1   // 7
]);

const cube_colors = new Float32Array([
  1,0,0,  0,1,0,  0,0,1, 1,1,0, 1,0,1, 0,1,1, 1,1,0, 1,0,1
]);


const cube_indices = new Uint16Array([
  // Front
  4, 5, 6,   4, 6, 7,
  // Back
  1, 0, 3,   1, 3, 2,
  // Top
  3, 7, 6,   3, 6, 2,
  // Bottom
  0, 1, 5,   0, 5, 4,
  // Right
  1, 2, 6,   1, 6, 5,
  // Left
  0, 4, 7,   0, 7, 3,
]);

// Pyramid Section

const pyramid_positions = new Float32Array([
  -1, -1, -1,  // 0 
   1, -1, -1,  // 1
   1, -1,  1,  // 2
  -1, -1,  1,  // 3
   0,  1,  0   // 4 
]);

const pyramid_colors = new Float32Array([
  1,0,0,  0,1,0,  0,0,1,  1,1,0,  1,0,1
]);

const pyramid_indices = new Uint16Array([
  // Bottom
  0, 2, 1,   0, 3, 2,
  // sides (all with 4 since that is the top of point)
  0, 1, 4,
  1, 2, 4,
  2, 3, 4,
  3, 0, 4
]);

// Prism Section

let positions = pyramid_positions;
let colors = pyramid_colors;
let indices = pyramid_indices;