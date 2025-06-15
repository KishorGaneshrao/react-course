import { useState } from "react";
import TabButton from "../tabButton/TabButton";
import TopicContent from "../topicContent/TopicContent";

export default function Examples() {
  const topics = ["components", "jsx", "props", "state"];
  const [selectedTopic, setSelectedTopic] = useState();

  return (
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
  );
}
