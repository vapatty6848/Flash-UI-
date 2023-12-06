import { MoveRight } from 'lucide-react'
import { ProgressCircle } from './component/progress-circle'


export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-t from-marine-600 to-marine-500 px-6 py-5  flex flex-col gap-8 md:flex-row-reverse md:justify-between md:items-center"  >
        <img src="http://github.com/vapatty6848.png" alt="" className="rounded-full h-16 w-16 self-end" />
        <span className="text-2xl font-bold leading-heading text-mirage-50"  >
          Dashboard
        </span>
      </div>

      <main className="p-6 flex-col gap-4">
        <span className="text-lg font-bold leading-heading ">Collections</span>

        <div className="flex flex-col gap-4 md:grid  md:grid-cols-2  lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg  transition-transform duration-300 hover:scale-[1.024]">
                <span className="font- bold text-sm text-mirage-600 leading-heading">
                  JAVASCRIPT
                </span>
                <div className="space-y-2">
                  <h2 className="font- bold">Fundamentos do JavaScript</h2>
                  <p className="text-smoke-800 text-sm leading-base">
                    Treine seus conhecimenos nos fundamentos do JavaScript como arrays,
                    variáveis, condicionais e estruturas de repetição
                  </p>
                </div>
                <div className='flex items-center justify-between'>
                  <a
                    href="#"
                    className="py-3 px-5 flex items-center gap-3  font-bold text-sm bg-marine-500 rounded-md text-mirage-50 hover:bg-marine-400 transition-colors">
                    Acessar Coleções
                    <MoveRight className="w-5 h-5" />
                  </a>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6">
                      <ProgressCircle progress={20} />
                    </div>
                    <span className="text-smoke-600 text-sm leading-base">8/16</span>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </main>
    </div>
  )
}
