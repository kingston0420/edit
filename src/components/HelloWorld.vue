<template>
  <div class="hello">
    <table>
      <tr v-for="(r, idx) in mat" :key = "idx">
        <td v-for ="(c, i) in r" :key="i"><div contenteditable @change="set(idx, i, c)">{{c}}</div></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    set (i,j,c) {
      this.mat[i][j] = c
    }
  },
  data () {
    return {
      mat: [
        ['Edit', 'Edit', 'Edit', 'Edit'],
        ['Edit', 'Edit', 'Edit', 'Edit'],
        ['Edit', 'Edit', 'Edit', 'Edit']
      ]
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
table {
  border: 1px solid black;
  width: 80%;
  margin: 0 auto;
}
</style>
