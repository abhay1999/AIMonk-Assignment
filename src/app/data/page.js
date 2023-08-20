const tree = {
  name: "root",
  children: [
    {
      name: "child1",
      children: [
        { name: "child1-child1", data: "c1-c1 Hello" },
        { name: "child1-child2", data: "c1-c2 JS" },
      ],
    },
    { name: "child2", data: "c2 World" },
    {
      name: "child3",
      children: [
        { name: "child1-child1", data: "c1-c1 JSX" },
        { name: "child1-child2", data: "c1-c2 CSS" },
      ],
    },
    {
      name: "child4",
      children: [{ name: "child1-child1", data: "c1-c1 JSX" }],
    },
  ],
};

export default tree;