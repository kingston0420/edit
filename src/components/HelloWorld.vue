<template>
  <div class="hello">
    <table>
      <tr><td><div contenteditable>I'm editable</div></td><td><div contenteditable>I'm also editable</div></td></tr>
      <tr><td>I'm not editable</td></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
</style>
