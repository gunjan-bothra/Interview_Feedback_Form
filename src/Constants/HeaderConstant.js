export const Experience = [
  {value: 1, label: 1},
  {value: 2, label: 2},
  {value: 3, label: 3},
  {value: 4, label: 4},
  {value: 5, label: 5},
  {value: 6, label: 6},
  {value: 7, label: 7},
  {value: 8, label: 8},
  {value: 9, label: 9},
  {value: 10, label: 10},
  {value: 11, label: 11},
  {value: 12, label: 12},
];

export const Level = [
  {value: 'L1', label: 'L1'},
  {value: 'L2', label: 'L2'},
  {value: 'L3', label: 'L3'},
  {value: 'L4', label: 'L4'},
];

export const Mode = [
  {value: '1', label: 'FaceTo-Face'},
  {value: '2', label: 'Zoom'},
  {value: '3', label: 'Telephonic'},
];

export const Position = [
  {value: '1', label: 'Software Engineer'},
  {value: '2', label: 'Senior Software Engineer'},
  {value: '3', label: 'Software Lead'},
  {value: '4', label: 'Manager'},
];

export const TabsText = ['Round1', 'Round2', 'Round3', 'Round4'];

export const Round1 = [
  {
    value: 1,
    label: 'Problem solving and Reasoning',
    subSkill: [
      {label:'Design problems'},
      {label:'respective level Programming  on string'},
      {label:'list manupulation'},
      {label:'data structures'},
    ],
  },
  {
    value: 2,
    label: 'Basics',
    subSkill: [
      {label:'Variables'},
      {label:'Data types'},
      {label:'Type Conversions'},
      {label:'Operator Comparisons'},
      {label:'Interaction: alert, prompt, confirm'},
      {label:'Loops: while and for'},
      {label:'switch statement'},
      {label:'Function expressions'},
      {label:'Arrow functions'},
    ],
  },
  {
    value: 3,
    label: 'Objects',
    subSkill: [
      {label:'Objects'},
      {label:'Garbage collection'},
      {label:'Symbol type'},
      {label:'Object methods'},
      {label:'this'},
      {label:'Object to primitive conversion'},
      {label:'Constructor'},
      {label:'operator new'},
    ],
  },
  {
    value: 4,
    label: 'Working with functions',
    subSkill: [
      {label:'Recursion and stack'},
      {label:'Rest parameters and spread operator'},
      {label:'Closure,The old "var"'},
      {label:'Global object'},
      {label:'Function object'},
      {label:'Decorators and forwarding'},
      {label:'call/apply'},
      {label:'Function binding'},
      {label:'Arrow functions revisited'}
    ],
  },
  {
    value: 5,
    label: 'Prototype, Inheritance and classes',
    subSkill: [
      {label:'Prototypal inheritance'},
      {label:'active prototypes'},
      {label:'Prototype methods'},
      {label:'objects without __proto__'},
      {label:'Class basic syntax'},
      {label:'Class inheritance'},
      {label:'Static properties and methods'},
      {label:'Private and protected properties and methods'},
      {label:'Extending built-in classes'},
    ],
  },
  {
    value: 6,
    label: 'Promises, async/await, generators',
    subSkill: [
      {label:'callbacks'},
      {label:'Promise'},
      {label:'Promises chaining'},
      {label:'Error handling with promises'},
      {label:'Promise API'},
      {label:'Async/await'},
      {label:'Generators'},
      {label:'Async iterators and generators'},
    ],
  },
  // {
  //   value: 7,
  //   label: 'Team management skills',
  // },
  // {
  //   value: 8,
  //   label: 'Communication and personal attribute',
  // },
  // {
  //   value: 9,
  //   label: 'Notes for R2',
  // },
];

export const Round2 = [
  {
    value: 1,
    label: 'Problem solving and Reasoning',
    subSkill: [
      'Design problems',
      'respective level Programming  on string',
      'list manupulation',
      'data structures',
    ],
  },
  {
    value: 2,
    label: 'Events',
    subSkill: [
      'browser events',
      'Bubbling and capturing',
      'Event delegation',
      'Browser default actions',
      'Dispatching custom events',
      `UI Events Mouse events basics Moving the mouse: mouseover/out, mouseenter/leave Drag\'n'Drop with mouse events Keyboard: keydown and keyup`,
    ],
  },
  {
    value: 3,
    label: 'Forms, controls',
    subSkill: [
      'Form properties and methods',
      'Focusing: focus/blur',
      'Events: change, input, cut, copy, paste',
      'Forms: event and method submit',
    ],
  },
  {
    value: 4,
    label: 'Document and resource loading',
    subSkill: [
      'Page: DOMContentLoaded',
      'load',
      'beforeunload',
      'unload',
      'Scripts: async, defer',
      'Resource loading: onload and onerror',
    ],
  },
  {
    value: 5,
    label: 'Others',
    subSkill: [
      'Mutation observer',
      'Selection and Range',
      'Event loop: microtasks and macrotasks',
    ],
  },
];

export const Round3 = [
  {
    value: 1,
    label: 'Problem solving and Reasoning',
    subSkill: [
      'Design problems',
      'respective level Programming  on string',
      'list manupulation',
      'data structures',
    ],
  },
  {
    value: 2,
    label: 'Frames and windows',
    subSkill: ['Popups and window methods', 'Cross-window communication'],
  },
  {
    value: 3,
    label: 'Binary data, files',
    subSkill: [
      'ArrayBuffer',
      'binary arrays',
      'TextDecoder and TextEncoder',
      'Blob File and FileReader',
    ],
  },
  {
    value: 4,
    label: ' Storing data in the browser, Networks',
    subSkill: [
      'Fetch FormData',
      'Fetch: Download progress',
      'Fetch: Abort',
      'Fetch: Cross-Origin Requests',
      'Fetch API URL objects',
      'XMLHttpRequest',
      'Resumable file upload',
      'Long polling',
      'WebSocket',
      'Server Sent Events',
      'Cookies',
      'document.cookie',
      'LocalStorage',
      'sessionStorage',
      'IndexedDB',
    ],
  },
  {
    value: 5,
    label: 'Web Components and Regular Expressions',
    subSkill: [
      'From the orbital height Custom elements',
      'Shadow DOM Template element',
      'Shadow DOM slots',
      'Composition Shadow DOM',
      'Styling Shadow DOM and events',
      'Patterns and flags',
      'Character classes Unicode: flag "u" and class p{...} Anchors: string start ^ and end $',
    ],
  },
];
