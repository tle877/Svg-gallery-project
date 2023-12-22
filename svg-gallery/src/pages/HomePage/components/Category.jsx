import { ExpandMore } from "@mui/icons-material";
import PropTypes from "prop-types";

export const Category = ({ category, active, callback }) => {
  const ItemList = () =>
    category?.items?.map((i) => (
      <div className="mb-4 cursor-pointer hover:text-blue" key={i.title}>
        <div className="ml-4 text-base">{i.title}</div>
      </div>
    ));

  return (
    <div className="w-full" key={category?.title}>
      <div
        className={`flex justify-between mb-4 cursor-pointer text-lg hover:text-blue ${
          active && "text-blue"
        }`}
        onClick={callback}
      >
        {category?.title}
        {category?.items.length ? (
          <ExpandMore className={active && "rotate-180"} />
        ) : (
          <></>
        )}
      </div>
      {active && <ItemList />}
    </div>
  );
};

Category.defaultProps = {
  active: false,
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};
