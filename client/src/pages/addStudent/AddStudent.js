
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";
import { onSubmit, validateDate } from "../../utils/index";
import { useAlert } from "react-alert";
import Styles from "./addstudent.module.css";
import set from "../../utils/date"
const ModalExample = (props) => {
  const alert = useAlert();
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  return (
    <div>
      <Button color="danger" onClick={toggle} id="add__student" className={Styles.btn}>
        ADD
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Student</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <input
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                  pattern: /^[A-Za-z ]+$/i,
                })}
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <div>
              {errors?.name?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.name?.type === "maxLength" && (
                <p>Name cannot exceed 20 characters</p>
              )}
              {errors?.name?.type === "minLength" && (
                <p>Name cannot be 5 less than characters</p>
              )}
              {errors?.name?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </div>
            <div className="input-group mb-3">
              <select
                className="form-select"
                id="inputGroupSelect01"
                {...register("gender", {
                  required: true,
                })}
                placeholder="gender"
              >
                <option disabled>Gender...</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            {errors?.gender?.type === "required" && (
              <p>This field is required</p>
            )}
            <div className="input-group date" data-provide="datepicker">
              <input
                {...register("dob", {
                  required: true,
                  validate: validateDate,
                })}
                type="date"
                id="birthday"
                min="1899-01-01"
                max="2000-13-13"
                className="form-control"
                onClick={set}
              />

              <div className="input-group-addon">
                <span className="glyphicon glyphicon-th"></span>
              </div>
            </div>
            <div>
              {errors?.dob?.type === "required" && (
                <p>This field is required</p>
              )}

              {errors?.dob?.type === "validate" && <p>Invalid dob</p>}
            </div>
            <ModalFooter>
              <Button
                color="primary"
                type="submit"
                onClick={(e) => {
                  toggle();
                  alert.success("Saved Sucessfully!");
                }}
                disabled={!isDirty || !isValid}
              >
                Save
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;
