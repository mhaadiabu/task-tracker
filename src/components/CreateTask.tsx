import { TaskContext } from "@/context/TaskContext";
import { ACTIONS } from "@/lib/utils";
import { useContext, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const CreateTask = () => {
  const [taskItem, setTaskItem] = useState("");

  const context = useContext(TaskContext);

  const { dispatch } = context!;

  const createTask = () => {
    dispatch({
      type: ACTIONS.CREATE_TASK,
      payload: { task: taskItem },
    });

    setTaskItem("");
  };

  return (
    <div className="flex flex-1 w-full mx-auto py-2 gap-2.5 items-center">
      <Input
        type="search"
        value={taskItem}
        placeholder="Add a new task..."
        onChange={(e) => setTaskItem(e.target.value)}
      />
      <Button onClick={createTask} className="max-md:hidden">
        Click to Add
      </Button>
      <Button size="icon" onClick={createTask} className="md:hidden">
        <Plus />
      </Button>
    </div>
  );
};

export default CreateTask;
