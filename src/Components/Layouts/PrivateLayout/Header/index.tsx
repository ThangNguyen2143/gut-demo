function HeaderPublicLayout() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          <img
            alt="Logo"
            src="/Logo GUT(màu_xóa nền).png"
            width={100}
            height={100}
          />
          <span className="font-bold uppercase text-green-500">
            {" "}
            Grow Up Together
          </span>
        </a>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Cá nhân</a>
            </li>
            <li>
              <a>Cài đặt</a>
            </li>
            <li>
              <a>Đăng xuất</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderPublicLayout;
