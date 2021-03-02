<template>
  <div class="container">
    <button
      type="button"
      class="btn btn-primary my-3 pull-right"
      data-bs-toggle="modal"
      data-bs-target="#medication"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
      Add New Medication
    </button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Referance</th>
          <th scope="col">Instructions</th>
          <th scope="col">Prompt Time</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">repeat</th>
          <th scope="col">Alert</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sc, i) in schedulesData" :key="i">
          <th scope="row">{{ ++i }}</th>
          <th scope="row">{{ sc.message }}</th>
          <th scope="row">{{ sc.prompt_time }}</th>
          <th scope="row">{{ sc.start_date }}</th>
          <th scope="row">{{ sc.end_date }}</th>
          <th scope="row">{{ sc.repeat }}</th>
          <th scope="row">{{ sc.alert_time }}</th>
          <th scope="row">
            <button
              type="submit"
              class="btn btn-secondary mx-2"
              v-on:click="getMedicationScheduleByID(sc.id)"
              data-bs-toggle="modal"
              data-bs-target="#updateMedication"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Update
            </button>
            <button
              type="submit"
              class="btn btn-danger mx-2"
              data-bs-toggle="modal"
              data-bs-target="#deleteMedication"
              v-on:click="confirmDeleteMedicationSchedule(sc.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
              Delete
            </button>
          </th>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="medication"
      tabindex="-1"
      role="dialog"
      aria-labelledby="medicationLabel"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="medicationLabel">Add New Medication</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="#" method="post">
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Referances</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    name="reference"
                    id="reference"
                    placeholder="Enter Referances"
                    v-model="form.reference"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Instructions</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    name="instruction"
                    id="instruction"
                    placeholder="Enter Instructions"
                    v-model="form.instruction"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Start Date</label
                >
                <div class="col-sm-10">
                  <input
                    type="date"
                    class="form-control"
                    name="start_date"
                    id="start_date"
                    v-model="form.start_date"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >End Date</label
                >
                <div class="col-sm-10">
                  <input
                    type="date"
                    class="form-control"
                    name="end_date"
                    id="end_date"
                    v-model="form.end_date"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Prompt Time</label
                >
                <div class="col-sm-10">
                  <input
                    type="time"
                    class="form-control"
                    name="prompt_time"
                    id="prompt_time"
                    v-model="form.prompt_time"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >repeat</label
                >
                <div class="col-sm-10">
                  <select
                    type="email"
                    class="form-select"
                    name="repeat"
                    id="repeat"
                    placeholder="col-form-label"
                    v-model="form.repeat"
                  >
                    <option selected disabled value="">
                      Select Repetation
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Alert</label
                >
                <div class="col-sm-10">
                  <select
                    type="email"
                    class="form-select"
                    name="alert_time"
                    id="alert_time"
                    placeholder="col-form-label"
                    v-model="form.alert_time"
                  >
                    <option value="1">Daily</option>
                    <option value="2">Weekly</option>
                    <option value="3">Monthly</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-success m-2 p-2"
                data-bs-dismiss="modal"
                v-on:click="addMedicationSchedule()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-save"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"
                  />
                </svg>
                Save medication
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="updateMedication"
      tabindex="-1"
      aria-labelledby="updateMedicationLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateMedicationLabel">
              Edit Medication
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="#" method="post">
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Referances</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    name="reference"
                    id="reference"
                    placeholder="Enter Referances"
                    v-model="form.reference"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Instructions</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    name="instruction"
                    id="instruction"
                    placeholder="Enter Instructions"
                    v-model="form.instruction"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Start Date</label
                >
                <div class="col-sm-10">
                  <input
                    type="date"
                    class="form-control"
                    name="start_date"
                    id="start_date"
                    v-model="form.start_date"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >End Date</label
                >
                <div class="col-sm-10">
                  <input
                    type="date"
                    class="form-control"
                    name="end_date"
                    id="end_date"
                    v-model="form.end_date"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Prompt Time</label
                >
                <div class="col-sm-10">
                  <input
                    type="time"
                    class="form-control"
                    name="prompt_time"
                    id="prompt_time"
                    v-model="form.prompt_time"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >repeat</label
                >
                <div class="col-sm-10">
                  <select
                    type="email"
                    class="form-select"
                    name="repeat"
                    id="repeat"
                    placeholder="col-form-label"
                    v-model="form.repeat"
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label"
                  >Alert</label
                >
                <div class="col-sm-10">
                  <select
                    type="email"
                    class="form-select"
                    name="alert_time"
                    id="alert_time"
                    placeholder="col-form-label"
                    v-model="form.alert_time"
                  >
                    <option value="1">Daily</option>
                    <option value="2">Weekly</option>
                    <option value="3">Monthly</option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-secondary m-2 p-2"
                v-on:click="updateMedicationSchedule(updateID)"
                data-bs-dismiss="modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
                Update changes
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="deleteMedication"
      tabindex="-1"
      aria-labelledby="deleteMedicationLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteMedicationLabel">
              Delete Medication
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row mb-3">
              <label for="colFormLabel" class="col-sm-12"
                >Are you sure you want to delete this medication schedule
                ?</label
              >
            </div>
            <button
              type="button"
              class="btn btn-danger m-2 p-2"
              v-on:click="deleteMedicationSchedule(deleteID)"
              data-bs-dismiss="modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
              Delete Medication
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.pull-right {
  float: right;
}
</style>
<script>
import axios from "axios";

export default {
  name: "Medication",
  data() {
    return {
      schedulesData: Array,
      form: {
        reference: "",
        instruction: "",
        start_date: "",
        end_date: "",
        prompt_time: "",
        repeat: "",
        alert_time: "",
      },
      updateID: "",
      deleteID: "",
    };
  },
  created() {
    this.getAllMedicationSchedules();
  },
  methods: {
    clearForm: function () {
      this.form.instruction = "";
      this.form.reference = "";
      this.form.start_date = "";
      this.form.end_date = "";
      this.form.prompt_time = "";
      this.form.repeat = "";
      this.form.alert_time = "";
    },
    getAllMedicationSchedules: function () {
      axios
        .get(this.$BASE_URL, {
          headers: {
            Authorization: this.$Auth,
          },
        })
        .then((res) => {
          this.schedulesData = res.data.data;
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
    addMedicationSchedule: function () {
      this.form.prompt_time = this.form.prompt_time + ":00";
      axios
        .post(this.$BASE_URL, this.form, {
          headers: {
            Authorization: this.$Auth,
          },
        })
        .then(() => {
          this.getAllMedicationSchedules();
          this.clearForm();
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
    updateMedicationSchedule: function (id) {
      axios
        .put(this.$BASE_URL + "/" + id, this.form, {
          headers: {
            Authorization: this.$Auth,
          },
        })
        .then(() => {
          this.getAllMedicationSchedules();
          this.clearForm();
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
    getMedicationScheduleByID: function (id) {
      axios
        .get(this.$BASE_URL + "/" + id, {
          headers: {
            Authorization: this.$Auth,
          },
        })
        .then((res) => {
          let schedule = res.data.data;
          this.updateID = schedule.id;
          this.form.instruction = schedule.message;
          this.form.reference = schedule.reference;
          this.form.start_date = schedule.start_date;
          this.form.end_date = schedule.end_date;
          this.form.prompt_time = schedule.prompt_time;
          this.form.repeat = schedule.repeat;
          this.form.alert_time = schedule.alert_time;
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
    confirmDeleteMedicationSchedule: function (id) {
      this.deleteID = id;
    },
    deleteMedicationSchedule: function (id) {
      axios
        .delete(this.$BASE_URL + "/" + id, {
          headers: {
            Authorization: this.$Auth,
          },
        })
        .then(() => {
          this.getAllMedicationSchedules();
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
  },
};
</script>