<template>
  <div class="hello">
    <table>
      <tr v-for="(r, idx) in mat" :key = "idx">
        <td v-for ="(c, i) in r" :key="i"><div contenteditable @input="set(idx, i, $event)">{{c}}</div></td>
      </tr>
    </table>

    {{mat}}
  </div>
</template>

<script>

import { db } from '../db'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    set (i,j, e) {
      this.mat[i][j] = e.target.innerText
      localStorage.mat = JSON.stringify(this.mat);
      var ref = db.collection('mat').doc('mat');
      ref.set({
        data: JSON.stringify(this.mat)
      })
    }
  },
  data () {
    return {
      mat: [
        ['Edit', 'Edit', 'Edit', 'Edit'],
        ['Edit', 'Edit', 'Edit', 'Edit'],
        ['Edit', 'Edit', 'Edit', 'Edit']
      ],
      db: db
    }
  },
  mounted() {
    if (localStorage.mat) {
    //  this.mat = JSON.parse(localStorage.mat);
    }
    var ref = db.collection('mat');

    ref.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
          this.mat = JSON.parse(doc.data().data)
        ;
      });
    });
  },
  watch: {
    mat(newName) {
      localStorage.mat = JSON.stringify(newName);
      var ref = db.collection('mat').doc('mat');
      ref.set({
        data: JSON.stringify(this.mat)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
tr, td {
  border: 1px solid black;
}
table {
  border: 1px solid black;
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
</style>
