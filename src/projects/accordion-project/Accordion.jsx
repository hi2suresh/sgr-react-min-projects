import { useState } from 'react';
import { accordionData } from './content';
import './style.css';

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="accordion-card">
      <div className="header">
        <div>{title}</div>
        <button className="icon" onClick={() => setIsActive(!isActive)}>
          {isActive ? '-' : '+'}
        </button>
      </div>
      <div className="">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
}
function AccordionItems() {
  const dataItems = accordionData.map(({ title, content }) => {
    return <Accordion key={Math.random()} title={title} content={content} />;
  });
  return <div className="accordion">{dataItems}</div>;
}
export default AccordionItems;
