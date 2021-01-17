import React from "react";

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default PageHeader;
