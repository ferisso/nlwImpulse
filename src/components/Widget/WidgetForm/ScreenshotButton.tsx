import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (arg: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshor() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL('image/png')
    onScreenshotTook(base64Image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-1/6 h-8 rounded border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      className="bg-zinc-700 w-1/6 h-8 rounded flex 
      justify-center items-center hover:bg-transparent 
      transition-all"
      onClick={handleTakeScreenshor}
    >
      {isTakingScreenshot
        ? <Loading />
        : <Camera className="h-6 w-6" color="#F4F4F5" />
      }
    </button>
  )
}