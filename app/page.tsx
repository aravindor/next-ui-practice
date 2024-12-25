import AssignmentItems from "@/components/assignment-items";
import { assignments } from "@/utils/assignment-items";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-fit md:w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {
          assignments.map((assignment, index) => (
            <AssignmentItems
              key={index}
              name={assignment.name}
              image={assignment.image}
              reference={assignment.reference}
              page={assignment.page}
              date={assignment.date}
              completed={assignment.completed}
            />
          ))
        }
      </div>
    </div>
  );
}
