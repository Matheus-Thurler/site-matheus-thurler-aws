<template>
    <div class="code-block">
      <pre><code>{{ code }}</code></pre>
      <button @click="copyCode">Copy</button>
    </div>
  </template>
  
  <script>
  import Clipboard from 'clipboard'
  
  export default {
    props: {
      code: {
        type: String,
        required: true
      }
    },
    methods: {
      copyCode() {
        const clipboard = new Clipboard('.code-block button', {
          text: () => this.code
        })
        clipboard.on('success', () => {
          alert('Code copied!')
        })
      }
    }
  }
  </script>
  
  <style>
  .code-block {
    position: relative;
  }
  .code-block button {
    position: absolute;
    top: 0;
    right: 0;
  }
  </style>
  