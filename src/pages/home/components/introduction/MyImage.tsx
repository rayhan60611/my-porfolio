import { useEffect, useRef } from "react";

import image from "../../../../assets/images/my-image.jpg";
import styles from "./Introduction.module.css";

function calculateRelativeBrightness(red: number, green: number, blue: number) {
  return (
    Math.sqrt(red * red * 0.299 + green * green * 0.5 + blue * blue * 0.114) /
    100
  );
}

function getMappedImage(
  canvas: HTMLCanvasElement,
  pixels: ImageData
): number[][][] {
  let cell: number[];
  let row: number[][];
  let mappedImage: number[][][] = [];

  for (let i = 0; i < canvas.height; i++) {
    row = [];
    for (let j = 0; j < canvas.width; j++) {
      const red = pixels.data[i * 4 * pixels.width + j * 4];
      const green = pixels.data[i * 4 * pixels.width + (j * 4 + 1)];
      const blue = pixels.data[i * 4 * pixels.width + (j * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      cell = [brightness];
      row.push(cell);
    }
    mappedImage.push(row);
  }

  return mappedImage;
}

class Particle {
  private x: number;
  private y: number = 0;
  public speed: number = 0;
  private velocity: number = Math.random() * 2.5;
  private size: number = Math.random() * 1.5 + 1;
  private position1: number;
  private position2: number;

  constructor(width: number) {
    this.x = Math.random() * width;
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
  }

  update(mappedImage: number[][][], width: number, height: number): void {
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
    this.speed = mappedImage[this.position1][this.position2][0];
    let movement = 2.5 - this.speed + this.velocity;

    this.y += movement;
    if (this.y >= height) {
      this.y = 0;
      this.x = Math.random() * width;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const MyImage = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;

    const onLoad = () => {
      const canvas = ref.current!;
      const ctx = canvas.getContext("2d")!;

      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let particlesArray: Particle[] = [];
      const numberOfParticles = 5000;

      const mappedImage = getMappedImage(canvas, pixels);

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(canvas.width));
      }

      function animate() {
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update(mappedImage, canvas.width, canvas.height);
          ctx.globalAlpha = particlesArray[i].speed * 0.5;
          particlesArray[i].draw(ctx);
        }
        requestAnimationFrame(animate);
      }

      animate();
    };

    img.addEventListener("load", onLoad);
    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, []);

  return <canvas ref={ref} className={`${styles.MyImage}`} />;
};

export default MyImage;
