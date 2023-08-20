'use client'
import React, { useState } from "react";

function TagView({ data, onAddChild }) {
  const [expand, setExpand] = useState(false);
  const [input, setInput] = useState({
    visible: false,
  });
  const [editedData, setEditedData] = useState(data.data || "");
  const [editingName, setEditingName] = useState(false);
  const [editedName, setEditedName] = useState(data.name);

  const handleChild = (e) => {
    e.stopPropagation();
    setExpand(true);
    setInput({
      visible: true,
    });
  };

  const addChild = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setInput({ ...input, visible: false });
      onAddChild(data, e.target.value);
    }
  };

  const handleDataChange = (e) => {
    setEditedData(e.target.value);
  };

  const handleNameClick = () => {
    setEditingName(true);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleNameBlur = () => {
    setEditingName(false);
  };

  return (
    <div>
      <div className="m-2 flex flex-col items-start space-x-2 border-2 border-indigo-600 bg-white rounded-lg ">
        <div className="p-2 flex items-center space-x-2 w-full justify-between">
          <div
            className="cursor-pointer rounded-md hover:bg-gray-400 bg-gray-300 p-2 "
            onClick={() => setExpand(!expand)}
          >
            <span>{expand ? ">" : "v"}</span>
          </div>
          <span className="flex-grow">
            {editingName ? (
              <input
                type="text"
                value={editedName}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                autoFocus
              />
            ) : (
              <span onClick={handleNameClick}>{editedName}</span>
            )}
          </span>
          <button
            className="border p-2  bg-sky-500/100 rounded-md hover:bg-sky-700  cursor-pointer  text-white"
            onClick={handleChild}
          >
            Add Child
          </button>
        </div>
      </div>
      <div
        className={`ml-6 ${expand ? "block" : "hidden"}`}
      >
        {data.children && data.children.length > 0 ? (
          data.children.map((ele, i) => (
            <TagView data={ele} key={i} onAddChild={onAddChild} />
          ))
        ) : (
          <>
            <div className="container mt-2 flex items-center space-x-2">
              <h3 className="text-gray-600">Data</h3>
              <input 
                type="text"
                value={editedData}
                onChange={handleDataChange}
                className="border p-1"
                autoFocus
              />
            </div>
            <span className="sub-child"> {data.data}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default TagView;
