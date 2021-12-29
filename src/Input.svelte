<script lang="ts">
  export let id = null
  export let value = null
  export let name = null
  export let placeholder = "Placeholder"
</script>

<input type="number" {name} required min="0" {id} bind:value {placeholder} />

<style>
  input {
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-normal);
    letter-spacing: var(--font-letter-spacing-neg-xsmall);
    line-height: var(--line-height);
    position: relative;
    display: flex;
    overflow: visible;
    align-items: center;
    width: 100%;
    height: 30px;
    margin: 1px 0 1px 0;
    padding: var(--size-xxsmall) var(--size-xxxsmall) var(--size-xxsmall) var(--size-xxsmall);
    color: var(--black8);
    border: 1px solid transparent;
    border-radius: var(--border-radius-small);
    outline: none;
    background-color: var(--white);
  }
  input:hover,
  input:placeholder-shown:hover {
    color: var(--black8);
    border: 1px solid var(--black1);
    background-image: none;
  }
  input::selection {
    color: var(--black);
    background-color: var(--blue3);
  }
  input::placeholder {
    color: var(--black3);
    border: 1px solid transparent;
  }
  input:placeholder-shown {
    color: var(--black8);
    border: 1px solid var(--black1);
    background-image: none;
  }
  input:focus:placeholder-shown {
    border: 1px solid var(--blue);
    outline: 1px solid var(--blue);
    outline-offset: -2px;
  }
  input:active,
  input:focus {
    color: var(--black);
    border: 1px solid var(--blue);
    outline: 1px solid var(--blue);
    outline-offset: -2px;
  }
</style>
