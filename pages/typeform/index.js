// import React from 'react'
// import { Widget, PopupButton, SliderButton, Popover, Sidetab } from '@typeform/embed-react'

// const AtomIcon = () => (
//   <span role="img" aria-label="atom">
//     ⚛️
//   </span>
// )

// const handleOnReady = () => {
//   // eslint-disable-next-line no-console
//   console.log('form ready')
// }

// function IndexForm() {
//   return (
//     <div className="App">
//       <div className="App-spacer" />
//       <div className="App-container">
//         <PopupButton id="vLylSajO" style={{ padding: 12, fontSize: 16 }} size={80}>
//           click to open in popup
//         </PopupButton>
//       </div>
//       <div className="App-spacer" />
//       {/* <div className="App-container">
//         <SliderButton id="HLjqXS5W" style={{ padding: 10, fontSize: 14 }} width={600} position="left">
//           slide the form from left
//         </SliderButton>
//       </div> */}
//       <div className="App-spacer" />
//       <div className="App-container">
//         <Widget
//           id="vLylSajO"
//           style={{ margin: '0 auto', width: 500, height: 400 }}
//           onReady={handleOnReady}
//           enableSandbox
//         />
//       </div>
//       <Popover id="vLylSajO22" tooltip="Hello there!<br/>General Kenobi" />
//       {/* <Sidetab id="HLjqXS5W" buttonText="Open form" /> */}
//     </div>
//   )
// }

// export default IndexForm



import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";
export default function Index() {
// const Index = () => {
  const openPopup = (event) => {
   createPopup("vLylSajO", {
    hidden: {
     value: event.currentTarget.value
    }
   }).open()
  }

  return <input type="button" value="popup" onClick={openPopup} />
}