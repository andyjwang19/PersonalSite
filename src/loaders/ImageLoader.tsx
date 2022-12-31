const importAll = (r: any) => r.keys().map(r);

const images = importAll('../assets/');

export default function ImageLoader(slug: string) {
    console.log(`images`, images);
}

// render() {
//   return (
//     <div>
//       {images.map((pic, i) =>
//         <img src={pic} alt={`picture-${i}`} />
//       }
//     </div>
//   )
// }
