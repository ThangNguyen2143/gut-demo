import { useEffect, useState } from "react";
import { supabase } from "../../../lib/database/supabaseClient";
import type { Courses } from "../../../lib/types/coures";
import PagingComponent from "../../../Components/Table/paging-table";

function ManageCourses() {
  const [couresList, setCouresList] = useState<Courses[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(couresList.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const currentCourses = couresList.slice(startIndex, startIndex + 10);
  // const coursesList = await getCourses();
  useEffect(() => {
    async function getCourses() {
      try {
        const { data, error } = await supabase.from("courses").select("*");

        if (error) throw error;
        setCouresList(data as Courses[]);
      } catch (error) {
        console.log(error);
      }
    }
    // const coursesList = getCourses();
    // setCouresList()
    getCourses();
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl">Quản lý khóa học</h1>
      <div className="flex justify-center">
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Lượt truy cập</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Số học viên</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Lượt đăng kí</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên khóa học</th>
              <th>Mô tả ngắn</th>
              <th>Giá</th>
              <th>Số học viên</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((c, idx) => {
              return (
                <tr key={c.id}>
                  <td>{idx + 1}</td>
                  <td>{c.title}</td>
                  <td>{c.short_description}</td>
                  <td>{c.price}</td>
                  <td>{Math.floor(Math.random() * 15 + 1)}</td>
                  <td>
                    <button className="btn btn-sm">Chi tiết</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <PagingComponent
          currentPage={currentPage}
          handleChangePage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default ManageCourses;
