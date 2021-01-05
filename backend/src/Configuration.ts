import { EnvironmentDescription } from "./P4Environment";

const environments = new Map<string, EnvironmentDescription>();

environments.set("Example1-Repeater", {
  tasks: [
    {
      name: "bash",
      cwd: "/home/p4/p4-boilerplate/Example1-Repeater/",
      executable: "make",
      params: [],
      provideTty: true,
    },
    {
      name: "bash2",
      cwd: "/home/p4/p4-boilerplate/Example1-Repeater/",
      executable: "ls -al",
      params: [],
      provideTty: true,
    },
  ],
  editableFiles: [
    {
      absFilePath: "/home/p4/p4-boilerplate/Example1-Repeater/prona-repeater.p4",
      alias: "prona-repeater.p4",
    },
    {
      absFilePath: "/home/p4/p4-boilerplate/Example1-Repeater/Makefile",
      alias: "Makefile",
    },
    {
      absFilePath: "/home/p4/p4-boilerplate/Example1-Repeater/pod-topo/topology.json",
      alias: "topology.json",
    },
    {
      absFilePath: "/home/p4/p4-boilerplate/Example1-Repeater/pod-topo/s1-runtime.json",
      alias: "s1-runtime.json",
    },
  ],
  stopCommands: [
    {
      name: "bash",
      cwd: "/home/p4/p4-boilerplate/Example1-Repeater/",
      executable: "exit",
      params: [],
      provideTty: false,
    },
    {
      name: "bash2",
      cwd: "/home/p4/p4-boilerplate/Example1-Repeater/",
      executable: "exit",
      params: [],
      provideTty: false,
    },
  ],
  description: "Example1-Repeater",
  assignmentLabSheet: "../assignments/prona-repeater.md",
});

environments.set("Example2-MinimalisticSwitch", {
  tasks: [
  {
    name: "bash",
    cwd: "/home/p4/p4-boilerplate/Example2-MinimalisticSwitch/",
    executable: "make",
    params: [],
    provideTty: true,
  },
  {
    name: "bash2",
    cwd: "/home/p4/p4-boilerplate/Example2-MinimalisticSwitch/",
    executable: "ls -al",
    params: [],
    provideTty: true,
  },
],
editableFiles: [
  {
    absFilePath: "/home/p4/p4-boilerplate/Example2-MinimalisticSwitch/prona-switch-static-table.p4",
    alias: "prona-switch-static-table.p4",
  },
  {
    absFilePath: "/home/p4/p4-boilerplate/Example2-MinimalisticSwitch/Makefile",
    alias: "Makefile",
  },
  {
    absFilePath: "/home/p4/p4-boilerplate/Example2-MinimalisticSwitch/pod-topo/topology.json",
    alias: "topology.json",
  },
  {
    absFilePath: "/home/p4/p4-boilerplate/Example2-MinimalisticSwitch/pod-topo/s1-runtime.json",
    alias: "s1-runtime.json",
  },
  {
    absFilePath: "/home/p4/p4-boilerplate/Example2-MinimalisticSwitch/alternative/prona-switch-static-naive.p4",
    alias: "prona-switch-static-naive.p4",
  },
],
stopCommands: [
  {
    name: "bash",
    cwd: "//home/p4/p4-boilerplate/Example2-MinimalisticSwitch/",
    executable: "exit",
    params: [],
    provideTty: false,
  },
  {
    name: "bash2",
    cwd: "/home/p4/p4-boilerplate/Example2-MinimalisticSwitch/",
    executable: "exit",
    params: [],
    provideTty: false,
  },
],
description: "Example2-MinimalisticSwitch",
assignmentLabSheet: "../assignments/prona-minimalisticswitch.md",
});

environments.set("Example3-LearningSwitch", {
tasks: [
  {
    name: "bash",
    cwd: "/home/p4/p4-boilerplate/Example3-LearningSwitch/",
    executable: "make",
    params: [],
    provideTty: true,
  },
  {
    name: "bash2",
    cwd: "/home/p4/p4-boilerplate/Example3-LearningSwitch/",
    executable: "ls -al",
    params: [],
    provideTty: true,
  },
],
editableFiles: [
  {
    absFilePath: "/home/p4/p4-boilerplate/Example3-LearningSwitch/prona-switch-learning.p4",
    alias: "prona-repeater.p4",
  },
  {
    absFilePath: "/home/p4/p4-boilerplate/Example3-LearningSwitch/learning_switch_controller_app.py",
    alias: "learning_switch_controller_app.py",
  },
  {
    absFilePath: "/home/p4/p4-boilerplate/Example3-LearningSwitch/Makefile",
    alias: "Makefile",
  },
  {
    absFilePath: "/home/p4/p4-boilerplate/Example3-LearningSwitch/pod-topo/topology.json",
    alias: "topology.json",
  },
  {
    absFilePath: "/home/p4/p4-boilerplate/Example3-LearningSwitch/pod-topo/s1-runtime.json",
    alias: "s1-runtime.json",
  },
],
stopCommands: [
  {
    name: "bash",
    cwd: "/home/p4/p4-boilerplate/Example3-LearningSwitch/",
    executable: "exit",
    params: [],
    provideTty: false,
  },
  {
    name: "bash2",
    cwd: "/home/p4/p4-boilerplate/Example3-LearningSwitch/",
    executable: "exit",
    params: [],
    provideTty: false,
  },
],
description: "Example3-LearningSwitch",
assignmentLabSheet: "../assignments/prona-learningswitch.md",
});

export default environments;
