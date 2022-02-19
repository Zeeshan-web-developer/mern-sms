
import React, { useEffect} from "react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/index";
import { Button, ModalFooter } from "reactstrap";
import { UpdateStudent, validateDate } from "../../utils/index";
import { useHistory} from "react-router-dom";
import set from "../../utils/date";
function Update() {
  const history = useHistory();
  const users = useSelector((state) => state.students);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm({ mode: "onChange" });
  let { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const user = users?.find((u) => u.id === Number(id));
    if (user) {
      setValue("name", user.name);
      setValue("gender", user.gender);
      setValue("dob", user.dob);

      console.log("cannot set", user);
    } else {
      history.push("/");
    }
  }, [users]);

  const onUpdate = (data) => {
    const selected = new Date(data.dob).getFullYear();
    const now = new Date().getFullYear();
    let age = now - selected;
    data["age"] = age;
    data["id"] = id;
    try {
      UpdateStudent(data);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  if (!users) {
    return "loading";
  } else {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Header />
              <form onSubmit={handleSubmit(onUpdate)}>
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
                  <Button color="primary" type="submit" disabled={!isDirty}>
                    Save
                  </Button>
                </ModalFooter>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
