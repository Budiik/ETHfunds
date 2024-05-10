import React, { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import ScrollSection from "./ScrollSection";
import CreateProjectCard from "./CreateProjectCard";
import '../scss/App.scss'

const App = () => {
  const [showCreateProject, setShowCreateProject] = useState(false);

  const handleAddProjectClick = () => {
    setShowCreateProject(true);
  };

  return (
    <>
      <Header onAddProject={handleAddProjectClick} />
      {showCreateProject && <CreateProjectCard />}
      <ScrollSection />
    </>
  );
};

export default App;
