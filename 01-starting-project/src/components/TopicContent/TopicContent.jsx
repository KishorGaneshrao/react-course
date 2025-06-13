import { EXAMPLES } from "../../data";

export default function TopicContent({ topic }) {
  if (!topic) return <p>Please select a topic.</p>;;
  
  return (
    <div id="tab-content">
      <h3>{EXAMPLES[topic].title}</h3>
      <p>{EXAMPLES[topic].description}</p>
      <pre>
        <code>{EXAMPLES[topic].code}</code>
      </pre>
    </div>
  );
}
