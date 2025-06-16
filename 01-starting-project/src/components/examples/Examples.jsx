import { useState } from "react";
import TabButton from "../tabButton/TabButton";
import TopicContent from "../topicContent/TopicContent";
import Section from "../section/Section";
import Tabs from "../tabs/Tabs";

export default function Examples() {
  const topics = ["components", "jsx", "props", "state"];
  const [selectedTopic, setSelectedTopic] = useState();

  const buttons = topics.map((topic, index) => {
    return (
      <TabButton
        key={index}
        isActive={selectedTopic === topic}
        onClick={() => setSelectedTopic(topic)}
      >
        {topic}
      </TabButton>
    );
  });

  return (
    <Section title={"Examples"} id="examples">
      <Tabs buttons={buttons}>
        <TopicContent topic={selectedTopic} />
      </Tabs>
    </Section>
  );
}
