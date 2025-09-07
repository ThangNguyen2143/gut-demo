import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
interface CardProps {
  tilte: string;
  short_description: string;
  num_member: number;
  price: string;
}
function CardCourses(props: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
      {" "}
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        <span>Hinh_anh.png</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-1">{props.tilte}</h3>
        <p className="text-sm text-gray-600 mb-2">{props.short_description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="text-lg text-red-300">{props.price}</span>
          <span>
            <FontAwesomeIcon icon={faUsers} /> {props.num_member}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardCourses;
