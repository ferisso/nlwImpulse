import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedBackContentStepProp {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSend: () => void;
}

export function FeedBackContentStep({ feedbackType, onFeedbackRestart, onFeedbackSend }: FeedBackContentStepProp) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string>("")

  function handleFeedback() {
    console.log(comment, screenshot)
    onFeedbackSend();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-4 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestart}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <span className="text-xl leading-6 flex flex-row items-center align-middle gap-2">
          <img className="w-6 h-6" src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <div className="py-5 w-full">
        <textarea
          className="bg-transparent min-w-[304px] min-h-[112px] border-2 rounded resize-none
         border-zinc-600 outline-none focus:outline w-full text-sm text-zinc-100 focus:border-brand-500 p-2"
          placeholder={feedbackTypeInfo.placeholder}
          onChange={event => setComment(event.target.value)}
        />
        <div className="flex gap-2 max-w-full mt-1">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button className="bg-brand-500 w-5/6 border-2 border-transparent
            rounded hover:bg-transparent hover:border-brand-500 transition-all
            focus:outline-none focus:ring-2 focus:ring-offset-2 focusring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!comment.length}
            onClick={handleFeedback}
          >
            Enviar feedback
          </button>
        </div>
      </div>
    </>
  )
}