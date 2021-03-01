<template>
  <div class="container-fluid">
    <form v-on:submit.prevent="submit" method="post">
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
        <label for="colFormLabel" class="col-sm-2 col-form-label">repeat</label>
        <div class="col-sm-10">
          <select
            type="email"
            class="form-control"
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
        <label for="colFormLabel" class="col-sm-2 col-form-label">Alert</label>
        <div class="col-sm-10">
          <select
            type="email"
            class="form-control"
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
      <button type="submit" class="btn btn-primary">Save changes</button>
      <button
        type="button"
        class="btn btn-primary"
        v-on:click="updateSchedule(updateID)"
      >
        Update changes
      </button>
    </form>
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
              class="btn btn-info"
              v-on:click="getSchedule(sc.id)"
            >
              Update
            </button>
            <button
              type="submit"
              class="btn btn-danger"
              v-on:click="deleteUser(sc.id)"
            >
              Delete
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

const AuthStr = "Bearer 5|gHK9vGq7FMG5LKCzvLcYgk6f8byYNRwY3AEkx0HO";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Vue.js App",
      srno: 0,
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
    };
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers: function () {
      axios
        .get(
          "http://phasetwo.ethelcare.co.uk/api/120372c7-f0f9-4c71-8edc-608cdd5b4a10/medication_schedules",
          {
            headers: {
              Authorization: AuthStr,
            },
          }
        )
        .then((res) => {
          this.schedulesData = res.data.data;
          console.log(this.schedulesData);
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
    submit: function () {
      this.form.prompt_time = this.form.prompt_time + ":00";
      axios
        .post(
          "http://phasetwo.ethelcare.co.uk/api/120372c7-f0f9-4c71-8edc-608cdd5b4a10/medication_schedules",
          this.form,
          {
            headers: {
              Authorization: AuthStr,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.getAllUsers();
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
    updateSchedule: function (id) {
      axios
        .put(
          "http://phasetwo.ethelcare.co.uk/api/120372c7-f0f9-4c71-8edc-608cdd5b4a10/medication_schedules/" +
            id,
          this.form,
          {
            headers: {
              Authorization: AuthStr,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.getAllUsers();
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
    getSchedule: function (id) {
      axios
        .get(
          "http://phasetwo.ethelcare.co.uk/api/120372c7-f0f9-4c71-8edc-608cdd5b4a10/medication_schedules/" +
            id,
          {
            headers: {
              Authorization: AuthStr,
            },
          }
        )
        .then((res) => {
          let schedule = res.data.data;
          console.log(schedule);
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
    deleteUser: function (id) {
      axios
        .delete(
          "http://phasetwo.ethelcare.co.uk/api/120372c7-f0f9-4c71-8edc-608cdd5b4a10/medication_schedules/" +
            id,
          {
            headers: {
              Authorization: AuthStr,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.getAllUsers();
        })
        .catch((err) => {
          alert("Error Occured" + err);
        });
    },
  },
};
</script>