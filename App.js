const Parent = React.createElement("div",{id:"Parent", class: "dad"},
    React.createElement("div",{id:"child", class: "son"},
    [React.createElement("h1",{id:"heading"},"it's done here!"),
    React.createElement("h2",{id:"headingtwo"},"it's done here 2nd time!")]),
    React.createElement("div",{id:"child", class: "son2"},
    [React.createElement("h1",{id:"heading"},"it's done here!"),
    React.createElement("h2",{id:"headingtwo"},"it's done here 2nd time!")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);