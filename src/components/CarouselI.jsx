import { Carousel ,Typography} from "@material-tailwind/react";
import header1 from "../assets/header1.jpg";
import header2 from "../assets/header2.jpg";

export function CarouselI() {
  return (
    <div className="h-96 p-10" >
    <Carousel
      transition={{ duration: 1 }}
      autoplay={true}
      loop={true}
      className="rounded-xl"
    >
      <div className="relative h-full w-full">
        <img
          src={header1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Servicio de tatuaje a domicilio Medellín
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={header2}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Tatto desde la comodidad de tu casa. domicilio.
            </Typography>
          </div>
        </div>
      </div>
      
      
    </Carousel>
    </div>
  );
}
export default CarouselI;
