import bugImageUrl from '../../../assets/bug.png'
import ideaImageUrl from '../../../assets/idea.png'
import thoughtImageUrl from '../../../assets/thought.png'
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from './Steps/FeedBackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
    placeholder: "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: 'Imagem de uma lampada',
    },
    placeholder: "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
    placeholder: "Queremos te ouvir. O que você gostaria de nos dizer? ",
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSend, setFeedbackSend] = useState<Boolean>(false)

  function handleRestartFeedback() {
    setFeedbackSend(false)
    setFeedbackType(null)
  }
  function hanfleFeedbackSent() {
    setFeedbackSend(true)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {
        feedbackSend ? (
          <FeedBackSuccessStep
            onResendFeedback={handleRestartFeedback}
          />
        ) : (
          <>
            {!feedbackType ? (
              <FeedBackTypeStep onFeedBackTypeUpdated={setFeedbackType} />
            ) : (
              <FeedBackContentStep
                feedbackType={feedbackType}
                onFeedbackRestart={handleRestartFeedback}
                onFeedbackSend={hanfleFeedbackSent}
              />
            )}
          </>
        )
      }

      <footer className="text-[#A1A1AA] text-xs">
        Feito com ♥ pela <a className="underline underline-offset-2" target="_blank" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div >
  )
}