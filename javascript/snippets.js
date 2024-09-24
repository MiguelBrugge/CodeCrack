import hoisting from "./snippet-subjects/hoisting.js";
import oop from "./snippet-subjects/oop.js";
import precedence from "./snippet-subjects/precedence.js";
import functions from "./snippet-subjects/functions.js";
import loops from "./snippet-subjects/loops.js";
import truthyFalsy from "./snippet-subjects/truthy-falsy.js";
import ifStatments from "./snippet-subjects/if-statments.js";

/* 
Create all snippets focusing on ..
Limit to a single console.log output. No comments.
Ensure the output is educational and not too straightforward.
Revise atleast 5 objects per difficulty. 
Disregard previous code and develop new examples related to ..

Make use of the getrandomint to randomize variable values from 0-10.
*/

const snippets = [...ifStatments, ...functions, ...loops, ...oop, ...precedence, ...hoisting, ...truthyFalsy];

export default snippets;
