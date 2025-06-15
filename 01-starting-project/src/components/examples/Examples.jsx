import { useState } from "react";
import TabButton from "../tabButton/TabButton";
import TopicContent from "../topicContent/TopicContent";
import Section from "../section/Section";

export default function Examples() {
  const topics = ["components", "jsx", "props", "state"];
  const [selectedTopic, setSelectedTopic] = useState();

  return (
    <Section title={"Examples"} id="examples">
      <menu>
        {topics.map((topic, index) => {
          return (
            <TabButton
              key={index}
              isActive={selectedTopic === topic}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </TabButton>
          );
        })}
      </menu>
      <TopicContent topic={selectedTopic} />
    </Section>
  );
}
