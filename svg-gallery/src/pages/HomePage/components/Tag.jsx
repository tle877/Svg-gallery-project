import PropTypes from "prop-types";
import { useCallback, useState } from "react";

export const Tag = ({ tag }) => {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <div
      className={`rounded-2xl px-3 py-1 cursor-pointer text-sm ${
        active
          ? "bg-blue text-white hover:text-white"
          : "bg-blue-60 text-dark-brown hover:text-blue"
      }`}
      onClick={toggleActive}
      key={tag?.title}
    >
      {tag.title}
    </div>
  );
};

Tag.propTypes = {
  tag: PropTypes.object.isRequired,
};
