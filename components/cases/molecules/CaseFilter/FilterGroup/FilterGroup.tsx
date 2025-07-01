import { FilterGroupProps } from './FilterGroup.types'

export const FilterGroup: React.FC<FilterGroupProps> = (props) => {
    const { items, title } = props
    return (
        <div className="flex flex-col gap-y-2">
            <h4 className="font-bold text-base">{title}</h4>
            <div className="flex items-center flex-wrap gap-1.5">
                {items.map(({ id, name }, idx) => (
                    <button
                        key={`${id}-${idx}`}
                        className="rounded-full bg-white ring ring-[#E6E6E6] group transition-all cursor-pointer py-3 px-7 flex items-center gap-x-2 hover:bg-black hover:ring-black"
                        type="button"
                    >
                        {/* <Icon className="w-5 h-5 group-hover:stroke-white transition-colors" /> */}
                        <span className="font-bold text-xs text-black group-hover:text-white">
                            {name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}
