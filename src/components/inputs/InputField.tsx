
interface InputFieldProps {
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    inputRef?: React.LegacyRef<HTMLInputElement>
    className?: string
}

const InputField = ({ value, onChange, inputRef, className }: InputFieldProps) => {

    return <input className={className} ref={inputRef} value={value} onChange={onChange} />
}

export default InputField;
