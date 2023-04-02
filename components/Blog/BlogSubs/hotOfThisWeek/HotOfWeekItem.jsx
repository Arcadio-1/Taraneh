import WriterOfPost from "../../ui/WriterOfPost";
import DateOfPost from "../../ui/DateOfPost";
import { Link } from "react-router-dom";
const hotOfWeekItem = (props) => {
  return (
    <Link to={`/blog/${props.blogSub}/${props.item.id}`}>
      <div className="hotOfWeek-list-item">
        <img
          className="hotOfWeek-list-item-image"
          src={props.item.imageUrl}
          alt={props.item.title}
        />
        <div className="hotOfWeek-list-item-data">
          <h3 className="hotOfWeek-list-item-data-title">{props.item.title}</h3>
          <div className="hotOfWeek-list-item-data-dateAndWriter">
            <WriterOfPost postWriter={props.item.writer} />
            <DateOfPost postDate={props.item.date} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default hotOfWeekItem;
