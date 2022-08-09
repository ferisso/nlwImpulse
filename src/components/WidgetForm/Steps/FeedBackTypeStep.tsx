import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedBackTypeStepProps {
  onFeedBackTypeUpdated: (type: FeedbackType) => void;
}

export function FeedBackTypeStep(props: FeedBackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">
          Deixe seu Feedback
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full justify-center">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                className="bg-zinc-800 p-4 w-24 flex flex-col items-center rounded-xl border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-all"
                type="button"
                key={key}
                onClick={() => (props.onFeedBackTypeUpdated(key as FeedbackType))}
              >
                <img src={value.image.src} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>
    </>
  )
}