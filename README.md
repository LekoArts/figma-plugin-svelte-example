# Figma Plugin made with Svelte

This is an example repository for a tutorial: [Creating a Figma Plugin with Svelte][tutorial]

It shows you how to use [Svelte][svelte], [TypeScript][typescript], and [Rollup][rollup] to build a plugin for [Figma][figma]. The plugin fetches a random image from [Unsplash][unsplash] and adds it to the canvas of the project.

You can also see a real world example of this stack at [figma-theme-ui][figma-theme-ui].

## Usage as Template

If you want to use this example as a template for your own project, you can remove `src/Input.svelte` and `manifest.json`. Clear the contents of `src/App.svelte` and `src/code.ts`.

Go to a Figma project and right-click on the canvas to get the context menu. Go to Plugins => Development => New Plugin... . Then choose either the Design + Figjam or Design category. Then give it a name and choose the Empty preset. Save the `manifest.json` in the directory of this template. Change the `main` entry to `dist/code.js` and the `ui` entry to `dist/ui.html`.

Then, you can start the development server with:

```shell
yarn dev
```

Under the same context menu you now can run the example plugin.

Please see [Figma Plugin DS Svelte][ds-svelte] for usage instructions on the components and CSS styles.

[tutorial]: https://www.lekoarts.de/javascript/creating-a-figma-plugin-with-svelte
[svelte]: https://svelte.dev/
[typescript]: https://www.typescriptlang.org/
[rollup]: https://rollupjs.org/guide/en/
[figma]: https://figma.com/
[unsplash]: https://unsplash.com/
[figma-theme-ui]: https://github.com/LekoArts/figma-theme-ui
[ds-svelte]: https://github.com/thomas-lowry/figma-plugin-ds-svelte
