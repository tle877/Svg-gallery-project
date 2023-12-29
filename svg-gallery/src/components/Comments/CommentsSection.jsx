import "./style.scss";
import WriteComment from "./WriteComment";
import CommentCard from "./CommentCard";
import Pagination from '../Pagination/Pagination'
const CommentsSection = () => {
  return (
    <div className={"commentSectionContainer"}>
      <div className={'container mx-auto py-5'}>
        <h3 className={"commentSectionHeading"}>
          Recommended Models <span>(34)</span>
        </h3>
        <WriteComment/>
        <CommentCard/>
        <Pagination totalPages={10} currentPage={6}/>
      </div>
    </div>
  );
};

export default CommentsSection;
