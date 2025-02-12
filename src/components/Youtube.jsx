import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ embedId }) => {
  return (
    <div>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Youtube;
