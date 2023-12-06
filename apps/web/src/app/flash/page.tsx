'use client'
import { useState } from 'react'

const flashCardsTotal = 12

export default function Flash() {
  const [flashCardCount, setFlashCardCount] = useState(0)


  return (
    <div className="bg-gradient-to-t from-marine-600 to-marine-500 h-screen text-mirage-50 flex flex-col md:items-center">
      <div className="flex-1 flex flex-col items-center  px-6  py-20">
        <div>
          <span className="text-xl leading-heading font-bold" >
            Fundamentos do JavaScript
          </span>

          <div className="flex items-center gap-3">
              <div className="h-3 flex-1 bg-marine-800 rounded-md">
                  <div
                    className=" h-3 rounded-md bg-marine-300
                            style={{
                              width: `${Math.round(
                                (flashCardCount * 100) / flashCardsTotal.
                                )}%`,
                            }}"
                  />
              </div>
            <span className="text-sm font-bold" >
              {flashCardCount}/{flashCardsTotal}
            </span>
          </div>
        </div>

        <div className="relative mt-20 max-w-[488px]">
          <div className="rounded-lg bg-mirage-50 px-5 py-6 mx-6 z-20" >
            <p className="text-smoke-950 leading-base text-center min-h-[416px] flex justify-center  items-center">
              Metodo utilizado para percorrer um array  e criar  um novo array
              a partir do original com possíveis modificações
            </p>
          </div>
          <div className="z-10 rounded-lg bg-mirage-50/80  mx-6 left-6 right-6  absolute  h-20 -bottom-4"></div>
        </div>
      </div>
      <button
        onClick={() => setFlashCardCount((state) => state + 1)}
        className="bg-mirage-50 text-marine-500 py-8 w-full  text-base font-bold uppercase hover:bg-mirage-50/90 md:w-[320px] md:mb-16 md:rounded-full md:py-6">
        Revelar Resposta
      </button>
    </div>
  )
}
