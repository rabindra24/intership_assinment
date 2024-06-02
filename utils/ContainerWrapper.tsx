import React from "react";

const ContainerWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={`container mx-auto overflow-x-hidden`}>{children}</div>;
};

export default ContainerWrapper;
