import React from "react";
import { ResumeLayout } from "src/components/ResumeLayout";
import resume from "src/resume.json";

export const Resume: React.FC = () => {
  return (
    <ResumeLayout>
      Resume
      <pre>{JSON.stringify(resume, null, 2)}</pre>
    </ResumeLayout>
  );
};
