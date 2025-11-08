import project from '@/public/assets/images/projects/secondProject.png'
import CaseCard from '@/shared/global/CaseCard'
import Chip from '@/shared/global/Chip'
import { getCaseItems } from '@/utils/api/case-items/case-items'
import React, { FC } from 'react'

import { LastProjectsProps } from './LastProjects.types'

export const LastProjects: FC<LastProjectsProps> = async (props) => {
     const {} = props
     const lastProject = await getCaseItems() // await getCaseItems({ limit: 4, offset: 0 })

     // if (!lastProject?.data) return null

     // const { data } = lastProject

     return (
          <section data-dark="false">
               <div className="flex flex-col gap-6 px-3.5 lg:gap-18 lg:px-7">
                    <div className="flex w-full items-center gap-20 lg:gap-0">
                         <div className="w-full md:max-w-3xl">
                              <h1 className="text-2xl leading-6 font-bold -tracking-[0.1rem] md:text-7xl md:leading-14 lg:-tracking-[0.2rem]">
                                   Мы накопили большой опыт в разработке{' '}
                                   <span className="text-[#0085A6]">кастомных решений</span>
                              </h1>
                         </div>

                         <div className="ml-auto flex flex-col items-end gap-14">
                              <Chip number="1" title="Кейсы" maxW="max-w-42" />
                              <div className="hidden w-fit grid-cols-[200px_minmax(100px,_1fr)_60px] items-end gap-4 text-start md:grid">
                                   <span className="text-sm font-bold">
                                        Индивидуальные решения <sup>13</sup>
                                   </span>
                                   <span className="text-sm font-bold">
                                        Интернет магазины <sup>10</sup>
                                   </span>
                                   <span className="text-sm font-bold">
                                        Retail <sup>15</sup>
                                   </span>
                                   <span className="text-sm font-bold">
                                        Web3 <sup>2</sup>
                                   </span>
                                   <span className="text-sm font-bold">
                                        Web-сайты <sup>1</sup>
                                   </span>
                                   <span className="text-sm font-bold">
                                        FMCG <sup>8</sup>
                                   </span>
                              </div>
                         </div>
                    </div>

                    <div className="grid w-full grid-cols-1 items-center justify-center gap-4 lg:min-w-sm lg:grid-cols-2">
                         {/* {data.map((project, indx) => {
                              return <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                         })} */}
                         {Array.from({ length: 4 }).map((_, indx) => {
                              return (
                                   <CaseCard
                                        key={`${indx + 1}`}
                                        website_link="/"
                                        categories={['Категория']}
                                        description="Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой"
                                        title="В заголовке максимум 40 знаков писать."
                                        subcategories={['Подкатегория']}
                                        photos={[project.src]}
                                        id={indx}
                                        destinations={[
                                             {
                                                  name: 'Максимум писать 23 знака.',
                                                  description: 'Максимум поместится 45 знаков, учитывайте это!',
                                             },
                                        ]}
                                        technologies={[
                                             {
                                                  name: 'c++',
                                                  image: null,
                                             },
                                        ]}
                                   />
                              )
                         })}
                    </div>
               </div>
          </section>
     )
}
