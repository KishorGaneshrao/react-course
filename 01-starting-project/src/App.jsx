import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";
import TopicContent from "./components/TopicContent/TopicContent.jsx";

function App() {
  const topics = ["components", "jsx", "props", "state"];
  const [selectedTopic, setSelectedTopic] = useState();

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {topics.map((topic, index) => {
              return (
                <TabButton
                  key={index}
                  isActive={selectedTopic === topic}
                  onSelect={() => setSelectedTopic(topic)}
                >
                  {topic}
                </TabButton>
              );
            })}
          </menu>
          <TopicContent topic={selectedTopic} />
        </section>
      </main>
    </div>
  );
}

export default App;
