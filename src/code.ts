figma.showUI(__html__, { width: 320, height: 220 })

interface IPayload {
  imageBytes: Uint8Array
  width?: number
  height?: number
}

interface IMessage {
  type: "ADD_IMAGE"
  payload: IPayload
}

function createImage({ imageBytes, width = 800, height = 800 }: IPayload): void {
  const image = figma.createImage(imageBytes)
  const imageHash = image.hash
  // An image in Figma is not a layer, but a fill type for a shape
  const fill: ImagePaint = {
    type: "IMAGE",
    imageHash,
    scaleMode: "FILL",
  }
  const rect = figma.createRectangle()
  rect.resize(width, height)
  rect.x = figma.viewport.center.x - Math.round(width / 2)
  rect.y = figma.viewport.center.y - Math.round(height / 2)
  rect.name = `Random Unsplash Image`
  rect.fills = [fill]

  figma.currentPage.appendChild(rect)
  figma.currentPage.selection = [rect]
  figma.viewport.scrollAndZoomIntoView([rect])
}

figma.ui.onmessage = (msg: IMessage) => {
  const { type, payload } = msg

  if (type === `ADD_IMAGE`) {
    if (payload.imageBytes) {
      const { imageBytes, width, height } = payload
      createImage({ imageBytes, width, height })
    }
  }

  figma.closePlugin()
}
