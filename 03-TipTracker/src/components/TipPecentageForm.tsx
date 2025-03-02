import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    }
]

interface TipPecentageFormProps {
    tip: number
    // setTip: React.Dispatch<React.SetStateAction<number>>
    setTip: Dispatch<SetStateAction<number>>
}

const TipPecentageForm = ({ tip, setTip }: TipPecentageFormProps) => {
    return (
        <div className="mt-5 p-5 border-y">
            <h3 className="mb-3 font-medium text-2xl">Tip: </h3>

            <form>
                {
                    tipOptions.map(tipOpc => (
                        <div key={tipOpc.id} className="flex flex-row-reverse justify-end items-center gap-2">
                            <label htmlFor={tipOpc.id}>{tipOpc.label}</label>
                            <input
                                id={tipOpc.id}
                                type="radio"
                                name="tip"
                                value={tipOpc.value}
                                // onChange={() => setTip(tip.value)}
                                // onChange={(evt) => setTip(+evt.target.value)}
                                onChange={(evt) => setTip(Number(evt.target.value))}
                                checked={tipOpc.value === tip}
                            />
                        </div>
                    ))
                }
            </form>
        </div>
    )
}

export default TipPecentageForm
