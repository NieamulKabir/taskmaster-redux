import { useDispatch } from "react-redux";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import { addTask } from "../../redux/features/tasks/tasksSlice";
import { useAddTaskMutation } from "../../redux/features/tasks/tasksApi";
// import { useAddTaskMutation } from "../../redux/features/tasks/tasksApi";


const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [addTask, { data, error }] = useAddTaskMutation();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    // dispatch(addTask(data))
    addTask({ ...data, status: "pending" });
    onCancel();
    // setIsOpen(false);
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming hero">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register("title")}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="description" className="mb-2">
              Description
            </label>
            <textarea
              className="w-full rounded-md"
              type="text"
              id="description"
              {...register("description")}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="deadline" className="mb-2">
              Deadline
            </label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register("date")}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="deadline" className="mb-2">
              Assign to
            </label>
            <select
              className="w-full rounded-md"
              id="assignedTo"
              {...register("assignedTo")}
            >
              <option value="Mir Hussain">Mir Hussain</option>
              <option value="Nieamul Kabir">Nieamul Kabir</option>
              <option value="Sakib">Sakib</option>
            </select>
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="priority" className="mb-2">
              Priority
            </label>
            <select
              className="w-full rounded-md"
              id="priority"
              {...register("priority")}
            >
              <option defaultValue value="high">
                High
              </option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => onCancel()}
              type="button"
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
