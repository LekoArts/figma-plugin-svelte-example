<script lang="ts">
  import { GlobalCSS, Type, Label, Button } from "figma-plugin-ds-svelte"
  import Input from "./Input.svelte"

  const API_URL = "https://source.unsplash.com/random/"
  let disabled = true
  let error = ""
  let loading = false

  let imageBytes = null
  let width = 800
  let height = 800

  $: disabled = !(!!width && !!height)

  async function getImage() {
    if (Math.sign(width) === -1 || Math.sign(height) === -1) {
      throw new Error("Enter positive values for height/width")
    }
    // It redirects to the URL of the actual image
    const initialResponse = await self.fetch(`${API_URL}${width}x${height}`)

    if (initialResponse.ok) {
      // Fetch the actual image
      const res = await self.fetch(initialResponse.url)
      const buffer = await res.arrayBuffer()
      return new Uint8Array(buffer)
    } else {
      throw new Error(initialResponse.statusText)
    }
  }

  async function addImage() {
    error = ""
    loading = true
    try {
      const result = await getImage()
      loading = false
      imageBytes = result
    } catch (errorMsg) {
      loading = false
      error = errorMsg
      return
    }

    parent.postMessage(
      {
        pluginMessage: {
          type: "ADD_IMAGE",
          payload: {
            imageBytes,
            width,
            height,
          },
        },
      },
      "*"
    )
  }
</script>

<div class="p-xsmall wrapper flex column justify-content-between">
  <div>
    <Type>
      Get a Random Image from
      <a href="https://unsplash.com/">Unsplash</a>
    </Type>
    <div class="flex mt-xsmall">
      <div class="flex ml-xxsmall mr-xxsmall">
        <Label>Width:</Label>
        <Input placeholder="800" bind:value={width} />
      </div>
      <div class="flex ml-xxsmall mr-xxsmall">
        <Label>Height:</Label>
        <Input placeholder="800" bind:value={height} />
      </div>
    </div>
    <div class="mt-xxsmall flex justify-content-center">
      <Button {disabled} on:click={addImage}>Add Image</Button>
    </div>
    {#if loading}
      <div class="mt-xxsmall"><Type weight="medium">Loading image...</Type></div>
    {/if}
    {#if error}
      <div class="mt-xxsmall"><Type color="red" weight="medium">{error}</Type></div>
    {/if}
  </div>
  <div class="mt-small footer pt-xxsmall">
    <Type>
      Read the tutorial
      <a href="https://www.lekoarts.de">on lekoarts.de</a>
    </Type>
  </div>
</div>

<style>
  .wrapper {
    text-align: center;
    height: 100%;
  }
  .footer {
    border-top: 1px solid var(--silver);
  }
</style>
