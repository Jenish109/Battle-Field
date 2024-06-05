import React from 'react';

const ContentArea = ({ match }) => {
  const { id } = match.params;

  // Render content based on id
  return (
    <div>
      {/* Content based on id */}
      {`Content for image ${id}`}
    </div>
  );
};

export default ContentArea;
