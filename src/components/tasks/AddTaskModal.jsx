import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming hero">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet harum
        magnam fugit ipsam nihil dolorum cum perferendis quod quaerat
        architecto, ad, similique natus rerum? Vel repellat quo eaque veniam
        voluptatibus qui aut totam facilis cumque suscipit, voluptas a optio
        recusandae reiciendis, consequuntur possimus delectus eligendi?
        Praesentium eaque accusamus vero.
      </Modal>
    </div>
  );
};

export default AddTaskModal;
