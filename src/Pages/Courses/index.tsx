import { useEffect, useState } from "react";
import { supabase } from "../../lib/database/supabaseClient";
import type { Courses } from "../../lib/types/coures";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CardCourses from "./components/card-course";
import { Link } from "react-router";

function CoursesPage() {
  const [couresList, setCouresList] = useState<Courses[]>([]);
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
    getCourses();
  }, []);
  return (
    <div className="flex flex-col px-24 gap-2">
      <h1 className="text-3xl font-bold">Khóa học</h1>
      <div className="grid grid-cols-8 gap-3">
        <div className="col-span-7">
          <label className="input w-full">
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input type="search" placeholder="Tìm kiếm khóa học/cộng đồng" />
          </label>
        </div>
        <select name="category" defaultValue={""}>
          <option value="">Loại khóa học</option>
          <option value="">Cộng đồng</option>
          <option value="">1-1</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 px-10">
        {couresList.map((course) => {
          return (
            <Link key={course.id + "couresShow"} to={`/courses/${course.id}`}>
              <CardCourses
                price={course.price}
                num_member={Math.floor(Math.random() * 1000 + 1)}
                short_description={course.short_description}
                tilte={course.title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesPage;
