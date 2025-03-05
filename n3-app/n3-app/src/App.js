
import "./App.css";
import img from "./girrl.jpeg";

function ImageWithDe(){

  return (
    <div className="assda">
      <img src={img} alt="girlll" className="imm" />
        <div className="hi">
          <h3 className="text-lg font-bold">Image Details</h3>
          <p>
            This image captures a person deeply engaged in photography, holding
            a vintage Canon camera up to their face. They are dressed warmly,
            wearing a textured beanie and a denim jacket, suggesting a cool or
            autumnal setting. The person's curly hair peeks out from under the
            beanie, adding a sense of casual style. Their hands, adorned with
            rings, grip the camera with familiarity, indicating they might be an
            experienced photographer or someone passionate about capturing
            moments. The background is blurred, with earthy tones of browns and
            greens, likely depicting an outdoor setting—perhaps a field or a
            park—during the golden hour, as the warm light gives the image a
            cozy and cinematic feel. The overall mood is serene and artistic,
            emphasizing a love for photography and nature.
          </p>
        </div>
  
    </div>
  );
}

export default ImageWithDe;