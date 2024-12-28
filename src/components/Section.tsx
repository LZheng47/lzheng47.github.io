import "../styles/components/section.scss";
import "../styles/components/connect.scss";
import { ReactNode } from "react";

interface Props {
  heading: string;
  description: string;
  children?: ReactNode;
}

function Section({ heading, description, children }: Props) {
  return (
    <>
      <div className="section" id={heading.toLowerCase()}>
        <div className="section-desc">
          <h2> {heading} </h2>
          <p> {description} </p>
        </div>
        <div className="section-content">
          {children}
        </div>
      </div>
    </>
  );
}

export default Section;
