import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Courses } from "../../lib/types/coures";
import { supabase } from "../../lib/database/supabaseClient";
import DOMPurify from "dompurify";

function DetailCourse() {
  const { id } = useParams();
  const [coures, setCoures] = useState<Courses>({} as Courses);
  useEffect(() => {
    async function getCourses(id: string) {
      try {
        const { data, error } = await supabase
          .from("courses")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setCoures(data as Courses);
      } catch (error) {
        console.log(error);
      }
    }
    if (id) {
      getCourses(id);
    }
  }, [id]);
  return (
    <div className="relative p-10">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{coures.title}</h1>
        <p>{coures.description}</p>
        <section>
          <h2 className="text-lg font-bold">What will you learn?</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coures.target),
            }}
            className="list-disc ml-5"
          />
        </section>
      </div>
      <div className="absolute right-3">
        <div className="flex flex-col p-5">
          <div className="h-35 w-full p-5 border shadow-xl rounded-2xl">
            Video minh họa
          </div>
          <div className="font-bold text-2xl text-red-500">
            <p className="text-center">{coures.price}</p>
          </div>
          <button className="btn btn-primary rounded-2xl">Đăng kí</button>
        </div>
      </div>
    </div>
  );
}

export default DetailCourse;
