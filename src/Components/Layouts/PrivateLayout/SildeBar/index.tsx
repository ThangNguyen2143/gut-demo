import { Link } from "react-router";

function SlideBarPublic() {
  return (
    <div className="flex flex-col h-screen">
      <ul className="menu bg-base-200 rounded-box w-56">
        <li>
          <Link to={"/courses"}>Khóa học</Link>
        </li>
        <li>
          <Link to={"/courses"}>Cộng đồng</Link>
        </li>
        <li>
          <Link to={"/blogs"}>Bài viết</Link>
        </li>
        <li>
          <h2 className="menu-title">Admin</h2>
          <ul>
            <li>
              <Link to={"/admin/courses"}>Quản lý khóa học</Link>
            </li>
            <li>
              <a>Quản lý bài viết</a>
            </li>
            <li>
              <a>Quản lý tài khoản</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SlideBarPublic;
