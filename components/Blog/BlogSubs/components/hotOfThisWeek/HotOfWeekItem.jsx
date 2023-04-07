import Image from "next/image";
import WriterOfPost from "../../../ui/WriterOfPost";
import DateOfPost from "../../../ui/DateOfPost";
import Link from "next/link";
const hotOfWeekItem = (props) => {
  const { id, title, imageUrl, writer, date, sub } = props.item;
  return (
    <Link href={`/blog/${sub}/${id}/${title}`}>
      <div className="hotOfWeek-list-item">
        <Image
          width={100}
          height={100}
          className="hotOfWeek-list-item-image"
          src={imageUrl}
          alt={title}
        />
        <div className="hotOfWeek-list-item-data">
          <h3 className="hotOfWeek-list-item-data-title">{title}</h3>
          <div className="hotOfWeek-list-item-data-dateAndWriter">
            <WriterOfPost postWriter={writer} />
            <DateOfPost postDate={date} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default hotOfWeekItem;
