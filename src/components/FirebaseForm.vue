<template>
  <div class="hello">
    <h1>Vue firestore Demo</h1>
    <br />
    <div class="notification" v-if="formComplete">Form completion - {{formComplete}}</div>
    <div class="notification is-success" v-if="state === 'synced'">Form is synced with Firestore</div>
    <div
      class="notification is-link"
      v-else-if="state === 'modified'"
    >From data changed, will sync with Firebase</div>
    <div
      class="notification is-warning"
      v-else-if="state === 'revoked'"
    >From data and Firebase revoked to original data</div>
    <div
      class="notification is-danger"
      v-else-if="state === 'error'"
    >Failed to save to Firestore. {{ errorMessage }}</div>
    <div class="notification is-info" v-else-if="state === 'loading'">Loading...</div>
    <br />
    <form @input="fieldUpdate">
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" v-model="userdata.firstname" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" v-model="userdata.lastname" />
      <br />
      <label for="lname">User name:</label>
      <br />
      <input type="text" id="lname" name="lname" v-model="userdata.username" />
      <br />
      <label for="lname">State</label>
      <br />
      <input type="text" id="lname" name="lname" v-model="userdata.state" />
      <br />
      <label for="lname">Country</label>
      <br />
      <input type="text" id="lname" name="lname" v-model="userdata.country" />
      <br />
      <br />
      <button type="button" @click="resetValues()">Reset Form</button>
    </form>
  </div>
</template>

<script>
import _ from "lodash";
import firebase from "../firebaseInit";
const db = firebase.firestore();
const documentPath = "users/user1";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => {
    return {
      state: "loading", // synced, modified, revoked, error
      userdata: {},
      formComplete: ""
    };
  },
  methods: {
    async updateFirebase() {
      console.log("called");
      try {
        await db.doc(documentPath).set(this.userdata);
        this.state = "synced";
        this.formComplete = `${Object.keys(this.userdata).length * 20} %`;
      } catch (error) {
        console.log(error);
        this.state = "error";
      }
    },
    fieldUpdate() {
      this.state = "modified";
      this.debouncedUpdate();
    },
    debouncedUpdate: _.debounce(function() {
      this.updateFirebase(); // used lodash debounce time for writing values on firestore
    }, 2000),
    resetValues: async function() {
      try {
        await db.doc(documentPath).set({});
        this.userdata = {};
      } catch (e) {
        console.log(e);
      }
    }
  },
  async mounted() {
    try {
      await db.doc(documentPath).set({});
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notification {
  font-weight: bold;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
