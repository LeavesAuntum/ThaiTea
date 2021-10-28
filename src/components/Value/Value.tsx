import { FC, useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'

interface ValueProps {
  value: string | number
  decimals?: number
  fontSize?: string | number
}

const Value: FC<ValueProps> = ({ value, decimals, fontSize = '30px' }) => {
  const [start, updateStart] = useState(0)
  const [end, updateEnd] = useState(0)

  useEffect(() => {
    if (typeof value === 'number') {
      updateStart(end)
      updateEnd(value)
    }
  }, [end, value])

  return (
    <StyledValue style={{ fontSize }}>
      {typeof value === 'string' ? (
        value
      ) : (
        <CountUp
          start={start}
          end={end}
          decimals={decimals !== undefined ? decimals : end < 0 ? 4 : end > 1e5 ? 0 : 3}
          duration={1}
          separator=','
        />
      )}
    </StyledValue>
  )
}

const StyledValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.colors.primary};
  font-size: 30px;
  font-weight: 900;
`

export default Value
