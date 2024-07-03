import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.tasks);
  const task = tasks.find((item) => item.id === id);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>{task?.title}</h1>
      <h1>{task?.description}</h1>
    </Modal>
  );
};

export default TaskDetailsModal;
 