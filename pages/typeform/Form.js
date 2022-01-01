import React, { useEffect,useState } from 'react';
import * as typeformEmbed from '@typeform/embed'

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.el = null;
//   }
//   componentDidMount() {
//     if (this.el) {
//       typeformEmbed.makeWidget(this.el, "https://sample.typeform.com/to/32423", {
//         hideFooter: true,
//         hideHeaders: true,
//         opacity: 0
//       });
//     }
//   }

//   render() {
//     return (
//       <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
//     )
//   }
// }

export default function Form() {

  const [el, setEl] = useState(null);

  useEffect(() => {
    if (el) {
      typeformEmbed.makeWidget(this.el, "https://8i8h609n0k8.typeform.com/to/vLylSajO?typeform-source=admin.typeform.com", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  },[]);

  return <div ref={(el) => setEl(el)} style={{width: '100%', height: '300px'}} />
}
