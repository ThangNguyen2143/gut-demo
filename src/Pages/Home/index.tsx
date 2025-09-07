function Home() {
  return (
    <div className="flex flex-col">
      <div className="carousel w-full h-fit">
        <div id="item1" className="carousel-item w-full">
          <img
            alt={"carousel 1"}
            width={300}
            height={200}
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            alt="carousel 2"
            width={300}
            height={200}
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            alt="carousel 3"
            width={300}
            height={200}
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            alt="carousel 4"
            width={300}
            height={200}
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <div className="px-24">
        <h1 className="text-3xl font-bold text-center">
          Các cộng đồng nổi bật
        </h1>
        <div className="grid grid-cols-3">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                width={300}
                height={200}
                src="https://cdn2.tuoitre.vn/thumb_w/480/2020/5/25/sinh-vien-khoa-nhan-van-va-ngon-ngu-tham-gia-chuong-trinh-tham-gia-phat-trien-cong-dong-ced-tai-indonesia-2019-2-15903726020481925910946.jpg"
                alt="Shoes"
                className="rounded-xl w-80 h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cộng đồng Anh ngữ</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Tham gia ngay</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                width={300}
                height={200}
                src="https://ntt.edu.vn/wp-content/uploads/2024/07/z5593991098703_0b4e44579938075109cc30000bab1e2a.jpg"
                alt="Shoes"
                className="rounded-xl w-80 h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cộng đồng Trung ngữ</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Tham gia ngay</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                width={300}
                height={200}
                src="https://tuyensinhdonga.edu.vn/wp-content/uploads/2021/06/Ve-co-hoi-viec-lam-cua-nganh-ngon-ngu-Anh-.jpg"
                alt="Shoes"
                className="rounded-xl w-80 h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cộng đồng Hàn ngữ</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Tham gia ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-24">
        <h1 className="text-3xl font-bold text-center">Các khóa học đề xuất</h1>
        <div className="grid grid-cols-3">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                width={300}
                height={200}
                src="https://cdn2.tuoitre.vn/thumb_w/480/2020/5/25/sinh-vien-khoa-nhan-van-va-ngon-ngu-tham-gia-chuong-trinh-tham-gia-phat-trien-cong-dong-ced-tai-indonesia-2019-2-15903726020481925910946.jpg"
                alt="Shoes"
                className="rounded-xl w-80 h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Khóa học 1</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Đăng kí ngay</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                width={300}
                height={200}
                src="https://ntt.edu.vn/wp-content/uploads/2024/07/z5593991098703_0b4e44579938075109cc30000bab1e2a.jpg"
                alt="Shoes"
                className="rounded-xl w-80 h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Khóa học 2</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Đăng kí ngay</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                width={300}
                height={200}
                src="https://tuyensinhdonga.edu.vn/wp-content/uploads/2021/06/Ve-co-hoi-viec-lam-cua-nganh-ngon-ngu-Anh-.jpg"
                alt="Shoes"
                className="rounded-xl w-80 h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Khóa học 3</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Đăng kí ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center gap-5">
        <h3 className="text-3xl text-center font-bold">Tin tức nổi bật</h3>
        <div className="flex flex-col gap-2 w-[500px] ">
          <div className="flex gap-3 w-full justify-center">
            <img
              src="https://i1-vnexpress.vnecdn.net/2025/07/24/adqweqw-1753346496-1753346973-2950-1753347018.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=W-xeuyH75gcRav7JOefIJA"
              alt="Tin tức"
              className="rounded-lg"
              width={200}
              height={250}
            />
            <div className="max-w-96">
              <h3 className="font-bold text-lg">
                Sinh viên HUFLIT trải nghiệm môi trường làm việc từ năm nhất
              </h3>
              <p>
                Sinh viên HUFLIT được tạo điều kiện tiếp xúc môi trường làm việc
                từ năm đầu nhằm sớm định hình năng lực nghề nghiệp.{" "}
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <ul className="list-disc flex gap-3">
            <li>
              ĐH Phenikaa đào tạo Kỹ thuật hóa học thúc đẩy công nghiệp xanh
            </li>
            <li>Học viên kể về hành trình học trực tuyến qua upGrad</li>
            <li>
              &rsquo;Có AI, sinh viên lập trình sẽ thiệt nếu vẫn học theo cách
              cũ&rsquo;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
