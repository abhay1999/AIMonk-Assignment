'use client'
import React, { useState } from "react";
import TagView from "./tagView/page";
import tree from "./data/page";

const Home = () => {
  const [tags, setTags] = useState(tree);

  const exportTags = () => {
    const exportedData = JSON.stringify(extractExportData(tags), null, 2);
    console.log(exportedData);
  };

  const extractExportData = (tag) => {
    const { name, children } = tag;
    const exportedTag = { name };

    if (tag.hasOwnProperty("editedData")) {
      exportedTag.data = tag.editedData;
    }

    if (children && children.length > 0) {
      exportedTag.children = children.map(extractExportData);
    }

    return exportedTag;
  };

  const handleUpdateData = (tag, newData) => {
    const updatedTags = updateTagData(tags, tag, newData);
    setTags(updatedTags);
  };

  const updateTagData = (currentTag, targetTag, newData) => {
    if (currentTag === targetTag) {
      return { ...currentTag, editedData: newData };
    }

    if (currentTag.children && currentTag.children.length > 0) {
      return {
        ...currentTag,
        children: currentTag.children.map((child) =>
          updateTagData(child, targetTag, newData)
        ),
      };
    }

    return currentTag;
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold my-4">AiMonk Assignment</h1>
     
      <TagView data={tags} onUpdateData={handleUpdateData} />
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={exportTags}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Home;
