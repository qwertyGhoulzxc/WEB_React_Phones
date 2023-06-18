import {FC} from 'react'

interface Props {
    text: string
}

const ActivateAccount: FC<Props> = ({text}) => {
    return <div>{text}</div>
}

export default ActivateAccount